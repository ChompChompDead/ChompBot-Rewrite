module.exports={
    name: "sex",
    description: "Why",
    run: async(client,message,args)=>{
        if(!args[0] || message.mentions.users === null) return message.channel.send("You need to specify your first person.")

        if(!args[1] || message.mentions.users === null) return message.channel.send("You need to specify your second person.")

        message.channel.send(`${args[0]} and ${args[1]} just had sex`)

    }
}