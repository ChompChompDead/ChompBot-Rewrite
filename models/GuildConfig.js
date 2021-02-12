const mongoose = require("mongoose");

const GuildConfigSchema = new mongoose.Schema({
  guildId: {
    type: mongoose.SchemaTypes.String,
    required: true,
    default: "!",
  },
  prefix: {
    type: mongoose.SchemaTypes.String,
    required: true,
    default: "c!",
  },
  defaultRole: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
  memberLogChannel: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
});

module.exports = mongoose.model("GuildConfig", GuildConfigSchema);
