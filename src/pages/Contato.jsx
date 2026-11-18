export default function Contato() {
  return (
    <section id="contato" className="secao container">
      <div className="secao-cabecalho">
        <h2 id="titulo-contato">Fale com a Câmara</h2>
        <p className="secao-subtitulo">Envie sua dúvida, sugestão ou pedido de informação à Ouvidoria da Câmara.</p>
      </div>

      <form className="formulario" onSubmit={(e) => e.preventDefault()}>
        <fieldset className="formulario-grupo">
          <div className="campo-grupo">
            <label htmlFor="nome">Nome completo:</label>
            <input type="text" id="nome" name="nome" placeholder="Ex.: Maria de Sousa" required />
          </div>

          <div className="campo-grupo">
            <label htmlFor="email">E-mail para contato:</label>
            <input type="email" id="email" name="email" placeholder="exemplo@email.com" required />
          </div>

          <div className="campo-grupo">
            <label htmlFor="assunto">Assunto da mensagem:</label>
            <select id="assunto" name="assunto">
              <option value="duvida">Dúvida sobre projetos de lei</option>
              <option value="sugestao">Sugestão de melhoria para o município</option>
              <option value="ouvidoria">Elogio ou reclamação (Ouvidoria)</option>
              <option value="solicitacao">Acesso à informação (LAI)</option>
            </select>
          </div>

          <div className="campo-grupo">
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" placeholder="Escreva detalhadamente sua mensagem aqui..." required></textarea>
          </div>

          <button type="submit" className="botao-formulario">Enviar mensagem</button>
        </fieldset>
      </form>
    </section>
  );
}
