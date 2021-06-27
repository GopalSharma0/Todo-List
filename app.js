
const express = require("express");
const bodyParser = require("body-parser");
// const path = require('path');
const ejs = require("ejs");



const app = express();
let items = [];
let workItem = [];
app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get("/", (req, res) => {

    // res.send("goingggggg")
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    let day = today.toLocaleDateString("en-US", options);
    res.render("index.ejs", { title: day, newItems: items });
});

app.post("/", (req, res) => {
    let item = req.body.inputName;
    // console.log(req.body.list);
    if (req.body.list === "work") {

        workItem.push(item)
        res.redirect("/work")
    }
    else {
        // console.log(item);
        items.push(item);
        res.redirect("/")
    }


})
app.get("/work", (req, res) => {
    res.render("index.ejs", { title: "work", newItems: workItem })
})

app.get("/about", (req, res) => {
    res.render("about.ejs")
});
// app.post("/work", (req, res) => {
//     let item = req.body.inputName;
//     workItem.push(item);

//     res.redirect("/")
// })


app.listen(3000, () => {
    console.log("runnin on port 3000");
})