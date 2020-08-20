import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="video-Footer">
      <div className="video-details">
        <h3>@ {channel}</h3>
        <p> {description} </p>
        <div className="">
          <MusicNoteIcon />
          <Ticker mode="smooth">{() => <p> {song} </p>}</Ticker>
        </div>
      </div>
    </div>
  );
}
export default VideoFooter;
