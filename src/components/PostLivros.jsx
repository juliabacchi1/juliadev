import PostTemplate from "./PostTemplate";

export default function PostLivros() {
  return (
    <PostTemplate
      title="3 livros que você não pode perder"
      image="/PostLivros.png"
      date="20/02/2025"
    >
      <p>
        📚 Se você é apaixonado por tecnologia, inovação e o impacto que tudo
        isso causa na nossa mente e sociedade, aqui vão 3 sugestões imperdíveis:
        <br />
        <br />
        <strong>1. Matéria Escura</strong>, de Blake Crouch — Um thriller sobre
        realidades paralelas e escolhas. Veloz, instigante e muito reflexivo.
        <br />
        <br />
        <strong>2. Uma Breve História do Tempo</strong>, de Stephen Hawking — Um
        clássico para quem quer entender o universo de forma acessível.
        <br />
        <br />
        <strong>3. Geração Dopamina</strong>, de Dra. Anna Lembke — Essencial
        pra refletir sobre o uso da tecnologia e como ela afeta nosso cérebro.
        <br />
        <br />
        🎁 <strong>Bônus:</strong> <em>O Fim da Eternidade</em>, de Isaac Asimov
        — Um mergulho na manipulação do tempo e nas consequências de tentar
        “melhorar” a humanidade.
        <br />
        <br />
        Uma leitura pra colocar os pés no chão... e ao mesmo tempo voar.
      </p>
    </PostTemplate>
  );
}
