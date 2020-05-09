import React, {useState} from 'react';
import {PlayCircleOutline, PauseCircleOutline} from '@material-ui/icons';
import {IconButton} from '@material-ui/core';

const PlayPauseButton = (props) => {
    
    const [playPauseToggle, setPlayPauseToggle] = useState(false)

    const playPauseFunction = () => {
         if(!playPauseToggle){
             props.clickPlay();
             setPlayPauseToggle(!playPauseToggle)
         }else{
             props.clickPause();
             setPlayPauseToggle(!playPauseToggle)
         }
    }

    return(
        <IconButton onClick={playPauseFunction}>
            {!playPauseToggle ? <PlayCircleOutline style={{ fontSize: "2em", color: "white" }} />:
                <PauseCircleOutline style={{ fontSize: "2em", color: "white" }} />
            }
        </IconButton>
    )
};

export default PlayPauseButton;
