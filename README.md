# Telegram Bot

config.json structure:

### Check @RockPaperScissorsGamerBot on Telegram

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
