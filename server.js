
//require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://nosy-playful-metatarsal.glitch.me/`);
}, 280000);

////بكجات
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const figlet = require('figlet');
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const Canvas = require("canvas");
const guild = require("guild");
const dateFormat = require("dateformat");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyBpty29JCvp6O_vpWX-PjXwhNrgSxQf8jU"); //تعديل اساسي سوي اي بي اي جديد
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyBpty29JCvp6O_vpWX-PjXwhNrgSxQf8jU"; ///تعديل اساسي سوي اي بي اي جديد
const pretty = require("pretty-ms");
client.login(process.env.TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

///
//الاكواد
client.on('message', message => { 
    if ( message.content === 'malk') { 
       message.reply('**amchi t7awa**'); 
    }
  });

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                        if (!devs.includes(message.author.id)) return;
              message.delete(2000)
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.size}\` : The number of members received`).then(m => m.delete(2000))
 message.delete(); 
};     
});


client.on('message', message => {
if (message.content.startsWith(prefix + 'draw')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return;  

    figlet(args.join(" "), (err, data) => {
      
        var say = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor(message.author.username , message.author.avatarURL)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setThumbnail('https://cdn.discordapp.com/avatars/721912102997983292/94cbf8e551f6dd1d4097674d12c431d6.png?size=2048')
                .setDescription("```" + data + "```")
                .setTimestamp()
                .setAuthor(message.author.username,message.author.avatarURL)
                .setFooter(message.guild.name, message.guild.iconURL)
              message.channel.send(say);
           })

}
});


const dev = ["699776908707102741"];
const admin = "n!!";
var owner = "699776908707102741"; 
var number = "1"; 
var ex = "2019/10/08";
client.on("message", message => {
  var argresult = message.content
    .split(` `)
    .slice(1)
    .join(" ");
  if (!dev.includes(message.author.id)) return;
  if (message.content === admin + "vip") {
    if (message.author.bot) return;
    if (!message.guild)
      return message.reply("**This Command Just In Servers**");
    message.channel.send("> **# - `Premium Info` » **" + `${message.author}`);
    message.channel.sendMessage(
      `> **# - Premium Number:** **[** ${number} **]**\n> **# - Ends in:** **[** ${ex} **]**\n> **# - Owner:** **[** <@${owner}> **]**`
    );
  }
});






   client.on('message', message => {
    if (message.content.startsWith(prefix + 'roles')) {
 
        const Rank = message.guild.roles.map(e => e.toString()).join(" ");
 
        const RankList = new Discord.RichEmbed()
            .setTitle('List Roles')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(Rank)
        message.channel.send(RankList)
    }
});
   

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.type === "dm") return;

  var command = message.content.toLowerCase().split(" ")[0];
  var args = message.content.split(" ");

  var userID = args[1];

  if (command == prefix + "unban") {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return;
    if (!userID) return;
    if (isNaN(userID)) return;
    if (userID.length < 16) return;
    message.guild.fetchBans().then(bans => {
      var Found = bans.find(m => m.id === userID);
      if (!Found) return message.reply("**This Member Has Not Banned**");
      message.guild.unban(userID);
      message.channel.send(`**:white_check_mark: <@${userID}> unbanned!**`); 
    });
  }
});




////////////////////////////////////////////////////////////
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + `help`)) {
    const embed = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
    .setTitle(`<a:714699192685166632:723014613477621801> __Commends List__`)
    .setColor("RANDOM")
    .setDescription(`
<a:714716707838754856:723014631798603787> - \`\`${prefix}public\`\` : Commends Public
<a:714716707838754856:723014631798603787> - \`\`${prefix}moderation\`\` : Commends Moderation
<a:714716707838754856:723014631798603787> - \`\`${prefix}tickets\`\` : Commends Tickets
<a:714716707838754856:723014631798603787> - \`\`${prefix}nsfw\`\` : Commends Nsfw
<a:714716707838754856:723014631798603787> - \`\`${prefix}fun\`\` : Commends Games 
<a:714716707838754856:723014631798603787> - \`\`${prefix}music\`\` : Commends Music 
<a:714716707838754856:723014631798603787> - \`\`${prefix}giveaways\`\` : Commends Giveaways 
<a:714716707838754856:723014631798603787> - \`\`${prefix}protection\`\` : Commends Protection

`)
     message.channel.send(embed)
    };
 });

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + `giveaways`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(`:tada: __Giveaways Commands List__`)
    .setColor("RANDOM")
    .addField(`\`\`${prefix}start\`\``, `**start giveaway.**`)
    .addField(`\`\`${prefix}reroll\`\``, `**To re-select another winner.**`)
    .addField(`\`\`${prefix}gend\`\``, `**To end giveaway.**`)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL)
    
     message.channel.send(embed)
    };
 });

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + `fun`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(`:game_die: __Games Commands List__`)
    .setColor("RANDOM")
    .addField(`\`\`${prefix}slots\`\``, `**slots.**`,true)
    .addField(`\`\`${prefix}xo\`\``, `**xo.**`,true)
    .addField(`\`\`${prefix}draw\`\``,`**To draw something.**`,true)
    .addField(`\`\`${prefix}fakek\`\``, `**fakek.**`,true)
    .addField(`\`\`${prefix}roll\`\``,`**Random Number.**`,true)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL)
    
     message.channel.send(embed)
    };
 });

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + `music`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(`:musical_note: __MusicC ommands List__`)
    .setColor("RANDOM")
         .addField(`\`\`${prefix}play\`\``, `**Play the song, add it to the list, or complete the song.**`,true)
         .addField(`\`\`${prefix}stop\`\``, `**To stop the song and exit the bot from the rum.**`,true)
         .addField(`\`\`${prefix}resume\`\``, `**Complete the song.**`,true)
         .addField(`\`\`${prefix}pause\`\``, `**Pause the song.**`,true)
         .addField(`\`\`${prefix}forceskip\`\``, `**To skip the song directly.**`,true)
         .addField(`\`\`${prefix}queue\`\``, `**Show menu.**`,true)
         .addField(`\`\`${prefix}skipto\`\``, `**To skip the song to the next song in the next music queue.**`,true)
         .addField(`\`\`${prefix}Skip\`\``, `**Skip to the next song.**`,true)
         .addField(`\`\`${prefix}volume\`\``, `**schanging the voice.**`,true)
         .addField(`\`\`${prefix}np\`\``, `**Show what's playing now.**`,true)
         .addField(`\`\`${prefix}repeat\`\``, `**Repeat the song.**`,true)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL) 
   message.channel.send(embed)
  }; 
});


client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + `nsfw`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(`:star: __Nsfw Commands List__`)
    .setColor("RANDOM")
    .addField(`\`\`${prefix}porn\`\``, `**pron gif.**`)
    .addField(`\`\`${prefix}boobs\`\``, `**Boobs gif.**`)
    .addField(`\`\`${prefix}ass\`\``, `**Ass gif.**`)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL)
    
     message.channel.send(embed)
    };
 });

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + `public`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(`:pushpin: __Public Commands List__`)
    .setColor("RANDOM")
    .addField(`\`\`${prefix}avatar server\`\``,`**Check Avatar Server.**`,true)
    .addField(`\`\`${prefix}avatar\`\``, `**Check your Avatar.**`,true)
    .addField(`\`\`${prefix}user\`\``, `**Check your Info.**`,true)
    .addField(`\`\`${prefix}uptime\`\``, `**Check time bot**`,true)
    .addField(`\`\`${prefix}bot\`\``, `**Check bot**`,true)
    .addField(`\`\`${prefix}allbots\`\``, `**Check all on server.**`,true)
    .addField(`\`\`${prefix}report\`\``, `**Report Memeber.**`,true)
    .addField(`\`\`${prefix}id\`\``, `**Check your Info.**`,true)
    .addField(`\`\`${prefix}server\`\``, `**Check server Info.**`,true)
    .addField(`\`\`${prefix}ping\`\``, `**Bot NET Speed.**`,true)
    .addField(`\`\`${prefix}roles\`\``, `**Check Roles Server.**`,true)
    .addField(`\`\`${prefix}botinf\`\``, `**Check Info Bot.**`,true)
    .addField(`\`\`${prefix}emojilist\`\``, `**Check Emoji Server.**`,true)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL)
    
     message.channel.send(embed)
    };
 });


