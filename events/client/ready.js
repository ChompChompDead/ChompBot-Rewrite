const { prefix } = require("../../config.json");
module.exports = (bot) => {
  bot.user.setActivity(`${bot.guilds.cache.size} servers, ${bot.users.cache.size} users`, {
    type: "STREAMING",
    url: "https://twitch.tv/pewdiepie",
  });
  console.log(`${bot.user.tag} is now online.`);
};
