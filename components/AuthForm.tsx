"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useI18n } from "@/lib/i18n";
import {
  normalizeUsername,
  usernameToAuthEmail,
  validateUsername,
} from "@/lib/auth-username";

type AuthFormProps = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: AuthFormProps) {
  const { t } = useI18n();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const validationKey = validateUsername(username);
    if (validationKey) {
      setError(t(validationKey));
      return;
    }

    const normalized = normalizeUsername(username);
    const authEmail = usernameToAuthEmail(normalized);
    setLoading(true);
    const supabase = createClient();

    try {
      if (mode === "register") {
        const { data: available, error: rpcError } = await supabase.rpc(
          "is_username_available",
          { desired_username: normalized }
        );

        if (rpcError) {
          console.warn("is_username_available RPC failed:", rpcError.message);
        } else if (available === false) {
          setError(t("auth.usernameTaken"));
          return;
        }

        const { error: signUpError } = await supabase.auth.signUp({
          email: authEmail,
          password,
          options: {
            data: { username: normalized },
          },
        });
        if (signUpError) throw signUpError;
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: authEmail,
          password,
        });
        if (signInError) throw signInError;
      }
      router.push("/tracker");
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : t("auth.error");
      if (/invalid login credentials/i.test(msg)) {
        setError(t("auth.error"));
      } else if (/already registered|already exists|duplicate/i.test(msg)) {
        setError(t("auth.usernameTaken"));
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="font-display text-2xl font-black uppercase mb-1">
          {mode === "login" ? t("auth.signInTitle") : t("auth.signUpTitle")}
        </h1>
        <p className="text-sm text-[var(--text-dim)] mb-6">{t("app.subtitle")}</p>

        <form onSubmit={handleSubmit}>
          <label className="text-xs uppercase font-display font-bold text-[var(--text-dim)]">
            {t("auth.username")}
          </label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            minLength={3}
            maxLength={24}
            pattern="[a-zA-Z0-9_]+"
          />
          {mode === "register" && (
            <p className="text-xs text-[var(--text-dim)] mb-3 -mt-1">{t("auth.usernameHint")}</p>
          )}

          <label className="text-xs uppercase font-display font-bold text-[var(--text-dim)]">
            {t("auth.password")}
          </label>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
          />

          {error && (
            <p className="text-sm text-[var(--accent-red)] mb-3" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="btn btn-primary w-full" disabled={loading}>
            {loading ? t("auth.loading") : mode === "login" ? t("btn.login") : t("btn.register")}
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-[var(--text-dim)]">
          {mode === "login" ? t("auth.noAccount") : t("auth.hasAccount")}{" "}
          <Link
            href={mode === "login" ? "/register" : "/login"}
            className="text-[var(--accent)] font-semibold"
          >
            {mode === "login" ? t("btn.register") : t("btn.login")}
          </Link>
        </p>
      </div>
    </div>
  );
}
