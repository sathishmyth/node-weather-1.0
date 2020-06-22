const express = require("express");
const hbs = require("hbs");
const utils = require("./utils");
const path = require("path");

const app = express();
const pubDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "../templates/views");
const parDir = path.join(__dirname, "../templates/partials");

app.use(express.static(pubDir));

app.set("view engine", "hbs");
app.set("views", viewsDir);

hbs.registerPartials(parDir);

app.get("", (req, res) => {
    res.render("index");
})

app.listen(3000, () => console.log("Server port 3000 started..."));

