const nome = 'Luis'
const peso = 105
const altura = 1.90

const imc = peso / (altura * altura)

if(imc < 18.5)
    console.log(`${nome} você está abaixo do peso normal!`)

else if(imc >= 18.5 && imc <= 24.9)
    console.log(`${nome} você está com peso normal!`)

else if(imc >= 25 && imc <= 29.9)
    console.log(`${nome} você está com excesso de peso!`)

else if(imc >= 30 && imc <= 34.9)
    console.log(`${nome} você está com obesidade grau I!`)

else if(imc >= 35 && imc <= 39.9)
    console.log(`${nome} você está com obesidade grau II!`)

else
    console.log(`${nome} você está com obesidade grau III!`)