const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Je suis connecté !")
    bot.user.setGame('OSiX, -help')
})

bot.login('TOKEN')
