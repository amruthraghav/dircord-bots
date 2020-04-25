
require ('dotenv').config()
const Discord= require('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch');

const TOKEN = process.env.TOKEN


//Get reddit api for memes
// Get the automation software to work for the rooms
// todo lists app
class Stack {
    constructor() {
        this.list = [];
        this.top = 0;
    }
        push(element) {
            this.list[this.top] = element;
            this.top=this.top+1;
        }
        length()
        {
            return this.top;
        }
        pop(element) {
            this.top=this.top-1
            return this.list.pop()
        }
        peek(element){
            return this.list[this.top-1]
        }
    }

function print()
{
    var top = this.top-1
    while(top>=0)
    {
        console.log(this.list[top])
        top--;
    }
}

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

var i = 1;
var j = 0 ;
var todo =[];


bot.on('message', async msg =>  {

    if (msg.content === 'Yolo help' || msg.content === 'yolo help') {
        const embed = new Discord.MessageEmbed()
        //const guild1 = new Discord.GuildMember(msg.author)
        .setTitle(`Hello from @${msg.author.username}`)
        .setColor(0xff0000)
        .setThumbnail(msg.author.displayAvatarURL())
        .setDescription('Here is the list of things I can do!')
        .addField( "Todo", "I can help you remember tasks('Todo help' for further help)"  )
        .addField( "Meme", "I can help you fetch memes from Reddit!(Yolo meme help'for further help)" )
        .addField( "Book", "I can help you book study rooms and sports facilities!(Yolo book help'for further help)" )
        msg.channel.send(embed);

    }
    if (msg.content === 'todo help' || msg.content === 'Todo help')
    {   
        const embed = new Discord.MessageEmbed()
        .setTitle("Todo Help Commands")
        .setColor(0xff0000)
        .setThumbnail(msg.author.displayAvatarURL())
        .addField( "Todo Add [task]", "Add tasks to the todo lists"  )
        .addField( "Todo done [task-no]", "Removes tasks from todo lists" )
        .addField( "Todo show", "Displays the pending tasks in the todo lists" )
        msg.channel.send(embed);
        }
    if (msg.content === 'todo show' || msg.content=== "Todo show" )
    {   

        if (todo.length === 0)
        {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Todo Lists @${msg.author.username}`)
        .setColor(0xff0000)
        .setThumbnail(msg.author.displayAvatarURL())
        .setDescription('There are no pending tasks!');
        msg.channel.send(embed);
        }
        else 
        {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Todo Lists @${msg.author.username}`)
        .setColor(0xff0000)
        .setThumbnail(msg.author.displayAvatarURL())
        .setDescription('Here is the list of things to complete!')
        
        for ( j =0;j< todo.length;j++)
        {
            embed.addField(`Task ${j+1}`, todo[j])
            i=i+1;
            }
            msg.channel.send(embed);
        }
    }

    if (msg.content.substring(0,8) === 'Todo add' || msg.content.substring(0,8) === 'todo add')
    {   
        text=msg.content
        temp=text.substring(9);
        todo.push(temp) 
    }

    if (msg.content.substring(0,9) === 'Todo done' || msg.content.substring(0,9) === 'todo done')
    {   
        console.log(Number(msg.content.substring(9)))
        todo.splice(Number(msg.content.substring(9))-1,1) 
    }

    if (msg.content === 'rip') {
        const attach = new Discord.MessageAttachment('https://i.imgur.com/w3duR07.png');
        msg.channel.send(`${msg.author}`, attach);
    }
    }
);
