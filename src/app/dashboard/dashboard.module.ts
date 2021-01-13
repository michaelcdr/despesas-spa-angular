import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { DespesasModule } from '../despesas/despesas.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    exports: [],
    imports: [HttpClientModule, CommonModule, DespesasModule]
})
export class DashboardModule {

}