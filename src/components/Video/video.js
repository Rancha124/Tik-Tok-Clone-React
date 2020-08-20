import React from "react";
import "./video.css";
import VideoFooter from "./videoFooter";
import VideoSideBar from "./VideoSideBar";
import ReactPlayer from "react-player";

function Video({ url, channel, description, song, likes, comments, shares }) {
  return (
    <div className="video">
      <div className="video__fitting">
        <ReactPlayer url={url} loop width={400} height={600}  />
      </div>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} comments={comments} shares={shares} />
      {console.log("Hi", url)}
    </div>
  );
}
export default Video;
