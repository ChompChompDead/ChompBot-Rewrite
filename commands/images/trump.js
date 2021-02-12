const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "trump",
  description: "Makes trump say something",
  category: "images",
  run: async (bot, message, args) => {
    try {
      if (!args[0])
        return message.channel.send("You need to provide some text.");
      const text = args.join(" ");
      const url = `https://api.no-api-key.com/api/v2/trump?message=`;
      const encoded = url + encodeURIComponent(text);
      const embed = new MessageEmbed().setImage(encoded).setColor(`BLUE`);
      await message.channel.send(embed);
    } catch (e) {
      console.log(e);
    }
  },
};
