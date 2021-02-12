const GuildConfig = require("../../models/GuildConfig");

module.exports = {
  name: "prefix",
  description: "changes the prefix",
  category: "config",
  run: async (bot, message, args) => {
    const guildConfig = await GuildConfig.findOne({
      guildId: message.guild.id,
    });
    const prefix = guildConfig.get("prefix");
    const prefixMsg = message.content.slice(prefix.length + 7);
    if (!prefixMsg)
      return message.channel.send("You need to provide a prefix to change to.");
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        "You need to have the administrator permission."
      );
    message.channel.send(`Set the bot prefix to ` + prefixMsg + `.`);
    await guildConfig.updateOne({
      prefix: prefixMsg,
    });
  },
};
