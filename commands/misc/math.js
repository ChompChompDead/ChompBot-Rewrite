const { calculator } = require("../../functions");

module.exports = {
  name: "math",
  description: "does your math homework",
  category: "misc",
  run: async (bot, message, args) => {
    if (!args[0])
      return message.channel.send("You need to provide your first number.");
    if (isNaN(args[0]))
      return message.channel.send("You need to provide a number.");
    if (!args[1])
      return message.channel.send(
        "You need to provide what operation you are performing."
      );
    if (!args[2])
      return message.channel.send("You need to provide your second number.");
    if (isNaN(args[2]))
      return message.channel.send("You need to provide a number.");
    message.channel.send(
      "Your answer is: " + calculator(args[0], args[1], args[2])
    );
  },
};
