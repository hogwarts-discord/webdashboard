//pls no leach kthnx
//Made by DubbyYT rightfully
//ps. Help from atlas.

const express = require("express");
const app = express()
const JSON = require('circular-json')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


module.exports.init = (client, port) => {
  if(!client){
    throw "Failure. No client provided. You shall not pass.";
  }

  if(!port){
    throw "Failure. No port provided. Please provide a port. This will later be used on the dashboard.";
  }

  app.get("/status/", function(req, res){
    res.send("ONLINE")
  })

  app.get("/status/guilds/", function(req, res){
    var arr = client.guilds.array()
    for ( i in arr ){
      var c = Array.from(arr[i].channels.values())
      arr[i].channels = c
      if(i == arr.length - 1){
        res.send(JSON.stringify(arr))
      }
    }
  })

  app.get("/status/client/", function(req, res){
    res.send(client)
  })

  app.get("/action/", function(req, res){
    var a = req.body.action
    var p = req.body.params

    if(a == "msg"){
      client.channels.find("id", p.id).send(p.content)
    }
  })

  app.get("/action/shutdown/", function(req, res){
    res.send("Shutdown")
    process.exit(1);
  })

  app.get("/action/reloadall/", function(req, res){
    var e = new discord.RichEmbed();
    e.setTitle(":warning: Command list reload requested from Dashboard. Reloading...")
    e.setColor("ORANGE")
    e.setFooter("Reload occured")
    e.setTimestamp();

    fs.readdir("./commands/", function(err, files){
      for(var i in files){
        delete require.cache[require.resolve('./commands/'+files[i])]
      }
      res.send("Reloaded")
      logsss.send(e)
    })
  })

  app.listen(port)
}
