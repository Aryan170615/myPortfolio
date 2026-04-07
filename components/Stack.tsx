export default function Stack() {
  const tech = [
    "TS", "JS", "Python", "Java", "Node",
    "React", "Next", "Express", "Tailwind"
  ];

  return (
    <div className="py-20 border-b border-neutral-800 w-full max-w-6xl px-6">

      <h2 className="text-2xl font-semibold mb-10">Stack</h2>

      <div className="flex flex-wrap gap-6 text-gray-300">
        {tech.map((t) => (
          <div
            key={t}
            className="px-4 py-2 border border-neutral-700 rounded-lg hover:bg-white hover:text-black transition"
          >
            {t}
          </div>
        ))}
      </div>

    </div>
  );
};