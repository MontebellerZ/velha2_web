function ComoJogarDetalhado() {
  return (
    <div className="text-sm text-left flex flex-col gap-4">
      <section>
        <h2 className="text-lg font-semibold">🎯 Objetivo</h2>
        <p>
          Assim como no jogo original, o objetivo final é formar uma linha com três símbolos iguais
          (X ou O). Mas, dessa vez, você precisa <b>vencer três mini-jogos da velha</b> dentro de um
          tabuleiro maior.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">📦 Como é o tabuleiro?</h2>
        <ul className="space-y-1 ml-2.5">
          <li>
            Um <b>grande tabuleiro 3x3</b>, dividido em outros <b>9 mini-tabuleiros 3x3</b>.
          </li>
          <li>Cada mini-tabuleiro é como um jogo da velha tradicional.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold">⚙️ Regras principais</h2>
        <ul className="space-y-1 ml-2.5">
          <li>
            <b>Jogadas direcionadas:</b> Onde você joga dentro de um mini-tabuleiro determina para
            onde o próximo jogador será "enviado".
          </li>
          <li>
            <b>Exemplo de jogada:</b> Se você joga no canto superior direito do mini-tabuleiro, o
            próximo jogador deve jogar no mini-tabuleiro do canto superior direito do tabuleiro
            maior.
          </li>
          <li>
            <b>Mini-tabuleiro vencido:</b> quem vence um mini-tabuleiro "ganha" aquele espaço no
            tabuleiro maior com seu símbolo (X ou O).
          </li>
          <li>
            <b>Mini-tabuleiro completo:</b> se o tabuleiro para onde você foi direcionado está
            cheio, você pode jogar em qualquer outro ainda disponível.
          </li>
          <li>
            <b>Vitória final:</b> vence quem conquistar 3 mini-tabuleiros em linha no tabuleiro
            maior.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold">🧩 Por que é interessante?</h2>
        <p>
          Requer muito mais estratégia do que o jogo da velha comum. Força o jogador a pensar{" "}
          <b>duas camadas à frente</b>: a jogada atual e as consequências para o próximo turno.
        </p>
      </section>
    </div>
  );
}

export default ComoJogarDetalhado;
