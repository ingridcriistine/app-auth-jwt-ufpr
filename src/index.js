const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();

const app = express();

app.use(express.json());

app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
