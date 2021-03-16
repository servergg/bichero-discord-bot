require('dotenv/config');

const { PREFIX } = require('./constants');
const { betCommand, BET_ALIAS } = require('./commands/bet');
const Discord = require('discord.js');
const client = new Discord.Client();

const splitMessage = content => {
  const commandBody = content.slice(PREFIX.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  return {
    command,
    args
  }
}

const onReadyHandler = _ => {
  console.log(`Logged in as ${client.user.tag}!`);
}

const onMessageHandler = (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const { command, args } = splitMessage(message.content);

  switch (command) {
    case BET_ALIAS:
      return message.reply(betCommand(args));
  }
}

client.on('ready', onReadyHandler);
client.on("message", onMessageHandler);

client.login(process.env.BOT_TOKEN);
