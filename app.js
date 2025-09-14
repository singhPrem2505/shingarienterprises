const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const consumer = require("./models/consumer");
import { Analytics } from "@vercel/analytics/next"

mongoose.connect("mongodb://127.0.0.1:27017/Inquiry");
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/consultation", (req, res) => {
  res.render("consultation");
});

app.post("/consultation", async (req, res) => {
  try {
    const {
      _name,
      email,
      phonenumber,
      typeoflocation,
      address,
      avgelectricitybill,
      additionalinfo
    } = req.body;
    const exist = await consumer.findOne({ email });
    if (exist) {
      return res.status(400).send("Already asked for Inquiry");
    }
    else {
      const Consumer = new consumer({
        _name,
        email,
        phonenumber,
        typeoflocation,
        address,
        avgelectricitybill,
        additionalinfo
      });
      await Consumer.save();
      res.send("Your details have been saved successfully!")
      res.redirect("/");
    }
  } catch (err) {
    console.error("Error saving consumer:", err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
