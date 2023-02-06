const express = require("express");
const app = express();
const personaModel = require("../models/persona.js");


app.get("/persona", (req, res) => {
    personaModel.find({})
        .exec((err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(data);
            }
        });
});

app.get("/persona/:id", (req, res) => {
    let id = req.params.id;
    personaModel.findById(id)
        .exec((err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
});

app.post("/persona", (req, res) => {
    let personaNueva = personaModel(req.body);
    personaNueva.save((err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    });
})

app.put("/persona/:id", (req, res) => {
    let id = req.params.id;
    personaModel.findByIdAndUpdate(id, req.body, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(data);
            console.log('Data actualizada!')
        }
    });
})

app.delete("/persona/:id", (req, res) => {
    let id = req.params.id;
    personaModel.findByIdAndDelete(id, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.sendStatus(200);
            console.log('Data borrada!')
        }
    });
})




module.exports = app;