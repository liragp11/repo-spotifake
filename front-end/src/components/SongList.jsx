import React from "react";
import SongItem from "./songItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5);
  // const items = useState()
  return (
    <div className="song-list">
      {songsArray
        .filter((currSongObj, index) => index < items)
        .map((currSongObj, index) => (
          <SongItem {...currSongObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
