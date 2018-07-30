var mineflayer = require('mineflayer')

var bot = mineflayer.createBot({
    host: 'localhost',
    port: 25565,
    username: 'NJOFDSBGU'
})

bot.chat("test string")