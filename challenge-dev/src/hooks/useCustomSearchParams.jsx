import { useSearchParams } from 'react-router-dom'

const useCustomSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const setParam = (key, value) => {
        console.log(key, value)
        setSearchParams(params => {
            value ? params.set(key, value) : params.delete(key)
            return params
        })
    }

    const getParam = (key) => {
        return searchParams.get(key)
    }

    const resetParams = () => {
        setSearchParams()
    }

    return {
        setParam,
        getParam,
        resetParams
    }
}

export default useCustomSearchParams
