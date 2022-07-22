import { Negociacao } from './../models/negociacao.js';
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputquantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limpaFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputquantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputquantidade.value = '';
        this.inputData.focus();
    }
}
