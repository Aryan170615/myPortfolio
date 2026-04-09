export default function About() {
  return (
    <div className="py-20 border-b border-neutral-800 w-full max-w-6xl px-6">

      <div className="text-xs tracking-[0.3em] text-gray-500 mb-6">
        01 · ABOUT
      </div>

      <div className="grid grid-cols-2 gap-16">

        {/* LEFT TEXT */}
        <div className="text-gray-400 leading-relaxed space-y-6">
          <p>
            I'm Aryan — a 3rd year B.Tech IT student and full stack
            engineer who believes great software is equal parts
            engineering precision and design intuition.
          </p>

          <p>
            When I'm not pushing commits, I'm reading about distributed
            systems, tinkering with programming languages, or trying to
            figure out why code won't compile.
          </p>
        </div>

        {/* RIGHT INFO */}
        <div className="space-y-4 text-sm">
          {[
            ["Status", "3rd Year B.Tech IT"],
            ["College", "UIET, Chandigarh"],
            ["Based in", "Panchkula, India"],
            ["Currently", "Open to internships"],
            ["Focus", "Full Stack"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex justify-between border-b border-neutral-800 pb-2"
            >
              <span className="text-gray-500">{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};