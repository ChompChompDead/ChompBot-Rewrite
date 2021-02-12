const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "8ball",
  description: "Get an answer of your question",
  category: "fun",
  run: async (bot, message, args) => {
    const guildConfig = await GuildConfig.findOne({
      guildId: message.guild.id,
    });
    const prefix = guildConfig.get("prefix");
    const GuildConfig = require("../../models/GuildConfig");
    const question = message.content.slice(prefix.length + 6);

    if (!question)
      return message.channel.send("You need to input your question.");

    let responses = [
      "Yes",
      "No",
      "Definetely",
      "Absoulutely not",
      "Not in a million years",
      "Maybe",
      "Ask again",
    ];
    let Response = responses[Math.floor(Math.random() * responses.length - 1)];
    let Embed = new MessageEmbed()
      .setTitle("8ball")
      .setColor(`BLUE`)
      .setDescription(
        "Your Question: " + question + "\nYour answer: " + Response
      );
    message.channel.send(Embed);
  },
};
