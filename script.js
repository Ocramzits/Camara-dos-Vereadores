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

});
