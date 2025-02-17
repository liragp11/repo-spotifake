import React from "react";
import { Link } from "react-router-dom";

const songItem = ({ image, name, duration, artist, audio, _id, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Capa da Música ${name}`}
          />
          <p className="song-item__name">{name}</p>
        </div>
      </div>
      <p>{duration.padStart(5, "0")}</p>
    </Link>
  );
};

export default songItem;
