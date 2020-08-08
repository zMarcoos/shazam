const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const canal = client.channels.cache.get("741647394218967050");
    message.delete();
    message.author.send(`Opa, ${message.author}! Você anda meio cansado ultimamente, né? Nada melhor do que marcar uma ausência.`).catch(err => {
        if(err) return message.reply("eu não consegui mandar uma mensagem para você. Verifique se suas mensagens privadas estão ativadas.");
        message.reply("a");
    });
    message.author.send("Você deseja mesmo marcar uma ausência? Responda com `sim` ou `não`.").then(m => {
        const filtro = m => m.author.id === message.author.id;
        m.channel.awaitMessages(filtro, { max: 1, time: 60000}).then(collected => {
            var confirmacao = collected.first().content;
            if(confirmacao.toLowerCase() === "sim") {
                m.channel.send("Tudo bem então, mas qual motivo desta ausência?");
                m.channel.awaitMessages(filtro, { max: 1, time: 300000 }).then(motivocoletado => {
                    var motivo = motivocoletado.first().content;
                    m.channel.send("Tudo certo. Mas por quanto tempo você vai ficar ausente? Informe uma data. (Tempo indeterminado não é aceitável)");
                    m.channel.send("Exemplo: ``dd/mm/yyyy - dd/mm/yyyy``");
                    m.channel.awaitMessages(filtro, { max: 1, time: 300000 }).then(periodocoletado => {
                        var periodo = periodocoletado.first().content;
                        m.channel.send(`Mesmo com tanta falação ainda não nos apresentamos. Meu nick é zMarquinhos, e o seu?`);
                        m.channel.awaitMessages(filtro, { max: 1, time: 300000 }).then(nickcoletado => {
                            var nick = nickcoletado.first().content;
                            m.channel.send("Parece que chegamos ao fim. Tenha o seu merecido descanso!");
                            m.channel.send("Ausência marcada com sucesso.");
                            const embed = new Discord.MessageEmbed()
                                .setColor("GREEN")
                                .setAuthor(`${message.author.tag} marcou uma ausência!`, message.author.avatarURL())
                                .addField("Nickname:", nick, false)
                                .addField("Motivo:", motivo, false)
                                .addField("Período:", periodo, false)
                                .setFooter(message.guild.name, message.guild.iconURL())
                                .setTimestamp()
                            canal.send(embed);
                            return;
                        }).catch(() => {
                            m.channel.send("Você não deu uma resposta no tempo proposto, logo este processo foi encerrado sem êxito.");
                            return;
                        });
                    }).catch(() => {
                        m.channel.send("Você não deu uma resposta no tempo proposto, logo este processo foi encerrado sem êxito.");
                        return;
                    });
                }).catch(() => {
                    m.channel.send("Você não deu uma resposta no tempo proposto, logo este processo foi encerrado sem êxito.");
                    return;
                });
            }else if(confirmacao.toLowerCase() === "não"){
                m.channel.send("Tudo bem. Tenha mais atenção ao utilzar esta função sem necessidade.");
                return;
            }else{
                m.channel.send("Sua resposta não foi sim e nem não, então recomendo que não brinque com as funções da equipe.");
                return;
            }
        }).catch(() => {
            m.channel.send("Você não deu uma resposta no tempo proposto, logo este processo foi encerrado sem êxito.");
            return;
        });
    });
}

module.exports.help = {
    name: "ausencia",
    aliases: ['ausentar']
}