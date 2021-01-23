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
    if (users.tecno === 'CSS') {
        console.log (`os usuarios ${users} trabalha com CSS`) 
        } else {
            console.log ('ninguem trabalha com CSS')
        }
    }
checausers (users)