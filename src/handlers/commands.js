const keyboards = require('../config/keyboards');
const game = require('../gameEngine');
const User = require('../models/User');

module.exports = (message, bot) => {

  var msg = message.text;
  var chatId = message.chat.id;
  var userId = message.from.id;
  var quiry = {id: userId};
  var userInfo = {
    id: 0,
    name: message.from.first_name,
    wins: 0,
    looses: 0
  };

	if ((msg.indexOf('/start') >= 0) ||(msg.indexOf('Main menu') >= 0)) {
    	User.findOne(quiry, (err, _user) => {
        if(err)
          throw new Error('db-connect error');
        if(!_user){
          new User({
            id: userId,
            wins: 0,
            looses: 0
      		}).save(err => {
      			if(err) {
              throw new Error('db-save error');
            }
      		});
        } else {
            userInfo.wins = _user.wins || 0;
            userInfo.looses = _user.looses || 0;
            userInfo.balance = _user.balance || 0;
        }
      });
      bot.sendMessage(chatId,'Hello '+ userInfo.name,keyboards.main);
      bot.sendMessage(chatId,
        `Your personal statistic:
        wins: ${userInfo.wins}
        looses: ${userInfo.looses}`);
  }

  if(msg.indexOf('info') >= 0){}
	// if (message.indexOf('/game') >= 0 || message.indexOf(emoji.get(':white_check_mark:')) >= 0 || message.indexOf('Continue') >= 0) {}
  //
	// if ((message == emoji.get(':punch:') && gameStarted)||(message == emoji.get(':v:') && gameStarted)||(message == emoji.get(':raised_hand:') && gameStarted)) {}
  //
	// if (message.indexOf('/exit') >= 0) {}
  //
	// if (message.indexOf('/help') >= 0) {}

};
