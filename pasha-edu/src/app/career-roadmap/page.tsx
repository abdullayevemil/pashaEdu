"use client";

import { useEffect, useState } from "react";

export default function CareerRoadmapPage() {
  const [sections, setSections] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedPlan = localStorage.getItem("careerPlan");
    if (!savedPlan) return;

    const headings = [
      "Kariyer Hedefi",
      "Önerilen Roller",
      "Öğrenilecek En Önemli Beceriler",
      "Alınacak Sertifikalar",
      "Alınacak Kurslar",
      "Burslar veya Fırsatlar",
      "Önerilen Mentorlar / Ağ Kurma",
      "Adım Adım Yol Haritası",
    ];

    const parsed: Record<string, string> = {};
    let currentHeading = "";
    savedPlan.split("\n").forEach((line) => {
      const headingMatch = headings.find((h) => line.startsWith(h + ":"));
      if (headingMatch) {
        currentHeading = headingMatch;
        parsed[currentHeading] = line.replace(headingMatch + ":", "").trim() + "\n";
      } else if (currentHeading) {
        parsed[currentHeading] += line + "\n";
      }
    });

    setSections(parsed);
  }, []);

  const lines = (text?: string) =>
    text?.split("\n").map((s) => s.trim()).filter(Boolean) || [];

  if (!Object.keys(sections).length)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-lg text-gray-500 animate-pulse">
          Kariyer yol haritanız yükleniyor...
        </p>
      </div>
    );

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Kariyer Planınız
      </h1>

      {/* Top Row: Skills (left) + Courses (right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Beceriler</h2>
          <div className="space-y-4">
            {lines(sections["Öğrenilecek En Önemli Beceriler"]).map((skill, i) => (
              <div
                key={i}
                className="p-4 border border-gray-300 rounded shadow-sm"
              >
                <div className="font-semibold mb-2">{skill}</div>

                {/* İlgili kurslar */}
                {lines(sections["Alınacak Kurslar"])
                  .filter((c) => c.toLowerCase().includes(skill.toLowerCase()))
                  .map((course, idx) => {
                    // Format: "Kurs Adı, Süre, URL"
                    const parts = course.split(",").map((s) => s.trim());
                    const title = parts[0];
                    const duration = parts[1] || "";
                    const url = parts[2] || "#";
                    return (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-indigo-700 hover:underline text-sm mb-1"
                      >
                        {title} {duration ? `(${duration})` : ""}
                      </a>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tüm Kurslar</h2>
          <div className="space-y-2">
            {lines(sections["Alınacak Kurslar"]).map((course, i) => {
              const parts = course.split(",").map((s) => s.trim());
              const title = parts[0];
              const duration = parts[1] || "";
              const url = parts[2] || "#";
              return (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 border border-gray-300 rounded text-gray-800 hover:bg-gray-100 transition text-sm"
                >
                  {title} {duration ? `(${duration})` : ""}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Certificates & Scholarships */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Sertifikalar & Burslar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lines(sections["Alınacak Sertifikalar"]).map((cert, i) => (
            <div
              key={`cert-${i}`}
              className="p-4 border border-gray-300 rounded shadow-sm"
            >
              {cert}
            </div>
          ))}
          {lines(sections["Burslar veya Fırsatlar"]).map((sch, i) => (
            <div
              key={`sch-${i}`}
              className="p-4 border border-gray-300 rounded shadow-sm"
            >
              {sch}
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Yol Haritası</h2>
        <div className="relative border-l-2 border-gray-300 ml-4">
          {lines(sections["Adım Adım Yol Haritası"]).map((item, i) => (
            <div key={i} className="mb-10 ml-6 relative">
              <span className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-gray-700 ring-2 ring-white"></span>
              <div className="p-4 rounded shadow-sm transition bg-white">
                Ders {i + 1}. {item.replace("Adım " + (i + 1) + ":", "").trim()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
