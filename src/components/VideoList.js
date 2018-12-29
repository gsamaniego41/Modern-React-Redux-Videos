import React from "react";

const VideoList = props => {
  return (
    <div>
      <ul>
        {props.videos.map(video => {
          return <li key={video.id}>VideoItem</li>;
        })}
      </ul>
    </div>
  );
};

export default VideoList;
