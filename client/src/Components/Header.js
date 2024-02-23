import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import CreateIcon from '@mui/icons-material/Create'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Header.css'

function Header() {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className='header'>

            <div className="header__left">
                <IconButton>
                    <MenuIcon style={{ color: 'white' }} />
                </IconButton>
                <Link to='/'>
                    <img className='header__logo' src='https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png' alt='' />
                </Link>
            </div>

            <div className="header__input">
                <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='Search' type="text" />
                <SearchIcon className='header__input__searchIcon' style={{ color: 'white' }} />
            </div>

            <div className="header__right">
                <IconButton title='Create' >
                    <CreateIcon style={{ color: 'white' }} />
                </IconButton>
                <IconButton title='Notifications'>
                    <NotificationsNoneIcon style={{ color: 'white' }} />
                </IconButton>
            </div>

        </div>
    )
}

export default Header