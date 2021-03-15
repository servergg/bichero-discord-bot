require('dotenv/config');
const { BOT_TOKEN } = process.env;

const Discord = require("discord.js");
const client = new Discord.Client();

client.login(BOT_TOKEN);
