const express = require("express");

const app = express();

//localhost:3000/users - GET
app.get("/users", (req, res) => {
  console.log("GET USERS");
  res.json({ msg: "Oiiiiii" });
});

app.post("/users", (req, res) => {
  console.log("POST USERS");
  res.json({ msg: "OI" });
});

app.listen(3000, () => console.log("Api ta funcionando"));
