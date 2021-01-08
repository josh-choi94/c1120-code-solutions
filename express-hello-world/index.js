const express = require("express");
const app = express();

app.use(function (req, res) {
  res.send("hello, world!");
});

app.listen(5000, () => {
  console.log("Express server listening on port 5000");
});
