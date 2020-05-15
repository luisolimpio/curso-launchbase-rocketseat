const user = {
    nome: "Luis",
    transactions: [],
    balance: 0
}

function createTransaction(transaction){

    // if(transaction.type === "credit"){
    //     user.balance += transaction.value
    // }

    // else if(transaction.type === "debit"){
    //     user.balance -= transaction.value
    // }

    transaction.type === "credit" ? user.balance += transaction.value :
     user.balance -= transaction.value

    user.transactions.push(transaction)
}

function getHigherTransactionByType(transactionType){

    let higherTransaction = 0

    for(let transaction of user.transactions){
        if((transaction.type === transactionType) && transaction.value > higherTransaction)
            higherTransaction = transaction.value
    }

    return {
        type: transactionType,
        value: higherTransaction
    }
}

function getAverageTransactionValue(){

    let sum = 0

    for(let transaction of user.transactions){
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount(){

    let creditCount = 0
    let debitCount = 0

    for(transaction of user.transactions){
        // if(transaction.type === "credit")
        //     creditCount++
        
        // else if(transaction.type === "debit")
        //     debitCount++

        transaction.type === "credit" ? creditCount++ : debitCount++
    }

    return {
        credit: creditCount,
        debit: debitCount
    }
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance)