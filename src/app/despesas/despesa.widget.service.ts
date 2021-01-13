import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Despesa } from 'src/app/models/despesa';

const API = 'https://localhost:5001/v1';

@Injectable({ providedIn: 'root' })
export class DespesaWidgetService {

    constructor(private http: HttpClient) { }

    getTotal() {
        return this.http
            .get<Number>(API + '/despesa/ObterTotalDespesasMensal');
    }

    getDespesas() {
        return this.http
            .get<Despesa[]>(API + '/despesa');
    }

    obterPorId(id) {
        return this.http.get<Despesa>(API + "/despesa/" + id);
    }
}