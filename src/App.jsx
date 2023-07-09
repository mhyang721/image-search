import { createContext } from 'react';
import Header from './components/Header';
import SearchField from './components/SearchField';
import Images from './components/Images';
import useAxios from './hooks/UseAxios';


// create context to make data accessible to different components
export const ImageContext = createContext();

// arrow function component
const App = () => {
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${import.meta.env.VITE_REACT_APP_ACCESS_KEY}`);
  // console.log(response);

  // data from the API call
  const value = {
    response,
    isLoading,
    error,
    fetchData
  }

  return (
    // provide data regarding the API call to components that have the useContext Hook
    <ImageContext.Provider value={value}>
      <Header>
      <SearchField></SearchField>
      </Header>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
