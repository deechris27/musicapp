import React, { useState, useRef, useEffect } from 'react'
import PlayPauseButton from '../PlayPause/PlayPauseComponent';
import NextButton from '../NextButton/NextButton';
import PreviousButton from '../PreviousButton/PreviousButton';
import TimeLineControl from '../TimelineControl/TimeLineControl';
import './musicplayer.styles.scss';
import VolumeControl from '../VolumeControl/VolumeControl';
import axios from 'axios';


function MusicPlayer() {

    const audioFile = useRef();
    const player = audioFile.current;
    
    const [state, setState] = useState({
         currentDuration: 0,
         percentage: 0,
         isPlay: false,
         currentTime: 0,
         allTracks: '',
         audioState: 'paused',
         playPauseToggle: false,
         currentSongIndex: 0 });

    useEffect(() => {
        axios.get('https://deezerdevs-deezer.p.rapidapi.com/search?q=maroon',
          {
            headers:
            {
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
              "x-rapidapi-key": "16887570aemshb5778ad9a6af7cdp17983ajsn9bd90f5fac25"
            }
          }).then(res => {
            setState({
                ...state,
                allTracks: res.data.data});
            })
      }, [], 0);

      const play = () => {
        audioFile.current.play();
     };

    const pause = () => {
        audioFile.current.pause();
    };

    const songEnded = () => {
        audioFile.current.currentTime = 0;
    };

    const getAudioSrc = () =>{
      const allSongs = state.allTracks;
      let allSongUrls = [];
      Array.isArray(allSongs) && allSongs.length && allSongs.forEach(song=>{
          allSongUrls.push(song.preview);
      })
       //audioFile.current.src = allSongUrls[0];
       return allSongUrls[state.currentSongIndex];
    };

    const playNext = () => {
        if(player){
            audioFile.current.currentTime = 0;
        }
        setState({
            ...state,
            playPauseToggle: false,
            audioState: "paused",
            currentSongIndex: state.currentSongIndex + 1
        });
        
        console.log("****next", state.currentSongIndex)
    };

    const playPrevious = () => {

        if(player && audioFile.current.currentTime < 5 || state.currentSongIndex < 1){
            audioFile.current.currentTime = 0;
        }
            setState({
                ...state,
                playPauseToggle: true,
                audioState: "paused",
                currentSongIndex: state.currentSongIndex - 1
            });

        console.log("****previous", state.currentSongIndex)
    };


    const playPauseFunction = () => {
         if(!state.playPauseToggle){
             play();
             setState({
                 ...state,
                 audioState: "playing",
                 playPauseToggle: !state.playPauseToggle
             })
         }else{
             pause()
             setState({
                ...state,
                audioState: "paused",
                playPauseToggle: !state.playPauseToggle
            })
         }
    };

    // useEffect(() => {
    //     console.log(audioFile.current.currentTime)
    //     const percentage = ((audioFile.current.currentTime / audioFile.current.duration) * 100).toFixed(2);
   
    //     setState({
    //         ...state,
    //         currDuration: audioFile.current.currentTime,
    //         percentage
    //     });
    // }, [])


    // const getCurrentDuration = () => {
    //     const percentage = ((audioFile.current.currentTime / audioFile.current.duration) * 100).toFixed(2);

    //     setState({
    //         ...state,
    //         currentDuration: audioFile.currentTime,
    //         percentage
    //     });
    // };

    //"https://cdns-preview-9.dzcdn.net/stream/c-9f2978dc3f5f45188522b1805da9d242-3.mp3"

    return (
        <React.Fragment>
            <audio preload="false" ref={audioFile} onEnded={songEnded} src={getAudioSrc()} />
            <div className="musicControls">
                <div style={{ position: 'relative', left: '25%', bottom: '20px' }}>
                    <PreviousButton playPrevious={playPrevious}/>
                    <PlayPauseButton playPauseToggle={state.playPauseToggle} playPause={playPauseFunction} />
                    <NextButton playNext={playNext}/>
                </div>
                <TimeLineControl player={player} audioState={state.audioState}/>
                <VolumeControl />
            </div>
        </React.Fragment>
    )
}

export default MusicPlayer
