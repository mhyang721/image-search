import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";

const Images = () => {
    // read the response & loading state data from ImageContext
    const { response, isLoading } = useContext(ImageContext);

    return (
        <>
            <h1 className="text-center mt-8 underline text-xl">Results for Keycaps</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-8">
                {/* an image is rendered for each item in the response array */}
                {/* React requires passing a key prop with map() */}
                {response.map((data, key) => <Image key={key} data={data} />)}
            </div>
        </>
    );
}
  
export default Images;