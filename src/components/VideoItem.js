import React from 'react';


const VideoItem = ({video, onVideoSelect}) => {
    return(
        <div className="item" onClick={() => onVideoSelect(video)}>
            <img className="ui avatar image" src={video.snippet.thumbnails.medium.url} alt=""/>
                <div className="content">
                    <a href="#" className="header">{video.snippet.title}</a>
                    <div className="description">{video.snippet.description}</div>
                </div>
        </div>
    )
};


export default VideoItem;