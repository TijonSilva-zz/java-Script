const users = [
    {
      nome: "Carlos",
      tecno: ["HTML", "CSS"],
    },
    {
      nome: "Jasmine",
      tecno: ["HTML", "CSS"],
    },
    {
      nome: "Tuane",
      tecno: ["HTML", "Node.js"],
    },
  ];
  mengs(users);
  function mengs(users) {
    for (let i = 0; i < users.length; i++) {
      console.log(`${users[i].nome} trabalha com ${users[i].tecno}`);
    }
  }