import React, { useEffect, useState } from "react";
import styles from "../../styles/MusicCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MusicCard = ({ music, onClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    console.log("favorites ", favorites);
    setIsFavorite(favorites.some((fav) => fav.id === music.id));
  }, [music]);

  const handleFavorite = (event) => {
    event.stopPropagation();

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== music.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(music);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div onClick={onClick} className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${music?.cover})` }}
      ></div>
      <div className={styles.bottom}>
        <div>
          <div className={styles.name}>{music?.name}</div>
          <div className={styles.artist}>{music?.artist}</div>
        </div>
        <div onClick={handleFavorite}>
          <FontAwesomeIcon
            icon={faHeart}
            color={isFavorite ? "#b92a25" : "black"}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
