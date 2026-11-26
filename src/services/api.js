export async function buscarDados(url) {
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error(`Falha ao carregar dados de ${url}`);
  }
  return await resposta.json();
}

export async function buscarNoticias() {
  return buscarDados('/data/noticias.json');
}

export async function buscarSessoes() {
  return buscarDados('/data/sessoes.json');
}

export async function buscarVereadores() {
  return buscarDados('/data/vereadores.json');
}
