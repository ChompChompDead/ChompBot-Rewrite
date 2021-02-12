const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Shows your or someone elses avatar",
  category: "misc",
  run: async (bot, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const embed = new MessageEmbed()
      .setTitle(`${user.username}'s avatar`)
      .setColor(`BLUE`)
      .setImage(user.displayAvatarURL());
    message.channel.send(embed);
  },
};
