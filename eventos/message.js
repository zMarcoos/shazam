const { client } = require("../index");

client.on('message', async message => {
    let prefix = "/";
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {
        message.delete({timeout: 5000});
        if(message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.author.send(`Os únicos comandos disponíveis aos membros da equipe são:\n- /ausencia (/ausentar)\n- /limpar (/clear ou /cc)\n- /anunciar (/say ou /falar)`);
        }else{
            return message.author.send(`Os únicos comandos disponíveis aos membros da equipe são:\n- /ausencia (/ausentar)`);
        }
    }
    if (!(message.content.startsWith(prefix))) return;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    let command;
    if (!message.content.startsWith(prefix)) return;
    try {
        if (client.commands.has(cmd)) {
            command = client.commands.get(cmd);
        } else {
            command = client.commands.get(client.aliases.get(cmd));
        }
        return command.run(client, message, args);
    } catch (err) {
        if (err === err) {
            message.delete();
            message.channel.send(`${message.author}, este comando não existe!`).then(mm => {
                mm.delete({ timeout: 5000 });
                message.delete({ timeout: 5000 });
            });
        }
    }
});