import React, {useState} from 'react';
import {Grid, Slider, withStyles} from "@material-ui/core";
import {VolumeUp} from "@material-ui/icons";


const VolumeSlider = withStyles({
    root:{
        height: 6
    },
    thumb: {
        height: 16,
        width: 7,
        marginTop: -5.3,
        marginLeft: -8,
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
        borderRadius: 7,
        color: 'white'
    },
    rail: {
        height: 2,
        borderRadius: 7,
        color: 'white'
    }
})(Slider);


const VolumeControl = ()=>{

    const [volume, setVolume] = useState(0);

    const changeVolume = (e) => {
        setVolume(e.target.value);
    }

    return (
        <Grid container spacing={1} style={{ maxWidth: "200px", position:'relative', left:'15%' }} >
            <Grid item>
                <VolumeUp style={{color: 'white'}} />
            </Grid>
            <Grid>
                <VolumeSlider value={volume} onChange={changeVolume} style={{color: 'white'}}/>
            </Grid>
        </Grid>
    )
}

export default VolumeControl;