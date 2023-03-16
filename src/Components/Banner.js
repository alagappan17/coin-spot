import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: 'url(./banner.jpg)',
        // backgroundColor: 'red'
    },
    bannerContent: {
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 25,
        justifyContent: 'space-around'
    },
    tagline: {
        display: 'flex',
        flexDirection: 'column',
        height: '40%',
        justifyContent: 'center',
        textAlign: 'center'
    }
}))

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography variant="h2" style={{ fontWeight: "bold", marginBotton: 15, fontFamily: "Montserrat" }} >
                        Coin Spot
                    </Typography>
                    <Typography variant='subtitle2' style={{ color: 'darkgrey', textTransform: 'capitalize', fontFamily: 'Montserrat' }}>
                        Get all the info regarding your favourite Crypto Coins
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    )
}

export default Banner