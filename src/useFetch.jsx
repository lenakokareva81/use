import { useEffect, useRef, useState } from "react"

export function useFetch(request) {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [restart, setRestart] = useState(true)
    const page = useRef(1)
    const limit = useRef(5)
    const loading = useRef(true)
    const isLoading = loading.current


    useEffect(() => {
        fetch(request + `?_page= ${page.current}&_limit=${limit.current}`)
            .then(response => response.json())
            .then(json => {
                loading.current = false
                setData(json)
            })
            .catch(error => {
                loading.current = false
                setError(true)
            })
    }, [restart])

    function refetch({ params }) {
        if (params._limit) {
            limit.current = params._limit
        }
        console.log('params', params._limit)
        page.current = page.current + 1
        loading.current = true
        setRestart(!restart)
    }

    return {
        data,
        isLoading,
        error,
        refetch
    }
}