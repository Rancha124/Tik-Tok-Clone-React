import React, { useState } from "react";
import "./videoSideBar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
function VideoSideBar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="video-sidebar">
      <div className="sideBar-icon">
        {liked ? (
          <FavoriteIcon onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
        )}
        <p> {liked ? likes + 1 : likes} </p>
      </div>
      <div className="sideBar-icon">
        <MessageIcon />
        <p> {comments} </p>
      </div>
      <div className="sideBar-icon">
        <ShareIcon />
        <p> {shares} </p>
      </div>
    </div>
  );
}
export default VideoSideBar;
