import { DiasDaSemana } from './../enums/dias-da-semana.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
import { MensagemView } from '../views/mensagem-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.SABADO = 6;
        this.DOMINGO = 0;
        this.inputData = document.querySelector("#data");
        this.inputquantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputquantidade.value, this.inputValor.value);
        if (!this.ehdiaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociacoes em dias uteis');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limpaFormulario();
        this.atualizaView();
    }
    ehdiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    // private criaNegociacao():Negociacao {
    //     const exp = /-/g;
    //     const date = new Date(this.inputData.value.replace(exp,','));
    //     const quantidade = parseInt(this.inputquantidade.value);
    //     const valor = parseFloat(this.inputValor.value);
    //    return  new Negociacao(date,quantidade,valor);
    // }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputValor.value = '';
        this.inputquantidade.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Necociacao adiconada com sucesso');
    }
}
