import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/MusicPlayer.module.scss";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MusicPlayer = ({ music }) => {
  const audioRef = useRef(null);

  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });

      audioRef.current.addEventListener("timeupdate", () => {
        setCurrent(audioRef.current.currentTime);
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("loadedmetadata", () => {});
        audioRef.current.removeEventListener("timeupdate", () => {});
      }
    };
  }, [music]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", () => {
        setIsPlaying(false);
      });

      return () => {
        audioRef.current.removeEventListener("ended", () => {});
      };
    }
  }, []);

  const togglePlayback = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressBarClick = (e) => {
    const width = e.target.clientWidth;
    const offsetX = e.nativeEvent.offsetX;
    const percentage = offsetX / width;
    const newCurrentTime = duration * percentage;

    audioRef.current.currentTime = newCurrentTime;
    setCurrent(newCurrentTime);
  };

  const formatTime = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);

    // Convertit les chiffres en format 00
    if (minutes < 10) minutes = "0" + minutes;
    if (remainingSeconds < 10) remainingSeconds = "0" + remainingSeconds;

    return minutes + ":" + remainingSeconds;
  };

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

        <div className={styles.player}>
          <audio
            ref={audioRef}
            src={music?.audio}
            controls
            autoPlay
            style={{ display: "none" }}
          />
          <div className={styles.time}>{formatTime(current)}</div>
          <div
            className={styles.progressBarContainer}
            onClick={handleProgressBarClick}
          >
            <div
              className={styles.progressBar}
              style={{ width: `${(current / duration) * 100}%` }}
            ></div>
          </div>
          <div className={styles.time}>{formatTime(duration)}</div>
        </div>

        <div className={styles.musicNavigation}>
          <FontAwesomeIcon icon={faBackward} />
          <div
            className={styles.playContainer}
            style={{
              background: `linear-gradient(to right, ${music?.color?.[0]}, ${music?.color?.[1]})`,
            }}
          >
            <div className={styles.playWrapper} onClick={togglePlayback}>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </div>
          </div>
          <FontAwesomeIcon icon={faForward} />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
