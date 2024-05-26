if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// import express from "express"
// import cors from "cors"
// import session from "express-session"

const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();
app.use(express.json());

app.use(
  session({
    secret: process.env.SessionSecret,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

function generateOTP() {
  let digits = "0123456789";
  let OTP = "";
  let len = digits.length;
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * len)];
  }
  return OTP;
}

// MAil
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Mail,
    pass: process.env.MailPass,
  },
});

async function sendMail(email, OTP) {
  const info = await transporter.sendMail({
    from: '"Kaizen" <soorajnambiar8@gmail.com>',
    to: email,
    subject: "Kaizen Tech Society",
    html: `Here's The OTP :<br/> <b>${OTP}</b>`,
  });
  console.log("Message sent: %s", info.messageId);
}

app.post("/signin", (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received signin data:", name, email, password);
  const OTP = generateOTP();
  sendMail(email, OTP).catch(console.error);
});

app.get("/test", (req, res) => {
  res.send("test successfull");
});

app.get("/reqcount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`You send req ${req.session.count} time`);
});

app.get("/getData", (req, res) => {
  const data = { message: "Hello from the backend!" };
  res.json(data);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Received login data:", email, password);
});

app.listen(5000, () => {
  console.log("Backend is running on port 5000");
});
