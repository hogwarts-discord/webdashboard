Welcome to Bot Dashboard for Discord.js!

This can allow you to use the dashboard located at: https://dubgames.net/botdash.html
with your bot and shutdown and reloadall commands. and more to come.

##Getting started:
Thankfully, This is a one line code addition.

Simply install bot-dashboard with your bot using:
**npm i bot-dashboard --save**

Then, Add this line of code to your client ready callback on your bots code:
**const dash = require('djs-dashboard').init(client, port)**
Replace port with a random number from 1-40000 (Do not use 80)

After that, You're done.
Head down to https://dubgames.net/botdash.html
It will ask you for the port. Type in the one you used in place of port!
