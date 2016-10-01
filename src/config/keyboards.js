const emoji = require('node-emoji');

const keyboards = {
	'main_menu': {
		reply_markup: {
			keyboard: [
				['Play', 'My stats'],
				['How to play?', 'About']
			],
			resize_keyboard: true
		}
	},
	'game_process': {
		reply_markup: {
			keyboard: [
				[emoji.get(':punch:'), emoji.get(':raised_hand:'), emoji.get(':v:')]
			],
			resize_keyboard: true
		}
	},
	'game_continue': {
		reply_markup: {
			keyboard: [
				['Continue', 'Main menu'],
			],
			resize_keyboard: true
		}
	}
};

module.exports = keyboards;