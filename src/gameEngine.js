function GameEngine(bot, chat, SINGS) {
	const _chat = chat;
	const _bot = bot;
	const _signs = SINGS;

	var startCount = () => {
		var counter = 3;
		var timerId = setInterval(() => {
			_bot.sendMessage(_chat, counter + '..');
			counter--;
			if (counter == 0)
				clearInterval(timerId);
		}, 500);
	};

	var generateResponseSign = () => {
		var resp = Math.floor(Math.random() * 3);

		switch (resp) {
			case 0:
				return _signs.rock;
			case 1:
				return _signs.paper;
			case 2:
				return _signs.scissors;
			default:
				return false;
		}
	}

	var getResult = (user, bot) => {
		if (user == bot) return 'Draw!';

		if (user == _signs.rock && bot == _signs.paper)
			return 'You loose!';

		if (user == _signs.rock && bot == _signs.scissors)
			return 'You win!';

		if (user == _signs.paper && bot == _signs.rock)
			return 'You win!';

		if (user == _signs.paper && bot == _signs.scissors)
			return 'You loose!';

		if (user == _signs.scissors && bot == _signs.rock)
			return 'You loose!';

		if (user == _signs.scissors && bot == _signs.paper)
			return 'You win!';
	}

	var start = (userSign) => {
		var botSign = generateResponseSign();
		bot.sendMessage(_chat, botSign);

		return getResult(userSign, botSign);
	}

	return {
		startCount: startCount,
		start: start
	}
}

module.exports = GameEngine;