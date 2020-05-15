const nome = 'Luis'
const sexo = 'M'
const idade = 50
const contribuicao = 30

if((sexo === 'M' && contribuicao >= 35 && (idade + contribuicao >= 95))
 || (sexo === 'F' && contribuicao >= 30 && (idade + contribuicao >= 85)))
    console.log(`${nome}, você pode se aposentar`)

else
    console.log(`${nome}, você ainda não pode se aposentar`)