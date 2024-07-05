var vitorias, derrotas, saldo, nivel;

function calcularSaldo(vit, der) {
  return vit - der;
}

function classificarNivel(vit) {
  if (vit <= 10) {
    return "Ferro";
  } else if (vit <= 20) {
    return "Bronze";
  } else if (vit <= 50) {
    return "Prata";
  } else if (vit <= 80) {
    return "Ouro";
  } else if (vit <= 90) {
    return "Diamante";
  } else if (vit <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

vitorias = 100;
derrotas = 10;
saldo = calcularSaldo(vitorias,derrotas);
nivel = classificarNivel(vitorias);

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`);