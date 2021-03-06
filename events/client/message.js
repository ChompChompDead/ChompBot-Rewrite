const GuildConfig = require("../../models/GuildConfig");

module.exports = async (bot, message) => {
  const guildConfig = await GuildConfig.findOne({ guildId: message.guild.id });
  const prefix = "c!"

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  const command = bot.commands.get(cmd);
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));
  if (command) command.run(bot, message, args);
};
