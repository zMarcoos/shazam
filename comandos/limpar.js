const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!(message.member.hasPermission("MANAGE_MESSAGES"))) return;
    message.delete();
    if (message.channel.type === "dm") return;
    let totalDelMsg = parseInt(args[0]);
    const pegada = await message.channel.messages.fetch({ limit: totalDelMsg });
    if (!args[0]) {
        return message.reply(`digite /limpar <numero>!`).then(m1 => {
            setTimeout(function () {
                m1.delete();
            }, 5000);
        });
    }
    message.channel.bulkDelete(pegada);
    if (totalDelMsg < "2") {
        message.reply(`${totalDelMsg} mensagem foi apagada!`).then(m => {
            setTimeout(function () {
                m.delete();
            }, 3000);
        });
    }
    if (totalDelMsg > "1")
        message.reply(`${totalDelMsg} mensagens foram apagadas!`).then(m => {
            setTimeout(function () {
                m.delete();
            }, 3000);
        });
}
module.exports.help = {
    name: 'limpar',
    aliases: ['clear', 'cc']
};