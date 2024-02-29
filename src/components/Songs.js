import React, { useEffect, useState } from 'react'
import { COKE_STUDIO_MUSIC_API } from '../utils/constants';
import SongDetails from './SongDetails';

const Songs = () => {
    
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        getVideos();
    }, []);
    
    const getVideos = async () => {
        const data = await fetch(COKE_STUDIO_MUSIC_API);
        const json = await data.json();
        console.log(json[1].song);
        setVideos(json);
    }
    
    return (
        <div className='video-container'>
        {videos.map((video) => (
            <SongDetails key={video.id} info = {video} />
         ))
        }
    </div>
    )
    }   
    export default Songs;