import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";

import { DespesaListRecentes } from "./despesa.list.recentes/despesa.list.recentes.component";
import { DespesaWidgetComponent } from "./despesa.widget/despesa.widget.component";
import { CadastroDespesaComponent } from './cadastro-despesa/cadastro-despesa.component';
import { EdicaoDespesaComponent } from './edicao-despesa/edicao-despesa.component';
import { ListaDeDespesasComponent } from './lista-de-despesas/lista-de-despesas.component';

@NgModule({
    declarations: [
        DespesaWidgetComponent,
        DespesaListRecentes,
        CadastroDespesaComponent,
        EdicaoDespesaComponent,
        ListaDeDespesasComponent
    ],
    exports: [DespesaListRecentes, DespesaWidgetComponent],
    imports: [HttpClientModule, CommonModule]
})
export class DespesasModule {


}