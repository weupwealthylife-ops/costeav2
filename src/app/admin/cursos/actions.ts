"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

const ADMIN_EMAILS = ["enrique280196@gmail.com"];

async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !ADMIN_EMAILS.includes(user.email ?? "")) {
    redirect("/dashboard");
  }
  return supabase;
}

export async function createCourse(formData: FormData) {
  const supabase = await requireAdmin();

  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const description = formData.get("description") as string;
  const level = formData.get("level") as string;
  const duration = formData.get("duration") as string;
  const free = formData.get("free") === "true";
  const published = formData.get("published") === "true";

  const { error } = await supabase.from("courses").insert({
    title, slug, description, level, duration, free, published,
    position: 99,
  });

  if (error) throw new Error(error.message);
  revalidatePath("/admin/cursos");
  redirect(`/admin/cursos/${slug}`);
}

export async function updateCourse(formData: FormData) {
  const supabase = await requireAdmin();

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const level = formData.get("level") as string;
  const duration = formData.get("duration") as string;
  const free = formData.get("free") === "true";
  const published = formData.get("published") === "true";

  const { error } = await supabase.from("courses").update({
    title, description, level, duration, free, published,
  }).eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/cursos");
  revalidatePath("/admin");
}

export async function addLesson(formData: FormData) {
  const supabase = await requireAdmin();

  const course_id = formData.get("course_id") as string;
  const module_title = formData.get("module_title") as string;
  const title = formData.get("title") as string;
  const duration = formData.get("duration") as string;
  const video_url = formData.get("video_url") as string;
  const pdf_url = formData.get("pdf_url") as string;
  const free = formData.get("free") === "true";

  // Get or create module
  let module_id: string;
  const { data: existing } = await supabase
    .from("modules")
    .select("id")
    .eq("course_id", course_id)
    .eq("title", module_title)
    .single();

  if (existing) {
    module_id = existing.id;
  } else {
    const { data: newModule, error } = await supabase
      .from("modules")
      .insert({ course_id, title: module_title, position: 99 })
      .select("id")
      .single();
    if (error || !newModule) throw new Error(error?.message ?? "Failed to create module");
    module_id = newModule.id;
  }

  const { error } = await supabase.from("lessons").insert({
    module_id,
    course_id,
    title,
    duration,
    video_url: video_url || null,
    pdf_url: pdf_url || null,
    free,
    position: 99,
  });

  if (error) throw new Error(error.message);
  revalidatePath("/admin/cursos");
}

export async function updateLesson(formData: FormData) {
  const supabase = await requireAdmin();

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const duration = formData.get("duration") as string;
  const video_url = formData.get("video_url") as string;
  const pdf_url = formData.get("pdf_url") as string;
  const free = formData.get("free") === "true";

  const { error } = await supabase.from("lessons").update({
    title,
    duration,
    video_url: video_url || null,
    pdf_url: pdf_url || null,
    free,
  }).eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/cursos");
}

export async function deleteLesson(formData: FormData) {
  const supabase = await requireAdmin();
  const id = formData.get("id") as string;
  await supabase.from("lessons").delete().eq("id", id);
  revalidatePath("/admin/cursos");
}

export async function togglePublished(formData: FormData) {
  const supabase = await requireAdmin();
  const id = formData.get("id") as string;
  const published = formData.get("published") === "true";
  await supabase.from("courses").update({ published: !published }).eq("id", id);
  revalidatePath("/admin/cursos");
  revalidatePath("/admin");
}
