const IMC = [
    {
        nome: 'carlos',
        peso: 84,
        altura: 1.88, 
        sexo: 'masculino'
    }
]  
const calc = (IMC[0].peso / (IMC[0].altura * IMC[0].altura))

if (calc > 30) {
    console.log ('Calos vc esta acima do peso')
} else {
    console.log ('Voce esta abaixo do peso')
}
 