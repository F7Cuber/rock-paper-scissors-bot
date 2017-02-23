# Telegram Bot

### Check @RockPaperScissorsGamerBot 👊✋✌️ on Telegram 

## Installation

```bash
git clone https://github.com/eugrdn/rock-paper-scissors-bot.git
rock-paper-scissors-bot
npm install
npm start
```
***Attention***

Don't forget to change telegram bot token and mongoose userURI:
```
{
  "telegram": {
    "token": "YOUR TELEGRAM BOT TOKEN",
    "options": {
      "polling": true
    }
  },
  "mongoose": {
    "options": {
      "config": {
        "autoIndex": false
      },
      "server": {
        "socketOptions": {
          "keepAlive": 1
        }
      }
    },
    "userURI": "YOUR MONGOLAB USER CONNECTION"
  }
}
```
