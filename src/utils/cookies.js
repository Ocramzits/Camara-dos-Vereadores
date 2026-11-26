export function setCookie(nome, valor, dias = 365) {
  const data = new Date();
  data.setTime(data.getTime() + dias * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + data.toUTCString();
  document.cookie = `${nome}=${encodeURIComponent(valor)};${expires};path=/;SameSite=Lax`;
}

export function getCookie(nome) {
  const nomeChave = nome + '=';
  const listaCookies = document.cookie.split(';');
  for (let i = 0; i < listaCookies.length; i++) {
    let c = listaCookies[i].trim();
    if (c.indexOf(nomeChave) === 0) {
      return decodeURIComponent(c.substring(nomeChave.length, c.length));
    }
  }
  return null;
}

export function gerarHashAnonimo() {
  if (typeof window !== 'undefined' && window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID().replace(/-/g, '');
  }
  const bytes = new Uint8Array(16);
  if (typeof window !== 'undefined' && window.crypto && typeof window.crypto.getRandomValues === 'function') {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export function formatarDataHora(dataIso) {
  const data = new Date(dataIso);
  if (isNaN(data.getTime())) {
    return dataIso;
  }
  return data.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}
