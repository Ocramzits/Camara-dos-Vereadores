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

});
