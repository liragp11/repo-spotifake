import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://gabrielpaesdelira:AJoK6vf5ninxL8ua@cluster0.9myzv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
export const db = client.db("spotifake");
// validar funcionamento da string de conexão
//console.log(db);
//validar tabela criada
// const songCollection = await db.collection("songs").find({}).toArray();
// console.log(songCollection);
