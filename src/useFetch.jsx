import { useEffect, useRef, useState } from "react"

export function useFetch(request) {
    const [data, setData] = useState([])
    const loading = useRef(true)
    const isLoading = loading.current
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(request)
            .then(response => response.json())
            .then(json => {
                console.log("все хорошо", json)
                loading.current = false
                setData(json)
            })
            .catch(error => {
                console.log("ошибка", error)

                loading.current = false
                setError(true)
            })
    }, [])







    function refetch() {
        console.log("refetch")
    }

    return {
        data,
        isLoading,
        error,
        refetch
    }
}