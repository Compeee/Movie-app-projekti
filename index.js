const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use("/api", require("./routes/index"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  });
}

app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
