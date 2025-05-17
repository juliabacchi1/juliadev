import Arrow from "../assets/blog/arrow.svg";

export default function PostSeries() {
  return (
    <section className="relative bg-[#f4f3f2] min-h-screen py-20 px-4 flex justify-center items-start">
      <div className="absolute top-0 left-0 px-6 py-6 z-10">
        <a href="/" className="flex items-center">
          <img className="h-10 mr-2 w-auto" src="logo.svg" alt="logo" />
        </a>
      </div>
      <div className="relative w-full max-w-5xl">
        <div className="absolute -top-10 left-0 font-medium text-gray-600 text-lg flex items-center gap-2">
          <span>por Julia Bacchi</span>
          <img src={Arrow} alt="seta curva" className="w-16 h-16" />
        </div>

        <div className="absolute -top-16 right-0">
          <div className="w-28 h-28 rounded-full border-2 border-black bg-white flex flex-col items-center justify-center font-semibold text-lg text-black shadow">
            <span>12/03</span>
            <span>2025</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border-2 border-black p-6 w-full mx-auto mt-6">
          <img
            src="/PostSeries.png"
            alt="Series, imagem de freepik"
            className="w-full h-[30rem] object-cover py-3 mb-6"
          />

          <h1 className="text-transform: uppercase text-3xl sm:text-4xl tracking-widest font-semibold mb-4 text-gray-800">
            3 séries que te deixam pensando por dias
          </h1>

          <p className="text-base py-10 sm:text-lg leading-relaxed text-gray-700">
            Um suspense existencial aqui, uma distopia acolá. Essas histórias
            mexeram comigo — talvez mexam com você também.
            <br />
            <br />
            📺 Tem séries que a gente assiste e segue com a vida. E tem outras
            que ficam ecoando na cabeça por dias, e às vezes semanas. Hoje quero
            compartilhar três delas. Todas com um quê de estranhamento, todas
            sobre o que significa estar vivo (ou algo perto disso).
            <br />
            <br />
            <strong>Devs (Apple TV+)</strong> Minimalista, silenciosa e
            hipnotizante. Devs começa como um thriller de tecnologia e vira uma
            meditação sobre livre-arbítrio, física quântica e luto. É daquelas
            que pede silêncio depois do último episódio. E talvez uma caminhada
            longa.
            <br />
            <br />
            <strong>Severance / Ruptura (Apple TV+)</strong> Você aceitaria
            dividir sua mente entre “trabalho” e “vida pessoal”? Em Severance,
            essa divisão é literal. Uma premissa genial que vai ganhando camadas
            e um desconforto crescente. É sobre trabalho, sim — mas também sobre
            identidade, trauma e fuga.
            <br />
            <br />
            <strong>Station Eleven (HBO Max)</strong> Uma pandemia devasta o
            mundo (sim, a gente passou por isso). Mas em vez de focar no caos,
            essa série olha para o que permanece: arte, memória, conexão. É
            poética, sensível e esperançosa, sem ser ingênua. E o final...
            nossa.
            <br />
            <br />
            🎁 <strong>Bônus:</strong> The Leftovers (HBO Max) Se 2% da
            população mundial simplesmente desaparecesse, como o mundo lidaria?
            The Leftovers não tenta explicar o fenômeno — e isso é o mais
            brilhante. Uma série sobre ausência, fé e o absurdo da existência. É
            pesada, sim. Mas vale cada minuto.
          </p>
        </div>
      </div>
    </section>
  );
}
