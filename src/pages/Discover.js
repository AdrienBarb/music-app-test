import React, { useEffect, useState } from "react";
import PageWrapper from "../components/Layout/PageWrapper";
import chillHop from "../constants/songs";
import MusicCard from "../components/Music/MusicCard";
import styles from "../styles/DiscoverPage.module.scss";
import MusicPlayer from "../components/Music/MusicPlayer";

const DiscoverPage = () => {
  //localstate
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    const music = chillHop();
    setMusicList(music);
  }, []);

  const nextTrack = () => {
    if (!selectedMusic) {
      return;
    }

    let nextIndex = selectedMusic.index + 1;
    if (nextIndex >= musicList.length) {
      nextIndex = 0;
    }
    setSelectedMusic({ music: musicList[nextIndex], index: nextIndex });
  };

  const prevTrack = () => {
    if (!selectedMusic) {
      return;
    }

    let prevIndex = selectedMusic.index - 1;
    if (prevIndex < 0) {
      prevIndex = musicList.length - 1;
    }
    setSelectedMusic({ music: musicList[prevIndex], index: prevIndex });
  };

  return (
    <PageWrapper title="Discover">
      <div className={styles.list}>
        {musicList.map((currentMusic, index) => {
          return (
            <MusicCard
              key={index}
              music={currentMusic}
              onClick={() => setSelectedMusic({ music: currentMusic, index })}
            />
          );
        })}
      </div>
      <MusicPlayer
        music={selectedMusic?.music}
        setSelectedMusic={setSelectedMusic}
        nextTrack={nextTrack}
        prevTrack={prevTrack}
      />
    </PageWrapper>
  );
};

export default DiscoverPage;
