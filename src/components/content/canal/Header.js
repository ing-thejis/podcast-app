import React, { useContext } from 'react'
import { CanalContext } from '../../../context/canal/CanalProvider'

const Header = () => {

    const { channel } = useContext(CanalContext)
    
    return (
        <div style={{backgroundColor: '#f64322'}}>
            <img src={channel.body.channel.urls.logo_image.original} alt={channel.body.channel.title} style={{width: '200px', height: '200px'}} />
            <p>{channel.body.channel.category.title}</p>
            <h4>{channel.body.channel.title}</h4>
        </div>
    )
}

export default Header
