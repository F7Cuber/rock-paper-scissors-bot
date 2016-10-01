const TelegramBot = require('node-telegram-bot-api');
const config = require('./config/config');
const handlers = require('./handlers/commands');
const mongoose = require('mongoose');

const bot = new TelegramBot(config.telegram.token, config.telegram.options);
const options = config.mongoose.options;
const userURI = config.mongoose.userURI;

mongoose.connect(userURI, options, (err) => {
	if (err) console.log('Mongoose default connection error!' + err);
});
mongoose.Promise = global.Promise;

module.exports.start = () => {
	bot.getMe().then(me => console.log(me));
	bot.on('message', (msg) => {
		handlers(msg, bot);
	});
	module.exports.bot = bot;
};