export default function Stack() {
  const tech = [
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/fluency/48/typescript--v2.png",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/ios-glyphs/30/FFFFFF/javascript.png",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/ios-glyphs/30/FFFFFF/python.png",
    },
    {
      name: "Node",
      icon: "https://img.icons8.com/fluency/48/node-js.png",
    },
    { name: "React", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" },
    { name: "Next", icon: "https://img.icons8.com/fluency/48/nextjs.png" },
    { name: "Express", icon: "https://img.icons8.com/nolan/64/express-js.png" },
    { name: "Tailwind", icon: "https://img.icons8.com/fluency/48/tailwind_css.png" },
    { name: "PostgreSQL", icon: "https://img.icons8.com/color/48/postgreesql.png" },
    { name: "Docker", icon: "https://img.icons8.com/fluency/48/docker.png" },
    { name: "AWS", icon: "https://img.icons8.com/nolan/64/amazon-web-services.png" },
    { name: "C++", icon: "https://img.icons8.com/fluency/48/c-plus-plus-logo.png" },
    { name: "Mongo", icon: "https://img.icons8.com/color/48/mongodb.png" },
    { name: "Prisma", icon: "https://img.icons8.com/fluency/48/prisma-orm.png" },
    { name: "Websockets", icon: "https://img.icons8.com/color/48/webpack.png" },
  ];

  return (
    <div className="py-20 border-b border-neutral-800 w-full max-w-6xl px-6">
      <h2 className="text-2xl font-semibold mb-10">Stack</h2>

      <div className="flex flex-wrap gap-6 text-gray-300">
        {tech.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-2 px-4 py-2 border border-neutral-700 rounded-lg hover:bg-white hover:text-black transition"
          >
            {t.icon && (
              <img src={t.icon} alt={t.name} className="w-5 h-5" />
            )}
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}