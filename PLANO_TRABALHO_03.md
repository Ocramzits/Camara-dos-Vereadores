# Plano de Commits - Trabalho 03 (SPA da Câmara de Vereadores)

Este plano contempla as demandas da **Terceira Avaliação de Programação para a Web I (UFPI)**, dividindo as tarefas de forma igualitária entre os 3 membros do grupo (**Marco Antônio**, **Guylherme Santos** e **Domingos de Melo**), com exatamente 2 commits por membro em cada entrega parcial.

---

## 🛠️ Stack Tecnológica

- **Build Tool / Framework JS:** Vite + React (`react-router-dom` para roteamento SPA)
- **Framework CSS:** Tailwind CSS (ou CSS modular adaptado)
- **Linter & Formatter:** ESLint + Prettier (configuração mínima padrão)
- **Comunicação Assíncrona:** Fetch API consumindo arquivos JSON estáticos em `/public/data/` (sem necessidade de backend)
- **Armazenamento:** Manutenção de `localStorage`, `sessionStorage` e `cookies` implementados nas etapas anteriores

---

## 📅 Entrega Parcial 1: Estruturação da SPA e Roteamento

**Prazo:** 20/11/2026 (Envio por e-mail com link do repositório)

_Foco: Inicialização com Vite, configuração de roteamento client-side, layout base compartilhado e migração das páginas para componentes._

### 👤 Marco Antônio

1. `build: inicializar projeto vite com react linter e formatter`
   - Setup inicial do Vite com React.
   - Configuração básica do ESLint e Prettier.
2. `feat: configurar roteamento spa com react router`
   - Instalação e configuração do `react-router-dom`.
   - Definição das rotas principais (`/`, `/noticias`, `/vereadores`, `/sessoes`, `/contato`) e navegação client-side sem recarregamento de página.

### 👤 Guylherme Santos

1. `feat: criar layout base e componentes estruturais`
   - Criação dos componentes reutilizáveis de `Navbar` (com `<Link>` do React Router), `Header` e `Footer`.
   - Estrutura de layout compartilhado entre as rotas da SPA.
2. `feat: migrar paginas de inicio e vereadores`
   - Conversão das seções `Início` (hero e apresentação) e `Vereadores` (cards dos parlamentares) em componentes React.

### 👤 Domingos de Melo

1. `feat: configurar framework de estilizacao`
   - Configuração do Tailwind CSS (ou adaptação do CSS existente para escopo dos componentes).
   - Manutenção da identidade visual e responsividade do portal.
2. `feat: migrar paginas de sessoes noticias e contato`
   - Conversão das seções `Noticias` (cards informativos), `Sessoes` (tabela de sessões) e `Contato` (formulário da ouvidoria) em componentes React.

---

## 📅 Entrega Parcial 2: Comunicação Assíncrona e Persistência

**Prazo:** 27/11/2026 (Envio por e-mail com link do repositório)

_Foco: Criação dos dados estáticos, integração com Fetch API (GET) nos componentes e preservação dos storages (`localStorage`, `sessionStorage` e `cookies`)._

### 👤 Marco Antônio

1. `feat: integrar requisicoes assincronas nos componentes`
   - Consumo dos endpoints JSON via `fetch` nas views de Sessões, Notícias e Vereadores.
   - Tratamento básico de estado de carregamento (_loading_) e erros.
2. `feat: restaurar persistencia de dados com localstorage`
   - Manutenção das 5 chaves de `localStorage`:
     - `tema_escuro_ativo`
     - `nome_ouvidoria`
     - `email_ouvidoria`
     - `vereador_favorito`
     - `alerta_cookies_aceito`

### 👤 Guylherme Santos

1. `feat: criar endpoints json estaticos e servico de fetch`
   - Criação dos arquivos JSON em `/public/data/` (`sessoes.json`, `noticias.json`, `vereadores.json`).
   - Implementação de módulo/função utilitária com `fetch` (método GET) para consulta assíncrona dos dados.
2. `feat: integrar cookies de acessibilidade na spa`
   - Manutenção dos 5 cookies do trabalho anterior:
     - `acessibilidade_tamanho_fonte`
     - `acessibilidade_alto_contraste`
     - `ultima_data_visita`
     - `contador_de_visitas`
     - `id_sessao_anonima`

### 👤 Domingos de Melo

1. `feat: integrar sessionstorage na navegacao e formularios`
   - Manutenção das 5 chaves de `sessionStorage`:
     - `termo_busca`
     - `assunto_selecionado`
     - `mensagem_rascunho`
     - `secao_atual_visivel`
     - `tempo_inicio_sessao`
2. `docs: atualizar changelog e instrucoes no readme`
   - Registro de todas as entregas no `CHANGELOG.md`.
   - Inclusão no `README.md` das instruções de instalação (`npm install`) e execução local (`npm run dev`).

---

## 📦 Entrega Final

**Prazo:** 01/12/2026 (Submissão do `.zip` no SIGAA)

- Redação do relatório de documentação no modelo da SBC contendo:
  - Ferramentas e versões utilizadas com justificativa.
  - Estrutura de diretórios e diagrama/arquitetura dos componentes da SPA.
  - Explicação do roteamento client-side e das decisões de design.
  - Detalhamento das requisições assíncronas com `fetch` e tratamento de respostas.
  - Como a integração de `localStorage`, `sessionStorage` e `cookies` foi preservada.
- Empacotamento do projeto em arquivo `.zip` com código-fonte, README e relatório.
