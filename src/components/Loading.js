import { CircularProgress } from '@material-ui/core'
import React from 'react'

const Loading = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '200px'
        }}>
            <CircularProgress />
            <h3>Loading . . .</h3>       
        </div>
    )
}

export default Loading