client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + `tickets`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(`:tickets: __Ticket Commands List__`)
    .setColor("RANDOM")
    .addField(`\`\`${prefix}new\`\``, `**Open ticke.**`,true)
    .addField(`\`\`${prefix}add\`\``, `**Add Member To ticket.**`,true)
    .addField(`\`\`${prefix}remove\`\``, `**Remove Member To ticket.**`,true)
    .addField(`\`\`${prefix}rename\`\``, `**Change Name ticket.**`,true)
    .addField(`\`\`${prefix}close\`\``, `**Close Room ticket.**`,true)
    .addField(`\`\`${prefix}close all\`\``, `**Cose All ticket.**`,true)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL)
    
     message.channel.send(embed)
    };
 });

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + `moderation`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(`:shield: __ Moderation Commands List__`)
    .setColor("RANDOM")
    .addField(`\`\`${prefix}lock\`\``, `**close Room**.`,true)
    .addField(`\`\`${prefix}unlock\`\``, `**Unclose Room.**`,true)
    .addField(`\`\`${prefix}mute\`\``, `**Mute Member.**`,true)
    .addField(`\`\`${prefix}unmute\`\``, `**Unmute Member.**`,true)
    .addField(`\`\`${prefix}clear\`\``, `**Clear Messages.**`,true)
    .addField(`\`\`${prefix}setlog\`\``, `**Open Log.**`,true)
    .addField(`\`\`${prefix}warn\`\``, `**Warn Member.**`,true)
    .addField(`\`\`${prefix}unban\`\``, `**Unban Member.**`,true)
    .addField(`\`\`${prefix}vmute\`\``, `**Mute Vocal.**`,true)
    .addField(`\`\`${prefix}vunmute\`\``, `**Unmute Vocal.**`,true)
    .addField(`\`\`${prefix}move\`\``, `**Move Member.**`,true)
    .addField(`\`\`${prefix}move all\`\``, `**Move All Members.**`,true)
    .addField(`\`\`${prefix}ban\`\``, `**Ban Member.**`,true)
    .addField(`\`\`${prefix}kick\`\``, `**Kick Member.**`,true)
    .addField(`\`\`${prefix}role\`\``, `**Give Member Role.**`,true)
    .addField(`\`\`${prefix}roleremove\`\``, `**Remove Member Role.**`,true)
    .addField(`\`\`${prefix}role all\`\``, `**Give All member Role.**`,true)
    .addField(`\`\`${prefix}setnick\`\``, `**Add Member Nickname.**`,true)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL)
     message.channel.send(embed)
    };
 });

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.toLowerCase().startsWith(prefix + `protection`)) {
    const embed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(`:warning: __Protection Commands List__`)
    .setColor("RANDOM")
    .setDescription(`<a:563109450966368266:714726157991542794>| Protect Soon `)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL)
    
     message.channel.send(embed)
    };
 });




////////////////////////////////////////////////////

client.on('message', message => {
  if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'move')) {
  let mention = message.mentions.members.first();
  if (message.member.hasPermission("MOVE_MEMBERS")) {
  if (message.mentions.users.size === 0) { return;}
  if (message.member.voiceChannel != null) {
  if (message.mentions.members.first().voiceChannel != null) {
  var authorchannel = message.member.voiceChannelID;
  var usermentioned = message.mentions.members.first().id;
  message.guild.members.get(usermentioned).setVoiceChannel(authorchannel)
  message.guild.members.get(usermentioned).send(embed);
  message.channel.send(`**✅${mention.user.username} moved **`);
}}}}});

client.on("message", message => {
  if (message.content.startsWith(prefix + "slots")) {
    let slot1 = ["<a:707360937312649226:714732511774900254>", "<a:707360936746287116:714732521908338730>", "<a:707360936700280933:714732535359471676>"];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    let we;
    if (slots1 === slots2 && slots2 === slots3) {
      we = "**<a:707360940978471014:714732499556761610> You Win!**";
    } else {
      we = "**<a:707360940898779177:714732511435030570> You Lose!**";
    }
    

    const slotsembed = new Discord.RichEmbed()
      
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)   
      .setTitle(`${we}`)
      .setDescription(`${slots1}|━━━━━━━|${slots2}|━━━━━━━|${slots3}`)
      .setImage("https://media.discordapp.net/attachments/551514711577853969/583300773740412938/Rainbow_Border_2.gif")
      .setTimestamp()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setFooter(message.guild.name, message.guild.iconURL)
        
    message.channel.send(slotsembed);
  }
})


client.on('message', message => {
    if (message.content == prefix + "fakek") {
        var x = ["server",
"Fortnite",
"slots",
"discord",
"ACL",
"Game",
"netflix",
"streamer",
"casino",
"hello",
];
        var x2 = ['s e r v e r',
        "F o r t n i t e",
        "s l o t s",
        "d i s c o r d",
"A C L",
"G a m e",
"n e t f l i x",
"s t r e a m e r",
"c a s i n o",
"h e l l o",
     ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`**Disassemble :)** 
 :  __**${x[x3]}**__
**You have 10 seconds:octagonal_sign:**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 10000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`**:negative_squared_cross_mark: The time is up**
           **The correct answer is :  __${x2[x3]}__**`)
         })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author}**You have succeeded:white_check_mark:**`);
        })
        })
    }
})

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `The game is between the following players<@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(You lost, play with yourself:joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'Work! The symbol is${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listeprefix initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.channel.send(`try xo @uesr`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });  

client.on('message', message => {
      if(message.content.startsWith(prefix + 'vunmute')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return;
        let mention = message.mentions.members.first();
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
         
      if(message.mentions.users.size === 0) {
        return;
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return;
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage(`**✅ ${mention.user.username} unmuted for Voice**`);
      }
    }
  });

client.on('message', message => {
        if(message.content.startsWith(prefix + 'vmute')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return;
                  let mention = message.mentions.members.first();
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return;
           
        if(message.mentions.users.size === 0) {
          return;
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return;
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage(`**✅ ${mention.user.username} muted for Voice**`);
        }
      }
    });


client.on("message", message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "avatar server")) {
    let doma = new Discord.RichEmbed()
    .setColor("BLACK")
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTitle("Avatar Link")
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setFooter(`Requested By :${message.author.tag}`, message.author.avatarURL)
    message.channel.send(doma)
  } else if(message.content.startsWith(prefix + "avatar")) {
    let args = message.content.split(" ")[1]
var avt = args || message.author.id;    
    client.fetchUser(avt).then(user => {
     avt = user;
  let embed = new Discord.RichEmbed() 
  .setColor("BLACK")
  .setAuthor(`${avt.tag}`, avt.avatarURL)
  .setTitle("Avatar Link")
  .setURL(avt.avatarURL)
  .setImage(avt.avatarURL)
  .setFooter(`Requested By :${message.author.tag}`, message.author.avatarURL)
  message.channel.send(embed) 
    })
  }
})


client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Blacklist");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Blacklist",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : link discord **`)
            .setColor("RANDOM")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**had l khitra hit link server f chat :laughing:**');
   
       
    }
})


client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : link discord **`)
            .setColor("RANDOM")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**had l khitra hit link server f chat :laughing:**');
   
       
    }
})

client.on('message', function(msg) {
    if(msg.content == prefix  + 'server') {
      let embed = new Discord.RichEmbed()
      .setColor('000000')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}**`)
      .addField('__Region__ ',`**${msg.guild.region}**`,true)
      .addField('__Roles __',`**${msg.guild.roles.size}**`,true)
      .addField('__Members __',`**${msg.guild.memberCount}**`,true)
      .addField('__Online Members__ ',`**${msg.guild.members.filter(m=>m.presence.status == 'online').size + msg.guild.members.filter(m=>m.presence.status == 'idle').size + msg.guild.members.filter(m=>m.presence.status == 'dnd').size}**`,true)
      .addField('__Text Channels __',`**${msg.guild.channels.filter(m => m.type === 'text').size}**`,true)
      .addField('__Voice Channels__ ',`**${msg.guild.channels.filter(m => m.type === 'voice').size}**`,true)
      .addField('__Category Channels__ ',`**${msg.guild.channels.filter(m => m.type === 'category').size}**`,true)
      .addField('__ID Owner __',`**${msg.guild.owner.id}**`,true)
      .addField('__Owner __',`**${msg.guild.owner}**`,true)
      .addField('__ID Server__ ',`**${msg.guild.id}**`,true)
      .addField('__Created IN __',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
});

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content == prefix + 'allbots') {
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**:100: | Found ${message.guild.members.filter(m=>m.user.bot).size} bots inServer**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'emojilist')) {
 
        const List = message.guild.emojis.map(e => e.toString()).join(" ");
 
        const EmojiList = new Discord.RichEmbed()
            .setTitle('✅ Emojis')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(List)
            .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(EmojiList)
    }
});

client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    }); // Alpha Codes Ghost
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return 
 
  await kinggamer.removeRole(role)
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted **`);
           return;
  }
});


client.on("message", message => {
     let mention = message.mentions.members.first();
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "mute") {

    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message
        .catch(console.error);
    let user = message.mentions.users.first();
    let muteRole = client.guilds
      .get(message.guild.id)
      .roles.find("name", "Muted");
    if (!muteRole)
      return message
        .catch(console.error);
    if (message.mentions.users.size < 1)
      return message
        .catch(console.error);

    if (
      !message.guild
        .member(client.user)
        .hasPermission("MANAGE_ROLES_OR_PERMISSIONS")
    )
      return message
        .catch(console.error);

    if (message.guild.member(user).roles.has(muteRole.id)) {
      return;
    } else {
      message.guild
        .member(user)
        .addRole(muteRole)
        .then(() => {
          return message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  muted **`)
            .catch(console.error);
        });
    }
  }
});

client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
 
        const uptime1 = new Discord.RichEmbed()
            .setTitle('Uptime')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .setColor('RANDOM')
            .setDescription(`[${days}] day [${hours}] hour [${minutes}] min [${seconds}] sec`)
            .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(uptime1);

}
});


const yourID = "641272651427479562"; //Instructions on how to get this: https://redd.it/40zgse
const setupCMD = prefix + "createrolemessage"
const embedMessage = `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`;
const embedFooter = "ACL SQUAD"; // Must set this if "embed" is set to true
const roles = ["» Member's ."];
const reactions = ["✅"]//
const embed = true; // Set to "true" if you want all roles to be in a single embed
const embedColor = "RANDOM"; // Set the embed color if the "embed" variable is set to true


