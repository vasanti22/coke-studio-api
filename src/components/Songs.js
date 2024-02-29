import React, { useEffect, useState } from 'react'
import { COKE_STUDIO_MUSIC_API } from '../utils/constants';
import SongDetails from './SongDetails';

const Songs = () => {
    
    const [songs, setSongs] = useState([]);
    
    useEffect(() => {
        getSongs();
    }, []);
    
    const getSongs = async () => {
        const data = await fetch(COKE_STUDIO_MUSIC_API);
        const json = await data.json();
        //console.log(json[1].song);
        setSongs(json);
    }
    
    return (
        <div className='song-container'>
        {songs.map((song) => (
            <SongDetails key={song.id} info = {song} />
         ))
        }
    </div>
    )
    }   
    export default Songs;