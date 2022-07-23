import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';

export class NegociacaoController {
    private inputData:HTMLInputElement;
    private inputquantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');

    constructor(){
        this.inputData = document.querySelector("#data");
        this.inputquantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void{
       const negociacao = this.criaNegociacao();
       this.negociacoes.adiciona(negociacao);
       this.negociacoesView.update(this.negociacoes);
       this.limpaFormulario();
    }

    criaNegociacao():Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp,','));
        const quantidade = parseInt(this.inputquantidade.value);
        const valor = parseFloat(this.inputValor.value);
       return  new Negociacao(date,quantidade,valor);
    }

    limpaFormulario() : void{
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputquantidade.value = '';
        this.inputData.focus();
    }
}