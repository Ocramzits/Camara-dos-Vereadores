import { useState } from 'react';

export default function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('duvida');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(evento) {
    evento.preventDefault();
    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      return;
    }
    setEnviado(true);
    setNome('');
    setEmail('');
    setAssunto('duvida');
    setMensagem('');
  }

  return (
    <section
      id="contato"
      className="secao container"
      aria-labelledby="titulo-contato"
    >
      <div className="secao-cabecalho">
        <h2 id="titulo-contato">Fale com a Câmara</h2>
        <p className="secao-subtitulo">
          Envie sua dúvida, sugestão ou pedido de informação à Ouvidoria da
          Câmara.
        </p>
      </div>

      {enviado && (
        <div className="alerta-sucesso" role="status">
          Mensagem enviada com sucesso! Em breve nossa equipe entrará em
          contato.
        </div>
      )}

      <form className="formulario" onSubmit={handleSubmit}>
        <fieldset className="formulario-grupo">
          <legend className="sr-only">
            Formulário de Ouvidoria e Atendimento ao Cidadão
          </legend>

          <div className="campo-grupo">
            <label htmlFor="nome">Nome completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              autoComplete="name"
              placeholder="Ex.: Maria de Sousa"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="campo-grupo">
            <label htmlFor="email">E-mail para contato:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="campo-grupo">
            <label htmlFor="assunto">Assunto da mensagem:</label>
            <select
              id="assunto"
              name="assunto"
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
            >
              <option value="duvida">Dúvida sobre projetos de lei</option>
              <option value="sugestao">
                Sugestão de melhoria para o município
              </option>
              <option value="ouvidoria">
                Elogio ou reclamação (Ouvidoria)
              </option>
              <option value="solicitacao">Acesso à informação (LAI)</option>
            </select>
          </div>

          <div className="campo-grupo">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={5}
              placeholder="Escreva detalhadamente sua mensagem aqui..."
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit" className="botao-formulario">
            Enviar mensagem
          </button>
        </fieldset>
      </form>
    </section>
  );
}
