const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api", require("./routes/index"));

app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));