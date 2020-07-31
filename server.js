// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const {get} = require("request-promise-native");

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/premium", function (request, response) {
  response.sendFile(__dirname + '/views/premium.html');
});

app.get("/addbot", function (request, response) {
  response.redirect('https://discordapp.com/oauth2/authorize?client_id=629323586930212884&permissions=2146827775&redirect_uri=https%3A%2F%2Fdiscord.gg%2FkuWVFpR&response_type=code&scope=guilds.join%20bot')
});

app.get("/server", function (request, response) {
  response.redirect('https://discord.gg/dAggRh9')
});

app.get("/invite", function (request, response) {
  response.redirect('https://invite.gg/electro'); 
});
app.get("/api/:q", function (request, response) {
let options = {
url: "https://nekos.life/api/v2/img/"+request.params.q,
json: true
}
  get(options).then(async body => {
   const p = body.url.replace("https://cdn.nekos.life/","https://electro-bot.glitch.me/api/img/")
  response.json({url:p})
  })
});
app.get("/api/img/:w/:e", function (request, response) {
  response.redirect(`https://cdn.nekos.life/`+request.params.w+"/"+request.params.e);
})
app.get("/api/img/:z/:x/:y/:hash", function (request, response) {
  response.redirect(`https://cdn.nekobot.xyz/`+request.params.z+"/"+request.params.x+"/"+request.params.y+"/"+request.params.hash)
  })


// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.get("/uptime", function (request, response) {
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
  ];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})