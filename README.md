# Bodybuilding Transformation Tracker

Tracker web para el programa de 12 semanas de Jeff Nippard (BTS). Diseñado para usar en el gimnasio desde el celular, con cuentas individuales y sincronización en la nube.

## Características

- **Mobile-first**: tarjetas grandes por ejercicio en pantallas pequeñas; tabla completa en desktop
- **Cuentas**: registro con **usuario + contraseña** (sin correo visible)
- **Temas**: claro / oscuro / sistema (sin paleta verde)
- **Idiomas**: inglés y español
- **Auto-guardado**: peso y reps por serie, sincronizados con tu cuenta

## Requisitos

- Node.js 20+
- Cuenta en [Supabase](https://supabase.com) (plan gratuito)
- Cuenta en [Vercel](https://vercel.com) para desplegar
- [GitHub CLI](https://cli.github.com/) (`gh`) para publicar el repo (opcional)

## 1. Configurar Supabase

1. Crea un proyecto en Supabase.
2. En **SQL Editor**, ejecuta el contenido de [`supabase/schema.sql`](supabase/schema.sql).
3. En **Authentication → Providers**, deja habilitado **Email** (Supabase lo usa por detrás; los usuarios solo ven nombre de usuario).
4. En **Authentication → Settings** → desactiva **Confirm email** para que el registro sea inmediato.
5. Ejecuta también [`supabase/username-auth.sql`](supabase/username-auth.sql) si ya habías corrido `schema.sql` antes (añade la función `is_username_available`).
6. En **Authentication → URL Configuration**, añade:
   - `http://localhost:3000/**`
   - `https://tu-app.vercel.app/**` (después del deploy)
7. Copia **Project URL** y **publishable key** desde **Settings → API**.

## 2. Variables de entorno

```bash
cp .env.example .env.local
```

Edita `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

## 3. Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000), regístrate e inicia sesión.

### Importar datos del HTML antiguo

Si antes usabas `legacy/bodybuilding-tracker.html` en el mismo navegador, al entrar por primera vez te preguntará si quieres importar el progreso guardado en `localStorage`.

## 4. Desplegar en Vercel

1. Sube el código a GitHub (ver abajo).
2. En [vercel.com/new](https://vercel.com/new), importa el repo `bodybuilding-tracker`.
3. Añade las mismas variables `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` en **Environment Variables**.
4. Deploy. Copia la URL de producción y actualízala en Supabase (URL Configuration).

## 5. Publicar en GitHub

```bash
gh repo create bodybuilding-tracker --public --source=. --remote=origin --push
```

Si el remoto ya existe:

```bash
git remote add origin https://github.com/TU_USUARIO/bodybuilding-tracker.git
git push -u origin main
```

## Estructura

| Ruta | Descripción |
|------|-------------|
| `/login` | Inicio de sesión |
| `/register` | Crear cuenta |
| `/tracker` | App principal (requiere sesión) |

## Stack

- Next.js 16 (App Router)
- Supabase Auth + PostgreSQL (JSONB por usuario)
- Tailwind CSS 4

## Licencia

Uso personal / entre amigos. El contenido del programa pertenece a Jeff Nippard; este repo solo implementa un tracker no oficial.
