import React from 'react';
import {PlayCircleOutline} from '@material-ui/icons';
import {IconButton} from '@material-ui/core';

function PlayPauseButton(){
    return(
        <IconButton >
            <PlayCircleOutline style={{ fontSize: "2em", color: "white" }} />
        </IconButton>
    )
}

export default PlayPauseButton;
