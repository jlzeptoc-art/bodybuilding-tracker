"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useI18n } from "@/lib/i18n";

type AuthFormProps = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: AuthFormProps) {
  const { t } = useI18n();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const supabase = createClient();

    try {
      if (mode === "register") {
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { username: username || email.split("@")[0] },
          },
        });
        if (signUpError) throw signUpError;
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInError) throw signInError;
      }
      router.push("/tracker");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : t("auth.error"));
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
          {mode === "register" && (
            <>
              <label className="text-xs uppercase font-display font-bold text-[var(--text-dim)]">
                {t("auth.username")}
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </>
          )}
          <label className="text-xs uppercase font-display font-bold text-[var(--text-dim)]">
            {t("auth.email")}
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
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
