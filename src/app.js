const express = require("express");
const routes = require("./routes");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: 'fake-instagram',
    resave: true,
    saveUninitialized: true,
  })
  );

app.use("/", routes);

app.listen(3000, () => console.log(`🚀 Server run on port 3000`));