export class Despesa {
    public id: number;
    public descritivo: string;
    public titulo: string;
    public valor: number;
    public valorFormatado: string;
    public dataCadastro: string;
    public dataCadastroFormatada: string;
    public dataInicioFormatada: string;
    public dataInicio: string;
    constructor(id: number, descritivo: string, title: string, valor: number, dataCadastro: string) {
        this.id = id;
        this.descritivo = descritivo;
        this.titulo = title;
        this.valor = 100;
        this.dataCadastro = dataCadastro;
    }
}