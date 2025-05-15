export default function Techs() {
  return (
    <section
      id="techs"
      className="h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/nuvem.png')" }}
    >
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>

      <div className="mx-10 p-8">
        <h2 className="text-[67px]">Techs</h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex gap-6">
          <img
            src="/react.png"
            alt="React"
            className="w-40 h-40 rounded-full"
          />
          <img src="/vite.png" alt="Vite" className="w-40 h-40 rounded-full" />
          <img
            src="/nextjs.png"
            alt="Next.js"
            className="w-40 h-40 rounded-full"
          />
          <img
            src="/figma.png"
            alt="Figma"
            className="w-40 h-40 rounded-full"
          />
        </div>
        <div className="flex gap-6">
          <img
            src="/tailwind.png"
            alt="Tailwind"
            className="w-40 h-40 rounded-full"
          />
          <img
            src="/javascript.png"
            alt="JavaScript"
            className="w-40 h-40 rounded-full"
          />
          <img
            src="/typescript.png"
            alt="TypeScript"
            className="w-40 h-40 rounded-full"
          />
        </div>
      </div>

      <div className="flex justify-center pb-10">
        <button className="bg-white font-semibold px-9 py-3 rounded-full shadow hover:bg-[#BA4B2E]/50 hover:text-white">
          projetos
        </button>
      </div>
    </section>
  );
}
