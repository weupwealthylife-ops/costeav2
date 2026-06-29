-- Courses
create table if not exists courses (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  title text not null,
  slug text not null unique,
  description text,
  level text not null default 'Básico',
  duration text,
  free boolean not null default false,
  published boolean not null default false,
  position int not null default 99
);

-- Modules (groups of lessons within a course)
create table if not exists modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references courses(id) on delete cascade,
  title text not null,
  position int not null default 99
);

-- Lessons
create table if not exists lessons (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  course_id uuid not null references courses(id) on delete cascade,
  module_id uuid not null references modules(id) on delete cascade,
  title text not null,
  duration text,
  video_url text,
  pdf_url text,
  free boolean not null default false,
  position int not null default 99
);

-- User lesson completions (for progress tracking)
create table if not exists lesson_completions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id uuid not null references lessons(id) on delete cascade,
  completed_at timestamptz default now(),
  unique(user_id, lesson_id)
);

-- Row-level security
alter table courses enable row level security;
alter table modules enable row level security;
alter table lessons enable row level security;
alter table lesson_completions enable row level security;

-- Public can read published courses, modules, and lessons
create policy "Public read published courses" on courses
  for select using (published = true);

create policy "Public read modules of published courses" on modules
  for select using (
    exists (select 1 from courses c where c.id = course_id and c.published = true)
  );

create policy "Public read lessons of published courses" on lessons
  for select using (
    exists (select 1 from courses c where c.id = course_id and c.published = true)
  );

-- Service role (admin) can do everything — handled via Supabase dashboard or anon key with service key
-- For admin actions via anon key, you'll need to set RLS policies or use service role key server-side

-- Authenticated users can read all (for admin panel — tighten if needed)
create policy "Auth users read all courses" on courses
  for select to authenticated using (true);

create policy "Auth users read all modules" on modules
  for select to authenticated using (true);

create policy "Auth users read all lessons" on lessons
  for select to authenticated using (true);

-- Auth users can write (admin only — add email check in app layer, which is already done)
create policy "Auth users write courses" on courses
  for all to authenticated using (true) with check (true);

create policy "Auth users write modules" on modules
  for all to authenticated using (true) with check (true);

create policy "Auth users write lessons" on lessons
  for all to authenticated using (true) with check (true);

-- Users can manage their own completions
create policy "Users manage own completions" on lesson_completions
  for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Seed data: initial 4 courses
insert into courses (title, slug, description, level, duration, free, published, position) values
  ('Fundamentos de Costos', 'fundamentos-de-costos', 'Aprende qué son los costos, cómo clasificarlos y por qué son esenciales para la salud financiera de tu negocio.', 'Básico', '3h', true, true, 1),
  ('Costeo de Productos', 'costeo-de-productos', 'Calcula el costo real de lo que produces o vendes: materia prima, mano de obra y gastos indirectos.', 'Intermedio', '5h', false, true, 2),
  ('Punto de Equilibrio', 'punto-de-equilibrio', 'Descubre cuánto necesitas vender para no perder dinero y empezar a ganar.', 'Intermedio', '3h', false, true, 3),
  ('Análisis de Rentabilidad', 'analisis-de-rentabilidad', 'Identifica qué productos y clientes generan más valor real para tu negocio.', 'Avanzado', '4h', false, false, 4)
on conflict (slug) do nothing;
