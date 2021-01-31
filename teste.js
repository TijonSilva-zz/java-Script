const users = [
    {
      nome: "Carlos",
      tec1: "HTML", 
      tec2: "CSS"
    },
    {
      nome: "Jasmine",
      tec1: "CSS",
      tec2: "HTML"
    },
    {
      nome: "Tuane",
      tec1:  "HTML", 
      tec2: "Node.js"
    }
  ];
  
  function mengs(users) {
    for (let i = 0; i < users.length; i++) {
      console.log(`${users[i].nome} trabalha com ${users[i].tec1}, ${users[i].tec2}`);
    }
  }
  mengs(users)

  function checkusers1 (users) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].tec1 === 'CSS') {
        console.log (true)
      } else {
        console.log (false)
      }
    }
} 
  checkusers1 (users) 
  
  function checkusers2 (users) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].tec2 == 'CSS') {
        console.log (true)
      } else {
        console.log (false)
      }
    }
} 
  checkusers2 (users)         