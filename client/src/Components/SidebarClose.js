import React from 'react'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import './SidebarClose.css'

function Sidebar() {


    return (

        (
            <div className='sidebar' >
                <SidebarOption Icon={HomeIcon} title='' selected />
                <SidebarOption Icon={YouTubeIcon} title='' />
                <SidebarOption Icon={SubscriptionsIcon} title='' />
                <SidebarOption Icon={VideoLibraryIcon} title='' />
            </div >
        )


    )
}

export default Sidebar