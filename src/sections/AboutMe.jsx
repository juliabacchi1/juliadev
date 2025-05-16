export default function AboutMe() {
  return (
    <section
      id="sobre-mim"
      className="fullscreen-section flex flex-col md:flex-row"
    >
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>

      <div className="w-full md:w-1/2 bg-[#FCF5EC] flex justify-center items-center py-10 md:py-0">
        <img
          src="foto.png"
          alt="Júlia Bacchi"
          className="h-72 md:h-[80%] object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 bg-[#EEA595] flex flex-col justify-center items-start py-8">
        <div className=" md:p-8 mx-8 text-start">
          <h2 className="font-serif text-[#BA4B2E] text-2xl md:text-6xl mb-6 px-8 leading-snug text-center md:text-left">
            Olá, seja <br className="hidden md:block" /> bem-vindo
          </h2>
          <p className="text-base text-[13px] md:text-[16.5px] text-gray-800 mb-8 md:px-8 text-center md:text-left">
            Sou Júlia Bacchi, desenvolvedora front-end, libriana, mãe de pet e
            apaixonada por inovação digital. Acredito que a tecnologia deve ser
            intuitiva, impactante e uma força para o bem.
            <br />
            Vem comigo transformar padrões e construir uma internet como
            realmente deve ser.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:px-8">
            <a href="#techs">
              <button className="bg-white text-[#BA4B2E] font-semibold px-5 py-3 rounded-full shadow hover:bg-[#BA4B2E]/50 hover:text-white">
                tecnologias
              </button>
            </a>
            <a href="#contato">
              <button className="bg-[#BA4B2E]/50 text-white font-regular px-7 py-3 rounded-full shadow hover:bg-white hover:text-[#BA4B2E]">
                me chama
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
