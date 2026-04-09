"use client";

import Contact from "@/components/Contact";

const blogs = [
  {
    title: "The Crossroads of Should and Must",
    author: "elle luna",
    desc: "This is a story about two roads—Should and Must. It's a pep talk for anyone who's chosen Should for far too long—months, years, maybe a lifetime—and feels like it's about time they gave Must a shot",
    link: "https://medium.com/@elleluna/the-crossroads-of-should-and-must-90c75eb7c5b0",
  },
  {
    title: "List of 60 Most Recommended Medium Stories",
    author: "Daveschools",
    desc: "The 60 Most Recommended Medium Stories of All Time",
    link: "https://daveschools.medium.com/the-60-most-recommended-medium-stories-of-all-time-80a0febc5ac6",
  },
  {
    title: "Key To Success: Self-Discipline",
    author: "Moi maere",
    desc: "You will never always be motivated. You have to learn to be disciplined.",
    link: "https://medium.com/hackernoon/key-to-success-self-discipline-ab45bb05a08a",
  },
];

export default function BlogsPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-4xl px-6 pt-16 border-l border-r border-gray-800">

        {/* HEADER */}
        <div className="mb-16">
          <div className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            02 · BLOGS
          </div>

          <h1 className="text-4xl font-semibold tracking-tight">
            Reading & Blogs
          </h1>
        </div>

        {/* BLOG LIST */}
        <div className="space-y-6">

          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              className="block border border-gray-800 rounded-xl p-6 bg-neutral-900/60 backdrop-blur-md hover:border-gray-600 transition group"
            >
              <div className="flex justify-between items-start">

                {/* LEFT */}
                <div>
                  <h2 className="text-lg font-medium group-hover:text-white">
                    {blog.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {blog.author}
                  </p>

                  <p className="text-sm text-gray-400 mt-3 max-w-xl">
                    {blog.desc}
                  </p>
                </div>

                {/* RIGHT ARROW */}
                <div className="text-gray-500 group-hover:translate-x-1 transition">
                  ↗
                </div>

              </div>
            </a>
          ))}

        </div>
          <Contact />

      </div>
    </div>
  );
}