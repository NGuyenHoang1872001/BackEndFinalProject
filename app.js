var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const database = require("./database/connect");
// var cors = require("cors");
var routerAPIUser = require("./routes/RouterAPI/routerUser");
var app = express();

// app.use(cors);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/routerAPI", routerAPIUser);

(async () => {
  await database.connect();
})();

module.exports = app;
