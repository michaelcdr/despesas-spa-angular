import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CadastroDespesaComponent } from './despesas/cadastro-despesa/cadastro-despesa.component';
import { EdicaoDespesaComponent } from './despesas/edicao-despesa/edicao-despesa.component';
import { ListaDeDespesasComponent } from './despesas/lista-de-despesas/lista-de-despesas.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'despesa', component: ListaDeDespesasComponent },
    { path: 'despesa/cadastrar', component: CadastroDespesaComponent },
    { path: 'despesa/editar/:id', component: EdicaoDespesaComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]

})
export class AppRoutingModule { }
