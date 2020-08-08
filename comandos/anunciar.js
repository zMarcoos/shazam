const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(!(message.member.hasPermission("MANAGE_MESSAGES"))) return;
    message.delete();
    let mensagem = args.slice(0).join(" ");
    if(!(mensagem)) return message.reply("digite algo para anunciar.").then(m => {
        return m.delete({timeout: 5000});
    });
    message.channel.send(mensagem);
}
module.exports.help = {
    name: 'anunciar',
    aliases: ['say', 'falar']
};