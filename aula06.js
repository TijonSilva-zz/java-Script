let pedidos = [
 {id: 420, nome: 'Antonio', alimento: 'Sandubão de Salame', bebida: 'Suco de Limão'},
 {id: 341, nome: 'Creuza', alimento: 'Risole', bebida: 'Refrigerante'},
 {id: 433, nome: 'jasmin', alimento: 'Sandubão de Picanha', bebida: 'Suco de Tamarindo'},
 {id: 42, nome: 'Feijão', alimento: 'Coxinha', bebida: 'Suco de Uva'},
 {id: 890, nome: 'Gabriel', alimento: 'HotDog', bebida: 'Refrigerante'}

];
let find = pedidos.find( pedido => {
 return pedido.id == 420
})
console.log(find)