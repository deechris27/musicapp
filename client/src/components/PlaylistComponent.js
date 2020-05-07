import React, { useState } from 'react'
import { ReactComponent as PlayIcon } from '../assets/playIcon.svg';
import { Link } from 'react-router-dom'
import './playlist.styles.scss'
import axios from 'axios';




const Playlists = props => {

    const [playListItem, setPlayListItem] = useState([]);

    const [img, setImg] = useState([]);

    axios.get("http://localhost:5000/playlist")
      .then(res=>{
          console.log(res.data);
          setPlayListItem(res.data)
      })


    //dummy playlist

  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: 'Home playlist 1',
      img:
        'https://images.unsplash.com/photo-1587201572498-2bc131fbf113?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=924&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 102,
      category_id: 3,
      name: 'Home playlist 2',
      img:
        'https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 103,
      category_id: 3,
      name: 'Home playlist 3',
      img:
        'https://images.unsplash.com/photo-1587223075055-82e9a937ddff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 104,
      category_id: 1,
      name: 'Focus playlist 1',
      img:
        'https://images.unsplash.com/photo-1587165282385-fe9bbf5eb1a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 105,
      category_id: 4,
      name: 'Sunday playist',
      img:
        'https://images.unsplash.com/photo-1587143602695-c980e283be9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 106,
      category_id: 2,
      name: 'Mood playist 1 ',
      img:
        'https://images.unsplash.com/photo-1587220111918-7a5c0f0c46f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
      desc: 'Lorem ipsum',
    },
    {
      id: 107,
      category_id: 2,
      name: 'Mood playist 2',
      img:
        'https://images.unsplash.com/photo-1587169544748-d21bd810f57e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
      desc: 'Lorem ipsum',
    },
  ]



  return (
    <div className="cardsWrapInner">
      {dataPlaylists.map((playlist, id) => (
        <Link to="" key={id}>
          <div className="card" key={id}>
            <div className="cardImage">
              <img src={playlist.img} alt="Pic 1" />
            </div>
            <div className="cardContent">
              <h3>{playlist.name}</h3>
              <span>{playlist.desc}</span>
            </div>
            <span className="playIcon">
              <PlayIcon />
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Playlists
