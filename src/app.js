const TelegramBot = require('node-telegram-bot-api');
const config = require('./config/config');

const bot = new TelegramBot(config.telegram.token, config.telegram.dep);

bot.getMe().then((me) => {
	console.log(me);
});
