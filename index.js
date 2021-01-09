const alunosDaTurmaA = [
    {
        nome: 'jhosep',
        idade: 20,
        nota: 10.0
    },
    {
        nome: 'karool',
        idade: 16,
        nota: 10.0

    },
    {
        nome: 'gaby',
        idade: 40,
        nota: 10.0
    }
]


const alunosDaTurmaB = [
    {
        nome: 'gabriel',
        idade: 20,
        nota: 5.0
    },
    {
        nome: 'giovanna',
        idade: 16,
        nota: 8.0

    },
    {
        nome: 'antonio',
        idade: 40,
        nota: 10.0
    },
    {
        nome: 'novo Aluno',
        nota: 5
    }
]
function calculaMedia (alunos) {
    for (let i = 0; i < alunos.length; i++) {
        console.log(i);
    }
}
if (alunos < 5) {
    console.log(`parabens alunos a media foi de ${media}`)
} else {
    console.log ( 'a media foi menor que 5')
}
const media1 = calculaMedia (alunosDaTurmaA)
const media2 = calculaMedia (alunosDaTurmaB)
function enviaMensagem (media) {
    console.log (media1 + media2)
}