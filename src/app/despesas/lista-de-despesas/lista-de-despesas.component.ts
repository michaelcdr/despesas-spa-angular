import { Component, OnInit } from '@angular/core';
import { Despesa } from 'src/app/models/despesa';
import { DespesaWidgetService } from '../despesa.widget.service';

@Component({
  selector: 'app-lista-de-despesas',
  templateUrl: './lista-de-despesas.component.html',
  styleUrls: ['./lista-de-despesas.component.css']
})
export class ListaDeDespesasComponent implements OnInit {

  despesas: Despesa[];

  constructor(private service: DespesaWidgetService) {

  }

  ngOnInit(): void {
    this.obterTodas();
  }

  private obterTodas() {
    this.service.getDespesas().subscribe(
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
