//Status false significa produto indisponível.
const produtos = require('./produtos.js')

//Função utilizada para atender as condições dadas no problema.
function filtrar(arr){
    resp = arr.filter(
        elem => (
            ((elem["Valor Do Produto"] >= 482) && (elem["Valor Do Produto"] <= 1600))
            &&  (elem["Qualidade Do Produto"] > 6)
            &&  (elem["Status"] === true)
        )
    )

    return resp
}
//Armazeno o resultado
let carrinho = filtrar(produtos)
let total = carrinho.reduce((previous, current) => previous["Valor Do Produto"] + current["Valor Do Produto"])

//Opção de exibição 1 - todos os dados dos produtos no carrinho
console.table(carrinho)
console.log("TOTAL: "+total)

//Trabalha melhor a saída
function exibir(arr, value){    
    arr.forEach(product => console.log(`
        Produto: ${product["Nome Do Produto"]} Preço: ${product["Valor Do Produto"]}
    `))
    console.log(`        Total: ${total}`)
}

//opção de exibição 2 - Menos informações, formatação mais "bonita".
exibir(carrinho, total)