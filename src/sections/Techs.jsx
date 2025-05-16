export default function Techs() {
  return (
    <section
      id="techs"
      className="fullscreen-section bg-cover bg-center flex flex-col justify-between"
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
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/react.png"
              alt="Logo do React"
              className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
            />
          </a>
          <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
            <img
              src="/vite.png"
              alt="Logo do Vite"
              className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
            />
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/nextjs.png"
              alt="Logo do Next.js"
              className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
            />
          </a>
          <a
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/figma.png"
              alt="Logo do Figma"
              className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
            />
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/tailwind.png"
              alt="Logo do Tailwind"
              className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
            />
          </a>
          <a
            href="https://aws.amazon.com/pt/what-is/javascript/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/javascript.png"
              alt="Logo do JavaScript"
              className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/typescript.png"
              alt="Logo do TypeScript"
              className="w-24 h-24 md:w-40 md:h-40 rounded-full hover:scale-105 transition-transform duration-300 hover:brightness-110"
            />
          </a>
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
