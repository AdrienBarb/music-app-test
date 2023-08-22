import React from "react";
import styles from "../../styles/MusicCard.module.scss";

const MusicCard = ({ music, onClick }) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${music?.cover})` }}
      ></div>
      <div className={styles.name}>{music?.name}</div>
      <div className={styles.artist}>{music?.artist}</div>
    </div>
  );
};

export default MusicCard;
