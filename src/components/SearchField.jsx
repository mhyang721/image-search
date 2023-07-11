import { useState, useContext } from 'react';
import { ImageContext } from '../App';

const SearchField = () => {
    // create state variable for search query
    // searchValue = current value of input field
    // setSearchValue = updates the searchValue state
    // search input is initially set to blank
    const [searchValue, setSearchValue] = useState('');
    // handle API request
    const { fetchData, setSearchTitle, page, setPage } = useContext(ImageContext);

    // set searchValue as the text entered in the search input
    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }
    // make API request on button click, based on search input
    const handleButtonSearch = () => {
        fetchData(`search/photos?page=${page}&per_page=${imgPerPage}&query=${searchValue}&client_id=${import.meta.env.VITE_REACT_APP_ACCESS_KEY}`)
        // clear search input after button is clicked
        setSearchValue('');
        // set search result title as the searched value
        setSearchTitle(searchValue);
        // set pagination back to 1 after a new search
        setPage(1);
    }
    // make API request after hitting enter, based on search input
    const handleEnterSearch = e => {
        if(e.key === 'Enter') {
            fetchData(`search/photos?page=${page}&per_page=${imgPerPage}&query=${searchValue}&client_id=${import.meta.env.VITE_REACT_APP_ACCESS_KEY}`)
            // clear search input after pressing enter
            setSearchValue('');
            setSearchTitle(searchValue);
            setPage(1);
        }
    }

    return (
        <div className="flex">
            <input 
                className="bg-gray-lt text-gray text-base w-full pl-6 pr-4 p-2.5 rounded-tl rounded-bl outline-none focus:bg-white search-cancel:p-px search-cancel:ml-4 search-cancel:cursor-pointer search-cancel:opacity-50 hover:search-cancel:opacity-80 placeholder:text-gray-md"
                type="Search"
                placeholder="Search Keywords..."
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleEnterSearch}
            />
            <button 
                // performs API request
                onClick={handleButtonSearch}
                // disable button if search input is blank
                disabled={!searchValue}
                className="bg-teal-lt px-5 py-2.5 rounded-tr rounded-br active:bg-teal-dk focus:bg-teal-dk hover:bg-teal disabled:bg-rose-lt transition duration-500"
            >🔍</button>
        </div>
    );
}
  
export default SearchField;