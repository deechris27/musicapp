import React, {useState} from 'react';
import {PlayCircleFilled, PauseCircleFilled, Pause, PlayArrow, PlayCircleOutline} from '@material-ui/icons';
import {IconButton, CircularProgress} from '@material-ui/core';

function PlayPauseButton(){
    return(
        <IconButton >
            <PlayCircleOutline style={{ fontSize: "2em", color: "white" }} />
        </IconButton>
    )
}

export default PlayPauseButton;
