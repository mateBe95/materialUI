import React, {Component} from 'react'
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class GenericCard extends Component {

    render() {
        const {
            headerTitle,
            headerSubtitle,
            headerAvatar,
            overlay,
            mediaImgSrc,
            mediaImgAlt,
            cardTitle,
            cardSubtitle,
            children
        } = this.props

        return (
            <Card>
                <CardHeader
                    title={headerTitle}
                    subtitle={headerSubtitle}
                    avatar={headerAvatar}
                    />

                <CardMedia overlay={overlay}>
                    <img src={mediaImgSrc} alt={mediaImgAlt}/>
                </CardMedia>

                <CardTitle 
                title={cardTitle} 
                subtitle={cardSubtitle}/>
                <CardText>
                    {children}
                </CardText>
                <CardActions>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>

            </Card>
        )
    }
}

export default GenericCard