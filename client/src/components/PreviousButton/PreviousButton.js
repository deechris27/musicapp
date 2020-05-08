import React from 'react';
import { IconButton } from '@material-ui/core';
import { SkipPrevious } from '@material-ui/icons';

const PreviousButton = ()=>{
    return(
        <IconButton aria-label="next">
            <SkipPrevious style={{ fontSize: "1em", color: "white" }} />
        </IconButton>
    )
}

export default PreviousButton;