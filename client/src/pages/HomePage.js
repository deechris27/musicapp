import React, { useState } from 'react';
import axios from 'axios';
import Playlists from '../components/PlaylistComponent';
import './homepage.styles.scss';

function HomePage() {

    const [library, setLibrary] = useState([]);

    
    axios.get("http://localhost:5000/library")
       .then(res=>{
           setLibrary(res.data);
        })
    .catch(e=>{
        console.log("Error ")
    })

    const libData = [
        {
            "album": "The All-American Rejects", 
            "duration": 228, 
            "title": "My Paper Heart", 
            "id": 0, 
            "artist": "The All-American Rejects"
        }, 
        {
            "album": "The All-American Rejects", 
            "duration": 260, 
            "title": "Your Star", 
            "id": 1, 
            "artist": "The All-American Rejects"
        }, 
        {
            "album": "The All-American Rejects", 
            "duration": 233, 
            "title": "Swing, Swing", 
            "id": 2, 
            "artist": "The All-American Rejects"
        }, 
        {
            "album": "The All-American Rejects", 
            "duration": 210, 
            "title": "Time Stands Still", 
            "id": 3, 
            "artist": "The All-American Rejects"
        }, 
        {
            "album": "The All-American Rejects", 
            "duration": 183, 
            "title": "One More Sad Song", 
            "id": 4, 
            "artist": "The All-American Rejects"
        }
    ]

    return (
        <React.Fragment>
            <div className="mainInner">
                {libData.map((library) => {
                    return <div className="cardsWrap" key={library.id}>
                        <h2>{library.album}</h2>
                        <p className="subText">{"Select your album..."}</p>
                        <Playlists />
                    </div>
                })}
            </div>
        </React.Fragment>
    )
}

export default HomePage
