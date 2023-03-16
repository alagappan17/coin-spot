import { makeStyles } from '@material-ui/core'
import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { TrendingCoins } from '../config/api';
import { CryptoState } from '../CryptoContext'

const useStyles = makeStyles(() => ({
    carousel: {
        height: '50%',
        display: 'flex',
        alignItems: 'center'
    }
}))

const Carousel = () => {
    const [trending, setTrending] = useState([])
    const classes = useStyles();
    const { currency } = CryptoState();

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        setTrending(data)
    }

    console.log(trending)

    useEffect(() => {
        fetchTrendingCoins();
    }, [currency])

    return (
        <div className={classes.carousel}>Carousel</div>
    )
}

export default Carousel