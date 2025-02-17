import { db } from "./connect.js";
import { artistArray } from "../../front-end/src/Assets/database/artists.js";
import { songsArray } from "../../front-end/src/Assets/database/songs.js";

//recriando array removendo a chave 'id'
const newArtistArray = artistArray.map((currArtistObj) => {
  const newArtistObj = { ...currArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currSongsObj) => {
  const newSongsObj = { ...currSongsObj };
  delete newSongsObj.id;

  return newSongsObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);
