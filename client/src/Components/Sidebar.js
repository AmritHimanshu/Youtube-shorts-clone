import React from 'react'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import SensorsIcon from '@mui/icons-material/Sensors';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import './Sidebar.css'

function Sidebar() {

    return (

        (
            <div className='sidebar' >
                <SidebarOption Icon={HomeIcon} title='Home' />
                <SidebarOption Icon={YouTubeIcon} title='Shorts' selected />
                <SidebarOption Icon={SubscriptionsIcon} title='Subscriptions' />
                <hr />
                <SidebarOption Icon={VideoLibraryIcon} title='Library' />
                <SidebarOption Icon={HistoryIcon} title='History' />
                <SidebarOption Icon={SmartDisplayIcon} title='Your videos' />
                <SidebarOption Icon={WatchLaterIcon} title='Watch Later' />
                <SidebarOption Icon={ThumbUpAltIcon} title='Liked Videos' />
                <SidebarOption Icon={ExpandMoreIcon} title='Show more' />
                <hr />
                <h4>Explore</h4>
                <SidebarOption Icon={WhatshotIcon} title='Trending' />
                <SidebarOption Icon={MusicNoteIcon} title='Music' />
                <SidebarOption Icon={MovieCreationIcon} title='Films' />
                <SidebarOption Icon={SensorsIcon} title='Live' />
                <SidebarOption Icon={SportsEsportsIcon} title='Gaming' />
                <SidebarOption Icon={NewspaperIcon} title='News' />
                <SidebarOption Icon={EmojiEventsIcon} title='Sport' />
                <hr />
            </div >
        )


    )
}

export default Sidebar