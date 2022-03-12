const chal = require("chalk")
const deal = require("./deal")
const add =(userInfo)=>{
    const user = deal.read()
    userInfo.accountNumber = Date.now()
    userInfo.createDate = new Date()
    user.push(userInfo)
    deal.write(user)
    console.log(chal.green("you have account now cong"))
}
const showAll = ()=>{
    const users = deal.read()
    console.log(users)
    users.forEach(user=>{
        console.log(chal.green(`id: ${user.id} - name: ${user.name} - balance: ${user.balance} - email: ${user.email} `))})
}
const showSingle = (userId)=> {
        const users = deal.read()
        const user = users.find(u=> u.id== userId)
        if(user) console.log(user)
        else console.log(chal.red('not found'))
}
const addOperation = (type , value ,acountNum)=>{
    const users = deal.read()
    const userIndex = users.findIndex(u=> u.accountNumber== acountNum)
    // user = users[userIndex]
    // console.log(user)
    if(type === "withdraw"){
        if(+users[userIndex].balance  < value){
            console.log(chal.red("sorry u dont have enough money"))
        }else{
            users[userIndex].balance =+users[userIndex].balance - value
            users.transDate = new Date + type
        }
    }else if(type === "add"){
        console.log("flag")
        users[userIndex].balance = +users[userIndex].balance + value
        users.transDate = new Date + type
        console.log(chal.green("now you have mony"))
        
    }
    deal.write(users)
}
module.exports ={add,showAll, showSingle, addOperation}