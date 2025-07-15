function ComoJogarResumido() {
  return (
    <div className="text-sm text-left flex flex-col gap-4">
      <section>
        <h2 className="text-lg font-semibold">🎯 Objetivo</h2>
        <p>
          Formar <b>3 mini-tabuleiros vencidos em linha</b> no tabuleiro principal (como um jogo da
          velha tradicional).
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">⚡ Regras-chave</h2>
        <ul className="space-y-1 ml-2.5">
          <li>
            <b>1ª jogada:</b> Livre (qualquer mini-tabuleiro/célula).
          </li>
          <li>
            <b>Jogadas seguintes:</b> A célula que você marcar{" "}
            <b>determina o próximo mini-tabuleiro</b> que o oponente deve jogar. Se jogar no{" "}
            <b>canto inferior esquerdo</b> de um mini-tabuleiro, o oponente deve jogar no{" "}
            <b>mini-tabuleiro inferior esquerdo</b> do tabuleiro principal.
          </li>
          <li>
            <b>Exceção:</b> Se o mini-tabuleiro alvo estiver cheio/vencido, jogue em qualquer outro
            disponível.
          </li>
          <li>
            <b>Vitória:</b> 3 símbolos alinhados no tabuleiro principal (usando mini-tabuleiros
            conquistados).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold">💡 Dica rápida</h2>
        <p>
          Pense em <b>duas camadas</b>: sua jogada atual define o próximo mini-tabuleiro do
          oponente.
        </p>
      </section>
    </div>
  );
}

export default ComoJogarResumido;
