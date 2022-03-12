const user = require("./Back/user")
const yargs = require("yargs")
yargs.command({
    command:"add",
    describe:"used for adding client",
    builder:{
        name:{
            type:String,
            required:true
        },
        age:{
            type: Number,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        balance:{
            type:Number,
            required:true
        }
    },
    handler:function (argv) {
        let userInfo ={
            name:argv.name,
            age:argv.age,
            email:argv.email,
            balance:argv.balance,
            id:Date.now()
        }
        user.add(userInfo)
    }
})
yargs.command({
    command:"showAll",
    describe:"used for show All Bank clients",
    handler:function(){
        user.showAll()
    }
})
yargs.command({
    command:"showUser",
    describe:"used for show specific user",
    builder:{
        userId:{
            type:Number,
            required: true
        }
    },
    handler:function(argv){
        user.showSingle(argv.userId)
    }
})
yargs.command({
    command:"operation",
    describe:"used for transaction in acounts",
    builder:{
        type:{
            type:String,
            required: true
        },
        value:{
            type:Number,
            required: true
        },
        acountNum:{
            type:Number,
            required: true
        }
    },
    handler:function(argv){
        transDate = new Date + argv.type
        user.addOperation(argv.type, argv.value, argv.acountNum)
    }
})
yargs.argv