import React, { useContext } from 'react'
import { CanalContext } from '../../../context/canal/CanalProvider'
import Navbar from '../../Navbar'
import Header from './Header'

const Canal = () => {

    const { channel } = useContext(CanalContext)

    return (
        <div style={{backgroundColor: '#222'}}>
            <Navbar />
           
           <Header />
        </div>
    )
}

export default Canal