// Import classes and load client

// If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

// Function to generate the role messages, based on your settings
function generateMessages() {
    let messages = [];
    for (let role of roles) messages.push(`React below to get the **"${role}"** role!`); //DONT CHANGE THIS
    return messages;
}

// Function to generate the embed fields, based on your settings and if you set "const embed = true;"
function generateEmbedFields() {
    return roles.map((r, e) => {
        return {
            emoji: reactions[e],
            role: r
        };
    });
}

// Client events to let you know if the bot is online and to handle any Discord.js errors
client.on("ready", () => console.log("Bot is online!"));
client.on('error', console.error);

// Handles the creation of the role reactions. Will either send the role messages separately or in an embed
client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD) {

        if (!embed) {
            message.channel.send(embedMessage);

            const toSend = generateMessages();
            toSend.forEach((role, react) => {
                message.channel.send(role).then(m => {
                    m.react(reactions[react]);
                });
            });
        } else {
            const roleEmbed = new Discord.RichEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL)
                .setDescription(embedMessage)
                .setFooter(embedFooter)
              
            if (embedColor) roleEmbed.setColor(embedColor);

            const fields = generateEmbedFields();
            for (const f of fields) roleEmbed.addField(f.emoji, f.role, true);

            message.channel.send(roleEmbed).then(async m => {
                for (let r of reactions) await m.react(r);
            });
        }
    }
});

// This makes the events used a bit more readable
const events = {
	MESSAGE_REACTION_ADD: 'messageReactionAdd',
	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

// This event handles adding/removing users from the role(s) they chose
client.on('raw', async event => {

    if (!events.hasOwnProperty(event.t)) return;

    const { d: data } = event;
    const user = client.users.get(data.user_id);
    const channel = client.channels.get(data.channel_id);

    const message = await channel.fetchMessage(data.message_id);
    const member = message.guild.members.get(user.id);

    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    const reaction = message.reactions.get(emojiKey);

    let embedFooterText;
    if (message.embeds[0]) embedFooterText = message.embeds[0].footer.text;

    if (message.author.id === client.user.id && (message.content !== embedMessage || (message.embeds[0] && (embedFooterText !== embedFooter)))) {

        if (!embed) {
            const re = `\\*\\*"(.+)?(?="\\*\\*)`;
            const role = message.content.match(re)[1];

            if (member.id !== client.user.id) {
                const roleObj = message.guild.roles.find(r => r.name === role);

                if (event.t === "MESSAGE_REACTION_ADD") {
                    member.addRole(roleObj.id);
                } else {
                    member.removeRole(roleObj.id);
                }
            }
        } else {
            const fields = message.embeds[0].fields;

            for (let i = 0; i < fields.length; i++) {
                if (member.id !== client.user.id) {
                    const role = message.guild.roles.find(r => r.name === fields[i].value);

                    if (fields[i].name === reaction.emoji.name) {
                        if (event.t === "MESSAGE_REACTION_ADD") {
                            member.addRole(role.id);
                            break;
                        } else {
                            member.removeRole(role.id);
                            break;
                        }
                    }
                }
            }
        }
    }
})




client.on('message', message => {
     if (message.content.startsWith(prefix + "lock")) {
     if(!message.channel.guild) return;                  
        let role = message.guild.roles.find("name", "» Member's .");
     
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return ;
         message.channel.overwritePermissions(role, {
         SEND_MESSAGES: false
                   
    }).then(() => {
             message.channel.send("**:lock: Channel has been locked**")
       });
           }
    if(message.content === prefix + "unlock") {
    if(!message.channel.guild) return;     
      let role = message.guild.roles.find("name", "» Member's .");
                   
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return ;
        message.channel.overwritePermissions(role, {
        SEND_MESSAGES: true
                   
         }).then(() => {
          message.channel.send("**:unlock: Channel has been unlocked**");
      });
  }
                           
});

client.on('message', function(message) {
    if(!message.channel.guild) return;
    if (message.author.bot) return;
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return ;
    if (message.author.id === client.user.id) return;
    if (message.author.equals(client.user)) return;
    if (!message.content.startsWith(prefix)) return;
    
    var args = message.content.substring(prefix.length).split(' ');
    switch (args[0].toLocaleLowerCase()) {
    case "clear" :
    if(!message.channel.guild) return
    if(message.member.hasPermission(0x2000)){ if (!args[1]) {
    message.channel.fetchMessages()
    .then(messages => {
    message.channel.bulkDelete(messages);
    var messagesDeleted = messages.array().length;
    message.channel.sendMessage(' '+ "```red\n" + messagesDeleted + " " +  ': messages have been deleted.' + "```").then(m => m.delete(5000));
    })
    } else {
    let messagecount = parseInt(args[1]);
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
    message.channel.sendMessage(' '+ "```red\n" + args[1] + " " +  ': messages have been deleted.' + "```").then(m => m.delete(5000));
    message.delete(60000);
    }
    } else {
    var manage = new Discord.RichEmbed()
    .setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
    .setColor("RANDOM")
    message.channel.send(manage)
    return;
    }
    }
    });


client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });

const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(channel => channel.name === "❖・invites");
    welcome.send(`<@${member.user.id}> **invited** by ${inviter.tag} (${invite.uses}invites) `)
  });
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0])
            return;

    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;
  let mention = message.mentions.members.first();
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "ban") {
  if(!message.channel.guild) return;
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return;
  let user = message.mentions.users.first(); 
  if (message.mentions.users.size < 1) return;
  if (!message.guild.member(user)
  .bannable) return; 
  message.guild.member(user).ban(7, user);
  message.channel.sendMessage(`**✅ ${mention.user.username} Banned **`);
}
});
 
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
  let mention = message.mentions.members.first();
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length); 
  let args = message.content.split(" ").slice(1);
  if (command == "kick") {
  if(!message.channel.guild) return;       
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return;
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return;
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return;   if (!message.guild.member(user)
  .kickable) return; 
  message.guild.member(user).kick();

  message.channel.send(`**✅ ${mention.user.username} kicked**`)
}
});




 client.on('message' , message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'id') {
     const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    let user = message.mentions.users.first() || message.author;
    message.delete();
   
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }

    let game;
    if (user.presence.game === null) {
        game = 'None.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'None.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = 'Online';
    } else if (user.presence.status === 'dnd') {
        status = 'DND';
    } else if (user.presence.status === 'idle') {
        status = 'Idle';
    } else if (user.presence.status === 'offline') {
        status = 'Offline';
    }
    if (user.presence.status === 'offline') {
        status = 0x000000;
    } else if (user.presence.status === 'online') {
        status = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        status = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        status = 0xF7C035;
    }
    moment.locale('En-ly');
                    message.guild.fetchInvites().then(invs => {
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let Invites = invs.filter(i => i.inviter.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    const embed = new Discord.RichEmbed()

  
  .addField('Discord Info : ', `Name : ${user.username}\n Discriminator: #${user.discriminator}\nID : ${user.id} \nJoined Discord : ${moment(heg.createdTimestamp).fromNow()}\nBot :  ${user.bot}\nPlaying : ${game}\nStatus : ${status}`,true)
  .addField('Roles Info :',``+message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .addField('Server Info :', `Last Message : ${messag}\nJoined :  ${moment(h.joinedAt).fromNow()} \n Invites :  ${inviteCount} Invite(s) `)
  .setAuthor(`${user.username}`, user.displayAvatarURL)
  .setColor("RANDOM")
    .setThumbnail(user.displayAvatarURL)
    message.channel.send(embed)
  .catch(e => console.error(e));///logger
 })
}
 });



 client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.`);
 })
  }  
 });

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return;
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return;
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Remove it From The User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Mention Role To Remove it From The User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**Success Removed Role '+role1.name+' from '+args[0]+'**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**Removed Rank '+role1.name+' From All**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**Removed Rank '+role1.name+' From All Bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**Removed Rank '+role1.name+' From All Humans**');
		} 	
	} else {
		if( !args[0] ) return;
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**Gived Rank '+role1.name+' To '+args[0]+' **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**Gived All Rank '+role1.name+'**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**Gived All Bots Rank '+role1.name+' **');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**Gived All Humans Rank '+role1.name+'**');
	
		}
	} 
});

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
    
  let channel = message.guild.channels.get("721043412333363302");
      message.delete(1000)
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return;
    let mUser = message.mentions.users.first();
    if(!mUser) return;
    let Rembed = new Discord.RichEmbed()
    .setTitle("New Report!")
    .setColor("RANDOM")
    .setThumbnail(message.author.avatarURL)
    .addField("Reported By:",message.author,true)
    .addField("Reported User:",mUser,true)
    .addField("Reported User ID:",mUser.id,true)
    .addField("Reason:",messageReason,true)
    .addField("Channel:",message.channel,true)
    .addField("Time:",message.createdAt,true)
    .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)
    .setAuthor(message.author.username,message.author.avatarURL)
     channel.send(Rembed)
}
});



/// 
client.on('message', message => {
           if (message.content.startsWith(prefix + "user")) {
     var args = message.content.split(" ").slice(1);
             message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(message.author.id);
            let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('En-ly');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .addField('Joined Discord :', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \n** ${moment(heg.createdTimestamp).fromNow()}**` ,true)
    .addField('Joined Server :', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n** ${moment(h.joinedAt).fromNow()}**`, true)              
    .addField('Invites :', `${inviteCount}`,true)
    .addField('Case :', `${message.author.presence.status.toUpperCase()}`, true)
    .setThumbnail(heg.avatarURL)
     .setTimestamp()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setFooter(message.guild.name, message.guild.iconURL)
    message.channel.send(id);
});
}});



client.on("guildMemberAdd", (member) => {

   let channel = member.guild.channels.get("721048428339134565");  
   let Achannel = member.guild.channels.get("721048428339134565");
           var h = member.user;
      let embed = new Discord.RichEmbed()
 
      .setColor('RANDOM')
      .setAuthor(h.username, h.avatarURL)
      .setThumbnail(h.avatarURL)
      .setImage('https://cdn.discordapp.com/attachments/720035826993594368/721471935569199174/tenor.gif')
      .setTitle(`Weclome ${member.user.username} to ${member.guild.name}!`)
      .addField('User', `<@${member.user.id}>`)
      .addField('Joined At',`${moment(member.joinedAt).format('D/M/YYYY  ')} `)
      .addField('Joined Discord At',`${moment(member.createdTimestamp).format('YYYY/M/D HH:mm:ss')}`)
      .setFooter(`User ID : ${member.user.id}`)
      .setTimestamp()
      channel.send(embed);
      Achannel.send(`**
━━━━━━⋗──────♛──────⋖━━━━━━
> <a:563109584399630337:714726150055657492> <@${member.user.id}> __Enjoy !!.__ <a:563109584399630337:714726150055657492>
━━━━━━⋗──────♛──────⋖━━━━━━**
`);
});





client.on("message", message => {
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`**• | Usage:** ${prefix}setnick \`\`@Name\`\` nickname`);
if(message.guild.member(user.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`✅ | I cant change **${user.user.username}**'s nickname because his role highest than my role!`);
message.guild.member(user.user).setNickname(`${nick}`).then(() => {
message.channel.send(`Successfully changed **${user.user.username}** nickname to **${nick}**`)
}).catch(console.error); // Toxic Codes
} // Julian
}); // Codes



