const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Je suis connecté !")
    bot.user.setGame('OSiX, -help')
})

bot.login('NTA2MDgxMTc2MDAwMzk3MzEz.Drc85A.06B2X9lGAhCGu1t4QkZddOo-Mi0')
