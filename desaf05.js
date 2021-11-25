const users = [
    {
        nome: 'Carlos',
        tecno:  'CSS'
    },
    {
        nome: 'Jasmine',
        tecno:  'CSS'
    },
    {
        nome: 'Tuane',
        tecno: 'Node.js'
    }
]
function checausers (users) {
    if (users == 'CSS') {
        console.log (`os usuarios ${(users[0].nome)} trabalha com CSS`) 
        } else {
            console.log ('ninguem trabalha com CSS')
        }
    }
checausers (users[0].tecno)