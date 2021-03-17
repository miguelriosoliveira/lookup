require("dotenv/config");
const sendgrid = require("@sendgrid/client");

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sendgrid.setApiKey(SENDGRID_API_KEY);

sendgrid
  .request({
    method: "POST",
    url: "/v3/validations/email",
    body: {
      email: "miguelriosoliveira@gmail.com",
      source: "signup",
    },
  })
  .then(([response, body]) => {
    console.log(response.statusCode);
    console.log(body);
  })
  .catch((error) => {
    console.log("deu ruim");
    console.log(error);
    console.log(error.response.body);
  });
