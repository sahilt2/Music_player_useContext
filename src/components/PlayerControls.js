import React from 'react';
import { useMusicPlayer } from '../hooks/useMusicPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import './PlayerControls.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerControls = () => {
    const music = useMusicPlayer();
    return (
        <>
        <div className="container">  
        <div className="row">
        <div className="col-md-6 offset-md-3">
        <div className="music-player">
            <h2 className="text-center">Music Player</h2>
            <div className="album-cover">
              <img
                src="https://cdn.pixabay.com/photo/2022/03/31/08/47/headphones-7102511_1280.jpg"
                alt="Album Cover"
                className="img-fluid"
              />
            </div>
        <div className="audio-controls">
        <button style={{borderRadius:'4px'}}>
            <FontAwesomeIcon 
            icon={faStepBackward}
            onClick={music.playPreviousTrack}/>
        </button>
        <button style={{borderRadius:'4px'}}
        onClick={music.togglePlay}>
            {music.isPlaying?(
            <FontAwesomeIcon icon={faPause}/>):(<FontAwesomeIcon icon={faPlay}/>)}
        </button>
        <button style={{borderRadius:'4px'}}>
            <FontAwesomeIcon icon={faStepForward} onClick={music.playNextTrack}/>
        </button>
        </div>
        <div className="song-info text-center">
        <p>{music.currentTrackName}</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    );
};

export  {PlayerControls};