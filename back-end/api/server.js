//API
import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (request, response) => {
  // Teste de get (abrir api no navegador: localhost:PORT (valor atribuído ao PORT))
  response.send("Utilize os endpoints '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  // Teste de servidor
  console.log("Servidor está escutando a porta " + PORT);
});
