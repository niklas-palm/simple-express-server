const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/health", (req, res) => {
  res.json({ message: "Server up and running" });
});

app.listen(PORT, () => {
  console.log("Server Running on PORT", PORT);
});
