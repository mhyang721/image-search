import { useState, useContext } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
    // create state variable for search query
    // searchValue = current value of input field
    // setSearchValue = updates the searchValue state
    // search input is initially set to blank
    const [searchValue, setSearchValue] = useState("");
    // handle API request
    const { fetchData } = useContext(ImageContext);

    // set searchValue as the text entered in the search input
    const handleInputChange = (e) => {
        setSearchValue(e.target.value)
    }
    // make API request on button click, based on search input
    const handleButtonSearch = () => {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_REACT_APP_ACCESS_KEY}`)
        // clear search input after button is clicked
        setSearchValue("");
    }
    // make API request after hitting enter, based on search input
    const handleEnterSearch = e => {
        if(e.key === 'Enter') {
            fetchData(`search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_REACT_APP_ACCESS_KEY}`)
            // clear search input after pressing enter
            setSearchValue("");
        }
    }

    return (
        <div className="flex">
            <input 
                className="bg-slate-lt text-sm w-full px-6 p-2.5 rounded-tl rounded-bl outline-none focus:bg-white"
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
                className="bg-teal text-slate px-5 py-2.5 rounded-tr rounded-br active:bg-teal-xdk focus:bg-teal-xdk hover:bg-teal-dk disabled:bg-teal"
            >🔍</button>
        </div>
    );
  }
  
  export default SearchField;