import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [{user},dispatch]=useStateValue()
    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title='Covid-19 lastest information'/>
            <SidebarRow Icon={EmojiFlagsIcon} title='pages'/>
            <SidebarRow Icon={PeopleIcon} title='friends' />
            <SidebarRow Icon={ChatIcon} title='Messeger'/>
            <SidebarRow Icon={StorefrontIcon} title='MarketPlace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='video'/>
            <SidebarRow Icon={ExpandMoreIcon} title='MarketPlace' />
        </div>
    )
}

export default Sidebar
