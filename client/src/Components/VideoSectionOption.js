import React, { useEffect, useRef, useState } from 'react';
// import { useInView } from 'react-intersection-observer';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import './VideoSectionOption.css'

function VideoSectionOption({ source, title }) {

    const [isLiked, setIsLiked] = useState(false);
    const [isDisLiked, setIsDisLiked] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const videoRef = useRef(null);

    const updateProgressBar = () => {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        const percentage = (currentTime / duration) * 100;
        setProgress(percentage);
    };

    useEffect(() => {
        if (isVideoPlaying) {
            const intervalId = setInterval(updateProgressBar, 100); // Update progress every 100 milliseconds
            return () => clearInterval(intervalId);
        }
    }, [isVideoPlaying]);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    return (
        <div className='videoSectionOption'>
            <div className='videoSectionOption__title'>{title}</div>

            <video
                ref={videoRef}
                className='videoSectionOption__player'
                src={source}
                alt=''
                loop
                onClick={onVideoPress}
            />

            <div className='videoSectionOption__options'>

                {!isLiked ? <ThumbUpOffAltIcon style={{ color: 'white', fontSize: '35px', cursor: 'pointer' }} onClick={() => setIsLiked(!isLiked)} /> : <ThumbUpAltIcon style={{ color: '#29C5F6', fontSize: '35px', cursor: 'pointer' }} onClick={() => setIsLiked(!isLiked)} />}

                {!isDisLiked ? <ThumbDownOffAltIcon style={{ color: 'white', fontSize: '35px', cursor: 'pointer' }} onClick={() => setIsDisLiked(!isDisLiked)} /> : <ThumbDownAltIcon style={{ color: '#29C5F6', fontSize: '35px', cursor: 'pointer' }} onClick={() => setIsDisLiked(!isDisLiked)} />}

                <ShareIcon style={{ color: 'white', fontSize: '35px' }} />

                <ChatIcon style={{ color: 'white', fontSize: '35px' }} />
            </div>

            {isVideoPlaying && (
                <progress className='videoSectionOption__progress-bar' value={progress} max='100' />
            )}
        </div>
    )
}

export default VideoSectionOption