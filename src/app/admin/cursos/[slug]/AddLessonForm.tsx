"use client";

import { useState } from "react";

interface Props {
  courseId: string;
  moduleNames: string[];
  addLesson: (formData: FormData) => Promise<void>;
}

export default function AddLessonForm({ courseId, moduleNames, addLesson }: Props) {
  const [useExisting, setUseExisting] = useState(moduleNames.length > 0);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    await addLesson(formData);
    setLoading(false);
  }

  return (
    <div className="bg-white rounded-2xl border border-blue-100 p-6">
      <h2 className="font-bold text-gray-900 mb-4 text-sm flex items-center gap-2">
        <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">+</span>
        Agregar lección
      </h2>

      <form action={handleSubmit} className="space-y-4">
        <input type="hidden" name="course_id" value={courseId} />

        {/* Module */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">Módulo</label>
          {moduleNames.length > 0 && (
            <div className="flex gap-2 mb-2">
              <button
                type="button"
                onClick={() => setUseExisting(true)}
                className={`text-xs px-3 py-1 rounded-lg font-semibold transition-colors ${useExisting ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:bg-gray-100"}`}
              >
                Módulo existente
              </button>
              <button
                type="button"
                onClick={() => setUseExisting(false)}
                className={`text-xs px-3 py-1 rounded-lg font-semibold transition-colors ${!useExisting ? "bg-blue-100 text-blue-700" : "text-gray-500 hover:bg-gray-100"}`}
              >
                Nuevo módulo
              </button>
            </div>
          )}

          {useExisting && moduleNames.length > 0 ? (
            <select
              name="module_title"
              required
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              {moduleNames.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          ) : (
            <input
              name="module_title"
              required
              placeholder="ej. Módulo 1 · ¿Qué son los costos?"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>

        {/* Title + duration */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Título de la lección</label>
            <input
              name="title"
              required
              placeholder="Introducción: Por qué los costos importan"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-24">
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Duración</label>
            <input
              name="duration"
              placeholder="8 min"
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Video URL */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">
            URL del video
            <span className="font-normal ml-1 text-gray-400">· YouTube, Vimeo, Loom, Wistia...</span>
          </label>
          <input
            name="video_url"
            type="url"
            placeholder="https://youtube.com/embed/..."
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
          />
        </div>

        {/* PDF URL */}
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1.5">
            URL del PDF
            <span className="font-normal ml-1 text-gray-400">· Material de apoyo (opcional)</span>
          </label>
          <input
            name="pdf_url"
            type="url"
            placeholder="https://drive.google.com/..."
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="free"
              value="true"
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 font-medium">Lección gratuita</span>
          </label>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors disabled:opacity-60"
          >
            {loading ? "Agregando..." : "Agregar lección →"}
          </button>
        </div>
      </form>
    </div>
  );
}
