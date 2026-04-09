export default function Work () {
  return (
    <div className="py-20 border-b border-neutral-800 w-full max-w-6xl px-6">

      <h2 className="text-2xl font-semibold mb-10">My Work</h2>

      <div className="space-y-8">

        <div className="border border-neutral-800 rounded-xl p-6">
          <h3 className="text-lg font-medium">Second Brain</h3>

          <p className="text-gray-400 mt-2">
            Notes app where you can store important notes
          </p>

          <ul className="text-gray-500 mt-4 text-sm space-y-2 ">
            <li>• Copy the link</li>
            <li>• Add note to it</li>
            <li>• Your note is saved</li>
          </ul>

          <div className="flex gap-2 mt-4 flex-wrap">
            {["React", "JavaScript", "MongoDB"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1  border border-gray-700 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="border border-neutral-800 rounded-xl p-6">
          <h3 className="text-lg font-medium">Collaborative Draw</h3>

          <p className="text-gray-400 mt-2">
            Collaborative drawing app with real-time sync 
          </p>

          <ul className="text-gray-500 mt-4 space-y-2 text-sm">
            <li>• Draw Shapes</li>
            <li>• Real time collaboration</li>
            <li>• Easy to use</li>
          </ul>

          <div className="flex gap-2 mt-4 flex-wrap">
            {["Next.js", "TypeScript", "PostgreSQL", "Websockets"].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 border border-gray-700 rounded"
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

