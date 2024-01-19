import videoUrl from "./assets/vecteezy_youtube-intro-video-white-letters-with-green-screen_11449025.mp4";
import { useRef } from "react";
export default function Video() {
  const videoRef = useRef("");
  const playVid = () => {
    console.log(videoRef);
    videoRef.current.play();
  };

  const pauseVid = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <h1 style={{ color: "red" }}>learn </h1>
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        style={{ width: "50%", height: "auto" }}
        onMouseOver={playVid}
        onMouseOut={pauseVid}
      />
    </>
  );
}
