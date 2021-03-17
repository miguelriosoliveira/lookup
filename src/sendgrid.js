require("dotenv/config");
const axios = require("axios").default;

let options = {
  method: "POST",
  url: "https://api.sendgrid.com/v3/validations/email",
  headers: {
    "content-type": "application/json",
    authorization: "Bearer <<YOUR_API_KEY_HERE>>",
  },
  body: { email: "example@example.com", source: "signup" },
  json: true,
};

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

axios
  .post(
    "https://api.sendgrid.com/v3/validations/email",
    {
      email: "miguel@verifymyage.co.uk",
      source: "signup",
    },
    {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${SENDGRID_API_KEY}`,
      },
    }
  )
  .then((response) => console.log("DEU BOM", response))
  .catch((error) => {
    if (error.response) {
      console.log("tem error.response");
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log("tem error.request");
      // The request was made but no response was received
      console.log(error.request);
    } else {
      console.log("tem else");
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
  });
