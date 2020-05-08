import React from 'react'
import PlayPauseButton from '../PlayPause/PlayPauseComponent';
import NextButton from '../NextButton/NextButton';
import PreviousButton from '../PreviousButton/PreviousButton';
import TimeLineControl from '../TimelineControl/TimeLineControl';
import './musicplayer.styles.scss';
import VolumeControl from '../VolumeControl/VolumeControl';

function MusicPlayer() {
    return (
        <div className="musicControls">
            <div style={{position: 'relative', left: '25%', bottom: '20px'}}>
                <PreviousButton />
                <PlayPauseButton />
                <NextButton />
            </div>
            <TimeLineControl />
            <VolumeControl />
        </div>
    )
}

export default MusicPlayer
