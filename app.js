var path = require("path");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Fuck off");
});

app.get("/real", (req, res) => {
  res.sendFile("./public/real.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
