// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

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

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
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