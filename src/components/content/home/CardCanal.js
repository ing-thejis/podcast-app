import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core'
import React, {useContext} from 'react'
import ContentContext from '../../../context/Content/ContentContext'

const CardCanal = (props) => {
    const { handleContent } = useContext(ContentContext)
    return (
        <div className="container" onClick={()=>handleContent('CANAL')}>
            <Card>
                <CardActionArea>
                    <CardMedia style={{width: '100%', height: '150px', objectFit: 'cover'}} image={props.image} />
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
