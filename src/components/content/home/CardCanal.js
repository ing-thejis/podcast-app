import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core'
import React, {useContext} from 'react'
import {ContentContext} from '../../../context/content/ContentProvider'
import { useStyles } from '../../../styles/StyleCardCanal'

const CardCanal = (props) => {
    const classes = useStyles()

    const handleOnClick = () => {
        handleContent('CANAL')
        console.log(props.id)
        // requestGetId(props.id)
    }

    const { handleContent } = useContext(ContentContext)
    return (
        <div className={classes.container} onClick={()=>handleOnClick()}>
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
