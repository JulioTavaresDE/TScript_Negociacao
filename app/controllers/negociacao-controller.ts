import { DiasDaSemana } from './../enums/dias-da-semana.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
import { MensagemView } from '../views/mensagem-view.js';

export class NegociacaoController {
    private inputData:HTMLInputElement;
    private inputquantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private readonly SABADO = 6;
    private readonly DOMINGO = 0;


    constructor(){
        this.inputData = document.querySelector("#data");
        this.inputquantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void{
       const negociacao =Negociacao.criaDe(
        this.inputData.value, 
        this.inputquantidade.value,
        this.inputValor.value 
       );
       
            if(!this.ehdiaUtil(negociacao.data)){
                this.mensagemView.update('Apenas negociacoes em dias uteis');
                return;
            }
            this.negociacoes.adiciona(negociacao);
            this.limpaFormulario();
            this.atualizaView();
         
    }

    private ehdiaUtil(data:Date){
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    // private criaNegociacao():Negociacao {
    //     const exp = /-/g;
    //     const date = new Date(this.inputData.value.replace(exp,','));
    //     const quantidade = parseInt(this.inputquantidade.value);
    //     const valor = parseFloat(this.inputValor.value);
    //    return  new Negociacao(date,quantidade,valor);
    // }

    private limpaFormulario() : void{
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputquantidade.value = '';
        this.inputData.focus();
    }

    private atualizaView():void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Necociacao adiconada com sucesso');
    }

}