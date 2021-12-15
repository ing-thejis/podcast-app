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
        setTimeout(requestGET(), 1000)
    }, [])

    const requestGetId = async (id) => {
        await axios.get(baseURL+id)
        .then(response => {
            // setChannels(response.data.body.id)
            console.log(response.data.body)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return {
        channels,
        requestGET,
        requestGetId
    }
}

export default useRequest
