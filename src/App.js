import React, { useState, useEffect } from "react";
import "./App.css";
import Video from "./components/Video/video";
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(
        snapshot.docs.map((doc) => {
          return doc.data();
        })
      )
    );
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          (
            { url, channel, Song, description, likes, comments, shares },
            index
          ) => (
            <Video
              id={index}
              url={url}
              channel={channel}
              song={Song}
              description={description}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
