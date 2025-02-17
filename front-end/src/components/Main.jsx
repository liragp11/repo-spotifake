import React from "react";
import "./main.css";
import ItemList from "./ItemList";
import { artistArray } from "../Assets/database/artists";
import { songsArray } from "../Assets/database/songs";

const Main = ({ type }) => {
  return (
    <div className="main">
      {/* Lista de Artistas */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={5}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}
      {/* Lista de Músicas */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
