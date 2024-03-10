import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PersonIcon from '@mui/icons-material/PersonOutline';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SearchIcon from '@mui/icons-material/Search';
import huluLogo from '../assets/logo.svg';
import './header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header-icons">
            <div className="header-icon">
                <HomeIcon/>
                <p className='active'>Home</p>
            </div>
            <div className="header-icon">
                <FlashOnIcon/>
                <p>Trending</p>
            </div>
            <div className="header-icon">
                <LiveTvIcon/>
                <p>Verified</p>
            </div>
            <div className="header-icon">
                <VideoLibraryIcon/>
                <p>Collection</p>
            </div>
            <div className="header-icon">
                <SearchIcon/>
                <p>Search</p>
            </div>
            <div className="header-icon">
                <PersonIcon/>
                <p>Account</p>
            </div>
        </div>
        <div className="header-logo">
            <img src={huluLogo} alt="" />
        </div>
    </div>
  )
}

export default Header