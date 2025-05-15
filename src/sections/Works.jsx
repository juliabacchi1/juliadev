export default function Works() {
  return (
    <section
      id="works"
      className="h-screen relative bg-white flex flex-row justify-between items-center"
    >
      {/* Parte esquerda - Título, texto e botões */}
      <div className="w-[40%] px-10 flex flex-col justify-center items-start text-left">
        <h2 className="text-[67px] font-serif text-[#BA4B2E] mb-4">Projetos</h2>
        <p className="text-[16.5px] text-gray-700 mb-8 max-w-md">
          Alguns dos meus trabalhos entregues e apps white label.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#BA4B2E]/80 text-white font-semibold px-7 py-3 rounded-full shadow hover:bg-[#BA4B2E]">
            me chama
          </button>
          <button className="bg-gray-100 text-[#BA4B2E] font-semibold px-7 py-3 rounded-full shadow hover:bg-[#BA4B2E]/20">
            blog tech
          </button>
        </div>
      </div>

      {/* Parte do meio - Imagem */}
      <div className="w-[20%] flex justify-center items-center">
        <img
          src="/projeto1.png"
          alt="Projeto 1"
          className="max-w-full h-auto object-contain"
        />
      </div>

      {/* Parte da direita - Imagem */}
      <div className="w-[40%] flex justify-center items-center">
        <img
          src="/projeto2.png"
          alt="Projeto 2"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
