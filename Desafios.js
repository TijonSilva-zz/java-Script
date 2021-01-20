const IMC = {
        nome: 'carlos',
        peso: 84,
        altura: 1.88, 
        sexo: 'masculino'
    } 

const calc = ([IMC.peso] / ([IMC.altura] * [IMC.altura]))

if (calc > 30) {
    console.log ('Calos vc esta acima do peso')
} else {
    console.log ('Voce esta abaixo do peso')
}
 