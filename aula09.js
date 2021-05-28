let pedidos = [
 {id: 420, nome: 'Antonio', alimento: 'Sandubão de Salame', bebida: 'Suco de Limão', preço: 100},
 {id: 341, nome: 'Creuza', alimento: 'Risole', bebida: 'Refrigerante', preço: 59},
 {id: 433, nome: 'jasmin', alimento: 'Sandubão de Picanha', bebida: 'Suco de Tamarindo', preço:33},
 {id: 42, nome: 'Feijão', alimento: 'Coxinha', bebida: 'Suco de Uva', preço: 79},
 {id: 890, nome: 'Gabriel', alimento: 'HotDog', bebida: 'Refrigerante', preço:47}

];
let pedido = pedidos.reduce((total, pedido)=> {
 let {preço} = pedido 
 return total + preço
},100)

console.log(pedido)