import React from 'react'
import './TopicSelect.css'

function TopicSelect() {

    const topicSelect = (topic, active) => (
        <div className={`topicSelect__topic ${active}`}>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='topicSelect'>
            <div className='topicSelect__content'>
                {topicSelect('All', "active")}
                {topicSelect('Mixes')}
                {topicSelect('Music')}
                {topicSelect('JavaScript')}
                {topicSelect('C++')}
                {topicSelect('Kapil Sharma')}
                {topicSelect('Bhajan Music')}
                {topicSelect('Dubbing')}
                {topicSelect('Motivation')}
                {topicSelect('Comedy')}
                {topicSelect('Computer Programming')}
                {topicSelect('Live')}
                {topicSelect('Gaming')}
                {topicSelect('Arijit Singh')}
                {topicSelect('Bollywood Music')}
                {topicSelect('Bhajan Music')}
                {topicSelect('Bhangra')}
                {topicSelect('Indian pop music')}
                {topicSelect('Recently uploaded')}
            </div>
        </div>
    )
}

export default TopicSelect