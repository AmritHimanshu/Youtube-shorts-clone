import React from 'react'
import TopicSelect from './TopicSelect'
import VideoSectionOption from './VideoSectionOption'
import './VideoSection.css'

function VideoSection() {
    return (
        <div className='videoSection'>
            <div className="videoSection__first">
                <TopicSelect />
            </div>

            <div className='videoSection__second'>
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/849610807/ocean-173530.mp4?width=360&hash=de6ae525ac689219f1ab32778c2da557e12a4070' title='Ocean sky stones' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/336300898/boy-21827.mp4?width=640&hash=fc593b461c474956b4d8331ca5c7d36fa3183501' title='Boy hand tornado' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/913810329/kingfisher-200741.mp4?width=720&hash=9a906ba5942357e56dc594fb5bfc8dc0ca7885e5' title='KingFisher' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/135716287/guitarist-46.mp4?width=480&hash=81fca77f2f53b5355c69d03979c1e94a0bf7914b' title='Playing guitar' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/914571891/waterfall-201138.mp4?width=720&hash=d0ee96800fb45c9264885e4370bfe8619380f8b4' title='Waterfall' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/552602429/children-74540.mp4?width=640&hash=7d6b030b9abd7d0b67b69c984b3a5630b7b03649' title='Friendship' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/222371338/young-man-10091.mp4?width=640&hash=98870577438435c1608585ea4b8ddaded5351f27' title='Swimming' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/520427372/grass-66810.mp4?width=1280&hash=f9d5b56ee319b56625aadff30fcffb2931655616' title='Nature' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/892475199/trees-192357.mp4?width=1280&hash=4e652859e5f8edc807b25b3be301bf6eac8ac18c' title='Trees forest snow' />

                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/849610807/ocean-173530.mp4?width=360&hash=de6ae525ac689219f1ab32778c2da557e12a4070' title='Ocean sky stones' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/336300898/boy-21827.mp4?width=640&hash=fc593b461c474956b4d8331ca5c7d36fa3183501' title='Boy hand tornado' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/913810329/kingfisher-200741.mp4?width=720&hash=9a906ba5942357e56dc594fb5bfc8dc0ca7885e5' title='KingFisher' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/135716287/guitarist-46.mp4?width=480&hash=81fca77f2f53b5355c69d03979c1e94a0bf7914b' title='Playing guitar' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/914571891/waterfall-201138.mp4?width=720&hash=d0ee96800fb45c9264885e4370bfe8619380f8b4' title='Waterfall' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/552602429/children-74540.mp4?width=640&hash=7d6b030b9abd7d0b67b69c984b3a5630b7b03649' title='Friendship' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/222371338/young-man-10091.mp4?width=640&hash=98870577438435c1608585ea4b8ddaded5351f27' title='Swimming' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/520427372/grass-66810.mp4?width=1280&hash=f9d5b56ee319b56625aadff30fcffb2931655616' title='Nature' />
                <VideoSectionOption source='https://cdn.pixabay.com/vimeo/892475199/trees-192357.mp4?width=1280&hash=4e652859e5f8edc807b25b3be301bf6eac8ac18c' title='Trees forest snow' />
            </div>

        </div>
    )
}

export default VideoSection