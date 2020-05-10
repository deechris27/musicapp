import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../assets/playIcon.svg';
import './plalistpage.styles.scss';

const PlaylistPage = () => {

  //let { id } = useParams()

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://api.deezer.com/artist/5080/image"
              alt="pic"
            />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Playlist</p>
            <h1>Playlist Items</h1>

            <p className="tagline">
              Your playlist Items below
            </p>
            <div className="playlistPageDesc">
              <p className="spotify">Mytidbit</p>
              <span>55555555 likes</span>
              <span>4hr 35 min</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <div className="playlistButtons">
            <span className="playIcon">
              <PlayIcon className="playI" style={{ height: "35px", position: 'relative', left: '140px' }}/>
            </span>
            <div className="icons">
              <div className="icon iconsDots"></div>
            </div>
          </div>

          <ul className="songList">
            <li>
              <div className="songIcon">
                <PlayIcon className="playI" style={{ height: "35px", position: 'relative', left: '140px' }}/>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <PlayIcon className="playI" style={{ height: "35px", position: 'relative', left: '140px' }}/>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <PlayIcon className="playI" style={{ height: "35px", position: 'relative', left: '140px' }}/>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <PlayIcon className="playI" style={{ height: "35px", position: 'relative', left: '140px' }}/>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <PlayIcon className="playI" style={{ height: "35px", position: 'relative', left: '140px' }}/>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
            <li>
              <div className="songIcon">
                <PlayIcon className="playI" style={{ height: "35px", position: 'relative', left: '140px' }}/>
              </div>
              <div className="songDetails">
                <h3>Held Down</h3>
                <span>Laura Marling</span>
              </div>
              <div className="songTime">
                <span>4:07</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PlaylistPage
