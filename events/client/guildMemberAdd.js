const EconomySchema = require('../../models/Economy')

module.exports = async (bot, member) => {
    const economySchema = EconomySchema.create({
        UserId: member.id
    });
    console.log("member has joined")
}