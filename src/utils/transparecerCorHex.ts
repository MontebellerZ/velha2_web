const PCT_TRANSPARENCIA = 30; // % de transparência

function transparecerCorHex(cor: string, pctTransparencia?: number): string {
  const pct = pctTransparencia ?? PCT_TRANSPARENCIA;

  const hexTransparencia = Math.floor((pct / 100) * 255)
    .toString(16)
    .padStart(2, "0");

  if (!cor.startsWith("#")) return cor;

  switch (cor.length) {
    case 7: // #RRGGBB
      return cor + hexTransparencia;
    case 9: // #RRGGBBAA
      return cor.slice(0, 7) + hexTransparencia;
    case 4: // #RGB
      return cor + hexTransparencia[0];
    case 5: // #RGBA
      return cor.slice(0, 4) + hexTransparencia[0];
    default:
      return cor;
  }
}

export default transparecerCorHex;
