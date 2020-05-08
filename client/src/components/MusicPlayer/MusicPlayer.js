import React from 'react'
import PlayPauseButton from '../PlayPause/PlayPauseComponent';
import NextButton from '../NextButton/NextButton';
import PreviousButton from '../PreviousButton/PreviousButton';
import TimeLineControl from '../TimelineControl/TimeLineControl';

function MusicPlayer() {
    return (
        <div className="musicControls">
            <PreviousButton />
            <PlayPauseButton />
            <NextButton />
            <TimeLineControl />
        </div>
    )
}

export default MusicPlayer
