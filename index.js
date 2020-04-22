
require ('dotenv').config()
const Discord= require('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch');

const TOKEN = process.env.TOKEN


//Get reddit api for memes
// Get the automation software to work for the rooms
// todo lists app

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

    var i = 0;
    var j = 0 ;
    var todos =[];
    if (msg.content === 'Hey Yolo' || msg.content === 'hey yolo') {
        msg.channel.send('Hi, '+`${msg.author}`+". How can may I help you today?");
    }
    
    if (msg.content.substr(0,9) === 'yolo toda' )
    {
        msg.channel.send("Todo Lists")
        todos[i]=msg.content.substring(10)
        //todos.push(msg.content.substring(10));
        //for(j=0;j<=i;j++)
        {
            msg.channel.send((i+1)+") "+todos[i]);
            i=i+1;
        }
            //console.log(con.substring(10))
    }

    if (msg.content === 'rip') {
        const attach = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
        msg.channel.send(`${msg.author}`, attach);
    }
    if (msg.content === 'yolo todo') {
        // We can create embeds using the MessageEmbed constructor
        // Read more about all that you can do with the constructor
        // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
        const embed = new Discord.MessageEmbed()
          // Set the title of the field
          .setTitle('Todo Lists')
          // Set the color of the embed
          .setColor(0xff0000)
          // Set the main content of the embed
          .setDescription('Hello, here is the list of things todo!')
          .setThumbnail('https://i.imgur.com/w3duR07.png');

        // Send the embed to the same channel as the message
        msg.channel.send(embed);
      }
    }
);
