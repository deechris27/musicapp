import React, {useState} from 'react';
import {PlayCircleOutline, PauseCircleOutline} from '@material-ui/icons';
import {IconButton} from '@material-ui/core';

const PlayPauseButton = ({playPauseToggle, playPause}) => {
    
     return(
        <IconButton onClick={playPause}>
            {!playPauseToggle ? <PlayCircleOutline style={{ fontSize: "2em", color: "white" }} />:
                <PauseCircleOutline style={{ fontSize: "2em", color: "white" }} />
            }
        </IconButton>
    )
};

export default PlayPauseButton;
