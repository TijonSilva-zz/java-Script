const aposen = {
    nome: 'Silvana',
    sexo: 'F',
    idade: 48,
    contribui: 23
} 

const soma = (aposen.idade + aposen.contribui )

if (soma >= 85) {
    console.log ('Parabens voce está aposentada')
} else {
    console.log (`Voce ainda nao se aposentou, tem ${soma} anos de contribuição`)
    console.log (` falta apenas ${85 - soma} anos, para vc se aposentar`)

}