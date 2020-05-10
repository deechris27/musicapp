import React, {useState, useEffect} from 'react';
import {withStyles, Slider} from '@material-ui/core';

const TimeSlider = withStyles({
    root:{
        height: 6
    },
    thumb: {
        height: 16,
        width: 16,
        marginTop: -5.3,
        marginLeft: -8,
        "&::before":{
            content: "''",
            height: "inherit",
            width: "inherit",
            position: "absolute",
            transform: "scale(1.6)",
            borderRadius: "50px",
            border: "1px solid"
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



const TimeLineControl = ({audioState, player})=>{

    // console.log("timeline....", audioState, player)

    const [currentTime, setCurrentTime] = useState(0);

    const handleChange = (event, newValue) =>{
        player.currentTime = newValue;
        setCurrentTime(newValue);
    };

    useEffect(() => {

       if(player){
           setCurrentTime(player.currentTime)
       }

       let intervalId;
       if(audioState === "playing"){
           intervalId = setInterval(()=>{
               setCurrentTime(player.currentTime);
           }, 50)
       }
    }, [audioState, player]);

    return(
        <div style={{ width: "40%" }}>
          <TimeSlider value={currentTime} max={player ? player.duration : 0} onChange={handleChange} style={{ color: "white", top: '25px', right: '15px' }}/>
        </div>
    )
}

export default TimeLineControl;