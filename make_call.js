// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC2e33588d02f127da17a52cd5711b3fcd';
const authToken = '209096d8e658f0bc43322fda850fb506';
const client = require('twilio')(accountSid, authToken);

client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+14084251550',
         from: '+18315349025'
       })
      .then(call => console.log(call.sid))
      .done();
