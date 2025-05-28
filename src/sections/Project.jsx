import AboutMe from "./AboutMe";
import Techs from "./Techs";
import Works from "./Works";
import Contato from "./Contato";
import Blog from "./Blog";
import Button from "../components/Button";

export default function Project() {
  return (
    <>
      <main
        id="home"
        className="fullscreen-section bg-gradient-to-r from-home-start to-home-end text-gray-800 px-4 pb-44 md:pb-40 macbook-air:pb-32 xl:pb-40 pt-6"
      >
        {/* Logo header */}
        <div className="p-2 flex items-center">
          <a
            href="/"
            aria-label="Página inicial"
            className="flex items-center group"
          >
            <img
              className="h-10 mr-2 w-auto"
              src="logo.svg"
              alt="Logo Julia Bacchi"
              width="40"
              height="40"
            />
            <p className="font-semibold text-gray-800">Portfolio Julia Bacchi</p>
          </a>
        </div>

        {/* Hero section */}
        <header className="max-w-5xl mx-auto my-10 md:my-0 flex flex-col-reverse md:flex-row items-center justify-around">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-[clamp(2rem,6vw,3.5rem)] leading-tight mb-8 md:mb-4 text-center md:text-left">
              Desenvolvendo
              <br /> tecnologia <br /> com cara de lar
            </h1>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button
                href="#sobre-mim"
                className="bg-white hover:bg-gray-100 px-9"
              >
                sobre mim
              </Button>

              <Button
                href="curriculo.pdf"
                download
                className="bg-gray-100 hover:bg-white font-normal"
              >
                meu currículo
              </Button>
            </div>
          </div>

          <img
            src="home.png"
            alt="Ilustração de computador vintage"
            loading="lazy"
            className="w-[200px] md:w-[380px] lg:w-[400px] h-auto mx-auto md:mx-0 -mt-8 md:-mt-12"
            width="400"
            height="400"
          />
        </header>
      </main>

      {/* Sections */}
      <AboutMe />
      <Techs />
      <Works />
      <Contato />
      <Blog />
    </>
  );
}
