function setCookie(nome, valor, dias = 365) {
  const data = new Date();
  data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
  const expires = "expires=" + data.toUTCString();
  document.cookie = nome + "=" + encodeURIComponent(valor) + ";" + expires + ";path=/;SameSite=Lax";
}

function getCookie(nome) {
  const nomeChave = nome + "=";
  const listaCookies = document.cookie.split(';');
  for (let i = 0; i < listaCookies.length; i++) {
    let c = listaCookies[i].trim();
    if (c.indexOf(nomeChave) === 0) {
      return decodeURIComponent(c.substring(nomeChave.length, c.length));
    }
  }
  return null;
}

function gerarHashAnonimo() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return window.crypto.randomUUID().replace(/-/g, '');
  }
  const bytes = new Uint8Array(16);
  if (window.crypto && typeof window.crypto.getRandomValues === 'function') {
    window.crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < 16; i++) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

function aplicarTamanhoFonte(tamanho) {
  const mapa = {
    'pequena': '90%',
    'padrao': '100%',
    'grande': '115%',
    'extra-grande': '130%'
  };
  let percentual = mapa[tamanho];
  if (!percentual) {
    if (typeof tamanho === 'string' && tamanho.endsWith('%')) {
      percentual = tamanho;
    } else if (!isNaN(Number(tamanho))) {
      percentual = tamanho + '%';
    } else {
      percentual = '100%';
      tamanho = 'padrao';
    }
  }
  document.documentElement.style.fontSize = percentual;
  setCookie('acessibilidade_tamanho_fonte', tamanho);
}

function obterTamanhoFonteAtual() {
  const cookieVal = getCookie('acessibilidade_tamanho_fonte');
  if (cookieVal && ['pequena', 'padrao', 'grande', 'extra-grande'].includes(cookieVal)) {
    return cookieVal;
  }
  return 'padrao';
}

function aplicarAltoContraste(ativo) {
  const btnContraste = document.getElementById('btn-alto-contraste');
  if (ativo) {
    document.body.classList.add('alto-contraste');
    if (btnContraste) {
      btnContraste.setAttribute('aria-pressed', 'true');
    }
    setCookie('acessibilidade_alto_contraste', 'true');
  } else {
    document.body.classList.remove('alto-contraste');
    if (btnContraste) {
      btnContraste.setAttribute('aria-pressed', 'false');
    }
    setCookie('acessibilidade_alto_contraste', 'false');
  }
}

function formatarDataHora(dataIso) {
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
    second: '2-digit'
  });
}

