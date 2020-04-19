class DateHelper {

    constructor() {
        throw new Error("Esta classe não pode ser instanciada.");
    }

    static converteData(dataTexto) {
        if (/\d{4}-\d{2}-\d{2}/.test(dataTexto)) {
            let data = new Date(dataTexto.split("-"));
            return `
            ${data.getDate() < 10 ? "0" + data.getDate() : data.getDate()}/
            ${(data.getMonth() + 1) < 10 ? "0" + (data.getMonth() + 1) : (data.getMonth() + 1)}/
            ${data.getFullYear()}`;

        }
        throw new Error("Não foi passado um formato de data válido!");

    }
}