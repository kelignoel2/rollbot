const Discord = require('discord.js');
const bot = new Discord.Client()
const dice =require('./command/dice')


const http = require('http');http.createServer((req, res) => {
  res.writeHead(200, {
      'Content-type': 'text/plain'
  });
      res.write('Hey');
      res.end();
  }).listen(4000);

const token_part = 'Njk1MjQ0NjYyOTc3MzMxMzgy.XoeIsw.'
const token_part_2 = 'SPvpBERvDYAMKaYGTKhghpqZBt4'
token=token_part.concat(token_part_2)

bot.login(token)

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