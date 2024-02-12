const client = require("../shiva");
const { Collection } = require("discord.js")
const fs = require("fs")
const config = require("../config");
const { MessageEmbed } = require('discord.js');

client.on("ready", () => {
client.user.setStatus("idle");
client.user.setActivity(config.BotDurum)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`${files.length} Total Command!`);
files.forEach(f => {
let props = require(`../commands/${f}`);

    
console.log(`${props.help.name} Komut Hazır! shiva kaptan`);
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);

});
});
});

});
