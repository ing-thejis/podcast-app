import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = 'https://api.audioboom.com/channels/recommended/'

const useRequest = () => {

    const [channels, setChannels] = useState([])

    const requestGET = async () => {
        await axios.get(baseURL)
        .then(response => {
            setChannels(response.data.body)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        requestGET()
    }, [])

    

    return {
        channels,
        requestGET
    }
}

export default useRequest
