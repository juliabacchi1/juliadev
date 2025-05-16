import Arrow from "../assets/blog/arrow.svg";

export default function PostLivros() {
  return (
    <section className="relative bg-[#f4f3f2] min-h-screen py-20 px-4 flex justify-center items-start">
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="/" className="flex items-center">
          <img className="w-10 h-10 mr-2" src="/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="relative w-full max-w-5xl">
        <div className="absolute -top-10 left-0 font-medium text-gray-600 text-lg flex items-center gap-2">
          <span>por Julia Bacchi</span>
          <img src={Arrow} alt="seta curva" className="w-16 h-16" />
        </div>

        <div className="absolute -top-16 right-0">
          <div className="w-28 h-28 rounded-full border-2 border-black bg-white flex flex-col items-center justify-center font-semibold text-lg text-black shadow">
            <span>20/02</span>
            <span>2025</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-black p-6 w-full mx-auto mt-6">
          <img
            src="/PostLivros.png"
            alt="Livros, imagem de freepik"
            className="w-full h-[30rem] object-cover py-3 mb-6"
          />

          <h1 className="text-transform: uppercase text-3xl sm:text-4xl tracking-widest font-semibold mb-4 text-gray-800">
            3 livros que você não pode perder
          </h1>

          <p className="text-base py-10 sm:text-lg leading-relaxed text-gray-700">
            📚 Se você é apaixonado por tecnologia, inovação e o impacto que tudo
            isso causa na nossa mente e sociedade, aqui vão 3 sugestões
            imperdíveis:
            <br />
            <br />
            <strong>1. Matéria Escura</strong>, de Blake Crouch — Um thriller
            sobre realidades paralelas e escolhas. Veloz, instigante e muito
            reflexivo.
            <br />
            <br />
            <strong>2. Uma Breve História do Tempo</strong>, de Stephen Hawking
            — Um clássico para quem quer entender o universo de forma acessível.
            <br />
            <br />
            <strong>3. Geração Dopamina</strong>, de Dra. Anna Lembke —
            Essencial pra refletir sobre o uso da tecnologia e como ela afeta
            nosso cérebro.
            <br />
            <br />
            🎁 <strong>Bônus:</strong> O Fim da Eternidade, de Isaac Asimov Um
            mergulho na manipulação do tempo e nas consequências de tentar
            “melhorar” a humanidade. Um clássico da ficção científica que
            conversa com temas de tecnologia, controle e livre-arbítrio.
            <br />
            <br />
            Uma leitura pra colocar os pés no chão... e ao mesmo tempo voar.
          </p>
        </div>
      </div>
    </section>
  );
}
