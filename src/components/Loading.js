import { CircularProgress } from '@material-ui/core'
import React from 'react'

const Loading = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CircularProgress />          
        </div>
    )
}

export default Loading
