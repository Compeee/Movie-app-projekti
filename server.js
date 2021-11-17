const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const routes = require("./backend/routes/index");

app.use("/api", require("./backend/routes/index"));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}
app.use("/api", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
