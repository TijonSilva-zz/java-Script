const alunosDaTurmaA = [
    {
        nome: 'jhosep',
        idade: 20,
        nota: 4.0
    },
    {
        nome: 'karool',
        idade: 16,
        nota: 4.0

    },
    {
        nome: 'gaby',
        idade: 40,
        nota: 5.0
    },
    {
        nome: 'mamae',
        idade: 45,
        nota: 10
    }
]


const alunosDaTurmaB = [
    {
        nome: 'gabriel',
        idade: 20,
        nota: 2.0
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
        idade: 15,
        nota: 2
    }
]
function calculaMedia (alunos) {
    
    let soma = 0;
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    
    return media
}
const media1 = calculaMedia (alunosDaTurmaA)
const media2 = calculaMedia (alunosDaTurmaB)

function enviameng (media,turma){
    if (media > 5) {
        console.log (`a media final da ${turma} foi ${media}, parabens`)
    
    } else {
        console.log (`media da ${turma} foi menor que 5!`)
    }
}

enviameng (media1,'TurmaA')
enviameng (media2,'TurmaB')

function marcarReporv (alunos) { 
    
    for (let aluno of alunos) {
        aluno.Reprov= false;
        if (aluno.nota < 5) {
            aluno.Reprov = true;
        } 

    }
    
}

function enviarMensagemReprov (aluno) {
   
    if (aluno.Reprov) {
        console.log ( `o aluno ${aluno.nome} esta reprovado!`)
    }
}

    enviarMensagemReprov (alunosDaTurmaA)
    enviarMensagemReprov (alunosDaTurmaB)

    function alunoReprovados (alunos){
        for (let aluno of alunos) {
            marcarReporv (alunos);
            enviarMensagemReprov (aluno)
        }
    }

    alunoReprovados (alunosDaTurmaA);
    alunoReprovados (alunosDaTurmaB);