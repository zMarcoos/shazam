const { client } = require("../index");
const Discord = require("discord.js");

//canal #servidor
client.on('messageReactionAdd', (MensagemReagida, Usuario) => {
    const quemReagiu = MensagemReagida.message.guild.members.cache.get(Usuario.id);
    var quemEnviou = MensagemReagida.message.guild.members.cache.get(MensagemReagida.message.author.id);
    if(Usuario.bot) return;
    if (MensagemReagida.message.channel.id !== "680810357912371210") return;
    if(!(quemReagiu.hasPermission("MANAGE_MESSAGES"))) return;
    MensagemReagida.message.delete();
    var d = MensagemReagida.message.createdAt;
    var dia = d.getDate();
    var mes = d.getMonth() + 1;
    var ano = d.getFullYear();
    var hora = d.getHours();
    var minuto = d.getMinutes();
    var diaatual = dia - 1;
    if (hora == 0) {
        hora = "21";
        dia = diaatual.toString();
    } else if (hora == 1) {
        hora = "22";
        dia = diaatual.toString();
    } else if (hora == 2) {
        hora = "23";
        dia = diaatual.toString();
    } else if (hora == 3) {
        hora = "00";
    } else if (hora == 4) {
        hora = "01";
    } else if (hora == 5) {
        hora = "02";
    } else if (hora == 6) {
        hora = "03";
    } else if (hora == 7) {
        hora = "04";
    } else if (hora == 8) {
        hora = "05";
    } else if (hora == 9) {
        hora = "06";
    } else if (hora == 10) {
        hora = "07";
    } else if (hora == 11) {
        hora = "08";
    } else if (hora == 12) {
        hora = "09";
    } else if (hora == 13) {
        hora = "10";
    } else if (hora == 14) {
        hora = "11";
    } else if (hora == 15) {
        hora = "12";
    } else if (hora == 16) {
        hora = "13";
    } else if (hora == 17) {
        hora = "14";
    } else if (hora == 18) {
        hora = "15";
    } else if (hora == 19) {
        hora = "16";
    } else if (hora == 20) {
        hora = "17";
    } else if (hora == 21) {
        hora = "18";
    } else if (hora == 22) {
        hora = "19";
    } else if (hora == 23) {
        hora = "20";
    }
    if (dia <= 9) {
        dia = `0${dia}`
    }
    if (mes <= 9) {
        mes = `0${mes}`
    }
    if (hora <= 9) {
        hora = `0${hora}`
    }
    if (minuto <= 9) {
        minuto = `0${minuto}`
    }
    const msgconteudo = MensagemReagida.message.content;
    const canalresposta = client.channels.cache.get("723243965691854868");
    const embed = new Discord.MessageEmbed()
    switch (MensagemReagida.emoji.id) {
        case "743180268830982225":
            embed.setColor("00e700")
            embed.setAuthor(`${quemReagiu.displayName} aceitou a seguinte sugestão, enviada por ${quemEnviou.displayName} no dia ${dia}/${mes}/${ano} às ${hora}:${minuto}:`, Usuario.avatarURL({dynamic: true}))
            embed.setDescription(msgconteudo)
            embed.setFooter("Horário:", "https://cdn.discordapp.com/emojis/743180268830982225.png?v=1")
            embed.setTimestamp()
            canalresposta.send(embed);
            break;
        case "743180268931645560":
            embed.setColor("c40023")
            embed.setAuthor(`${quemReagiu.displayName} negou a seguinte sugestão, enviada por ${quemEnviou.displayName} no dia ${dia}/${mes}/${ano} às ${hora}:${minuto}:`, Usuario.avatarURL())
            embed.setDescription(msgconteudo)
            embed.setFooter("Horário:", "https://cdn.discordapp.com/emojis/743180268931645560.png?v=1")
            embed.setTimestamp()
            canalresposta.send(embed);
            break;
        case "743180268885508136":
            embed.setColor("ff9100")
            embed.setAuthor(`${quemReagiu.displayName} repassou o seguinte problema, reportado por ${quemEnviou.displayName} no dia ${dia}/${mes}/${ano} às ${hora}:${minuto}:`, Usuario.avatarURL())
            embed.setDescription(msgconteudo)
            embed.setFooter("Horário:", "https://cdn.discordapp.com/emojis/743180268885508136.png?v=1")
            embed.setTimestamp()
            canalresposta.send(embed);
            break;
        default:
            MensagemReagida.message.channel.send("Este emoji não corresponde a nenhuma ação.");
            break;
    }
});
