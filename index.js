const Discord = require('discord.js');
const bot = new Discord.Client()
const dice =require('./command/dice')

bot.login('Njk1MjQ0NjYyOTc3MzMxMzgy.Xod-dw.WDhRNe8fV4ehYNSsZTqbYC1Rbug')

bot.on('ready', function () {
    console.log("Je suis connecté !")
  })

bot.on('message',function(message){
  if (message.content==='$ping'){ 
    message.channel.send('pong')
  }
})

bot.on('message',function(message){
  if (dice.match (message)){
    dice.roll(message)
  }
})

