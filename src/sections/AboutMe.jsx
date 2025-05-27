import FloatingLogo from "../components/FloatingLogo";
import Button from "../components/Button";

export default function AboutMe() {
  return (
    <section
      id="sobre-mim"
      className="fullscreen-section flex flex-col md:flex-row"
    >
      <FloatingLogo />

      {/* Lado da imagem */}
      <div className="w-full md:w-1/2 bg-about-left flex justify-center items-center py-10 md:py-0 min-h-[50vh] md:min-h-0">
        <img
          src="foto.webp"
          alt="foto de Julia Bacchi"
          className="h-auto max-h-[300px] md:max-h-[80vh] w-auto object-contain px-4"
          style={{ maxWidth: "90%" }}
        />
      </div>

      {/* Lado do texto */}
      <div className="w-full md:w-1/2 bg-about-right flex flex-col justify-center items-start py-14 md:py-0">
        <div className="w-full max-w-2xl mx-auto px-2 md:px-12 text-start">
          <h2 className="font-serif text-about-red text-3xl md:text-6xl mb-6 leading-tight text-center md:text-left">
            Olá, seja <br className="hidden md:block" /> bem-vindo
          </h2>
          <p className="text-base md:text-lg text-gray-800 mb-6 text-center md:text-left">
            Sou Júlia Bacchi, desenvolvedora front-end, libriana, mãe de pet e
            apaixonada por inovação digital. Acredito que a tecnologia deve ser
            intuitiva, impactante e uma força para o bem.
            <br />
            Vem comigo transformar padrões e construir uma internet como
            realmente deve ser.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Button
              href="#techs"
              className="bg-white text-about-red hover:bg-about-red/50 hover:text-white"
            >
              tecnologias
            </Button>

            <Button
              href="#contato"
              className="bg-about-red/50 text-white hover:bg-white hover:text-about-red font-normal"
            >
              me chama
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
