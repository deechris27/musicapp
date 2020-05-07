import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Home} from '../../assets/home.svg';
import {ReactComponent as Search} from '../../assets/search.svg';
import {ReactComponent as Library} from '../../assets/library';

const Nav = () => {
    return (
        <div>
            <div>
                <title>Deepak's Music App</title>
            </div>
            <ul>
                <li>
                    <Home />
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Search />
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <Library />
                    <Link to="/library">Your Library</Link>
                </li>
            </ul>
        </div>
    )
};

export default Nav;