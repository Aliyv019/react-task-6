import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetchData(url) {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        const FetchData=async ()=>{
            try {
                const response = await axios.get(url)
                
            setData(response.data)
            } catch (error) {
                console.error();
                
            }
        }
        FetchData()
    }, [url])
    return data
}
