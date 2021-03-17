require("dotenv/config");
const Twilio = require("twilio");

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;

const twilio = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

twilio.lookups.v1
  .phoneNumbers("+5527998274655")
  .fetch({ type: ["carrier"] })
  .then((phone_number) => console.log(phone_number));
