export default function Works() {
  return (
    <>
      <section
        id="works"
        className="fullscreen-section bg-white flex flex-col md:flex-row justify-between items-center"
      >
        <div className="absolute top-0 left-0 px-6 py-6 z-10">
          <a href="#home" className="flex items-center">
            <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
          </a>
        </div>

        <div className="w-full md:w-[40%] px-0 md:px-6 my-20 md:my-2 md:mx-10 flex flex-col justify-center items-center md:items-start text-left mb-10 md:mb-0">
          <h2 className="text-[36px] md:text-[67px] px-10 mb-4">Trabalhos</h2>
          <p className="text-[16.5px] px-10 text-gray-700 mb-8 max-w-md">
            Alguns dos meus projetos <br /> entregues e apps white label.
          </p>
          <div className="flex gap-4 px-10">
            <a href="#next-project" className="flex items-center">
              <button className="bg-[#F6F7EC] font-semibold px-9 py-3 rounded-full shadow hover:bg-[#EAE0D4]">
                ver mais
              </button>
            </a>
            <a href="#blog" className="flex items-center">
              <button className="bg-[#EAE0D4] font-regular px-8 py-3 rounded-full shadow hover:bg-[#F6F7EC]">
                blog tech
              </button>
            </a>
          </div>
        </div>

        <div className="w-[20%] flex justify-center items-center">
          <a href="https://github.com/juliabacchi1/ecotasks" target="_blank">
            <img
              src="/ecotasks-d.png"
              alt="Descrição ecotasks"
              className="max-w-full h-auto object-contain"
            />
          </a>
        </div>

        <div className="w-[40%] flex justify-center items-center">
          <a href="https://ecotasks.vercel.app/" target="_blank">
            <img
              src="/ecotasks-v.png"
              alt="Visualização ecotasks"
              className="max-w-[80%] h-auto object-contain translate-y-10"
            />
          </a>
        </div>
      </section>

      <section
        id="next-project"
        className="h-screen relative bg-white flex flex-row justify-between items-center"
      >
        <div className="absolute top-0 left-0 px-6 py-6 z-10">
          <a href="#home" className="flex items-center">
            <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
          </a>
        </div>
        <div className="absolute bottom-8 left-20 z-10">
          <a href="#third-project" className="flex items-center">
            <button className="w-12 h-12 rounded-full bg-[#cbb396] flex items-center justify-center shadow hover:bg-[#b8a276]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </a>
        </div>

        <div className="flex">
          <div className="w-[50%] flex justify-end items-center">
            <img
              src="/rota-d.png"
              alt="Descrição Baleia Franca"
              className="max-w-[40%] h-auto object-contain"
            />
          </div>

          <div className="w-[40%] flex justify-start items-center">
            <a href="https://rotabaleiafranca.com.br/" target="_blank">
              <img
                src="/rota-v.png"
                alt="Visualização Baleia Franca"
                className="max-w-[80%] h-auto object-contain translate-y-6"
              />
            </a>
          </div>
        </div>
      </section>

      <section
        id="third-project"
        className="h-screen relative bg-white flex flex-row justify-between items-center"
      >
        <div className="absolute top-0 left-0 px-6 py-6 z-10">
          <a href="#home" className="flex items-center">
            <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
          </a>
        </div>
        <div className="absolute bottom-8 left-20 z-10">
          <a href="#contato" className="flex items-center">
            <button className="w-12 h-12 rounded-full bg-[#cbb396] flex items-center justify-center shadow hover:bg-[#b8a276]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </a>
        </div>

        <div className="flex">
          <div className="w-[50%] flex justify-end items-center">
            <img
              src="/recipes-d.png"
              alt="Descrição Recipes Generator"
              className="max-w-[40%] h-auto object-contain"
            />
          </div>

          <div className="w-[40%] flex justify-start items-center">
            <a href="https://recipes-generator-ai.netlify.app/" target="_blank">
              <img
                src="/recipes-v.png"
                alt="Visualização Recipes Generator"
                className="max-w-[80%] h-auto object-contain translate-y-6"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
