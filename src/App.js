import { useState } from 'react';
import './App.css';
import {PlayerControls} from './components/PlayerControls';
import {MusicContext} from './contexts/MusicContext';
import track1 from "./assets/inside-you.mp3";
import track2 from "./assets/for-future-bass.mp3";
import track3 from "./assets/summer-walk.mp3";
import TrackList from './components/TrackList';

function App() {
  const [state, setState] = useState({
    audioPlayer: new Audio(track1),
    // puting first track as a reference
    tracks : [
      {
        name:"inside-you",
        file:track1,
      },
      {
        name:"for-future-bass",
        file:track2,
      },
      {
        name:"summer-walk",
        file:track3,
      }
    ],
    currentTrackIndex: 0,
    isPlaying: false
  });
  console.log("state",state);

  return (
    <MusicContext.Provider value={[state,setState]}>
    <div className="App">
    <PlayerControls/>
    <TrackList/>
    </div>
    </MusicContext.Provider>
  );
}

export default App;
