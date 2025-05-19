import PostTemplate from "./PostTemplate";

export default function PostConsciente() {
  return (
    <PostTemplate
      title="O que todo dev deveria saber sobre sustentabilidade digital"
      image="/Consciente.jpg"
      date="11/04/2025"
    >
      <p>
        Quando falamos em sustentabilidade, muita gente pensa em plástico, água,
        transporte… mas e a internet? 💻 Pois é: o digital também consome
        energia, emite CO₂ e tem impacto ambiental real.
      </p>

      <p>
        Como devs, a gente pode (e deve) construir produtos mais conscientes. E,
        muitas vezes, isso começa com pequenas escolhas no código. Aqui vão
        algumas ideias:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Sites mais leves:</strong> cada kb conta. Imagens otimizadas,
          lazy loading, menos dependências e códigos limpos tornam a web mais
          rápida e sustentável.
        </li>
        <li>
          <strong>Dark mode economiza energia:</strong> principalmente em telas
          OLED. Além de ser mais confortável pros olhos, consome menos.
        </li>
        <li>
          <strong>Hospedagem verde:</strong> prefira provedores que usam energia
          renovável. Exemplos: GreenGeeks, Eco Web Hosting, Infomaniak.
        </li>
        <li>
          <strong>Evite autoplay e scripts pesados:</strong> eles aumentam o uso
          de CPU e energia — principalmente em dispositivos móveis.
        </li>
        <li>
          <strong>Use fontes locais ou otimizadas:</strong> carregar fontes
          externas demais pesa o carregamento e aumenta requisições.
        </li>
      </ul>

      <p>
        🍃 Curiosidade: em 2023, estimou-se que a internet representava{" "}
        <strong>3.7% das emissões globais de carbono</strong> — mais que a
        indústria da aviação. 😮
      </p>

      <p>
        <strong>Ferramentas pra devs conscientes:</strong>
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <a
            href="https://www.websitecarbon.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Website Carbon Calculator
          </a>{" "}
          — mostra a pegada de carbono do seu site.
        </li>
        <li>
          <a
            href="https://ecograder.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            EcoGrader
          </a>{" "}
          — avalia desempenho e sustentabilidade de páginas.
        </li>
        <li>
          <a
            href="https://www.digitalbeacon.co/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Digital Beacon
          </a>{" "}
          — insights para reduzir o impacto digital.
        </li>
      </ul>

      <p>
        💡 <strong>Dica prática:</strong> comece revisando seu portfólio.
        Pergunte: esse site é leve? Preciso de todas essas fontes e plugins? Tem
        imagens otimizadas? Tem dark mode?
      </p>

      <p>
        🌱 A sustentabilidade digital ainda é pouco falada, mas é um diferencial
        ético e profissional que diz muito sobre a gente como devs. E o melhor:
        você pode começar hoje.
      </p>

      <p>Bora codar um mundo mais leve — em todos os sentidos?</p>
    </PostTemplate>
  );
}
