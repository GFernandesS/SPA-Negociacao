class MensagemView extends View{

    constructor(element){
        super(element);
    }
    template(model) {
        return `
        <p class="alert alert-success">${model}</p>
        `;
    }

    update(model) {
        let $ = this._elemento.classList;
        console.log(typeof this._elemento.classList);
        this._elemento.innerHTML = this.template(model);
        if($.contains("adicionaAlerta")){
            $.remove("adicionaAlerta");
        }
        $.add("removeAlerta");
        setTimeout(() => {
            this._removeElemento($);
            

        }, 7000);
    }

    _removeElemento($){
        this._elemento.innerHTML = "";
        $.add("adicionaAlerta");
        $.remove("removeAlerta");
        
    }
}