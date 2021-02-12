const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "poll",
  description: "Create a yes/no poll",
  category: "misc",
  run: async (bot, message, args) => {
    let question = message.content.slice(prefix.length + 5);
    if (!question)
      return message.channel.send(
        "You need to specify a question for your poll."
      );

    const embed = new MessageEmbed()
      .setTitle("Poll")
      .setDescription(question)
      .setFooter(`${message.author.username} created this poll.`)
      .setColor(`BLUE`);
    const msg = await message.channel.send(embed);
    msg.react("👍");
    msg.react("👎");
  },
};
