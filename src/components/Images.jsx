import { useContext } from 'react';
import { ImageContext } from '../App';
import Image from './Image';
import Skeleton from './Skeleton';

const Images = () => {
    // read the response & loading state data from ImageContext
    const { response, isLoading, searchTitle } = useContext(ImageContext);

    return (
        <>
            <h1 className="text-center mt-8 text-lg text-gray">🔎 &nbsp;Results for <span className="text-violet">"{searchTitle || 'keycaps'}"</span> &nbsp;🔍</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10 max-w-7xl mx-auto px-8">
                {/* display skeleton component when API request is loading */}
                {/* when done loading, an image is rendered for each item in the response array */}
                {/* React requires passing a key prop with map() */}
                {isLoading ? <Skeleton item={16} /> : response.map((data, key) => <Image key={key} data={data} />)}
            </div>
        </>
    );
}
  
export default Images;