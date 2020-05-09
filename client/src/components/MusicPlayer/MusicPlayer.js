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
    const [state, setState] = useState({ currentDuration: 0, percentage: 0, isPlay: false, currentTime: 0, allTracks: '' });

    const play = () => {
        console.log(state.allTracks)
        audioFile.current.play();
    };

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
      }, [state.allTracks]);

    const pause = () => {
        audioFile.current.pause();
    }

    // useEffect(() => {
    //     console.log(audioFile.current.currentTime)
    //     const percentage = ((audioFile.current.currentTime / audioFile.current.duration) * 100).toFixed(2);
   
    //     setState({
    //         ...state,
    //         currDuration: audioFile.current.currentTime,
    //         percentage
    //     });
    // }, [])


    // const getCurrDuration = () => {
    //     const percentage = ((audio.currentTime / audio.duration) * 100).toFixed(2);

    //     setState({
    //         ...state,
    //         currDuration: audio.currentTime,
    //         percentage
    //     });
    // };

    return (
        <React.Fragment>
            <audio preload="false" ref={audioFile}>
                <source src="https://cdns-preview-9.dzcdn.net/stream/c-9f2978dc3f5f45188522b1805da9d242-3.mp3" />
            </audio>
            <div className="musicControls">
                <div style={{ position: 'relative', left: '25%', bottom: '20px' }}>
                    <PreviousButton />
                    <PlayPauseButton clickPlay={play} clickPause={pause}/>
                    <NextButton />
                </div>
                <TimeLineControl duration={state.currentDuration}/>
                <VolumeControl />
            </div>
        </React.Fragment>
    )
}

export default MusicPlayer
