module.exports = function(req, res, next){
	const userName = req.body.user_name;
	const botPayload = {
		text: 'Hello ' + userName + '!'
	};

	// All hooks post as “slackbot”, even if the name appears differently in cha
	if(userName !== 'slackbot'){
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
}