require('dotenv/config');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const onMessageHandler = (message) => {
  if (message.author.bot) return;

  if (message.content === 'ping') {
    return message.reply('pong!')
  }
}

client.on("message", onMessageHandler);

client.login(process.env.BOT_TOKEN);
