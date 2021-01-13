import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Despesa } from 'src/app/models/despesa';

import { DespesaWidgetService } from '../despesa.widget.service';

@Component({
  selector: 'app-edicao-despesa',
  templateUrl: './edicao-despesa.component.html',
  styleUrls: ['./edicao-despesa.component.css']
})
export class EdicaoDespesaComponent implements OnInit {

  despesa: Despesa;

  constructor(
    private despesaService: DespesaWidgetService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.obterPorId(id);
  }

  obterPorId(id: Number) {
    this.despesaService
      .obterPorId(id)
      .subscribe((despesa) => {
        this.despesa = <Despesa>despesa;
      });
  }
}
