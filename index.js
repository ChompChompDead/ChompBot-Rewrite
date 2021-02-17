const { Client, Collection } = require("discord.js");
const bot = new Client({ disableMentions: "everyone" });
const config = require("./config.json");
const fs = require("fs");
const mongoose = require("mongoose");

const token = config.token;
const mongoURL = config.mongoURL;
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");

["command", "event"].forEach((handler) => {
  require(`./handlers/${handler}`)(bot);
});

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


console.log("db connected");

bot.login(token);
