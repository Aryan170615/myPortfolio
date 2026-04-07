export default function Contact() {
  return (
    <div className="py-24 w-full max-w-6xl px-6">

      <div className="text-xs tracking-[0.3em] text-gray-500 mb-6">
        HAVE AN IDEA? LET'S TALK
      </div>

      <h1 className=" gap-1 text-4xl md:text-5xl font-bold text-gray-200">
        bhallaaryan44
        <span className="text-gray-600">@gmail.com</span>
      </h1>

      <div className="mt-10 text-sm text-gray-500 flex gap-6">
        <a href="https://github.com/Aryan170615" target="_blank" className="hover:text-white cursor-pointer">GitHub</a>
        <a href="https://www.linkedin.com/in/aryan-bhalla-170615" target="_blank" className="hover:text-white cursor-pointer">LinkedIn</a>
        <a href="https://x.com/aryan_bhalla" target="_blank" className="hover:text-white cursor-pointer">X</a>
        <a href="mailto:bhallaaryan44@gmail.com" target="_blank" className="hover:text-white cursor-pointer">Email</a>
      </div>

    </div>
  );
};