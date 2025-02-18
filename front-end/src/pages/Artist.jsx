import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList.jsx";
import { artistArray } from "../Assets/database/artists";
import { songsArray } from "../Assets/database/songs";

const Artist = () => {
  const { id } = useParams();
  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj._id === id
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currSongObj) => currSongObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );
  const randomIdSong = songsArrayFromArtist[randomIndex]._id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`,
        }}
      >
        <h2 className="artist__title">{artistObj.name}</h2>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdSong}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
