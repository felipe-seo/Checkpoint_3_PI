//Status false significa produto indisponível.
let produtos = [
    {
        "Nome Do Produto":"Skate XPTO",
        "Valor Do Produto":1000,
        "Qualidade Do Produto":8,
        "Status":true
    },
    {
        "Nome Do Produto":"Jabulani oficial",
        "Valor Do Produto":600,
        "Qualidade Do Produto":6,
        "Status":false
    },
    {
        "Nome Do Produto":"Master tazo veterano",
        "Valor Do Produto":250,
        "Qualidade Do Produto":4,
        "Status":true
    },
    {
        "Nome Do Produto":"Patins Deluxe",
        "Valor Do Produto":1350,
        "Qualidade Do Produto":7,
        "Status":true
    },
]

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