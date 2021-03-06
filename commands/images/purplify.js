const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "purplify",
  description: "Makes an image purple",
  category: "images",
  run: async (bot, message, args) => {
    try {
      const user = message.mentions.users.first() || message.author
      const user1 = user.displayAvatarURL({ format: 'png' })
      const url = `https://api.no-api-key.com/api/v2/purplify?image=${user1}`;
      const embed = new MessageEmbed().setImage(url).setColor(`BLUE`);
      await message.channel.send(embed);
    } catch (e) {
      console.log(e);
    }
  },
};
