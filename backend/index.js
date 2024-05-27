// // if (process.env.NODE_ENV != "production") {
// //   require("dotenv").config();
// // }

// // // import express from "express"
// // // import cors from "cors"
// // // import session from "express-session"

// // const express = require("express");
// // const cors = require("cors");
// // const session = require("express-session");
// // const mongoose = require("mongoose");
// // const passport = require("passport");
// // const LocalStrategy = require("passport-local");
// // const User = require("./models/User");

// // const app = express();
// // app.use(express.json());

// // mongoose
// //   .connect("mongodb://127.0.0.1:27017/Kaizen")
// //   .then(() => {
// //     console.log("Connected to DB");
// //   })
// //   .catch((err) => {
// //     console.log("Connection Error", err);
// //   });

// // app.use(require("serve-static")(__dirname + "/../../public"));
// // app.use(require("cookie-parser")());
// // app.use(require("body-parser").urlencoded({ extended: true }));

// // app.use(
// //   session({
// //     secret: process.env.SessionSecret,
// //     resave: false,
// //     saveUninitialized: true,
// //   })
// // );
// // app.use(passport.initialize());
// // app.use(passport.session());
// // passport.use(new LocalStrategy(User.authenticate()));
// // passport.serializeUser(User.serializeUser());
// // passport.deserializeUser(User.deserializeUser());

// // app.use(
// //   cors({
// //     origin: "http://localhost:5173/",
// //   })
// // );

// // function generateOTP() {
// //   let digits = "0123456789";
// //   let OTP = "";
// //   let len = digits.length;
// //   for (let i = 0; i < 4; i++) {
// //     OTP += digits[Math.floor(Math.random() * len)];
// //   }
// //   return OTP;
// // }

// // // MAil
// // const nodemailer = require("nodemailer");
// // const transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: process.env.Mail,
// //     pass: process.env.MailPass,
// //   },
// // });

// // async function sendMail(email, OTP) {
// //   const info = await transporter.sendMail({
// //     from: '"Kaizen" <soorajnambiar8@gmail.com>',
// //     to: email,
// //     subject: "Kaizen Tech Society",
// //     html: `Here's The OTP :<br/> <b>${OTP}</b>`,
// //   });
// //   console.log("Message sent: %s", info.messageId);
// // }
// // // let fakeUser = new User({
// // //   email: "hello@gmail.com",
// // //   username: "krish",
// // // });
// // // let newUser = await User.register(fakeUser, "helloworld");
// // // res.send("Form");

// // app.get("/", async (req, res) => {
// //   res.send("Kaizen Backend");
// // });

// // app.post("/signin", async (req, res) => {
// //   console.log(req.body);
// //   let { username, email, password } = req.body;
// //   console.log("Received signin data:", username, email, password);

// //   const OTP = generateOTP();
// //   sendMail(email, OTP).catch(console.error);
// //   // res.redirect("/");
// //   res.send("Hello")
// // });

// // app.get("/test", async(req, res) => {
// //   res.send("test successfull");
// //   // saving user
// //   const newUser = new User({ email, username });
// //   const regUser = await User.register(newUser, password);
// //   console.log(regUser);
// // });

// // app.get("/reqcount", (req, res) => {
// //   if (req.session.count) {
// //     req.session.count++;
// //   } else {
// //     req.session.count = 1;
// //   }
// //   res.send(`You send req ${req.session.count} time`);
// // });

// // app.get("/getData", (req, res) => {
// //   const data = { message: "Hello from the backend!" };
// //   res.json(data);
// // });

// // app.post("/login", (req, res) => {
// //   const { email, password } = req.body;
// //   console.log("Received login data:", email, password);
// // });

// // app.listen(5000, () => {
// //   console.log("Backend is running on port 5000");
// // });

// if (process.env.NODE_ENV != "production") {
//   require("dotenv").config();
// }

// const express = require("express");
// const cors = require("cors");
// const session = require("express-session");
// const mongoose = require("mongoose");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/User");

// const app = express();
// app.use(express.json());

// mongoose
//   .connect("mongodb://127.0.0.1:27017/Kaizen")
//   .then(() => {
//     console.log("Connected to DB");
//   })
//   .catch((err) => {
//     console.log("Connection Error", err);
//   });

// app.use(require("serve-static")(__dirname + "/../../public"));
// app.use(require("cookie-parser")());
// app.use(require("body-parser").urlencoded({ extended: true }));

// app.use(
//   session({
//     secret: process.env.SessionSecret,
//     resave: false,
//     saveUninitialized: true,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(
//   cors({
//     origin: "http://localhost:5173/kaizen-portfolio",
//   })
// );

// function generateOTP() {
//   let digits = "0123456789";
//   let OTP = "";
//   let len = digits.length;
//   for (let i = 0; i < 6; i++) {
//     OTP += digits[Math.floor(Math.random() * len)];
//   }
//   return OTP;
// }

// // MAil
// const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.Mail,
//     pass: process.env.MailPass,
//   },
// });

// async function sendMail(email, OTP) {
//   const info = await transporter.sendMail({
//     from: '"Kaizen" <soorajnambiar8@gmail.com>',
//     to: email,
//     subject: "Kaizen Tech Society",
//     html: `<h2>Here's The OTP :</h2><br/><h1><b>${OTP}</b><h1/>`,
//   });
//   console.log("Message sent: %s", info.messageId);
// }

// app.get("/", async (req, res) => {
//   res.send("Kaizen Backend");
// });

// app.post("/signin", (req, res) => {
//   const { username, email, password } = req.body;
//   console.log("Received signin data:", username, email, password);

//   const OTP = generateOTP();
//   // sendMail(email, OTP).catch(console.error);
//   req.session.otp = OTP;
//   // res.redirect("/verification");
// });

// app.get("/verification", (req, res) => {
//   // res.redirect("/")
//   res.send("Verify")
// });

// // app.post("/verification", async (req, res) => {
// //   const otpFromSession = req.session && req.session.otp;
// //   const otpFromUser = req.body;
// //   if (otpFromSession == otpFromUser) {
// //     const newUser = new User({ email, username });
// //     const regUser = await User.register(newUser, password);
// //     console.log(regUser);
// //   }
// // });

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`You send req ${req.session.count} time`);
// });

// app.get("/getData", (req, res) => {
//   const data = { message: "Hello from the backend!" };
//   res.json(data);
// });

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   console.log("Received login data:", email, password);
// });

// app.listen(5000, () => {
//   console.log("Backend is running on port 5000");
// });

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

app.post("/", (req, res) => {
  const { username, email, password } = req.body;
  console.log("Received signin data:", username, email, password);
  const OTP = generateOTP();
  sendMail(email, OTP).catch(console.error);
  req.session.otp = OTP;
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
