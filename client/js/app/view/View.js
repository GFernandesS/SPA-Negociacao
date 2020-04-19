class View{
    constructor(elemento){
        this._elemento = elemento
    }

    template(model){
        throw new Error("É necessário sobreescrever o método template em todas as classes que herdam esta");
    }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }
}