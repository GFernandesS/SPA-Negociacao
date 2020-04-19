class NegociacaoController {

    constructor() {
        let mensagem = "Uma negociação foi adicionada com sucesso!";
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListNegociacaoes();
        this._negociacaoView = new NegociacaoView($(".NegociacoesView"));
        this._mensagem = new Mensagem();
        this._mensagem.texto = mensagem;
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagemView = new MensagemView($("#MensagemView"));
    }

    adiciona(event) {

        event.preventDefault();

        this._listaNegociacoes.adicionaNegociacoes(this._criaNegociacao());
        this._limpaFormulario();
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagemView.update(this._mensagem.texto);
    }

    _criaNegociacao() {
        let negociacao = new Negociacao(
            DateHelper.converteData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
        return negociacao;
    }

    _limpaFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = "1";
        this._inputValor.value = "0.0";
        this._inputData.focus();
    }

}