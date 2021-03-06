const express = require("express");
const hbs = require("hbs");
const utils = require("./utils");
const path = require("path");

const app = express();
const pubDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "../templates/views");
const parDir = path.join(__dirname, "../templates/partials");

const port = process.env.PORT || 3000;

app.use(express.static(pubDir));

app.set("view engine", "hbs");
app.set("views", viewsDir);

hbs.registerPartials(parDir);

app.get("", (req, res) => {
    res.render("index");
});

app.get("/weather", (req, res) => {
    if(!req.query.loc) {
        return res.send({error: 'Please provide the location'});
    }

    utils.weatherAPI(req.query.loc, (err, data) => {
        res.send({err, data});
    })

});

app.listen(port, () => console.log(`Server port ${port} started...`));