client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!message.guild.roles.exists("name", "Tickets"))
      return message.channel.send(
        ` There is no rank with the name **Tickets** , so the ticket will not open. \ NIf you are responsible, create one with this exact name and give it to users who should be able to see tickets . `
      );
    if (message.guild.channels.exists("name", "ticket-" + message.author.id))
      return message.channel.send(`** You already have an open ticket .**`);
    message.guild
      .createChannel(`ticket-${message.author.id}`, "text")
      .then(c => {
        let role = message.guild.roles.find("name", "Tickets");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });
        const newEMKAH = new Discord.RichEmbed()
          .setColor("RANDOM")
          .addField(
            `NG3A`,
            `Hello ${message.author} ,I have created a ticket for you! `+
              `#${c.name}`
          )
          .setTimestamp();
        message.channel.send(newEMKAH);
        const embed3 = new Discord.RichEmbed()
          .setColor("RANDOM")
          .addField(
            `${message.author.username}!`,
            `This server doesn't have a **Tickets** role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`
          )
          .setTimestamp();
        c.send(`${message.author}`);
        c.send({ embed: embed3 });
      })
      .catch(console.error);
  }
////////////////////////////

  if (message.content.toLowerCase().startsWith(prefix + `add`)) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        ` :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`
      );
    if (!message.channel.name.startsWith(`ticket-`)) {
      const embed4 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(
          `**TicketsERORR**`,
          `** You cannot usre the command outside the ticket .**`
        );
      message.channel.send(embed4);
      return;
    }
    let addedmember = message.mentions.members.first();
    message.channel.overwritePermissions(addedmember, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true
    });
    if (addedmember < 1) return message.reply("** Please provide username **");
    const embed5 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`NG3A`, `** Added to your ticket **`);

    message.channel.send(embed5);
  }

  if (message.content.startsWith(prefix + `close all`)) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        ` :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`
      );
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(
        "t have Permission **MANAGE_CHANNELS** to close all tickets"
      );
    message.guild.channels
      .filter(c => c.name.toLowerCase().startsWith("ticket-"))
      .forEach(channel => {
        channel.delete();
      });
    const ttt = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`**All tickets closed :white_check_mark:**`, `** **`);
    message.channel.send(ttt);

    //
  }
  if (message.content.toLowerCase().startsWith(prefix + `remove`)) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        ` :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`
      );
    if (!message.channel.name.startsWith(`ticket-`)) {
      const embed6 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(
          `**TicketsERORR**`,
          `**You cannot use the command outside the ticket .**`
        );
      message.channel.send(embed6);
      return;
    }
    let removedmember = message.mentions.members.first();
    if (removedmember < 1)
      return message.reply("** Please provide username **");
    message.channel.overwritePermissions(removedmember, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false
    });
    const embed7 = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(`NG3A`, "**" + removedmember + " Ticket removed .**");
    message.channel.send(embed7);
  }
  /////////////////////
  if (message.content.toLowerCase().startsWith(prefix + `rename`)) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        ` :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`
      );

    let noperm = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(":x: You do not have sufficient powers");

    var perm = message.guild
      .member(message.author)
      .hasPermissions("MANAGE_ROLES");
    if (!perm) return message.channel.send(noperm);
    var args = message.content.split(" ");
    if (!message.channel.name.startsWith(`ticket-`)) {
      const embed8 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(
          `NG3A`,
          `You can't use the this outside of a ticket channel.`
        );
      message.channel.send(embed8);
      return;
    } else message.channel.setName(`ticket-${args[1]}`);
    var donere = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(
        "NG3A",
        ` The name of the Room has been changed to \`${args[1]}\``
      );
    message.channel.send(donere);
  }

  ////////////////////

  //////////////////
  if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        ` :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`
      );
    if (!message.channel.name.startsWith(`ticket-`))
      return message.channel
        .send(`** You cannot use the command outside the ticket .**`)
        .then(m => m.delete(2000));

    let close = new Discord.RichEmbed()
      .addField(`type \`yes\` again to confirm`, `** **`)
      .setColor("RANDOM");
    message.channel
      .sendEmbed(close)

      .then(m => {
        message.channel
          .awaitMessages(response => response.content === `yes`, {
            max: 1,
            time: 10000,
            errors: ["time"]
          })
          .then(collect => {})

          .then(collected => {
            message.channel.delete();
          })
          .catch(() => {
            m.edit(" ${} **Tickets timed out, ticket not closed  .**").then(m2 => {
              m2.delete();
            }, 3000);
          });
      });
  }
});


client.on('message', message=>{  
    if(message.author.bot) return;  
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix+'setlog')) {  
      message.delete(3000)
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**You need to `MANAGE_CHANNELS`**");
    let log = message.guild.channels.find("name", "log")  
    if(log) return message.reply("**There is already a ROOM log**")   
    if(!log) {   
    message.guild.createChannel("log", "text").then(c=> {  
        c.overwritePermissions(message.guild.id, {  
            SEND_MESSAGES: false,
            READ_MESSAGES: false,
            SEND_TTS_MESSAGES:false
    })
})
message.channel.send("**✅Done **").then(m => m.delete(3000))
    }
    }  
     })
client.on('error', console.error);
 
client.on('messageDelete', message => {  
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;  
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;  
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;  
 
    var logChannel = message.guild.channels.find(c => c.name === 'log');  
    if(!logChannel) return;  
 
    let messageDelete = new Discord.RichEmbed()  
    .setTitle('**[MESSAGE DELETE]**')  
    .setColor('RED')  
    .setThumbnail(message.author.avatarURL)  
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()  
    .setFooter(message.guild.name, message.guild.iconURL)  
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {  
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;  
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 

client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[ROLE CREATE]**')
        .setThumbnail(userAvatar)  
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)  
   
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {  
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar)  
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()  
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);  
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
   
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
   
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**')  
            .setThumbnail(userAvatar)  
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);  
        }
        if(oldRole.hexColor !== newRole.hexColor) {  
            if(oldRole.hexColor === '#000000') {  
                var oldColor = '`Default`';  
            }else {
                var oldColor = oldRole.hexColor;
            }    
            if(newRole.hexColor === '#000000') {  
                var newColor = '`Default`';  
            }else {
                var newColor = newRole.hexColor;  
            }  
            let roleUpdateColor = new Discord.RichEmbed()  
            .setTitle('**[ROLE COLOR UPDATE]**')  
            .setThumbnail(userAvatar)  
            .setColor('BLUE')  
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()  
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
   
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) {  
            let roleUpdate = new Discord.RichEmbed()  
            .setTitle('**[UPDATE ROLE PERMISSIONS]**')  
            .setThumbnail(userAvatar)  
            .setColor('BLUE')
            .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate) 
        }
    })
});
 
 

