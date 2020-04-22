
require ('dotenv').config()
const Discord= require('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch');

const TOKEN = "Njk4NDQxNDE2NzE5OTkwODQw.Xp3LWw.VgW8UWOJbITG1iVTdpfcM3ZieLQ"


//Get reddit api for memes
// Get the automation software to work for the rooms
// todo lists app

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    if (msg.content === 'Hey Yolo' || msg.content === 'hey yolo') {
        msg.channel.send('Hi, '+`${msg.author}`+". How can may I help you today?");
    }
    if (msg.content === 'rip') {
        const attach = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
        msg.channel.send(`${msg.author}`, attach);
    }
});
