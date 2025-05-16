export default function Techs() {
  return (
    <section
      id="techs"
      className="h-auto md:h-screen relative bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/nuvem.png')" }}
    >
      <div className="absolute top-0 left-0 px-4 md:px-6 py-4 md:py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>

      <div className="px-4 md:px-10 mt-20 md:mt-10 ml-0 md:ml-20 text-center md:text-left">
        <h2 className="text-[36px] md:text-[67px] mt-6 md:mt-0">Tecnologias</h2>
      </div>

      <div className="flex flex-col items-center mt-10 md:mt-0">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 px-4 md:px-0">
          <img
            src="/react.png"
            alt="React"
            className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
          />
          <img
            src="/vite.png"
            alt="Vite"
            className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
          />
          <img
            src="/nextjs.png"
            alt="Next.js"
            className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
          />
          <img
            src="/figma.png"
            alt="Figma"
            className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
          />
          <img
            src="/tailwind.png"
            alt="Tailwind"
            className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
          />
          <img
            src="/javascript.png"
            alt="JavaScript"
            className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
          />
          <img
            src="/typescript.png"
            alt="TypeScript"
            className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
          />
        </div>
      </div>

      <div className="flex justify-center pb-10 mt-10 md:mt-0">
        <a href="#works" className="flex items-center">
          <button className="bg-white font-semibold px-9 py-3 rounded-full shadow hover:bg-gray-100">
            trabalhos
          </button>
        </a>
      </div>
    </section>
  );
}
