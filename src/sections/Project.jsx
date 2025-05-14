import AboutMe from "./AboutMe";

export default function Project() {
  return (
    <>
      <main id="home" className="min-h-screen bg-gradient-to-r from-[#E2F4F3] to-[#C9D6FF] text-gray-800 p-4">
        <div className="p-2 flex items-center">
          <a href="/" className="flex items-center">
            <img className="w-10 h-10 mr-2" src="logo.svg" alt="logo" />
            <p className="font-semibold">Portfolio Julia Bacchi</p>
          </a>
        </div>
        <header className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around">
          <div className="mb-8 md:mb-0">
            <h1 className="text-5.5xl leading-tight mb-4">
              Desenvolvendo
              <br /> tecnologia <br /> com cara de lar
            </h1>
            <div className="flex gap-4">
              <a href="#sobre-mim">
                <button className="bg-white text-sm font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100">
                  sobre mim
                </button>
              </a>
              <a
                href="curriculo.pdf"
                download
                className="bg-gray-100 text-sm font-semibold px-5 py-3 rounded-full shadow hover:bg-white/100"
              >
                meu currículo
              </a>
            </div>
          </div>
          <img
            src="home.png"
            alt="computador vintage"
            className="w-96 md:w-100 h-auto"
          />
        </header>
      </main>
      <AboutMe />
    </>
  );
}