client.on('channelCreate', channel => { 
  
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { 
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { 
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => { 
        var userID = logs.entries.first().executor.id; 
        var userAvatar = logs.entries.first().executor.avatarURL;
   
        let channelCreate = new Discord.RichEmbed() 
        .setTitle('**[CHANNEL CREATE]**') 
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
}); 
client.on('channelDelete', channel => { 
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return; 
 
    if(channel.type === 'text') { 
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { 
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { 
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar) 
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete); 
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
   
    oldChannel.guild.fetchAuditLogs().then(logs => { 
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;

        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp() 
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL) 
 
            logChannel.send(newName); 
        }
        if(oldChannel.topic !== newChannel.topic) { 
            let newTopic = new Discord.RichEmbed() 
            .setTitle('**[CHANNEL EDIT]**') 
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 

client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); 
    if(!logChannel) return; 
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[BANNED]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return; 
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); 
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[UNBANNED]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => { 
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log'); 
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id; 
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`His Orginal Name\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`His Orginal Name\`\`'; 
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[UPDATE MEMBER NICKNAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
  
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**') 
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) 
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) 
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log'); 
  if(!logChannel) return;
  
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**') 
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});
function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}
client.on('guildMemberRemove', member => { 
  var logChannel = member.guild.channels.find(c => c.name === 'log'); 
  if(!logChannel) return; 
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)  
  .setTimestamp() 
  .setFooter(member.user.tag, member.user.avatarURL)
  
  logChannel.send(leaveMember);
});
 
 

client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 

        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }

        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }

        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAFEN]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }

        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed() 
            .setTitle('**[VOICE UNDEAFEN]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv); 
        }
    })

    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }

    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave); 
    }

    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }  
}); 





client.on("message", message => {
  if (message.content.startsWith(prefix + "porn")) {
    if (message.channel.nsfw === true) {
    let slot1 = [
'https://cdn.boob.bot/Gifs/1814.gif',
'https://cdn.boob.bot/Gifs/1823.gif',
'https://cdn.boob.bot/Gifs/1824.gif',
'https://cdn.boob.bot/Gifs/1825.gif',
'https://cdn.boob.bot/Gifs/1826.gif',
'https://cdn.boob.bot/Gifs/1827.gif',
'https://cdn.boob.bot/Gifs/1828.gif',
'https://cdn.boob.bot/Gifs/1829.gif',
'https://cdn.boob.bot/Gifs/1830.gif',
'https://cdn.boob.bot/Gifs/1815.gif',
'https://cdn.boob.bot/Gifs/1816.gif',
'https://cdn.boob.bot/Gifs/1817.gif',
'https://cdn.boob.bot/Gifs/1818.gif',
'https://cdn.boob.bot/Gifs/1819.gif',
'https://cdn.boob.bot/Gifs/1820.gif',     
'https://cdn.boob.bot/Gifs/1821.gif',     
'https://cdn.boob.bot/Gifs/1822.gif', 
'https://cdn.boob.bot/Gifs/1801.gif',    
'https://cdn.boob.bot/Gifs/1802.gif',
'https://cdn.boob.bot/Gifs/1803.gif',
'https://cdn.boob.bot/Gifs/1804.gif',
'https://cdn.boob.bot/Gifs/1805.gif',
'https://cdn.boob.bot/Gifs/1806.gif',
'https://cdn.boob.bot/Gifs/1807.gif',
'https://cdn.boob.bot/Gifs/1808.gif',
'https://cdn.boob.bot/Gifs/1810.gif', 
'https://cdn.boob.bot/Gifs/1813.gif',
'https://cdn.boob.bot/Gifs/15F5.gif',
'https://cdn.boob.bot/Gifs/189F.gif',  
'https://cdn.boob.bot/Gifs/1650.gif'    
 ];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    if (slots1)    {} 
    const slotsembed = new Discord.RichEmbed()
      
      .setColor("RANDOM")
      .setDescription("<a:714716707838754856:723014631798603787> NG3A")
      .setImage(`${slots1}`)
      .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)    
 message.channel.send(slotsembed);
      } else {
        const nsfw = new Discord.RichEmbed() 
        .setTitle(`Active NSFW`)
        .setImage(`https://cdn.discordapp.com/attachments/723094462397415454/725172195567075418/GIF_18-06-2020_14-28-45.gif`)
    message.channel.send(nsfw)
  }
  }
})

client.on("message", message => {
  if (message.content.startsWith(prefix + "boobs")) {
    if (message.channel.nsfw === true) {
    let slot1 = [
'https://cdn.boob.bot/boobs/8000555E.gif',
'https://cdn.boob.bot/boobs/80011F98.png',
'https://cdn.boob.bot/boobs/80002C32.gif',
'https://cdn.boob.bot/boobs/8000E30C.gif',
'https://cdn.boob.bot/boobs/8000A5E5.gif',
'https://cdn.boob.bot/boobs/80004771.gif',
'https://cdn.boob.bot/boobs/8001495F.gif',
'https://cdn.boob.bot/boobs/80008362.gif',
'https://cdn.boob.bot/boobs/8000310A.gif',
'https://cdn.boob.bot/boobs/8000E4DD.gif',
'https://cdn.boob.bot/boobs/80008C77.gif',
'https://cdn.boob.bot/boobs/8000DE34.gif',
'https://cdn.boob.bot/boobs/8000F707.gif',
'https://cdn.boob.bot/boobs/80010152.gif',
'https://cdn.boob.bot/boobs/80007E8A.gif',
'https://cdn.boob.bot/boobs/80002E03.gif',
'https://cdn.boob.bot/boobs/800020B1.gif',
'https://cdn.boob.bot/boobs/8000AEFA.gif',
'https://cdn.boob.bot/boobs/8000787C.gif',
'https://cdn.boob.bot/boobs/800012C4.gif',
'https://cdn.boob.bot/boobs/80009EA1.gif',
'https://cdn.boob.bot/boobs/800071D3.gif',
'https://cdn.boob.bot/Gifs/1776.gif',
'https://cdn.boob.bot/Gifs/18D7.gif'
 ];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    if (slots1)    {} 
    const slotsembed = new Discord.RichEmbed()
      
      .setColor("RANDOM")
      .setDescription("<a:714716707838754856:723014631798603787> NG3A")
      .setImage(`${slots1}`)
      .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)    
 message.channel.send(slotsembed);
          } else {
        const nsfw = new Discord.RichEmbed() 
        .setTitle(`Active NSFW`)
        .setImage(`https://cdn.discordapp.com/attachments/723094462397415454/725172195567075418/GIF_18-06-2020_14-28-45.gif`)
    message.channel.send(nsfw)
  }
  }
})

const superagent = require("snekfetch");



client.on("message", message => {
  if (message.content.startsWith(prefix + "ass")) {
    if (message.channel.nsfw === true) {
    let slot1 = [
'https://cdn.boob.bot/ass/4EA2.JPG',
'https://cdn.boob.bot/ass/4E57.JPG',     
'https://cdn.boob.bot/ass/4CC2.JPG',      
'https://cdn.boob.bot/ass/4F1A.GIF',     
'https://cdn.boob.bot/ass/4DA3.JPG',    
'https://cdn.boob.bot/ass/4D1C.JPG',      
'https://cdn.boob.bot/ass/5181.JPG',      
'https://cdn.boob.bot/ass/4E66.GIF',     
'https://cdn.boob.bot/ass/4D58.JPG',    
'https://cdn.boob.bot/ass/4C77.JPG',    
'https://cdn.boob.bot/ass/4FCE.GIF',   
'https://cdn.boob.bot/ass/4DDF.JPG',    
'https://cdn.boob.bot/ass/4CFE.GIF',      
'https://cdn.boob.bot/ass/4E39.JPG',
'https://cdn.boob.bot/ass/4D3A.JPG',
'https://cdn.boob.bot/ass/4FFB.JPG',   
'https://cdn.boob.bot/ass/4FDD.JPG',
'https://cdn.boob.bot/ass/5064.JPG',
'https://cdn.boob.bot/ass/50A0.JPG',
'https://cdn.boob.bot/ass/4D76.JPG',
'https://cdn.boob.bot/ass/4F74.JPG',      
'https://cdn.boob.bot/ass/5082.GIF',
'https://cdn.boob.bot/ass/4DC1.JPG',
'https://cdn.boob.bot/ass/4E66.GIF',
'https://cdn.boob.bot/Gifs/16DB.gif'
 ];
    let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
    if (slots1)    {} 
    const slotsembed = new Discord.RichEmbed()
      
      .setColor("RANDOM")
      .setDescription("<a:714716707838754856:723014631798603787> NG3A")
      .setImage(`${slots1}`)
      .setFooter(`Requested By : ${message.author.tag}`, message.author.avatarURL)    
 message.channel.send(slotsembed);
      } else {
        const nsfw = new Discord.RichEmbed() 
        .setTitle(`Active NSFW`)
        .setImage(`https://cdn.discordapp.com/attachments/723094462397415454/725172195567075418/GIF_18-06-2020_14-28-45.gif`)
    message.channel.send(nsfw)
  }
  }
})










let cmds = {
  play: { cmd: "play", a: ["p"] },
  skip: { cmd: "skip", a: ["s"] },
  stop: { cmd: "stop", a: [""] },
  pause: { cmd: "pause", a: [""] },
  resume: { cmd: "resume", a: ["r"] },
  volume: { cmd: "volume", a: ["vol"] },
  queue: { cmd: "queue", a: ["q"] },
  repeat: { cmd: "repeat", a: ["re"] },
  forceskip: { cmd: "forceskip", a: ["fskip"] },
  skipto: { cmd: "skipto", a: ["st"] },
  nowplaying: { cmd: "Nowplaying", a: ["np"] }
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

Object.keys(cmds).forEach(key => {
  var value = cmds[key];
  var command = value.cmd;
  client.commands.set(command, command);

  if (value.a) {
    value.a.forEach(alias => {
      client.aliases.set(alias, command);
    });
  }
});

let active = new Map();

client.on("warn", console.warn);

client.on("error", console.error);

client.on("ready", () => {
  console.log(`on`);
  console.log(`Guilds: ${client.guilds.size}`);
  console.log(`Users: ${client.users.size}`);
});

client.on("message", async msg => {
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(prefix)) return undefined;

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";

  let cmd =
    client.commands.get(command) ||
    client.commands.get(client.aliases.get(command));

  let s;

  if (cmd === "play") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        `:no_entry_sign: You must be listening in a voice channel to use that!`
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        `:no_entry_sign: I can't join Your voiceChannel because i don't have ` +
          "`" +
          "`CONNECT`" +
          "`" +
          ` permission!`
      );
    }

    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        `:no_entry_sign: I can't SPEAK in your voiceChannel because i don't have ` +
          "`" +
          "`SPEAK`" +
          "`" +
          ` permission!`
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();

      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(`Added to queue: ${playlist.title}`);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(args, 1);

          // eslint-disable-next-line max-depth
          var video = await youtube.getVideoByID(videos[0].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("I can't find any thing");
        }
      }

      return handleVideo(video, msg, voiceChannel);
    }

    async function handleVideo(video, msg, voiceChannel, playlist = false) {
      const serverQueue = active.get(msg.guild.id);

      //	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));

      let hrs =
        video.duration.hours > 0
          ? video.duration.hours > 9
            ? `${video.duration.hours}:`
            : `0${video.duration.hours}:`
          : "";
      let min =
        video.duration.minutes > 9
          ? `${video.duration.minutes}:`
          : `0${video.duration.minutes}:`;
      let sec =
        video.duration.seconds > 9
          ? `${video.duration.seconds}`
          : `0${video.duration.seconds}`;
      let dur = `${hrs}${min}${sec}`;

      let ms = video.durationSeconds * 1000;

      const song = {
        id: video.id,
        title: video.title,
        duration: dur,
        msDur: ms,
        url: `https://www.youtube.com/watch?v=${video.id}`
      };

      if (!serverQueue) {
        const queueConstruct = {
          textChannel: msg.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [], ////تعديل غير اساسي
          volume: 25, //// تعديل درجة الصوت الاساسية
          requester: msg.author,
          playing: true,
          repeating: false
        };
        active.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
          var connection = await voiceChannel.join();
          queueConstruct.connection = connection;
          play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
          console.error(`I could not join the voice channel: ${error}`);
          active.delete(msg.guild.id);
          return msg.channel.send(`I cant join this voice channel`);
        }
      } else {
        serverQueue.songs.push(song);

        if (playlist) return undefined;
        if (!args) return msg.channel.send("no results.");
        else
          return msg.channel
            .send(":watch: Loading... [`" + args + "`]")
            .then(m => {
              setTimeout(() => {
                //:watch: Loading... [let]
                m.edit(
                  `:notes: Added **${song.title}**` +
                    "(` " +
                    song.duration +
                    ")`" +
                    ` to the queue at position ` +
                    `${serverQueue.songs.length}`
                );
              }, 500);
            });
      }
      return undefined;
    }

    function play(guild, song) {
      const serverQueue = active.get(guild.id);

      if (!song) {
        serverQueue.voiceChannel.leave();
        active.delete(guild.id);
        return;
      }
      //console.log(serverQueue.songs);
      if (serverQueue.repeating) {
        console.log("Repeating");
      } else {
        serverQueue.textChannel.send(
          ":notes: Added **" +
            song.title +
            "** (`" +
            song.duration +
            "`) to begin playing."
        );
      }
      const dispatcher = serverQueue.connection
        .playStream(ytdl(song.url))
        .on("end", reason => {
          //if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
          //else console.log(reason);
          if (serverQueue.repeating) return play(guild, serverQueue.songs[0]);
          serverQueue.songs.shift();
          play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
    }
  } else if (cmd === "stop") {
    if (msg.guild.me.voiceChannel !== msg.member.voiceChannel)
      return msg.channel.send(
        `You must be in ${msg.guild.me.voiceChannel.name}`
      );
    // if (!msg.member.hasPermission("ADMINISTRATOR")) {
    //    msg.react("❌");
    //    return msg.channel.send("You don't have permission `ADMINSTRATOR`");
    //  }
    let queue = active.get(msg.guild.id);
    if (queue.repeating)
      return msg.channel.send(
        "Repeating Mode is on, you can't stop the music, run `" +
          `${prefix}repeat` +
          "` to turn off it."
      );
    queue.songs = [];
    queue.connection.dispatcher.end();
    return msg.channel.send(
      ":notes: The player has stopped and the queue has been cleared."
    );
  } else if (cmd === "skip") {
    let vCh = msg.member.voiceChannel;

    let queue = active.get(msg.guild.id);

    if (!vCh)
      return msg.channel.send(
        "Sorry, but you can't because you are not in voice channel"
      );

    if (!queue) return msg.channel.send("No music playing to skip it");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip it, because repeating mode is on, run " +
          `\`${prefix}forceskip\``
      );

    // let req = vCh.members.size - 1;

    //if (req == 1) {
    msg.channel.send("**:notes: Skipped **" + args);
    return queue.connection.dispatcher.end("Skipping ..");
    // }

    // if (!queue.votes) queue.votes = [];

    // if (queue.votes.includes(msg.member.id))
    //  return msg.say(
    //    `You already voted for skip! ${queue.votes.length}/${req}`
    //  );

    //  queue.votes.push(msg.member.id);

    //  if (queue.votes.length >= req) {
    //     msg.channel.send("**:notes: Skipped **" + args);

    //     delete queue.votes;

    //     return queue.connection.dispatcher.end("Skipping ..");
    //   }
    //
    //  msg.channel.send(
    //  `**You have successfully voted for skip! ${queue.votes.length}/${req}**`
    // );
  } else if (cmd === "pause") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) {
      return msg.channel.send("No music playing to pause.");
    }

    if (!queue.playing)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let disp = queue.connection.dispatcher;

    disp.pause("Pausing..");

    queue.playing = false;

    msg.channel.send(
      ":notes: Paused " + args + ". **Type** `" + prefix + "resume` to unpause!"
    );
  } else if (cmd === "resume") {
    let queue = active.get(msg.guild.id);

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(`You are not in my voice channel.`);

    if (!queue) return msg.channel.send(":notes: No music paused to resume.");

    if (queue.playing)
      return msg.channel.send(":notes: No music paused to resume.");

    let disp = queue.connection.dispatcher;

    disp.resume("Resuming..");

    queue.playing = true;

    msg.channel.send(":notes: Resumed.");
  } else if (cmd === "volume") {
    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send(
        ":notes: There is no music playing to set volume."
      );

    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send(":notes: You are not in my voice channel");

    let disp = queue.connection.dispatcher;

    if (isNaN(args[0])) return msg.channel.send(":notes: Numbers only!");

    if (parseInt(args[0]) > 100)
      return msg.channel.send("You can't set the volume more than **100**.");
    //:speaker: Volume changed from 20 to 20 ! The volume has been changed from ${queue.volume} to ${args[0]}
    msg.channel.send(
      ":loud_sound: Volume has been **changed** from (`" +
        queue.volume +
        "`) to (`" +
        args[0] +
        "`)"
    );

    queue.volume = args[0];

    disp.setVolumeLogarithmic(queue.volume / 100);
  } else if (cmd === "queue") {
    let queue = active.get(msg.guild.id);

    if (!queue)
      return msg.channel.send(
        ":no_entry_sign: There must be music playing to use that!"
      );

    let embed = new Discord.RichEmbed().setAuthor(
      `${client.user.username}`,
      client.user.displayAvatarURL
    );
    let text = "";

    for (var i = 0; i < queue.songs.length; i++) {
      let num;
      if (i > 8) {
        let st = `${i + 1}`;
        let n1 = Converter.toWords(st[0]);
        let n2 = Converter.toWords(st[1]);
        num = `:${n1}::${n2}:`;
      } else {
        let n = Converter.toWords(i + 1);
        num = `:${n}:`;
      }
      text += `${num} ${queue.songs[i].title} [${queue.songs[i].duration}]\n`;
    }
    embed.setDescription(`Songs Queue | ${msg.guild.name}\n\n ${text}`);
    msg.channel.send(embed);
  } else if (cmd === "repeat") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue || !queue.songs)
      return msg.channel.send("There is no music playing to repeat it.");

    if (queue.repeating) {
      queue.repeating = false;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`False`)"
      );
    } else {
      queue.repeating = true;
      return msg.channel.send(
        ":arrows_counterclockwise: **Repeating Mode** (`True`)"
      );
    }
  } else if (cmd === "forceskip") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (queue.repeating) {
      queue.repeating = false;

      msg.channel.send("ForceSkipped, Repeating mode is on.");

      queue.connection.dispatcher.end("ForceSkipping..");

      queue.repeating = true;
    } else {
      queue.connection.dispatcher.end("ForceSkipping..");

      msg.channel.send("ForceSkipped.");
    }
  } else if (cmd === "skipto") {
    let vCh = msg.member.voiceChannel;

    if (!vCh || vCh !== msg.guild.me.voiceChannel)
      return msg.channel.send("You are not in my voice channel");

    let queue = active.get(msg.guild.id);

    if (!queue.songs || queue.songs < 2)
      return msg.channel.send("There is no music to skip to.");

    if (queue.repeating)
      return msg.channel.send(
        "You can't skip, because repeating mode is on, run " +
          `\`${prefix}repeat\` to turn off.`
      );

    if (!args[0] || isNaN(args[0]))
      return msg.channel.send(
        "Please input song number to skip to it, run " +
          prefix +
          `queue` +
          " to see songs numbers."
      );

    let sN = parseInt(args[0]) - 1;

    if (!queue.songs[sN])
      return msg.channel.send("There is no song with this number.");

    let i = 1;

    msg.channel.send(
      `Skipped to: **${queue.songs[sN].title}[${queue.songs[sN].duration}]**`
    );

    while (i < sN) {
      i++;
      queue.songs.shift();
    }

    queue.connection.dispatcher.end("SkippingTo..");
  } else if (cmd === "Nowplaying") {
    let q = active.get(msg.guild.id);

    let now = npMsg(q);

    msg.channel.send(now.mes, now.embed).then(me => {
      setInterval(() => {
        let noww = npMsg(q);
        me.edit(noww.mes, noww.embed);
      }, 5000);
    });

    function npMsg(queue) {
      let m =
        !queue || !queue.songs[0] ? "No music playing." : "Now Playing...";

      const eb = new Discord.RichEmbed();

      eb.setColor(msg.guild.me.displayHexColor);

      if (!queue || !queue.songs[0]) {
        eb.setTitle("No music playing");
        eb.setDescription(
          "\u23F9 " + bar(-1) + " " + volumeIcon(!queue ? 100 : queue.volume)
        );
      } else if (queue.songs) {
        if (queue.requester) {
          let u = msg.guild.members.get(queue.requester.id);

          if (!u) eb.setAuthor("Unkown (ID:" + queue.requester.id + ")");
          else eb.setAuthor(u.user.tag, u.user.displayAvatarURL);
        }

        if (queue.songs[0]) {
          try {
            eb.setTitle(queue.songs[0].title);
            eb.setURL(queue.songs[0].url);
          } catch (e) {
            eb.setTitle(queue.songs[0].title);
          }
        }
        eb.setDescription(embedFormat(queue));
      }

      return {
        mes: m,
        embed: eb
      };
    }

    function embedFormat(queue) {
      if (!queue || !queue.songs) {
        return "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(100);
      } else if (!queue.playing) {
        return (
          "No music playing\n\u23F9 " + bar(-1) + " " + volumeIcon(queue.volume)
        );
      } else {
        let progress = queue.connection.dispatcher.time / queue.songs[0].msDur;
        let prog = bar(progress);
        let volIcon = volumeIcon(queue.volume);
        let playIcon = queue.connection.dispatcher.paused ? "\u23F8" : "\u25B6";
        let dura = queue.songs[0].duration;

        return (
          playIcon +
          " " +
          prog +
          " `[" +
          formatTime(queue.connection.dispatcher.time) +
          "/" +
          dura +
          "]`" +
          volIcon
        );
      }
    }

    function formatTime(duration) {
      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return (hours > 0 ? hours + ":" : "") + minutes + ":" + seconds;
    }

    function bar(precent) {
      var str = "";

      for (var i = 0; i < 12; i++) {
        let pre = precent;
        let res = pre * 12;

        res = parseInt(res);

        if (i == res) {
          str += "\uD83D\uDD18";
        } else {
          str += "▬";
        }
      }

      return str;
    }

    function volumeIcon(volume) {
      if (volume == 0) return "\uD83D\uDD07";
      if (volume < 30) return "\uD83D\uDD08";
      if (volume < 70) return "\uD83D\uDD09";
      return "\uD83D\uDD0A";
    }
  }
});


