const express = require("express");
const app = express();
const { m1, m2 } = require("./middleware/firstMiddleware");
const { m3, m4 } = require("./middleware/pathlevel");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(m1);

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/health", m4, (req, res) => {
  console.log("running controller function");
  res.json({
    status: "ok",
    message: "server running ok"
  });
});

app.use(m2);

app.get("/home", m3, m4, (req, res) => {
  console.log("running controller home function");
  res.json({
    success: true,
    message: "server running ok"
  });
});

app.listen(3000, () => {
  console.log("Server connected");
});
