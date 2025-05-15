import Arrow from "../assets/blog/arrow.svg";

export default function PostLivros() {
  return (
    <section className="bg-[#f4f3f2] min-h-screen py-20 px-4 flex justify-center items-start">
      <div className="relative w-full max-w-5xl">
        {/* Infos do topo */}
        <div className="absolute -top-10 left-0 font-medium text-gray-600 flex items-center gap-2">
          <span>por Julia Bacchi</span>
          {Arrow}
        </div>

        {/* Data */}
        <div className="absolute -top-10 right-0">
          <div className="w-16 h-16 rounded-full bg-white flex flex-col items-center justify-center text-xs font-semibold text-gray-600 shadow">
            <span>20/02</span>
            <span>2025</span>
          </div>
        </div>

        {/* Quadrado central branco */}
        <div className="bg-white rounded-xl p-6 w-full mx-auto">
          {/* Imagem grande */}
          <img
            src="/caminho-da-imagem.jpg"
            alt="Capa do post"
            className="w-full h-64 object-cover rounded-md mb-6"
          />

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-4 text-gray-800">
            3 livros que quem gosta de tecnologia não pode deixar de ler
          </h1>

          {/* Texto */}
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Se você é apaixonado por tecnologia, inovação e o impacto que tudo
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
            Uma leitura pra colocar os pés no chão... e ao mesmo tempo voar.
          </p>
        </div>
      </div>
    </section>
  );
}
