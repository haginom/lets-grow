import * as React from "react";
import introVideo from "../videos/LetsGrowIntro.mp4";
import videoPoster from "../images/videoposter.jpg";

const VideoIntro = () => {
  return (
    <div className="w-100 ph2 pt2 pb1">
      <video
        poster={videoPoster}
        id="background-video"
        muted
        loop
        autoPlay
        className="w-100"
      >
        <track default
           kind="description"
           srcLang="en"
         />
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoIntro;
