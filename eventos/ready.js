const { client } = require("../index");
client.on('ready', async () => {
    console.log(`${client.user.username} foi iniciado com sucesso. Transmitindo para ${client.users.cache.size} pessoas, ${client.channels.cache.size} canais e ${client.guilds.cache.size} servidores.`);
    let status = [
        { name: `no ShazamNetwork!`, type: 'PLAYING' },
        { name: `suas sugestões!`, type: 'LISTENING' },
        { name: `para ${client.users.cache.size} membros da equipe!`, type: 'STREAMING', url: 'https://twitch.tv/MarcosGRGames' }
    ];
    function setStatus() {
        let randomStatus = status[Math.floor(Math.random() * status.length)];
        client.user.setActivity(randomStatus);
    };
    setInterval(() => setStatus(), 5000);
});
client.login(process.env.TOKEN);
