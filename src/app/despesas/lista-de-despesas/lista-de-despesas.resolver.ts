import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Despesa } from 'src/app/models/despesa';
import { DespesaWidgetService } from '../despesa.widget.service';

@Injectable({ providedIn: 'root' })
export class ListaDeDespesaResolver implements Resolve<Observable<Despesa[]>>
{
    despesas: Despesa[];

    constructor(private service: DespesaWidgetService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Despesa[]> {
        return this.service.getDespesas();
    }
}