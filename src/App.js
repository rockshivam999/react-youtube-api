import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactPlayer from "react-player";

import VideoCard from "./components/videoCard/videocard";
import Search from "./components/search/search";

function App() {
  const [videoList, setVideoList] = useState(null);
  const [playUrl, setPlayUrl] = useState(null);

  return (
    <div className="App">
      <Search setVideoList={setVideoList}></Search>
      <div style={{ display: "flex" }}>
        {playUrl && (
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=" + playUrl}
            style={{ width: "50%" }}
          />
        )}
        <div>
          {videoList &&
            videoList.map((videodata) => {
              return (
                <VideoCard
                  videoId={videodata.id.videoId}
                  setPlayUrl={setPlayUrl}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
