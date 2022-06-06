const path = require('path');
const express = require('express');
var bodyParser = require('body-parser')

const app = express();
const publicPath = path.join(__dirname, 'build');
const {resolve} = require('path');
const env = require('dotenv').config({path: './.env'});

app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const price_in_cents = process.env.REACT_APP_EVENT_PRICE * 100;

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
  appInfo: { // For sample support and debugging, not required for production:
    name: "access tezos payment",
    version: "0.0.1",
    url: "https://github.com/Blockchain-Alchemy/AccTez-Main"
  }
});


app.post('/create-payment-intent', async (req, res) => {
  
  // var now = new Date();
  // console.log(now.toUTCString());
  // console.log(req.body);

  const {paymentMethodType, currency} = req.body;

  const params = {
    "payment_method_types": [paymentMethodType],
    "amount": price_in_cents,
    "currency": currency,
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create(params);
    res.send({
      clientSecret: paymentIntent.client_secret,
      nextAction: paymentIntent.next_action,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})
