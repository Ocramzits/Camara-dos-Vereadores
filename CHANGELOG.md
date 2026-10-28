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

### Armazenamento com sessionStorage (Domingos de Melo)

- Registro do timestamp de abertura da aba com a chave `tempo_inicio_sessao` via `sessionStorage`, armazenado imediatamente ao carregar a página.
- Salvamento automático da string digitada no campo de pesquisa superior com a chave `termo_busca` a cada evento de input.
- Persistência da opção selecionada no campo de assunto do formulário da ouvidoria com a chave `assunto_selecionado` a cada evento de change.
- Salvamento automático do texto digitado na textarea do formulário com a chave `mensagem_rascunho` a cada evento de input, evitando perdas acidentais.
- Rastreamento da seção visível na janela (notícias ou sessões) com a chave `secao_atual_visivel`, implementado via `IntersectionObserver`.

### Armazenamento com cookies HTTP (Guylherme Santos)

- Implementação de 5 cookies HTTP via JavaScript: `acessibilidade_tamanho_fonte`, `acessibilidade_alto_contraste`, `ultima_data_visita`, `contador_de_visitas` e `id_sessao_anonima`.
- Persistência e restauração do tamanho de fonte selecionado pelo usuário (`acessibilidade_tamanho_fonte`).
- Alternância e persistência do modo de alto contraste (`acessibilidade_alto_contraste`).
- Armazenamento e exibição da data e hora da última visita ao portal (`ultima_data_visita`).
- Incrementador numérico de retornos ao portal a cada nova navegação (`contador_de_visitas`).
- Geração de identificador hash anônimo único no primeiro acesso (`id_sessao_anonima`).
- Adição de barra de ferramentas de acessibilidade e informações de sessão no topo da página.

## Entrega final

### Integração do localStorage na interface (Marco Antônio)

- Leitura e restauração do tema escuro (`tema_escuro_ativo`) e atualização do atributo `aria-pressed` no botão durante o carregamento da página.
- Preenchimento automático dos campos de nome (`nome_ouvidoria`) e e-mail (`email_ouvidoria`) com os valores salvos no localStorage.
- Restauração visual do vereador selecionado como favorito (`vereador_favorito`) na grade parlamentar.
- Ocultação automática do alerta de cookies (`alerta_cookies_aceito`) quando a aceitação prévia for identificada no localStorage.

### Integração do sessionStorage e cookies com a interface (Domingos de Melo)

- Implementação da função `restaurarSessionStorage()` que lê as chaves do `sessionStorage` ao carregar a página e aplica os valores nos campos da interface.
- Restauração do rascunho de mensagem pendente (`mensagem_rascunho`) no campo de textarea da ouvidoria, evitando que o usuário perca o que estava digitando na mesma sessão.
- Restauração do último termo digitado na barra de pesquisa (`termo_busca`) no campo de busca superior.
- Restauração da opção de assunto selecionada anteriormente (`assunto_selecionado`) no select do formulário da ouvidoria.
- Reposicionamento da declaração de `campoAssunto` para antes das funções de restauração, garantindo a disponibilidade da referência ao DOM no momento da leitura do sessionStorage.
- Os cookies de tamanho de fonte (`acessibilidade_tamanho_fonte`) e alto contraste (`acessibilidade_alto_contraste`) já aplicados via `aplicarTamanhoFonte()` e `aplicarAltoContraste()` mantêm o estado de acessibilidade entre sessões.
