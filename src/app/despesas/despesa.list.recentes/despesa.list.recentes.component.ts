import { Component, Input, OnInit } from '@angular/core';
import { Despesa } from 'src/app/models/despesa';
import { DespesaWidgetService } from '../despesa.widget.service';

@Component({
    selector: 'despesa-list-recentes',
    templateUrl: './despesa.list.recentes.component.html'
})
export class DespesaListRecentes implements OnInit {

    despesas: Despesa[];

    constructor(private service: DespesaWidgetService) {

    }

    ngOnInit(): void {
        this.obterTodas(this.service);
    }

    private obterTodas(service: DespesaWidgetService) {
        service.getDespesas().subscribe(
            (despesas) => {
                this.despesas = <Despesa[]>despesas;

                this.despesas.forEach(despesa => {
                    despesa.valorFormatado = this.formatarDados(despesa.valor);
                    despesa.dataCadastroFormatada = this.formatarData(despesa.dataCadastro);
                    despesa.dataInicioFormatada = this.formatarData(despesa.dataInicio);
                });
            },
            err => console.log("Erro ocorrido " + err.message)
        );
    }

    private formatarData(data: string): string {
        var dataNova = new Date(data);
        return dataNova.toLocaleDateString("pt-BR");
    }

    private formatarDados(valor: Number): string {

        var options = { style: 'currency', currency: 'BRL' };
        return valor.toLocaleString('pt-br', options);

    }
}