# Câmara Municipal de Buriti Grande

Trabalho acadêmico desenvolvido para a disciplina de **Programação para a Web I**.

O objetivo do projeto é implementar uma interface gráfica institucional completa para uma Câmara de Vereadores fictícia, utilizando exclusivamente **HTML5 e CSS3**, cumprindo rigorosamente os requisitos de acessibilidade e responsividade baseados no conteúdo das aulas.

---

## Requisitos Atendidos

### Aspectos de Acessibilidade (a11y)

Conforme exigido pelo trabalho (mínimo de 4 elementos), foram implementados os seguintes recursos:

1. **A1 - Declaração de Idioma (`lang="pt-br"`)**: Garante que leitores de tela e tecnologias assistivas usem a síntese correta de pronúncia em português.
2. **A2 - Skip Link (Salto para o Conteúdo)**: Link oculto que surge ao pressionar a tecla `Tab` (`.skip-link`), permitindo que usuários que navegam por teclado saltem diretamente ao conteúdo principal sem passar por todo o cabeçalho/menu repetitivo.
3. **A3 - HTML Semântico e Hierarquia de Cabeçalhos**: Estruturação estrita com `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>`, `<footer>`, `<time>` e `<address>`. Apenas um `<h1>` na página, com subseções hierarquizadas (`<h2>` e `<h3>`) sem pular níveis.
4. **A4 - Associação Formal em Formulários**: Todos os campos (`<input>`, `<select>`, `<textarea>`) possuem rótulos dedicados (`<label>`) vinculados explicitamente pelos atributos `for` e `id`, além do agrupamento semântico com `<fieldset>`.
5. **A5 - Textos Alternativos Informativos (`alt`)**: Todas as imagens possuem descrição textual clara de seu conteúdo. Ícones e SVGs utilizam `role="img"` com `aria-label` ou `aria-hidden="true"`.
6. **A6 - Indicador de Foco Visível para Teclado**: Estilos `:focus-visible` com contorno de alto contraste (`outline: 3px solid #e5a914`) facilitando a navegação de quem não utiliza mouse.
7. **A7 - Contraste de Cores**: Relação de contraste entre texto e fundo alinhada às recomendações WCAG 2.1 (AA/AAA).
8. **A8 - Ocultação Acessível (`.sr-only`)**: Rótulos para tecnologias assistivas que não ocupam espaço visual, como no formulário de busca.
9. **A9 - Tabela com Semântica Acessível**: Uso de `<caption>`, `<thead>`, `<tbody>` e `<th scope="col">` para identificação de colunas por leitores de tela.
10. **A10 - Área de Toque Adequada**: Elementos clicáveis possuem altura mínima de 44px a 48px para facilidade de acionamento motor.

### Aspectos de Responsividade (RWD)

Conforme exigido pelo trabalho (mínimo de 4 elementos), foram implementados os seguintes recursos:

1. **R1 - Meta Tag Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` configurando a escala e largura adaptativa para qualquer resolução.
2. **R2 - Imagens Fluidas e Responsivas**: Regras CSS com `max-width: 100%`, `height: auto` e `object-fit: cover` prevenindo estouro de layout em telas estreitas.
3. **R3 - Unidades Relativas e Box-Sizing**: Adoção de `box-sizing: border-box` universal e unidades fluidas (`rem`, `%`, `ch`, `fr`) ao invés de tamanhos fixos em pixels.
4. **R4 - Contêiner Fluido**: Classe `.container` com largura máxima de 1140px, centralizada com margem automática e padding lateral de segurança.
5. **R5 - CSS Grid Flexível**: Grade responsiva (`repeat(auto-fit, minmax(280px, 1fr))`) que recalcula automaticamente o número de colunas conforme o espaço disponível.
6. **R6 - Tabela com Rolagem Horizontal Segura**: Contêiner `.tabela-wrapper` com `overflow-x: auto` e `tabindex="0"`, permitindo consulta clara em smartphones sem quebrar a largura da página.
7. **R7 - Media Queries Adaptativas**: Ajustes refinados para tablets (`max-width: 768px`) e smartphones (`max-width: 520px`).
8. **R8 - Layout Flexbox Dinâmico**: Reorganização em coluna de menus, cabeçalho e seção de destaque em dispositivos menores.

---

## Estrutura da Página

- **Cabeçalho**: Brasão em SVG, identificação oficial, lema institucional e campo funcional de pesquisa com botão de lupa e foco acessível.
- **Menu de Navegação**: Acesso direto via âncoras para as seções da página.
- **Destaque (Hero)**: Apresentação da Casa Legislativa ao lado da foto panorâmica da cidade de Buriti Grande (`hero.jpg`), emoldurada com `<figure>` e `<figcaption>`.
- **Últimas Notícias**: Cartões com campos dedicados para imagens ilustrativas, datas semânticas (`<time>`), títulos e links acessíveis.
- **Vereadores**: Cartões parlamentares com fotos em molduras padronizadas circulares, nomes, cargos e período de mandato.
- **Calendário de Sessões**: Tabela com pautas e horários das próximas reuniões ordinárias e solenes.
- **Fale com a Câmara**: Formulário de ouvidoria e contato com campos acessíveis e seleção de assunto.
- **Rodapé**: Dados institucionais em `<address>`, links de navegação rápida e botão de retorno ao topo.
