const { Client } = require('discord.js');
const config = require("../config");

exports.run = async (client, message, args) => {
    if (message.content.includes(config.tag)) {
        let familyRole = message.guild.roles.cache.find(role => role.name === 'familyRol');
        if (familyRole) {
            try {
                await message.member.roles.add(familyRole);
                console.log(`Family role added to ${message.author.username}`);
                message.channel.send(`Hoş geldin ${message.author}, ailemize katıldığın için teşekkürler!`);
            } catch (error) {
                console.error("Couldn't add family role to the member:", error);
            }
        } else {
            console.error("Family role not found.");
        }
    }
};

exports.conf = {
    aliases: ["tag"]
};

exports.help = {
    name: "tag"
};
