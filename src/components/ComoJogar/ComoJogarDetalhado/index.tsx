function ComoJogarDetalhado() {
  return (
    <>
      <p className="text-sm text-muted-foreground text-left">
        🧠 <strong>Ultimate Tic-Tac-Toe</strong> é uma versão estratégica do clássico jogo da velha.
        Em vez de um único tabuleiro 3x3, você joga em um tabuleiro maior composto por{" "}
        <strong>9 mini-tabuleiros</strong>, cada um com seu próprio jogo da velha.
      </p>

      <ul className="text-left text-sm text-muted-foreground list-disc list-inside space-y-2">
        <li>
          🎯 O objetivo final é vencer <strong>3 mini-tabuleiros em linha</strong> (horizontal,
          vertical ou diagonal) no tabuleiro principal.
        </li>
        <li>
          🔄 Cada jogada sua dentro de um mini-tabuleiro determina para onde o próximo jogador será
          enviado. Ex: se você joga no centro, o próximo jogador terá que jogar no mini-tabuleiro do
          centro.
        </li>
        <li>
          🚫 Se o mini-tabuleiro de destino já estiver vencido ou cheio, o próximo jogador pode
          escolher qualquer tabuleiro livre.
        </li>
        <li>
          🏆 Ao vencer um mini-tabuleiro, você "conquista" aquele espaço no tabuleiro maior,
          marcando com um X ou O gigante.
        </li>
      </ul>

      <p className="text-sm text-muted-foreground italic">
        💡 Pense dois passos à frente: cada jogada sua define o destino da jogada do adversário!
      </p>
    </>
  );
}

export default ComoJogarDetalhado;
