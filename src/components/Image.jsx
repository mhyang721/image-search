// the data being rendered for each iteration are the images
const Image = ({ data }) => {
    return (
        <a href={data.urls.regular} target="_blank" rel="noreferrer">
            <img className="h-72 w-full object-cover rounded-lg shadow-lg" src={data.urls.regular} alt={data.alt_description} />
        </a>
    );
}

export default Image;