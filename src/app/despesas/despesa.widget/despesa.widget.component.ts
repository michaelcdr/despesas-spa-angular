import { Component, Input, OnInit } from '@angular/core';
import { Despesa } from 'src/app/models/despesa';
import { DespesaMensal } from 'src/app/models/despesa.mesal';
import { DespesaWidgetService } from '../despesa.widget.service';

@Component({
  selector: 'dashboard-widget',
  templateUrl: './despesa.widget.component.html'
})
export class DespesaWidgetComponent implements OnInit {

  @Input() valor = 0;
  @Input() coluna = '';

  despesas: Despesa[];
  despesaMensal: DespesaMensal;

  constructor(private service: DespesaWidgetService) {

  }

  ngOnInit(): void {
    this.despesaMensal = new DespesaMensal(0, 'col-md-4');
    this.getTotal(this.service);
  }

  private getTotal(service: DespesaWidgetService) {
    service.getTotal().subscribe(
      total => this.despesaMensal = new DespesaMensal(total, 'col-md-4'),
      err => console.log("Erro ocorrido " + err.message)
    );
  }
}
