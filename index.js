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
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
}
const media1 = calculaMedia (alunosDaTurmaA)
console.log (media1)