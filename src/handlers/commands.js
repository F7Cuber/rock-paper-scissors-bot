const keyboards = require('../config/keyboards');
const gameEngine = require('../gameEngine');
const User = require('../models/User');
const emoji = require('node-emoji');

const SIGNS = {
	rock: emoji.get(':punch:'),
	paper: emoji.get(':raised_hand:'),
	scissors: emoji.get(':v:')
}

var isMessage = (msg, text) => {
	return msg.toLowerCase().indexOf(text.toLowerCase()) >= 0;
};

var setInfoMessage = (userInfo) => {
	return `Your personal statistic: 
						${emoji.get(':sunglasses:')} wins: ${userInfo.wins},
						${emoji.get(':neutral_face:')} draws: ${userInfo.draws},
						${emoji.get(':disappointed_relieved:')} looses: ${userInfo.looses}`;
};

var howToPlay = `Rock–paper–scissors is a game, in which each player simultaneously forms one of three shapes with an outstretched hand.
These shapes are "rock" (${SIGNS.rock}), "paper" (${SIGNS.paper}), and "scissors" (${SIGNS.scissors}).
Pay attention on result:
		${SIGNS.rock} > ${SIGNS.scissors}
		${SIGNS.paper} > ${SIGNS.rock}
		${SIGNS.scissors} > ${SIGNS.paper}
If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie.`;

var about = `This @RockPaperScissorsGamerBot is created by @evgrdn. 
Fork me on github https://github.com/rodinwow ${emoji.get(':wink:')}`;
var game_started = false;
var userInfo = {
		id: 0,
		wins: 0,
		draws: 0,
		looses: 0
	};

module.exports = (message, bot) => {

	var msg = message.text;

	var chatId = message.chat.id;

	var userId = message.from.id;

	var quiry = {
		id: userId
	};

	var game = gameEngine(bot, chatId, SIGNS);

		userInfo.name= message.from.first_name;

	if (isMessage(msg, 'start')) {

		bot.sendMessage(chatId, `Hello, ${userInfo.name}!`);

	}

	if (isMessage(msg, 'start') || isMessage(msg, 'menu')) {

		game_started = false;

		User.findOne(quiry, (err, _user) => {
			if (err)
				throw new Error('db-connect error');
			if (!_user) {
				new User({
					id: userId,
					wins: 0,
					draws: 0,
					looses: 0
				}).save(err => {
					if (err) {
						throw new Error('db-save error');
					}
				});
			} else {
				userInfo.wins = _user.wins || 0;
				userInfo.draws = _user.draws || 0;
				userInfo.looses = _user.looses || 0;
				userInfo.balance = _user.balance || 0;
			}
		});

		setTimeout(() => {
			bot.sendMessage(chatId, 'Wanna play with me?', keyboards.main_menu);
		}, 100);

	}

	if (msg == 'Play' || msg == '/game' || msg == 'Continue') {
		game_started = true;
		bot.sendMessage(chatId, 'Send your sign in ', keyboards.game_process);
		game.startCount();
	}

	if (isMessage(msg, 'stats')) {

		bot.sendMessage(chatId, setInfoMessage(userInfo));

	}

	if (isMessage(msg, 'how to')) {
		bot.sendMessage(chatId, howToPlay);
	}

	if (isMessage(msg, 'about')) {
		bot.sendMessage(chatId, about);
	}

	if ((msg == SIGNS.rock && game_started) ||
		(msg == SIGNS.paper && game_started) ||
		(msg == SIGNS.scissors && game_started)) {

		var result = game.start(msg);

		setTimeout(() => {
			bot.sendMessage(chatId, result, keyboards.game_continue);;
		}, 100);

		User.findOne(quiry, (err, _user) => {

			if (err)
				throw new Error('db-connect error');
			if (result == 'Draw!')
				_user.draws += 1;
			else if (result == 'You win!')
				_user.wins += 1;
			else
				_user.looses += 1;

			_user.save(err => {
				if (err) {
					throw new Error('db-save error');
				}
			});
		});

	}

};