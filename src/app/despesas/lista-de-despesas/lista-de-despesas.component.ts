import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Despesa } from 'src/app/models/despesa';

@Component({
  selector: 'app-lista-de-despesas',
  templateUrl: './lista-de-despesas.component.html',
  styleUrls: ['./lista-de-despesas.component.css']
})
export class ListaDeDespesasComponent implements OnInit {

  despesas: Despesa[] = [];
  filtro: string = '';

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.despesas = this.activatedRoute.snapshot.data.despesas;

    this.formatarDespesas();
  }

  private formatarDespesas(): void {
    this.despesas.forEach(despesa => {
      despesa.valorFormatado = this.formatarDados(despesa.valor);
      despesa.dataCadastroFormatada = this.formatarData(despesa.dataCadastro);
      despesa.dataInicioFormatada = this.formatarData(despesa.dataInicio);
    });
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
