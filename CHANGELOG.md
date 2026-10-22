# Changelog para as entregas parciais da locadora de filmes

## Entrega parcial 1

### Estruturando o projeto (Guylherme Santos)

- Estruturação semântica do portal em HTML5.
- Estilização visual e responsiva em CSS3.
- Recursos de acessibilidade digital e navegação por teclado.
- Arquivo de changelog para versionamento e histórico de alterações.

### Estruturação de dados e navegação do DOM (Marco Antônio)

- Criação de arrays e objetos em JavaScript contendo dados das sessões plenárias e dos vereadores.
- Implementação de ouvintes de eventos de clique para navegação no menu principal e no rodapé com rolagem suave.
- Adição de ouvinte de evento para o botão de retorno ao topo da página via rolagem suave.

### Eventos interativos e interceptação de formulários (Domingos de Melo)

- Implementação de modal de notícias com manipulação do DOM: ao clicar em "Ler notícia completa", um popup exibe o conteúdo completo da notícia, com fechamento por botão, clique no overlay ou tecla Escape.
- Interceptação do evento de submit do formulário de busca com validação de campo não vazio antes de qualquer ação.
- Interceptação do evento de submit do formulário da ouvidoria com validação de nome, e-mail e mensagem antes do envio.

## Entrega parcial 2

### Armazenamento com localStorage (Marco Antônio)

- Implementação de 5 chaves no localStorage: `tema_escuro_ativo`, `nome_ouvidoria`, `email_ouvidoria`, `vereador_favorito` e `alerta_cookies_aceito`.
- Adição do botão de alternância de tema escuro, do aviso de cookies e da seleção de vereador favorito nos cards.
