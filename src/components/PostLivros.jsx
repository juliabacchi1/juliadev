import PostTemplate from "./PostTemplate";

export default function PostLivros() {
  return (
    <PostTemplate
      title="3 livros que você não pode perder"
      image="/PostLivros.jpg"
      date="20/02/2025"
    >
      <p>
        📚 Se você é apaixonado por tecnologia, inovação e o impacto que tudo
        isso causa na nossa mente e sociedade, aqui vão 3 sugestões imperdíveis:
      </p>

      <ul className="list-decimal list-inside space-y-6 pl-4 marker:text-[#BA4B2E]">
        <li>
          <strong>Matéria Escura</strong>, de Blake Crouch — Um thriller sobre
          realidades paralelas e escolhas. Veloz, instigante e muito reflexivo.
        </li>
        <li>
          <strong>Uma Breve História do Tempo</strong>, de Stephen Hawking — Um
          clássico para quem quer entender o universo de forma acessível.
        </li>
        <li>
          <strong>Geração Dopamina</strong>, de Dra. Anna Lembke — Essencial pra
          refletir sobre o uso da tecnologia e como ela afeta nosso cérebro.
        </li>
      </ul>

      <p className="pt-4">
        🎁 <strong>Bônus:</strong> <em>O Fim da Eternidade</em>, de Isaac Asimov
        — Um mergulho na manipulação do tempo e nas consequências de tentar
        “melhorar” a humanidade.
      </p>

      <p>Uma leitura pra colocar os pés no chão... e ao mesmo tempo voar.</p>
    </PostTemplate>
  );
}
