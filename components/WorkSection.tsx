export default function Work () {
  return (
    <div className="py-20 border-b border-neutral-800 w-full max-w-6xl px-6">

      <h2 className="text-2xl font-semibold mb-10">My Work</h2>

      <div className="space-y-8">

        <div className="border border-neutral-800 rounded-xl p-6">
          <h3 className="text-lg font-medium">Nirvado</h3>

          <p className="text-gray-400 text-sm mt-2">
            Browser IDE using WebContainers — real Node.js
          </p>

          <ul className="text-gray-500 mt-4 space-y-2 text-sm">
            <li>• Built full in-browser IDE</li>
            <li>• Multi-framework support</li>
            <li>• Integrated AI autocomplete</li>
          </ul>

          <div className="flex gap-2 mt-4 flex-wrap">
            {["Next.js", "TypeScript", "PostgreSQL"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs border border-gray-700 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};