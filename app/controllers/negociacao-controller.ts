import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {
    private inputData:HTMLInputElement;
    private inputquantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    
    constructor(){
        this.inputData = document.querySelector("#data");
        this.inputquantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona(){
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp,','));
        const quantidade = parseInt(this.inputquantidade.value);
        const valor = parseFloat(this.inputValor.value);

       const negociacao = new Negociacao(date,quantidade,valor);
       console.log(negociacao);
    }
}