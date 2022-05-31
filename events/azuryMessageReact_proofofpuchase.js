const client = require("../index");
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
client.on("messageCreate", async (message) => {


 if (message.channel.id !== "978185098866327612"|| message.author.bot) return;
 SendInChannel();

 function SendInChannel() {
  const channel = client.channels.cache.get("978185098866327612");
  if (!channel) return;
  message.react("⭐")
  message.react("✅")
   }
})
