import Header from './components/Header';
import SearchField from './components/SearchField';
import Images from './components/Images';
import useAxios from './hooks/UseAxios';
// import '.env/config';

const App = () => {
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=office&client_id=${import.meta.env.REACT_APP_ACCESS_KEY}`);
  console.log(response);
  return (
    <>
      <Header>
      <SearchField></SearchField>
      </Header>
      <Images></Images>
    </>
  );
}

export default App;
