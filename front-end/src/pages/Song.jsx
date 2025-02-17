import React from "react";
import { Link, useParams } from "react-router-dom";
import Player from "../components/Player.jsx";
import { songsArray } from "../Assets/database/songs";
import { artistArray } from "../Assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const songObj = songsArray.filter((currsongObj) => currsongObj._id === id)[0];
  const audio = songObj.audio;

  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj.name === songObj.artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currSongObj) => currSongObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdSong = songsArrayFromArtist[randomIndex]._id;
  const randomIdSong2 = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={songObj.image} alt={`"Capa da música ${songObj.image}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={songObj.image}
            alt={`Imagem do artista ${songObj.artist}`}
          />
        </Link>

        <Player
          duration={songObj.duration}
          randomIdSong={randomIdSong}
          randomIdSong2={randomIdSong2}
          audio={songObj.audio}
        />

        <div>
          <p className="song__name">{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
