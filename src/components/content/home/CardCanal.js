import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core'
import React, {useContext} from 'react'
import {ContentContext} from '../../../context/Content/ContentProvider'
import { useStyles } from '../../../styles/CardCanal'

const CardCanal = (props) => {
    const classes = useStyles()

    const { handleContent } = useContext(ContentContext)
    return (
        <div className={classes.container} onClick={()=>handleContent('CANAL')}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia style={{width: '100%', height: '150px', borderRadius: '10px'}} image={props.image} />
                    <CardContent>
                        <b>{props.description.length > 28 ? `${props.description.slice(0, 25)}...` : props.description}</b>
                        <p>{props.title.length > 25 ? `${props.title.slice(0, 22)}...` : props.title}</p>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default CardCanal
