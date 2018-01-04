var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1555396741',
  channelSecret: 'c3b2c59f2dbab4131e33bbc9f7093b73',
  channelAccessToken:'SANNCBg73WAb60OORrk2d7MjfdcPi2EqYYENIz4VDzyBshrAGxTkiYnO+bp/j7yAGXA3rPe78R70WcKs7WhKZ3ey/HzmI+RpA8ZoxJmsb7TdTqFkiPaVwIhxTfcs3SN1nduFZt/KjkOU8CywC4VirAdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
  });
  
  const app = express();
  const linebotParser = bot.parser();
  app.post('/', linebotParser);
  
  var server = app.listen(process.env.PORT || 3000, function() {
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

  setTimeout(function(){
    var userId = 'bluemilk0322';
    var sendMsg = 'Fuck out';
    bot.push(userId,sendMsg);
    console.log('send: '+sendMsg);
},5000);