import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isFetchPending, setIsFetchPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect( () => {
        const abortController = new AbortController();

        setTimeout( () => {
            fetch(url, { signal: abortController.signal })
            .then(res => {
                if(!res.ok)
                {
                    throw Error('Bad Request!! Resource doesn\'t exist')
                }
                return res.json()
            })
            .then(fetchedData => {
                setError(null)
                setData(fetchedData)
                setIsFetchPending(false)
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setData(null)
                    setError(err.message)
                    setIsFetchPending(false)
                }
            })
        }, 0)

        return () => abortController.abort()

    }, [])

    return {data, isFetchPending, error, setData}
}
 
export default useFetch;