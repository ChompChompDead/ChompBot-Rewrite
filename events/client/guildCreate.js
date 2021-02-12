const GuildConfig = require("../../models/GuildConfig");

module.exports = async (bot, guild) => {
  const guildConfig = await GuildConfig.create({
    guildId: guild.id,
  });
  console.log("bot has joined the server");
};
