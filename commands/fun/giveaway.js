const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have permissions to do this command!").then(async (e) => {
      await e.delete({ timeout: 5000 })
    })
    if (!args[0]) return message.channel.send(`You did not specify your time.`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )
      return message.channel.send(
        `You did not use the correct formatting for the time.`
      );
    if (isNaN(args[0][0])) return message.channel.send(`That is not a number.`);
    let prize = args.slice(1).join(" ");
    if (!prize) return message.channel.send(`No prize specified!`);
    message.channel.send(`🎉 Giveaway created 🎉`);
    let Embed = new MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(
        `${message.author} is hosting a giveaway!\n\nPrize: **${prize}**\nTime: ${args[0]}`
      )
      .setTimestamp(Date.now() + ms(args[0], { long: true }))
      .setColor(`BLUE`);
    let m = await message.channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Not enough people reacted for me to start draw a winner.`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      message.channel.send(
        `The winner of the giveaway for **${prize}** is... ${winner}!`
      );
      let eEmbed = new MessageEmbed()
        .setTitle(`Giveaway Ended`)
        .setDescription(
          `${message.author} is hosting a giveaway!\n\nPrize: **${prize}**\nTime: Ended`
        )
        .setTimestamp(Date.now() + ms(args[0]))
        .setColor(`BLUE`);
      m.edit(eEmbed);
    }, ms(args[0]));
  },
};
