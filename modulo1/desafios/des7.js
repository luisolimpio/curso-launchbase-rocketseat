const users = [
    {
        name: 'Salvio',
        income: [115.3, 48.7, 98.3, 14.5],
        outgoing: [85.3, 13.5, 19.9]
    },
    {
        name: 'Marcio',
        income: [24.6, 214.3, 45.3],
        outgoing: [185.3, 12.1, 120.0]
    },
    {
        name: 'Lucia',
        income: [9.8, 120.3, 340.2, 45.3],
        outgoing: [450.2, 29.9]
    }
]

function NumbersSum(numbers) {

    let sum = 0

    // for (let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i]
    // }

    for(let number of numbers){ //maneira diferente de fazer o for
        sum += number
    }

    return sum
}

function calculateOutgoing(income, outgoing) {

    return NumbersSum(income) - NumbersSum(outgoing)
}


for (let i = 0; i < users.length; i++) {

    let balance = calculateOutgoing(users[i].income, users[i].outgoing)

    if (balance > 0)
        console.log(`${users[i].name}, has POSITIVE balance of ${balance.toFixed(2)}`)

    else if (balance < 0)
        console.log(`${users[i].name}, has NEGATIVE balance of ${balance.toFixed(2)}`)

    else
        console.log(`${users[i].name}, has ZERO balance`)
}