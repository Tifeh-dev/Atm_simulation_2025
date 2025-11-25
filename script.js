// ATM Simulation using switch case
let atmOption = prompt('Welcome to the ATM!\nChoose an option:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Recharge\n5. Exit')
atmOption = Number(atmOption)
let balance = 1000
switch (atmOption) {
    case 1:
        console.log('Your balance is: $' + balance)
        break
    case 2:
        let depositAmount = prompt('Enter amount to deposit: ')
        depositAmount = Number(depositAmount)
        balance += depositAmount
        console.log('Deposited: $' + depositAmount + '\nNew Balance: $' + balance)
        break
    case 3:
        let Withdrawamount = prompt('Enter amount to withdraw')
        Withdrawamount = Number(Withdrawamount)
        balance -= Withdrawamount
        console.log('Amount withdraw' + Withdrawamount + '\n New balance' + balance )
        break
    case 4:
        let Recharge = prompt('Enter amount to recharge')
        let network = prompt('network')
        Recharge = Number(Recharge)
        balance -= Recharge
        console.log('Amount recharege' + Recharge + 'New balance' + balance)
        break
    default:
        console.log('Thank you for using the ATM. Goodbye!')
        break
}