document.addEventListener('DOMContentLoaded', () => {

  const sessoes = [
    {
      data: '28/09/2026',
      horario: '09h00',
      tipo: 'Ordinária',
      classeTag: 'ordinaria',
      pauta: 'Votação do projeto de lei da coleta seletiva e reciclagem'
    },
    {
      data: '05/10/2026',
      horario: '09h00',
      tipo: 'Ordinária',
      classeTag: 'ordinaria',
      pauta: 'Debate das emendas parlamentares para reforma da praça central'
    },
    {
      data: '12/10/2026',
      horario: '14h00',
      tipo: 'Solene',
      classeTag: 'solene',
      pauta: 'Entrega solene de títulos de cidadão honorário de Buriti Grande'
    },
    {
      data: '19/10/2026',
      horario: '09h00',
      tipo: 'Ordinária',
      classeTag: 'ordinaria',
      pauta: 'Apreciação de pareceres e requerimentos das comissões temáticas'
    }
  ];

  const vereadores = [
    {
      nome: 'Guylherme Santos Lima',
      cargo: 'Presidente da Câmara',
      mandato: '2025 – 2028',
      foto: 'img/Guylherme.png',
      alt: 'Foto do vereador Guylherme Santos Lima'
    },
    {
      nome: 'Domingos de Melo',
      cargo: 'Vice-presidente',
      mandato: '2025 – 2028',
      foto: 'img/Domingos.png',
      alt: 'Foto do vereador Domingos de Melo'
    },
    {
      nome: 'Marco Antônio',
      cargo: 'Primeiro Secretário',
      mandato: '2025 – 2028',
      foto: 'img/marco.png',
      alt: 'Foto do vereador Marco Antônio'
    },
    {
      nome: 'Talita da Luz',
      cargo: 'Vereadora',
      mandato: '2025 – 2028',
      foto: 'img/antonio.jpg',
      alt: 'Foto da vereadora Talita da Luz'
    }
  ];

  const linksMenu = document.querySelectorAll('.menu-lista a[href^="#"]');

  linksMenu.forEach((link) => {
    link.addEventListener('click', (evento) => {
      evento.preventDefault();
      const idAlvo = link.getAttribute('href');
      const elementoAlvo = document.querySelector(idAlvo);
      if (elementoAlvo) {
        elementoAlvo.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const linksRodape = document.querySelectorAll('.rodape-links a[href^="#"]');

  linksRodape.forEach((link) => {
    link.addEventListener('click', (evento) => {
      evento.preventDefault();
      const idAlvo = link.getAttribute('href');
      const elementoAlvo = document.querySelector(idAlvo);
      if (elementoAlvo) {
        elementoAlvo.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const botaoTopo = document.querySelector('.botao-topo');

  if (botaoTopo) {
    botaoTopo.addEventListener('click', (evento) => {
      evento.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const botoesHero = document.querySelectorAll('.hero-acoes a[href^="#"]');

  botoesHero.forEach((botao) => {
    botao.addEventListener('click', (evento) => {
      evento.preventDefault();
      const idAlvo = botao.getAttribute('href');
      const elementoAlvo = document.querySelector(idAlvo);
      if (elementoAlvo) {
        elementoAlvo.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const noticias = [
    {
      data: '15 de setembro de 2026',
      datatime: '2026-09-15',
      titulo: 'Câmara aprova orçamento de 2027',
      texto: 'Os vereadores aprovaram, em votação plenária realizada na tarde de terça-feira, a proposta orçamentária para o exercício de 2027. O orçamento, que totaliza R$ 12 milhões, tem como prioridades os setores de saúde pública e infraestrutura urbana. A proposta recebeu 8 votos favoráveis e 1 contrário, e seguirá para sanção do Executivo Municipal.'
    },
    {
      data: '10 de setembro de 2026',
      datatime: '2026-09-10',
      titulo: 'Audiência pública sobre transporte',
      texto: 'A Câmara Municipal realizou audiência pública para debater melhorias nas linhas de ônibus urbano de Buriti Grande. A população compareceu em número expressivo para discutir a criação de novos itinerários, revisão das tarifas praticadas e a necessidade de renovação da frota municipal. As demandas levantadas serão compiladas em relatório e encaminhadas à Secretaria Municipal de Transportes.'
    },
    {
      data: '3 de setembro de 2026',
      datatime: '2026-09-03',
      titulo: 'Projeto de lei incentiva a reciclagem',
      texto: 'Um novo projeto de lei apresentado na Câmara prevê a ampliação de pontos de coleta seletiva em toda a área urbana de Buriti Grande, além de incentivos fiscais para cooperativas de reciclagem locais. O texto, de autoria do vereador Marco Antônio, será debatido em comissão antes de seguir para votação em plenário. A expectativa é que seja votado ainda neste semestre.'
    }
  ];

  const modal = document.getElementById('modal-noticia');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalData = document.getElementById('modal-data');
  const modalTexto = document.getElementById('modal-texto');
  const botaoFechar = document.querySelector('.modal-fechar');
  const linksNoticia = document.querySelectorAll('.link-noticia');

  function abrirModal(indice) {
    const noticia = noticias[indice];
    modalTitulo.textContent = noticia.titulo;
    modalData.textContent = noticia.data;
    modalTexto.textContent = noticia.texto;
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('modal-aberto');
    botaoFechar.focus();
  }

  function fecharModal() {
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('modal-aberto');
  }

  linksNoticia.forEach((link, indice) => {
    link.addEventListener('click', (evento) => {
      evento.preventDefault();
      abrirModal(indice);
    });
  });

  botaoFechar.addEventListener('click', fecharModal);

  modal.addEventListener('click', (evento) => {
    if (evento.target === modal) {
      fecharModal();
    }
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && modal.classList.contains('modal-aberto')) {
      fecharModal();
    }
  });

  const formBusca = document.querySelector('.busca-form');
  const campoBusca = document.getElementById('campo-busca');

  if (formBusca) {
    formBusca.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const termo = campoBusca.value.trim();
      if (termo === '') {
        campoBusca.focus();
        return;
      }
      const secaoNoticias = document.getElementById('noticias');
      if (secaoNoticias) {
        secaoNoticias.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  const formOuvidoria = document.querySelector('.formulario');
  const campoNome = document.getElementById('nome');
  const campoEmail = document.getElementById('email');
  const campoMensagem = document.getElementById('mensagem');

  if (formOuvidoria) {
    formOuvidoria.addEventListener('submit', (evento) => {
      evento.preventDefault();
      const nome = campoNome.value.trim();
      const email = campoEmail.value.trim();
      const mensagem = campoMensagem.value.trim();
      if (nome === '') {
        campoNome.focus();
        return;
      }
      if (email === '') {
        campoEmail.focus();
        return;
      }
      if (mensagem === '') {
        campoMensagem.focus();
        return;
      }
      alert('Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.');
      formOuvidoria.reset();
    });
  }

  const botaoTema = document.getElementById('botao-tema');

  botaoTema.addEventListener('click', () => {
    const ativo = document.body.classList.toggle('tema-escuro');
    botaoTema.setAttribute('aria-pressed', ativo);
    localStorage.setItem('tema_escuro_ativo', ativo);
  });

  campoNome.addEventListener('input', () => {
    localStorage.setItem('nome_ouvidoria', campoNome.value);
  });

  campoEmail.addEventListener('input', () => {
    localStorage.setItem('email_ouvidoria', campoEmail.value);
  });

  const cardsVereadores = document.querySelectorAll('.card-vereador');

  function favoritarVereador(indice) {
    cardsVereadores.forEach((card) => card.classList.remove('vereador-favorito'));
    cardsVereadores[indice].classList.add('vereador-favorito');
    localStorage.setItem('vereador_favorito', vereadores[indice].nome);
  }

  cardsVereadores.forEach((card, indice) => {
    card.addEventListener('click', () => {
      favoritarVereador(indice);
    });
    card.addEventListener('keydown', (evento) => {
      if (evento.key === 'Enter') {
        favoritarVereador(indice);
      }
    });
  });

  const avisoCookies = document.getElementById('aviso-cookies');
  const botaoAceitarCookies = document.getElementById('botao-aceitar-cookies');

  botaoAceitarCookies.addEventListener('click', () => {
    localStorage.setItem('alerta_cookies_aceito', 'true');
    avisoCookies.classList.add('cookies-oculto');
  });

  sessionStorage.setItem('tempo_inicio_sessao', Date.now().toString());

  campoBusca.addEventListener('input', () => {
    sessionStorage.setItem('termo_busca', campoBusca.value);
  });

  const campoAssunto = document.getElementById('assunto');

  if (campoAssunto) {
    campoAssunto.addEventListener('change', () => {
      sessionStorage.setItem('assunto_selecionado', campoAssunto.value);
    });
  }

  if (campoMensagem) {
    campoMensagem.addEventListener('input', () => {
      sessionStorage.setItem('mensagem_rascunho', campoMensagem.value);
    });
  }

  const secaoNoticias = document.getElementById('noticias');
  const secaoSessoes = document.getElementById('sessoes');

  const observadorSecoes = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        sessionStorage.setItem('secao_atual_visivel', entrada.target.id);
      }
    });
  }, { threshold: 0.5 });

  if (secaoNoticias) observadorSecoes.observe(secaoNoticias);
  if (secaoSessoes) observadorSecoes.observe(secaoSessoes);

  const btnAumentar = document.getElementById('btn-aumentar-fonte');
  const btnDiminuir = document.getElementById('btn-diminuir-fonte');
  const btnPadrao = document.getElementById('btn-fonte-padrao');
  const btnContraste = document.getElementById('btn-alto-contraste');

  if (btnAumentar) {
    btnAumentar.addEventListener('click', () => {
      const atual = obterTamanhoFonteAtual();
      let proximo = atual;
      if (atual === 'pequena') proximo = 'padrao';
      else if (atual === 'padrao') proximo = 'grande';
      else if (atual === 'grande') proximo = 'extra-grande';
      aplicarTamanhoFonte(proximo);
    });
  }

  if (btnDiminuir) {
    btnDiminuir.addEventListener('click', () => {
      const atual = obterTamanhoFonteAtual();
      let proximo = atual;
      if (atual === 'extra-grande') proximo = 'grande';
      else if (atual === 'grande') proximo = 'padrao';
      else if (atual === 'padrao') proximo = 'pequena';
      aplicarTamanhoFonte(proximo);
    });
  }

  if (btnPadrao) {
    btnPadrao.addEventListener('click', () => {
      aplicarTamanhoFonte('padrao');
    });
  }

  if (btnContraste) {
    btnContraste.addEventListener('click', () => {
      const ativoAtual = document.body.classList.contains('alto-contraste');
      aplicarAltoContraste(!ativoAtual);
    });
  }

  const tamanhoSalvo = getCookie('acessibilidade_tamanho_fonte');
  if (tamanhoSalvo) {
    aplicarTamanhoFonte(tamanhoSalvo);
  }

  const contrasteSalvo = getCookie('acessibilidade_alto_contraste');
  if (contrasteSalvo === 'true' || contrasteSalvo === 'ativado' || contrasteSalvo === '1') {
    aplicarAltoContraste(true);
  } else if (contrasteSalvo === 'false' || contrasteSalvo === 'desativado' || contrasteSalvo === '0') {
    aplicarAltoContraste(false);
  }

  const ultimaDataCookie = getCookie('ultima_data_visita');
  const elUltimaVisita = document.getElementById('info-ultima-visita');
  if (elUltimaVisita) {
    if (ultimaDataCookie) {
      elUltimaVisita.textContent = 'Última visita: ' + formatarDataHora(ultimaDataCookie);
    } else {
      elUltimaVisita.textContent = 'Primeira visita ao portal';
    }
  }
  setCookie('ultima_data_visita', new Date().toISOString());

  const contadorCookie = getCookie('contador_de_visitas');
  let contador = 1;
  if (contadorCookie) {
    const parsed = parseInt(contadorCookie, 10);
    if (!isNaN(parsed) && parsed >= 1) {
      contador = parsed + 1;
    }
  }
  setCookie('contador_de_visitas', contador.toString());
  const elVisitas = document.getElementById('info-visitas');
  if (elVisitas) {
    elVisitas.textContent = 'Visitas: ' + contador;
  }

  let idSessao = getCookie('id_sessao_anonima');
  if (!idSessao) {
    idSessao = gerarHashAnonimo();
    setCookie('id_sessao_anonima', idSessao);
  }
  const elSessao = document.getElementById('info-sessao');
  if (elSessao) {
    elSessao.textContent = 'Sessão: ' + idSessao.substring(0, 8) + '...';
    elSessao.setAttribute('title', 'ID da Sessão: ' + idSessao);
  }

});
