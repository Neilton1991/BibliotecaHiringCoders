// Pegar um input
// Se for sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe
// Se for não, mostra todos os livros em ordem crescente pela quantidade de páginas


const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um Livro? S/N')

if (entradaInicial.toLocaleUpperCase()==='S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Lideranca', '/Financas', '/Espiritual', '/Planejamento', '/Crista', '/Estrategia')

    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livros => livros.categoria === entradaCategoria)

    console.table(retorno)
}else{
   const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}
