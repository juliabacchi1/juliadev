import PostTemplate from "./PostTemplate";

export default function PostDesign() {
  return (
    <PostTemplate
      title="Design para Devs: 5 princípios visuais que mudaram meu código"
      image="/Design.jpg"
      date="16/02/2025"
    >
      <p>
        Quando comecei no front-end, eu achava que “design” era só sobre cor e
        ícone. Mas aos poucos entendi que saber um pouco de design me tornava
        uma dev mais completa, e que isso fazia TODA diferença no mercado.
      </p>

      <p>
        Não é preciso virar designer, mas entender os **fundamentos visuais** e
        de **experiência do usuário** te coloca quilômetros à frente.
      </p>

      <p>
        Aqui vão alguns aprendizados que mudaram meu código (e minha visão):
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Espaçamento é organização:</strong> padding e margin trazem
          respiro e equilíbrio visual. Crie um sistema (tipo usar só múltiplos
          de 4px ou 8px).
        </li>
        <li>
          <strong>Hierarquia visual:</strong> títulos grandes, textos médios,
          detalhes pequenos. Isso guia o olhar.
        </li>
        <li>
          <strong>Tipografia importa:</strong> uma fonte clara, legível, com bom
          espaçamento entre linhas muda tudo.
        </li>
        <li>
          <strong>Alinhamento é elegância:</strong> quando tudo está alinhado,
          transmite cuidado e profissionalismo.
        </li>
        <li>
          <strong>Contraste é acessibilidade:</strong> sem contraste, ninguém
          lê. Pense em quem usa óculos ou está no sol.
        </li>
      </ul>

      <p>
        🧠 Quer começar a aprender mais sobre design como dev? Aqui vão alguns
        caminhos:
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Estude UI/UX no seu tempo:</strong> canais como
          <a
            href="https://www.youtube.com/c/FluxAcademy"
            target="_blank"
            rel="noreferrer"
            className="underline ml-1"
          >
            Flux Academy
          </a>{" "}
          ou
          <a
            href="https://www.youtube.com/c/RefactoringUI"
            target="_blank"
            rel="noreferrer"
            className="underline ml-1"
          >
            Refactoring UI
          </a>{" "}
          são ótimos pontos de partida.
        </li>
        <li>
          <strong>Siga perfis no Instagram/Twitter:</strong> como @figmadesign,
          @ui__inspiration, @bradfrost ou @steveschoger.
        </li>
        <li>
          <strong>Use ferramentas visuais:</strong> Figma, Penpot, Whimsical ou
          até extensões como ColorZilla e WhatFont pra estudar sites que você
          ama.
        </li>
        <li>
          <strong>Pratique copiando interfaces:</strong> clone o layout de um
          site no código. Você vai notar padrões incríveis.
        </li>
      </ul>

      <p>
        💡 <strong>Dica prática:</strong> abra um site que você acha bonito.
        Observe os espaços, tamanhos, fontes. Use o inspetor do navegador.
        Pergunte: por que isso me agrada visualmente?
      </p>

      <p>
        💬 No mercado, devs que entendem de design são procurados porque criam
        **experiências** e não só funcionalidades. E isso é cada vez mais
        valorizado.
      </p>

      <p>
        ✨ Aprender design é aprender a se comunicar melhor. Como devs, nosso
        trabalho não é só fazer funcionar: É fazer sentido.
      </p>
    </PostTemplate>
  );
}
