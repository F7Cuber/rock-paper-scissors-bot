const emoji = require('node-emoji');

const keyboards = {
  'main': {
    reply_markup: {
      keyboard: [
        ['Start game '+ emoji.get(':white_check_mark:')],
        ['My stats ' + emoji.get(':no_entry:')],
        ['How to play? '+ emoji.get(':no_entry:'),'Rate bot '+ emoji.get(':no_entry:'), 'Help '+ emoji.get(':no_entry:')]
      ],
      resize_keyboard: true
    }
  },
  'game_continue': {
    reply_markup: {
      keyboard: [
        [emoji.get(':punch:'), emoji.get(':raised_hand:'), emoji.get(':v:')]
      ],
      resize_keyboard: true
    }
  }
};

module.exports = keyboards;
