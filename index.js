const { Client, Collection } = require("discord.js");
const bot = new Client({ disableMentions: "everyone" });
const config = require("./config.json");
const fs = require("fs");
const mongoose = require("mongoose");

const token = config.token;
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");

["command", "event"].forEach((handler) => {
  require(`./handlers/${handler}`)(bot);
});

mongoose.connect("mongodb://localhost:27017/ChompBot", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


console.log("db connected");

bot.login(token);
