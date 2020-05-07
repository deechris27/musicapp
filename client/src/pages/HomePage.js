import React, { useState } from 'react';
import axios from 'axios';
import Playlists from '../components/PlaylistComponent';

function HomePage() {
    const [limit, setLimit] = useState(0);

    const [library, setLibrary] = useState([]);

    
    axios.get("http://localhost:5000/library")
       .then(res=>{
           setLibrary(res.data);
        })
    .catch(e=>{
        console.log("Error ")
    })

    return (
        <React.Fragment>
            <div className="mainInner">
                {library.map((library) => {
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
