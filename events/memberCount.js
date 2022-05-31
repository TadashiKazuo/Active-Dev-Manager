const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const client = require("../index");
const Discord = require(`discord.js`)
console.log(`[🔑 PRIVATE] Loaded the Private-Event: Member-Count`.blue.bold)
client.on('guildMemberAdd', member => {
  let myGuild = client.guilds.cache.get('895398888113049631'); 
  let UsermemberCount = myGuild.members.cache.filter(member => !member.user.bot).size;
  let TotalmemberCount = myGuild.memberCount;
let TotalmemberCountChannel = myGuild.channels.cache.get('947661201284923452'); 
   TotalmemberCountChannel.setName('👤 All Members: ' + TotalmemberCount)
     let UsermemberCountChannel = myGuild.channels.cache.get('939325788468174868'); 
   UsermemberCountChannel.setName('⍿🧑・Users: ' + UsermemberCount)
  if(member.user.bot) return;
  const join_emb = new Discord.MessageEmbed()
  .setColor(`PURPLE`)
  .setTitle(`✌️ Welcome to ActiveDev ✌️`)
  .setDescription(`**ActiveDev is a place to have fun, talk to the community and even to Order a Sick bot made by us!**`)
  .setFooter(`Enjoy your stay at ActiveDev!`)
  member.send({ embeds: [join_emb] })
  myGuild.channels.cache.get("977175697363705876").send({ content: `<:joines:947127186362605598> **${member.user} Welcome to ActiveDev! We now have \`${TotalmemberCount}\` members!** ✌️` })
});

client.on('guildMemberRemove', member => {
  let myGuild = client.guilds.cache.get('895398888113049631'); 
  let UsermemberCount = myGuild.members.cache.filter(member => !member.user.bot).size;
  let TotalmemberCount = myGuild.memberCount;
let TotalmemberCountChannel = myGuild.channels.cache.get('947661201284923452'); 
   TotalmemberCountChannel.setName('👤 All Members: ' + TotalmemberCount)
     let UsermemberCountChannel = myGuild.channels.cache.get('939325788468174868'); 
   UsermemberCountChannel.setName('⍿🧑・Users: ' + UsermemberCount)
  if(member.user.bot) return;
  myGuild.channels.cache.get("977174868770566204").send({ content: `<:leaves:947127148563529739> **${member.user.username} left our server! We now have ${TotalmemberCount} members...** ✌️` })
});