client.on('message',  async  message  =>  {
      let  user  =  message.mentions.users.first();
      let mention = message.mentions.members.first();
      let  reason  =  message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix  +  'warn'))  {
      if(!message.member.hasPermission('MUTE_MEMBERS')) return;
      if(!user)  return  message.channel.send("**-Mention an Member**")
      if(!reason)  return  message.channel.send("**-Type Reason**")
      let  reportembed  =  new  Discord.RichEmbed()
      .setTitle(`**New  Warned User !**`)
    .addField("**-Warned  User:**",  `[${user}] ID [${user.id}]`)
    .addField('**-Warned  By:**',`[${message.author}] ID [${message.author.id}]`)  
    .addField('**-Reason:**',  `[${reason}]`,  true)
    .addField("**-Warned  in:**",`[${message.channel.name}]`)
    .addField("**-Time & Date:**",`[${message.createdAt}]`)
    .setFooter("Infinty")
  .setColor("RANDOM")
    let incidentchannel = message.guild.channels.find(`id`, "722741943834247239");
    if(!incidentchannel) return message.channel.send("**Can't find Warns Channel! To Make Type \`-setwarns\`To Make**");
    incidentchannel.send(reportembed);
    message.channel.send(`**✅ ${mention.user.username} has been warned**`).then(m => m.delete(3000))
    user.send(`** You are has been warned in ${message.guild.name} reason: ${reason} :warning:**`)
    }
    })


