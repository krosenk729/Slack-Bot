require('dotenv').config();
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const app = express();


// Settings
// =============================================================

// Define port the server will be listening on.

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

let redirecturl = 'https://agile-brushlands-73489.herokuapp.com';


// Routes
// =============================================================

const botlogic = require('./botlogic');

app.get('/', (req, res) =>{
	res.status(200).send('Hello');
});

app.post('/hello', botlogic);

app.get('/auth', function(req, res){
	res.sendFile(__dirname + '/public/add_to_slack.html');
});

app.get('/auth/redirect', function(req, res){
    var options = {
        uri: 'https://slack.com/api/oauth.access?code='
            +req.query.code+
            '&client_id='+process.env.SLACK_CLIENT+
            '&client_secret='+process.env.SLACK_SECRET+
            '&redirect_uri='+process.env.SLACK_REDIRECT,
        method: 'GET'
    }
    request(options, (error, response, body) => {
        var JSONresponse = JSON.parse(body)
        if (!JSONresponse.ok){
            console.log(JSONresponse)
            res.send("Error encountered: \n"+JSON.stringify(JSONresponse)).status(200).end()
        }else{
            console.log(JSONresponse)
            res.send("Success!")
        }
    })
});


// Error Handler
// =============================================================
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(400).send(err.message);
});

// Run the Server
// =============================================================

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});