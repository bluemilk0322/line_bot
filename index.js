var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1555541271',
  channelSecret: 'e85c3a38cab5b3038d060eabfd6c55a8',
  channelAccessToken:'arTWuAxdsjsf0Qz+TgYZJZNBDJQGEqxL/z5OU0Itnag3bMPSJL2b3dytYzS3YIN5b6CTVd7rXuGvF0VEXSdcAjT0TCWQIAs/1vPttvHuHnvx4lhchYDlW3GiXhb4nCUx8JGxXRFxV60ct1dwKH7DAAdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
  });
  
  const app = express();
  const linebotParser = bot.parser();
  app.post('/', linebotParser);
  
  var server = app.listen(process.env.PORT || 5000, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

  bot.on('message', function(event) {
    if (event.message.type = 'text') {
      var msg = event.message.text;
      event.reply(msg).then(function(data) {
        // success 
        console.log(msg);
      }).catch(function(error) {
        // error 
        console.log('error');
      });
    }
  });

  setTimeout(function() {
    var userId = 'U0bcf07a9f406c9e8a4718d2069afc012';
    var sendMsg = "Fuck out";
    bot.push(userId, [sendMsg]);
    console.log('userId: ' + userId);
    console.log('send: ' + sendMsg);
}, 3000);