export default function AboutMe() {
  return (
    <section id="sobre-mim" className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-[#FCF5EC] flex justify-center items-center">
        <img
          src="foto.png"
          alt="Júlia Bacchi"
          className="h-[80%] object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 bg-[#EEA595] flex flex-col justify-center items-start text-left px-10">
        <div className="p-8 mx-8 text-start">
          <h2 className="font-serif text-[#BA4B2E] text-6xl md:text-6xl mb-6 px-8 leading-snug">
            Olá, seja <br /> bem-vindo
          </h2>
          <p className="text-base md:text-[16.5px] text-gray-800 mb-8 px-8">
            Sou Júlia Bacchi, desenvolvedora front-end, libriana, mãe de pet e
            apaixonada por inovação digital. Acredito que a tecnologia deve ser
            intuitiva, impactante e uma força para o bem.
            <br />
            Vem comigo transformar padrões e construir uma internet como
            realmente deve ser.
          </p>

          <div className="flex gap-4 px-8">
            <button className="bg-white text-[#BA4B2E] font-semibold px-5 py-3 rounded-full shadow hover:bg-[#BA4B2E]/50 hover:text-white">
              Tecnologias
            </button>
            <button className="bg-[#BA4B2E]/50 text-white font-semibold px-7 py-3 rounded-full shadow hover:bg-white hover:text-[#BA4B2E]">
              Me chama
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
