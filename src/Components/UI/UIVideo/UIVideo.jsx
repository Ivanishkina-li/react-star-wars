import styles from "./UIVideo.module.css";
import cn from "classnames";
import { useEffect, useRef } from "react";

const UIVideo = ({ src, playbackRate, classes }) => {
  const VideoRef = useRef(null);

  useEffect(() => {
    // current указывает на тег video, туда куда навешен реф
    VideoRef.current.playbackRate = playbackRate; // присваиваем текущему состоян(скорости) новое значение которое пришло ччерез пропсы из компонента errorMessage
  }, []);
  return (
    <>
      <video
        loop
        autoPlay
        muted
        className={cn(styles.video, classes)}
        ref={VideoRef}
        playbackRate={playbackRate}
        src={src}
      >
        <source />
      </video>
    </>
  );
};
//параметры тега video :loop -  видео будет проигрываться постоянно . muted - без звука
export default UIVideo;
