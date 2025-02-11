var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "SHE XLEO QURDULI MENTALITETI DZMA",
      version: "1.0.0",
      description: "API documentation for qurdi people",
    },
  },
  apis: ["./routes/*.js"], // Path to your route file
};
const specs = swaggerJsdoc(options);

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const slider = require("./routes/slider");
const admin = require("./routes/admin");
const aboutShort = require("./routes/aboutShort");
const about = require("./routes/aboutUs");
const offer = require("./routes/offer");
const contactUs = require("./routes/contactUs");
const projects = require("./routes/projects");
const bid = require("./routes/bid");
var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/slider", slider);
app.use("/admin", admin);
app.use("/about-short", aboutShort);
app.use("/about-us", about);
app.use("/offer", offer);
app.use("/contact-us", contactUs);
app.use("/projects", projects);
app.use("/bid", bid);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
