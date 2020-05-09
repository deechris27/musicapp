import React, { useState, useEffect } from 'react'
import { ReactComponent as PlayIcon } from '../assets/playIcon.svg';
import { Link } from 'react-router-dom'
import './playlist.styles.scss'
import axios from 'axios';


const Playlists = props => {

  const [playListItem, setPlayListItem] = useState([]);

  const [artistItem, setArtistItem] = useState([]);

  const [artists, setArtists] = useState(['maroon', 'eminem', 'adele', 'taylor swift', 'lady gaga']);

  useEffect(() => {
    axios.get('https://deezerdevs-deezer.p.rapidapi.com/search?q=maroon',
      {
        headers:
        {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "16887570aemshb5778ad9a6af7cdp17983ajsn9bd90f5fac25"
        }
      }).then(res => {
        const data = res.data.data;
        setPlayListItem(data)
      });
  }, [artistItem]);


  // axios.get("http://localhost:5000/playlist")
  //   .then(res=>{
  //       console.log(res.data);
  //       setPlayListItem(res.data)
  //   })

     let maroon = axios.get('https://deezerdevs-deezer.p.rapidapi.com/search?q=artists[0]', {  headers: {"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
     "x-rapidapi-key": "16887570aemshb5778ad9a6af7cdp17983ajsn9bd90f5fac25" } });

     let eminem = axios.get('https://deezerdevs-deezer.p.rapidapi.com/search?q=artists[1]', {  headers: {"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
     "x-rapidapi-key": "16887570aemshb5778ad9a6af7cdp17983ajsn9bd90f5fac25" } });

     let adele = axios.get('https://deezerdevs-deezer.p.rapidapi.com/search?q=artists[2]', {  headers: {"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
     "x-rapidapi-key": "16887570aemshb5778ad9a6af7cdp17983ajsn9bd90f5fac25" } });

     let taylorSwift = axios.get('https://deezerdevs-deezer.p.rapidapi.com/search?q=artists[3]', {  headers: {"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
     "x-rapidapi-key": "16887570aemshb5778ad9a6af7cdp17983ajsn9bd90f5fac25" } });

     let ladyGaga = axios.get('https://deezerdevs-deezer.p.rapidapi.com/search?q=artists[4]', {  headers: {"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
     "x-rapidapi-key": "16887570aemshb5778ad9a6af7cdp17983ajsn9bd90f5fac25" } });
     
    //  axios.all([maroon, eminem, adele, taylorSwift, ladyGaga]).then(axios.spread((...res)=>{
    //    console.log("allllll...", res)
    //  }))


  return (
    <div className="cardsWrapInner">
      {playListItem && playListItem.map((playlist) => (
        <Link to="/playlist" key={playlist.id}>
          <div className="card" key={playlist.id}>
            <div className="cardImage">
              <img src={playlist.artist.picture} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.album.title}</h3>
              <span>{playlist.artist.name}</span>
            </div>
            <span className="playIcon">
              <PlayIcon style={{ height: "35px", position: 'relative', left: '140px' }} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Playlists
