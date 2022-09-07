var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const database = require("./database/connect");
var cors = require("cors");
var routerAPIUser = require("./routes/RouterAPI/routerUser");
var app = express();

app.use(cors());

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3001",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/RouterAPI/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
