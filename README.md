https://api.slack.com/docs/oauth
https://www.npmjs.com/package/dotenv
https://therine.slack.com/

+ Redirect URL for your app. This is the endpoint for Slack to send a unique temporary code to your server during a user’s installation. Your server will then send back this code, along with your Client ID and Client Secret
+ When a user clicks your Add to Slack button, a request is sent to Slack’s servers. The Client ID sent via the button click is validated and a code is sent as a GET request to your Redirect URL. The code is in a JSON object named query of the request, i.e. req.query.code

https://stdlib.com/@therine
https://medium.com/slack-developer-blog/build-a-serverless-slack-bot-in-9-minutes-with-node-js-and-stdlib-b993cfa15358

https://www.sitepoint.com/getting-started-slack-bots/