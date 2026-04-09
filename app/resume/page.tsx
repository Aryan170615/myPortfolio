"use client";

const ResumePage = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-4xl px-6 py-16 border-l border-r border-gray-800">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold">Resume</h1>

          <a
            href="../AryanResume.pdf"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            Download ↗
          </a>
        </div>

        {/* PDF VIEWER */}
        <div className="w-full h-[80vh] border border-gray-800 rounded-xl overflow-hidden bg-neutral-900">
          <iframe
            src="../AryanResume.pdf#toolbar=0&navpanes=0&scrollbar=0"
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
  );
};

export default ResumePage;