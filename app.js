const express = require("express");
const bodyParser = require("body-parser");

console.log(process.cwd());
const generator = require("./public/javascripts/modules/generator");


const app = express();
const port = 3000;

var path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Fuck off");
});

app.get("/real", (req, res) => {
  console.log('yo')
  res.sendFile("./public/real.html", { root: __dirname });
});


app.post("/generate", (req, res) => {
  gen = new generator.Generator(req.body.bedrooms, req.body.bathrooms, req.body.sqft);
  console.log(req.body);
  res.send(JSON.stringify(gen.getCopy()));
});




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


