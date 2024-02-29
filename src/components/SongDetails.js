import React from 'react'

const SongDetails = ({ info }) => {
    const {song, cover_image, artists, url } = info || {};
    console.log(info);
  return (
    <div className='song-details'>
        <a href={url} target='_blank'>
            <img className='song-image' alt="song" src={cover_image} />
            <div className='text-container'>
                <p className='song-name text'>{song}</p>
                <p className='text'>{artists}</p>
            </div>
        </a>    
    </div>
  )
}

export default SongDetails