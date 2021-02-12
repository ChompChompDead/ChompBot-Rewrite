const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Returns your message ping and api ping.",
  run: async (bot, message, args) => {
    const msg = await message.channel.send(`Pinging...`);
    const newEmbed = new MessageEmbed()
      .setTitle("🏓 Pong!")
      .setColor(`BLUE`)
      .setDescription(
        `API ping: ${bot.ws.ping}ms\nMessage Ping: ${Math.floor(
          msg.createdTimestamp - message.createdTimestamp
        )}ms`
      );
    msg.edit(newEmbed);
  },
};
