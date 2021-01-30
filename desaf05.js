const users = [
    {
        nome: 'Carlos',
        tecno:  ['HTML', 'CSS']
    },
    {
        nome: 'Jasmine',
        tecno:  ['HTML', 'CSS']
    },
    {
        nome: 'Tuane',
        tecno: ['HTML','Node.js']
    }
]
function mengs (users) {
    for (let i = 0; i < users.length; i++) {
        console.log (`${users[i].nome} trabalha com ${users[i].tecno}`)
    }   
}
mengs (users)

function checausers (users) {
    for (let i = 0; i <users.length; i++) {
        if (users.tecno || 'CSS') {
            return true;
        } else {
            return false;
        }
    }
}

checausers (users)



//function checausers1 (users) {
  //  if (users[0].tecno == 'HTML','CSS') {
    //    console.log (` ${users[0].nome} trabalha com ${users[0].tecno}`) 
      //  } else {
        //    console.log ('ninguem trabalha com CSS')
//        //}
//    }
//checausers1 (users)
//
//function checausers2 (users) {
//    if (users[1].tecno == 'HTML', 'CSS') {
//        console.log (`${users[1].nome} trabalha com ${users[1].tecno}`)
//    }
//}
