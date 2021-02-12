const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  description: "Kicks someone",
  category: "moderation",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("KICK_MEMBERS"))
      return message.channel.send(
        "You do not have permissions to do this command."
      );
    if (!args[0])
      return message.channel.send("You need to provide someone to kick.");

    let person = message.mentions.members.first();

    if (person.kickable === false)
      return message.channel.send(
        "You can't kick this person. Check the roles."
      );

    const embed = new MessageEmbed()
      .setTitle(`Kicked ${person.username} sucessfully.`)
      .setColor(`BLUE`);
    message.channel.send(embed);

    person.kick({ reason: args[1] });
  },
};
