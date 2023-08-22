import React from "react";
import styles from "../../styles/MusicPlayer.module.scss";
import {
  faBackward,
  faForward,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MusicPlayer = ({ music }) => {
  console.log(music?.color?.[0]);

  return (
    <div className={styles.container}>
      <h1>Now Playing</h1>
      <div className={styles.playerContainer}>
        <div className={styles.musicDetailsWrapper}>
          <div
            className={styles.musicImage}
            style={{ backgroundImage: `url(${music?.cover})` }}
          ></div>

          <div className={styles.musicName}>
            {music?.name ? music?.name : "No music selected"}
          </div>
          <div className={styles.musicArtist}>{music?.artist}</div>
        </div>

        <div className={styles.player}></div>

        <div className={styles.musicNavigation}>
          <FontAwesomeIcon icon={faBackward} />
          <div
            className={styles.playContainer}
            style={{
              background: `linear-gradient(to right, ${music?.color?.[0]}, ${music?.color?.[1]})`,
            }}
          >
            <div className={styles.playWrapper}>
              <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
          <FontAwesomeIcon icon={faForward} />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
