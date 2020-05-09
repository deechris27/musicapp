import React, {useState} from 'react';
import {Grid, Slider, withStyles} from "@material-ui/core";
import {VolumeUp} from "@material-ui/icons";


const VolumeSlider = withStyles({
    root:{
        height: 6
    },
    thumb: {
        height: 12,
        width: 12,
        "&::before":{
            content: "''",
            height: "inherit",
            width: "inherit",
            position: "absolute",
            transform: "scale(1.6)",
            borderRadius: "50px",
        }
    },
    track: {
        height: 2,
        borderRadius: 7
    },
    rail: {
        height: 2,
        borderRadius: 7,
        width: "100px"
    }
})(Slider);


const VolumeControl = ()=>{

    const [volume, setVolume] = useState(100);

    const changeVolume = (e) => {
        setVolume(volume + 10);
    }

    return (
        <Grid container spacing={1} style={{ maxWidth: "200px", position:'relative', left:'15%' }} >
            <Grid item>
                <VolumeUp />
            </Grid>
            <Grid>
                <VolumeSlider value={volume} onChange={changeVolume} style={{color: 'white'}}/>
            </Grid>
        </Grid>
    )
}

export default VolumeControl;