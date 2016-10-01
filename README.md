# Telegram Bot

### Check @RockPaperScissorsGamerBot on Telegram

`config.json` structure:

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
