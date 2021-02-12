const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  description: "Bans someone",
  category: "moderation",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("BAN_MEMBERS"))
      return message.channel.send(
        "You do not have permissions to do this command."
      );
    if (!args[0])
      return message.channel.send("You need to provide someone to ban.");

    let person = message.mentions.members.first();

    if (person.banable === false)
      return message.channel.send(
        "You can't ban this person. Check the roles."
      );

    const embed = new MessageEmbed()
      .setTitle(`Banned ${person.username} sucessfully.`)
      .setColor(`BLUE`);
    message.channel.send(embed);

    person.ban({ reason: args[1] });
  },
};
