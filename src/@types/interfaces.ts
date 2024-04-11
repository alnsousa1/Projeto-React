export interface ICarrinho {
    id: number;
    id_categoria: string;
    imagemg: string;
    imagemp: string;
    title?: string;
    price: number;
    promo: number;
    quantidade: number;
    total: number;
}