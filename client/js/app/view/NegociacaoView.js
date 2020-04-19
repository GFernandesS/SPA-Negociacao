class NegociacaoView extends View{

    constructor(element){
        super(element);
    }

    template(model) {
        
        return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
        ${model.negociacoes.map((m) =>
            `
            <tr>
                <td>${m._data}</td>
                <td>${m._quantidade}</td>
                <td>${m._valor}</td>
                <td>${m._volume}</td>
            </tr>
        `
        ).join("")}

        </tbody>

        <tfoot>
        <td colspan="3"></td>
        <td>Total: 
        ${model.negociacoes.reduce((somaTotal, m) => somaTotal + m._volume, 0)}
        </td>
        </tfoot>
    </table>
        ;
    `
    }

}