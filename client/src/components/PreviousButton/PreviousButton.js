import React from 'react';
import { IconButton } from '@material-ui/core';
import { SkipPrevious } from '@material-ui/icons';

const PreviousButton = ({playPrevious})=>{
    return(
        <IconButton aria-label="next" onClick={playPrevious}>
            <SkipPrevious style={{ fontSize: "1em", color: "white" }} />
        </IconButton>
    )
}

export default PreviousButton;