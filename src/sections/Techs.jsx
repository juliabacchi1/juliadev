export default function Techs() {
  return (
    <section
      id="techs"
      className="h-screen bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: "url('/nuvem.png')" }} // substitui com seu arquivo
    >
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>

      <div className="p-8">
        <h2 className="text-[67px] font-serif text-[#BA4B2E]">Techs</h2>
      </div>

      {/* Grid de imagens */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="flex gap-6">
          <img src="/react.svg" alt="React" className="w-20 h-20" />
          <img src="/tailwind.svg" alt="Tailwind" className="w-20 h-20" />
          <img src="/vite.svg" alt="Vite" className="w-20 h-20" />
          <img src="/figma.svg" alt="Figma" className="w-20 h-20" />
        </div>
        <div className="flex gap-6">
          <img src="/js.svg" alt="JavaScript" className="w-20 h-20" />
          <img src="/html.svg" alt="HTML" className="w-20 h-20" />
        </div>
      </div>

      {/* Botão */}
      <div className="flex justify-center pb-10">
        <button className="bg-white text-[#BA4B2E] font-semibold px-7 py-3 rounded-full shadow hover:bg-[#BA4B2E]/50 hover:text-white">
          Projetos
        </button>
      </div>
    </section>
  );
}
