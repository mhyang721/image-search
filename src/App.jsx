import { createContext, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchField from './components/SearchField';
import Images from './components/Images';
import Pagination from './components/Pagination';
import useAxios from './hooks/useAxios';

// create context to make data accessible to different components
export const ImageContext = createContext();

// number of results to show per page
// use a global variable that can be accessed from other files
window.imgPerPage = 16

// arrow function component
const App = () => {
    // create state variable for search result title
    const [searchTitle, setSearchTitle] = useState('keycaps');
    // create state variable for page result to retrieve
    const [page, setPage] = useState(1);

    const { response, totalResults, isLoading, error, fetchData } = useAxios(`search/photos?page=${page}&per_page=${imgPerPage}&query=${searchTitle}&client_id=${import.meta.env.VITE_REACT_APP_ACCESS_KEY}`);

    console.log(response);
    // data from the API call
    const value = {
        response,
        totalResults,
        isLoading,
        error,
        fetchData,
        searchTitle,
        setSearchTitle,
        page,
        setPage
    }

    return (
        <>
            {/* provide data regarding the API call to components that have the useContext Hook */}
            <ImageContext.Provider value={value}>
                <Header>
                    <SearchField></SearchField>
                </Header>
                <Images />
                <Pagination></Pagination>
            </ImageContext.Provider>
            <Footer></Footer>
        </>
    );
}

export default App;