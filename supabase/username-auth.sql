-- Run after schema.sql if you already deployed. Enables username-only signup checks.

create or replace function public.is_username_available(desired_username text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  return not exists (
    select 1
    from public.profiles
    where lower(username) = lower(trim(desired_username))
  );
end;
$$;

grant execute on function public.is_username_available(text) to anon, authenticated;

-- Keep profile username in sync with sign-up metadata
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  uname text;
begin
  uname := lower(trim(coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1))));
  insert into public.profiles (id, username)
  values (new.id, uname);
  insert into public.tracker_data (user_id, data) values (new.id, '{}'::jsonb);
  return new;
end;
$$;
