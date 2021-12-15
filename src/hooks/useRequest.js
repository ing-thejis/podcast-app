import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = 'https://api.audioboom.com/channels/'

const useRequest = (props) => {

    const [channels, setChannels] = useState([])
    const [channel, setChannel] = useState({})

    const getChannels = async () => {
        await axios.get(baseURL+'recommended/')
        .then(response => {
            setChannels(response.data.body)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const getChannel = async (id) => {
        await axios.get(baseURL+id)
        .then(response => {
            setChannel(response.data)
            console.log('data here!!')
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        setTimeout(getChannels(), 1000)
    }, [])

    useEffect(()=> {
        setTimeout(getChannel(4950586), 1000)
    }, [])

    return {
        channels,
        channel,
        getChannels,
        getChannel
    }
}

export default useRequest
