const { MessageEmbed } = require("discord.js");
const GuildConfig = require("../../models/GuildConfig");

module.exports = {
  name: "help",
  category: "info",
  aliases: ["h", "cmds"],
  description: "Returns your message ping and api ping.",
  run: async (bot, message, args) => {
    const guildConfig = await GuildConfig.findOne({
      guildId: message.guild.id,
    });
    const prefix = "c!"

    if (args[0] === "fun") {
      let embed = new MessageEmbed()
        .setTitle(`😀 Fun Commands`)
        .setColor(`BLUE`)
        .setDescription("giveaway, 8ball");
      message.channel.send(embed);
    } else if (args[0] === "info") {
      let embed = new MessageEmbed()
        .setTitle(`ℹ️ Info Commands`)
        .setColor(`BLUE`)
        .setDescription("help, ping");
      message.channel.send(embed);
    } else if (args[0] === "misc") {
      let embed = new MessageEmbed()
        .setTitle(`🇲 Misc Commands`)
        .setColor(`BLUE`)
        .setDescription("math, poll, avatar");
      message.channel.send(embed);
    } else if (args[0] === "config") {
      let embed = new MessageEmbed()
        .setTitle(`⚙️ Config Commands`)
        .setColor(`BLUE`)
        .setDescription("prefix");
      message.channel.send(embed);
    } else if (args[0] === "moderation") {
      let embed = new MessageEmbed()
        .setTitle(`🛠️ Moderation Commands`)
        .setColor(`BLUE`)
        .setDescription(`kick, ban`);
      message.channel.send(embed);
    } else if (args[0] === "images") {
      let embed = new MessageEmbed()
        .setTitle(`🖼️ Image Commands`)
        .setColor(`BLUE`)
        .setDescription(`trump, trash, blueify, shoot, purplify`);
      message.channel.send(embed);
    } else if (!args[0]) {
      const newEmbed = new MessageEmbed()
        .setTitle(`ChompBot Commands`)
        .setColor(`BLUE`)
        .setDescription(`Server Prefix: ${prefix}`)
        .addFields(
          { name: "😀 Fun Commands", value: `${prefix}help fun`, inline: true },
          {
            name: "ℹ️ Info Commands",
            value: `${prefix}help info`,
            inline: true,
          },
          {
            name: "🇲 Misc Commands",
            value: `${prefix}help misc`,
            inline: true,
          },
          {
            name: "⚙️ Config Commands",
            value: `${prefix}help config`,
            inline: true,
          },
          {
            name: "🛠️ Moderation Commands",
            value: `${prefix}help moderation`,
            inline: true,
          },
          {
            name: "🖼️ Image Commands",
            value: `${prefix}help images`,
            inline: true,
          }
        );
      message.channel.send(newEmbed);
    }
  },
};
