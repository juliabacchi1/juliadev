import PostTemplate from "./PostTemplate";

export default function PostApps() {
  return (
    <PostTemplate
      title="5 apps que mudaram minha rotina como dev (e humana!)"
      image="/Apps.jpg"
      date="02/05/2025"
    >
      <p>
        Não é só sobre codar. Ser dev é também saber organizar ideias, manter o
        foco e cuidar de si. 💆‍♀️
      </p>

      <p>
        Esses 5 apps viraram parte da minha rotina — e me ajudam tanto no
        desenvolvimento quanto na vida fora das telas:
      </p>

      <ul className="list-decimal list-inside space-y-4">
        <li>
          <strong>Notion:</strong> meu cérebro digital. Uso pra organizar
          estudos, projetos, ideias, metas e até meu cardápio semanal. Tudo no
          mesmo lugar!
        </li>
        <li>
          <strong>Raycast:</strong> um atalho pra tudo no Mac. Abro apps, busco
          arquivos, faço cálculos e até gerencio meu GitHub sem tirar as mãos do
          teclado. Produtividade nível hard. ⚡
        </li>
        <li>
          <strong>Forest:</strong> app de foco com gamificação. Você planta uma
          árvore e ela cresce enquanto você não toca no celular. Ótimo pra
          sessões de estudo ou dev concentrado. 🌳
        </li>
        <li>
          <strong>Habitica:</strong> um gerenciador de hábitos com carinha de
          RPG. Perfeito se você gosta de transformar tarefas em missões e
          recompensas. Vicia — no bom sentido. 💎
        </li>
        <li>
          <strong>Figma:</strong> não é só pra designers. Como dev, uso pra
          visualizar interfaces, colaborar com quem tá no design e até montar
          ideias rápidas. É essencial entender o básico!
        </li>
      </ul>

      <p>
        📌 Esses apps me ajudam a manter o equilíbrio entre ser produtiva, criar
        com foco e também lembrar de pausar — porque nem só de código vive uma
        dev.
      </p>

      <p>
        <strong>Dica:</strong> testou algum app e não funcionou? Tudo bem. O
        segredo é adaptar as ferramentas ao seu estilo, não o contrário.
      </p>

      <p>
        E você, tem algum app que mudou sua rotina? Me conta lá no LinkedIn —
        adoro descobrir novas ferramentas! 💬
      </p>
    </PostTemplate>
  );
}
