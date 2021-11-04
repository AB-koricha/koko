import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import HomeIcon from '@material-ui/icons/Home';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';


function Header() {
    const [{user},dispatch]=useStateValue()
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='https://vectr.com/koricha/b2Rqg7cQ5.svg?width=640&height=640&select=b2Rqg7cQ5page0&quality=1' alt="logo" />
            </div>
            <div className='header__input'>
                <SearchIcon />
                <input type='text' placeholder='search from koko' />
            </div>
            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlinedIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <StorefrontOutlinedIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleOutlinedIcon fontSize='large'/>
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
