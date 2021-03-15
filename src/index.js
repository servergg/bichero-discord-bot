const Discord = require("discord.js");
const { BOT_TOKEN } = process.env;

const client = new Discord.Client();

client.login(BOT_TOKEN);
