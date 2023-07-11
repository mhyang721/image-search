// import axios for making HTTP requests
import axios from 'axios';
// import useEffect hook from React
import { useState, useEffect } from 'react';

// declare 3 state variables using the useState hook
const useAxios = (param) => {
    // store response data received from the API
    const [response, setResponse] = useState([]);
    // store the total number of image results
    const [totalResults, setTotalResults] = useState(0);
    // track whether the API request is currently loading
    const [isLoading, setIsLoading] = useState(false);
    // store any error msgs that occur during the API request
    const [error, setError] = useState('');

    // stores the default base URL for axios requests
    // any future requests will just prepend the base URL to the request URL
    axios.defaults.baseURL = 'https://api.unsplash.com';

    // handles the API request
    // async means the function will always return a promise
    const fetchData = async (url) => {
        try {
            // indicate the request is in progress
            setIsLoading(true);
            // perform API request using axios based on the provided url
            // await pauses execution of the fxn until promise returned by axios(url) is resolved
            const res = await axios(url);
            // if successful, response state is updated with results
            setResponse(res.data.results);
            // store the total # of results
            setTotalResults(res.data.total);
        } catch(err) {
            // stores error msgs that may occur
            setError(err)
        } finally {
            // regardless of outcome, loading state is set back to false
            setIsLoading(false)
        }
    };

    // useEffect hook triggers the API request whenever param changes
    // calls fetchData fxn with param value
    useEffect(() => {
        fetchData(param)
    }, [param])

    return {
        response,
        totalResults,
        isLoading,
        error,
        fetchData: url => fetchData(url)
    };
}

export default useAxios;