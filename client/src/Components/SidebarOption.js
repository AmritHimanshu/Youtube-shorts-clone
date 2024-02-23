import React from 'react'
import './SidebarOption.css'

function SidebarOption({ Icon, title, selected }) {
    return (
        <div className={`sidebarOption ${selected && 'selected'}`} title={title} >
            <Icon />
            <div className='sidebarOption__title'>{title}</div>
        </div>
    )
}

export default SidebarOption