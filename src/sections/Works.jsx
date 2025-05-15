export default function Works() {
  return (
    <section
      id="works"
      className="h-screen relative bg-white flex flex-row justify-between items-center"
    >
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="#home" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
        </a>
      </div>

      <div className="w-[40%] mx-10 flex flex-col justify-center items-start text-left">
        <h2 className="text-[67px] px-10 mb-4">Trabalhos</h2>
        <p className="text-[16.5px] px-10 text-gray-700 mb-8 max-w-md">
          Alguns dos meus projetos <br /> entregues e apps white label.
        </p>
        <div className="flex gap-4 px-10">
          <button className="bg-[#F6F7EC] font-semibold px-7 py-3 rounded-full shadow hover:bg-[#EAE0D4]">
            me chama
          </button>
          <button className="bg-[#EAE0D4] font-regular px-8 py-3 rounded-full shadow hover:bg-[#F6F7EC]">
            blog tech
          </button>
        </div>
      </div>

      {/* Parte do meio - Imagem */}
      <div className="w-[20%] flex justify-center items-center">
        <img
          src="/ecotasks-d.png"
          alt="Descrição ecotasks"
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
