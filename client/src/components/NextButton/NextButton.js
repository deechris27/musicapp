import React from 'react';
import { IconButton } from '@material-ui/core';
import { SkipNext } from '@material-ui/icons';

const NextButton = ({playNext})=>{
    return(
        <IconButton aria-label="next" onClick={playNext}>
            <SkipNext style={{ fontSize: "1em", color: "white" }}/>
        </IconButton>
    )
}

export default NextButton;