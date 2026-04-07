"use client";
import { useEffect, useState } from "react";

const Hero1 = () => {
    const [time, setTime] = useState("");
    const links = [
        { label: "L", url: "https://leetcode.com/u/Dar/" },
        { label: "in", url: "https://www.linkedin.com/in/aryan-b/" },
        { label: "X", url: "https://x.com/AryanRo" },
    ];
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted + " IST");
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  bg-black text-white flex justify-center border-b border-neutral-800">
      <div className="w-full max-w-5xl px-6 py-10 ">

        {/* TOP BAR */}
        <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.35em] text-gray-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-40"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Available for hire
          </div>

          <div>{time}</div>
        </div>

        {/* MAIN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight">
              Aryan
              <br />
              <span className="text-gray-600">Bhalla.</span>
            </h1>

            <p className="mt-6 text-neutral-400 max-w-md leading-relaxed text-lg">
              I engineer products at the intersection of performance and craft.
              Focused on clean systems, developer experience, and building things
              people actually use.
            </p>

            <div className="flex gap-6 mt-8 items-center">
              <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-bold hover:scale-105 transition">
                View Work
              </button>

              <button className="text-gray-400 hover:text-white transition">
                Resume
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-start md:justify-end">
            <div className="bg-neutral-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-4 w-64 h-[280px] flex flex-col justify-between shadow-[0_0_40px_rgba(255,255,255,0.05)]">

              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden">
                <img src="https://4kwallpapers.com/images/wallpapers/marvels-spider-man-2560x2560-13495.jpg" alt="spiderman" />
              </div>

              {/* USER */}
              <div className="text-sm text-gray-300 mt-2 flex items-center justify-between">
                <span>@aryan_x</span>
                <span className="text-green-400 text-xs">●</span>
              </div>

              {/* SOCIALS */}
              <div className="flex gap-3 mt-2">
                {links.map((item, index) => (
                    <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-black dark:bg-white border border-gray-700 dark:border-gray-300 rounded-full flex items-center justify-center text-xs text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition cursor-pointer"
                    >
                    {item.label}
                    </a>
                ))}
                </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero1;