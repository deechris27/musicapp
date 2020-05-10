import React, {useState} from 'react';
import {withStyles, Slider, Grid} from '@material-ui/core';
import {VolumeUp} from "@material-ui/icons";

const VolumeSlider = withStyles({
    root:{
        height: 6
    },
    thumb: {
        height: 10,
        width: 10,
        marginTop: -4.3,
        marginLeft: 3,
        "&::before":{
            content: "''",
            height: "inherit",
            width: "inherit",
            position: "absolute",
            transform: "scale(1.6)",
            borderRadius: "20px",
            border: "0.5px solid"
        }
    },
    track: {
        height: 3,
        borderRadius: 7
    },
    rail: {
        height: 3,
        borderRadius: 7
    }
})(Slider);

const VolumeControl = ()=>{

    const [volume, setVolume] = useState(100);

    const handleChange = (event, newValue) =>{
        setVolume(newValue)
    };

    return(
       <Grid container spacing={1} style={{width: '30%', position: 'relative', left: '90px', top: '10px'}}>
            <VolumeUp style={{position: 'relative', left: '70px', top: '2.5px'}}/>
            <VolumeSlider value={volume} max={100} onChange={handleChange} style={{ maxWidth: "200px", position:'relative', left:'15%', color: 'white' }}/>
        </Grid>
    )
};

export default VolumeControl;
