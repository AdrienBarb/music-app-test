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

  console.log(selectedMusic);

  return (
    <PageWrapper title="Discover">
      <div className={styles.list}>
        {musicList.map((currentMusic, index) => {
          return (
            <MusicCard
              key={index}
              music={currentMusic}
              onClick={() => setSelectedMusic(currentMusic)}
            />
          );
        })}
      </div>
      <MusicPlayer music={selectedMusic} />
    </PageWrapper>
  );
};

export default DiscoverPage;
