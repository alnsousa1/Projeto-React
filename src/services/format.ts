export const formataValorBR = (valor?: number | null) => {
    if(valor){
        return 'R$' + valor.toLocaleString('pt-br', {minimumFractionDigits: 2})
    }

    return 'R$0,00'
}