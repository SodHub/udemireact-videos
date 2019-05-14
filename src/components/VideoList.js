//import './ImageList.css';
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    //props.videos
    const videos = props.videos.map((video) => {
            return <VideoItem  key={video.id}   video={video} />;
        }
    );
    return <div className="image-list">{videos}</div>;
}

export default VideoList ;
