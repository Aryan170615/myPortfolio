"use client";

import Contact from "@/components/Contact";

const projects = [
  {
    title: "Second Brain",
    desc: "Notes app where you can store important notes",
    points: [
      "Copy the link",
      "Add note to it",
      "Your note is saved",
    ],
    tech: ["React", "JavaScript", "MongoDB"],
  },
  {
    title: "Collaborative Draw",
    desc: "Collaborative drawing app with real-time sync",
    points: [
      "Draw Shapes",
      "Real time collaboration",
      "Easy to use",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
  },
];

export default function Projects() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center">

      {/* MAIN CONTAINER (same as resume/blogs) */}
      <div className="w-full max-w-4xl px-6 pt-16 border-l border-r border-gray-800">

        {/* HEADER */}
        <div className="mb-16">
          <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            03 · MY WORK
          </div>

          <h1 className="text-3xl font-semibold tracking-tight">
            My Work
          </h1>
        </div>

        {/* PROJECT LIST */}
        <div className="space-y-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl p-6 bg-neutral-900/50 backdrop-blur-sm"
            >
              <h3 className="text-lg font-medium">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm">
                {project.desc}
              </p>

              <ul className="text-gray-500 mt-4 text-sm space-y-2">
                {project.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {/* TAGS */}
              <div className="flex gap-2 mt-5 flex-wrap">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs border border-gray-700 rounded hover:bg-white hover:text-black transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
        <Contact />

      </div>
    </div>
  );
}