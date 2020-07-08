const express = require("express");

const app = express();

app.use(express.json());

//localhost:3000/users - GET
app.get("/users", (req, res) => {
  console.log("GET USERS");
  res.json({ msg: "Oiiiiii" });
});

app.post("/users", (req, res) => {
  const { nome, titulo } = req.body;
  console.log(nome);
  res.status(201).json({ msg: "Dados recebidos" });
  //res.json({ msg: "OI" });
});

app.post("/login", (req, res) => {
  const { nome, senha } = req.body;
  if (nome == "Lucas" && senha == "12345") {
    return res.status(201).json({ msg: "Autorizado" });
  }

  res.status(401).json({ msg: "Não autorizado" });
});

app.listen(3000, () => console.log("Api ta funcionando"));