const os = require('os');


 client.on('message', message => {
    if (message.content == prefix + "bot") {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('000000')
            .setTitle('**About Plume Bot**')
            .addField('__Ping__' , `» [ ${Date.now() - message.createdTimestamp} ]` + 'MS' , true)
            .addField('__RAM Usage__ ', `» ${(process.memoryUsage().rss / 1048576).toFixed()} ]MB`, true)
            .addField('__Servers__ ', `» ${client.guilds.size}`, true)
            .addField('__Channels__', `» ${client.channels.size}` , true)
            .addField('__Users__',`» ${client.users.size}` , true)
            .addField('__Name__' , `» ${client.user.tag}` , true)
            .addField('__ID __' , `»  ${client.user.id}` , true)
			      .addField('__Prefix __' , `» > `, true)
			      .addField('__Language__', `» Java Script` , true)
            .addField('__Developer__' , `<@641272651427479562>` , true) 
    })
    
}
});


const Enmap = require('enmap');
const cd = require('countdown');
const totime = require('to-time');
const dbg = new Enmap({ name: 'Giveaway' });


//////////////////console.log("[ Giveaways is Lunched. ] - MoJRemGames");


/////////////////
//gstart
client.on("ready", async () => {
  await dbg.defer;
  await console.log(`Logged in as [ ${client.user.username} ]!`);
  client.guilds.forEach(async g => {
    g.channels
      .filter(
        c =>
          c.type == "text" &&
          c.permissionsFor(client.user.id).has("VIEW_CHANNEL")
      )
      .forEach(async c => {
        let fetched = await c.fetchMessages();
        if (fetched.size == 0) return;
        let mess = await fetched.filter(
          r =>
            r.author.id === client.user.id &&
            r.content ==
              `**🎉 GIVEAWAY 🎉**`
        );
        if (mess.size == 0) return;
        mess.forEach(m => {
          if (!m) return;
          if (!dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`)) return;
          let time2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtime;
          let text2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gtext;
          let win2 = dbg.get(`giveaway.${g.id}.${c.id}.${m.id}.time`).gwin;
          if (time2 === null || time2 === undefined) return;
          let embed = new RichEmbed()
            .setColor("BLUE")
            .setAuthor(`${text2}`, g.iconURL)
            .setDescription(
              `React with 🎉 to enter!\nTime remaining: ${cd(
                new Date().getTime(),
                time2
              )}`
            )
            .setFooter(`Ends at`, client.user.avatarURL)
            .setTimestamp(time2);
          let embed2 = new RichEmbed()
            .setColor("RED")
            .setAuthor(text2, g.iconURL)
            .setFooter(`Ended at`);
          let ttimer = setInterval(async () => {
            if (
              !m ||
              m.content ==
                `🎉 **GIVEAWAY ENDED** 🎉`
            )
              return;
            let ttt = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
            if (ttt.includes(moment().diff(time2, "seconds")))
              return m.edit(
                `🎉 **GIVEAWAY** 🎉`,
                embed
                  .setColor("#ffb800")
                  .setDescription(
                    `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                      new Date().getTime(),
                      time2
                    )}`
                  )
              );
            m.edit(
              `🎉 **GIVEAWAY** 🎉`,
              embed.setDescription(
                `React with 🎉 to enter!\nTime remaining: ${cd(
                  new Date().getTime(),
                  time2
                )}`
              )
            );
            if (moment().isAfter(time2)) {
              m.reactions
                .filter(a => a.emoji.name == "🎉")
                .map(r =>
                  r.fetchUsers().then(u => {
                    let rusers = u
                      .filter(user => !user.bot)
                      .random(parseInt(win2));
                    m.edit(
                      `${g} GIVEAWAY ENDED ${g}`,
                      embed2
                        .setTimestamp()
                        .setDescription(`Winners:\n${rusers || "No winners"}`)
                    );
                    if (
                      m.reactions
                        .filter(a => a.emoji.name == "🎉")
                        .map(reaction => reaction.count)[0] <= 1
                    ) {
                      return m.channel.send(`No winners :rolling_eyes:`);
                    } else {
                      m.channel.send(
                        `Congratulations ${rusers}! You won the **${text2}**`
                      );
                    }
                    dbg.delete(`giveaway.${g.id}.${c.id}.${m.id}.time`);
                    clearInterval(ttimer);
                    return;
                  })
                );
            }
          }, 5000);
        });
      });
  });
});
//client.on('error', console.error);
//client.on('warn', warn => console.warn(`[WARN] - ${warn}`));
process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", reason.stack || reason);
});
client.on("message", async message => {
  //let g = client.guilds
  //  .get("606910399811420175")
  //    .emojis.find(r => r.name === "start");
  if (message.author.bot || message.channel.type == "dm") return undefined;
  let args = message.content.split(" ");
  let timer;
  if (args[0] == `${prefix}start`) {
  message.delete()
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1] || !args[2] || !args[3])
        return message.channel.send(
          `**Usage:** **\`${prefix}start [Time] [Winners] [Giveaway Prize]\n\`** **Example:** **\`${prefix}start 4h 1 Nitro\`**`
        );
      if (!message.guild.member(client.user).hasPermission("EMBED_LINKS"))
        return message.channel.send(`I don't have **Embed Links** permission.`);
      if (ms(args[1]) === undefined)
        return message.channel.send(`Please use a proper time format.`);
      if (isNaN(args[2]))
        return message.channel.send(`Winners must be number!`);
      if (args[2] < 1 || args[2] > 10)
        return message.channel.send(`Winners must be bettwen 1 and 10.`);
      let timega = ms(args[1]) / 1000;
      let time = Date.now() + totime.fromSeconds(timega).ms();
      if (timega < 5)
        return message.channel.send(
          `Giveaway time can't be less than 5 seconds.`
        );
      let timespan = cd(new Date().getTime(), time);
      let rusers;
      let embed = new RichEmbed()
        .setColor("BLUE")
        .setAuthor(`${args.slice(3).join(" ")}`)
        .setDescription(
          `React with 🎉 to enter!\nTime remaining: ${timespan}`
        )
        .setFooter(`Ends at`, client.user.avatarURL)
        .setTimestamp(time);
      let embed2 = new RichEmbed()
        .setColor("RED")
        .setAuthor(args.slice(3).join(" "))
        .setFooter(`Ended at`);
      let msg = await message.channel
        .send(
          `**🎉 GIVEAWAY 🎉**`,
          embed
        )
        .catch(err => message.channel.send(`Error: \`${err}\``));
      dbg.set(
        `giveaway.${message.guild.id}.${message.channel.id}.${msg.id}.time`,
        {
          gtime: time,
          gid: msg.id,
          gtext: args.slice(3).join(" "),
          gwin: args[2]
        }
      );
      await msg.react("🎉");
      timer = setInterval(() => {
        if (
          !msg ||
          msg.content ==
            `**🎉 GIVEAWAY ENDED 🎉**`
        )
          return;
        let ttt = [-2, -3, -4, -5, -6, -7, -8, -9, -10];
        if (ttt.includes(moment().diff(time, "seconds")))
          return msg.edit(
            `**🎉 GIVEAWAY 🎉**`,
            embed
              .setColor("#ffb800")
              .setDescription(
                `**Last chance to enter!!!**\nReact with 🎉\nTime remaining: ${cd(
                  new Date().getTime(),
                  time
                )}`
              )
          );
        msg.edit(
          `**🎉 GIVEAWAY 🎉**`,
          embed.setDescription(
            `React with 🎉 to enter!\nTime remaining: ${cd(
              new Date().getTime(),
              time
            )}`
          )
        );
        rusers = msg.reactions
          .filter(a => a.emoji.name == "🎉")
          .map(reaction =>
            reaction.users.filter(u => !u.bot).random(parseInt(args[2]))
          )[0];
        if (moment().isAfter(time)) {
          msg.edit(
            `** GIVEAWAY ENDED 🎉**`,
            embed2
              .setTimestamp()
              .setDescription(`Winners:\n${rusers || "No winners"}`)
          );
          if (
            msg.reactions
              .filter(a => a.emoji.name == "🎉")
              .map(reaction => reaction.count)[0] <= 1
          ) {
            return message.channel.send(``);
          } else {
            msg.channel.send(
              `Congratulations ${rusers}! You won the **${args
                .slice(3)
                .join(" ")}**`
            );
          }
          clearInterval(timer);
          return;
        }
      }, 5000);
    } else return undefined;
  } else if (args[0] == `${prefix}groll`) {
    message.delete()
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1])
        return message.channel.send(
          `**Usage:** **\`${prefix}groll [giveaway message id]\`**`
        );
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel
        .fetchMessage(args[1])
        .then(async m => {
          if (m.author.id != client.user.id)
            return message.channel.send(`This is not a giveaway message.`);
          if (!m.content.startsWith(`**🎉 GIVEAWAY**`))
            return message.channel.send(`This is not a giveaway message.`);
          if (
            m.content !=
            `**🎉 GIVEAWAY ENDED 🎉**`
          )
            return message.channel.send(`The giveaway is not ended.`);
          if (m.reactions.size < 1)
            return message.channel.send(
              `I can't find reactions in this message.`
            );
          if (
            m.reactions
              .filter(a => a.emoji.name == "🎉")
              .map(reaction => reaction.count)[0] <= 1
          )
            return message.channel.send(``);
          m.reactions
            .filter(a => a.emoji.name == "🎉")
            .map(r =>
              r.fetchUsers().then(async u => {
                let rusers = u.filter(user => !user.bot).random();
                await message.channel.send(`The new winner is: ${rusers}`);
              })
            );
        })
        .catch(err =>
          message.channel.send(`I can't find this message in the channel.`)
        );
    } else return undefined;
  } else if (args[0] == `${prefix}gend`) {
    message.delete()
    if (
      message.member.hasPermission("MANAGE_GUILD") ||
      message.member.roles.find(r => r.name == "GIVEAWAYS")
    ) {
      if (!args[1])
        return message.channel.send(
          `**Usage:** **\`${prefix}gend [giveaway message id]\`**`
        );
      if (isNaN(args[1])) return message.channel.send(`Thats not a message ID`);
      message.channel
        .fetchMessage(args[1])
        .then(async m => {
          if (m.author.id != client.user.id)
            return message.channel.send(`This is not a giveaway message.`);
          if (!m.content.startsWith(`**🎉 GIVEAWAY**`))
            return message.channel.send(`This is not a giveaway message.`);
          if (
            m.content ==
            `**🎉 GIVEAWAY ENDED 🎉**`
          )
            return message.channel.send(`The giveaway is ended.`);
          if (m.reactions.size < 1)
            return message.channel.send(
              `I can't find reactions in this message.`
            );
          let gv = dbg.get(
            `giveaway.${message.guild.id}.${message.channel.id}.${m.id}.time`
          );
          let rusers = m.reactions.map(r =>
            r.users.filter(u => !u.bot).random(parseInt(gv.gwin))
          );
          let embed2 = new RichEmbed()
            .setColor("RED")
            .setAuthor(gv.gtext)
            .setFooter(`Ended at`);
          m.reactions
            .filter(a => a.emoji.name == "🎉")
            .map(r =>
              r.fetchUsers().then(async u => {
                let rusers = u
                  .filter(user => !user.bot)
                  .random(parseInt(gv.gwin));
                m.edit(
                  `**🎉 GIVEAWAY ENDED 🎉**`,
                  embed2
                    .setTimestamp()
                    .setDescription(`Winners:\n${rusers || "No Winners"}`)
                );
                if (
                  m.reactions
                    .filter(a => a.emoji.name == "🎉")
                    .map(reaction => reaction.count)[0] <= 1
                ) {
                  return message.channel.send(`No winners :rolling_eyes:`);
                } else {
                  message.channel.send(
                    `Congratulations ${rusers}! You won the **${gv.gtext}**`
                  );
                }
                await dbg.delete(
                  `giveaway.${message.guild.id}.${message.channel.id}.${m.id}.time`
                );
                return;
              })
            );
        })
        .catch(err =>
          message.channel.send(`I can't find this message in the channel.`)
        );
    } else return undefined;
  }
})


 client.on('ready', function(){
    client.user.setStatus("idle");
    var ms = 5000 ;
    var setActivity = [`ACL SQUDE`,`${prefix}help`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setActivity.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setActivity(setActivity[i], {
type: "WATCHING",
url: "https://www.twitch.tv/ninja"})
    }, ms);5000

    console.log('hyper is oline');

});



 client.on('message', message =>{
  if(message.content.startsWith(prefix + 'add')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.channel.send('**Please type the emoji ID after the command!**')
    if(args.length < "18" || args.length > "18" || isNaN(args)) return message.channel.send(`**This emoji Can't be Found :x:**`)
    message.guild.createEmoji(`https://cdn.discordapp.com/emojis/${args}.png`, `${args}`).catch(mstry => {
     return message.channel.send(`**This emoji Can't be Found :x:**`)
    })
    message.channel.send(`**Successfully Added The Emoji ✅**`)
  }
});
