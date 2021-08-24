const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const emoji = require(`../../botconfig/emojis.json`);
const {
  getRandomInt
} = require("../../handlers/functions")
module.exports = {
  name: "stats",
  category: "🔰 Info",
  aliases: ["musicstats"],
  cooldown: 10,
  usage: "stats",
  description: "Shows music Stats, like amount of Commands and played Songs etc.",
  run: async (client, message, args, cmduser, text, prefix) => {
    let es = client.settings.get(message.guild.id, "embed")
    try {
      
      let global = client.stats.get("global");
      let guild = client.stats.get(message.guild.id);


      let size = client.setups.filter(s => s.textchannel != "0").size + client.guilds.cache.array().length / 3;
      if (size > client.guilds.cache.array().length) size = client.guilds.cache.array().length;
      message.channel.send(new MessageEmbed().setColor(es.color).setThumbnail(es.thumb ? es.footericon : null).setFooter(es.footertext, es.footericon)
        .addField("⚙️ GLOBAL Commands used:", `>>> \`${Math.ceil(global.commands * client.guilds.cache.array().length / 10)} Commands\` used\nin **all** Servers`, true)
        .addField("🎵 GLOBAL Songs played:", `>>> \`${Math.ceil(global.songs * client.guilds.cache.array().length / 10)} Songs\` played in\n**all** Servers`, true)
        .addField("📰 GLOBAL Setups created:", `>>> \`${Math.ceil(size)} Setups\` created in\n**all** Servers`, true)
        .addField("\u200b", "\u200b")
        .addField("⚙️ SERVER Commands used:", `>>> \`${guild.commands} Commands\` used in\n**this** Server`, true)
        .addField("🎵 SERVER Songs played:", `>>> \`${guild.songs} Songs\` played in\n**this** Server`, true)
        .setTitle(`💿 The Stats of ${client.user.username}`)
      );
    } catch (e) {
      console.log(String(e.stack).bgRed)
      return message.channel.send(new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(es.footertext, es.footericon)
        .setTitle(`<a:Deny:863000078690811905> An error occurred`)
        .setDescription(`\`\`\`${String(JSON.stringify(e)).substr(0, 2000)}\`\`\``)
      );
    }
  }
}
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
