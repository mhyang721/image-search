// the data being rendered for each iteration are the images
const Image = ({ data }) => {
    return (
        <div className="relative group overflow-hidden rounded-lg shadow-lg shadow-shdw hover:opacity-90 transition duration-300">
            <a href={data.links.html} title={"View " + data.user.username + "'s photo on Unsplash"} target="_blank" rel="noreferrer">
                <img className="relative h-72 w-full object-cover group-hover:scale-105 ease-out duration-300" src={data.urls.regular} alt={data.alt_description} />
            </a>
            <a href={data.user.links.html} title={"View " + data.user.username + "'s works on Unsplash"} target="_blank" rel="noreferrer">
                <figcaption className="absolute flex justify-center items-center text-white opacity-0 bottom-0 inset-x-0 pt-8 pb-4 bg-gradient-to-t from-black transition duration-300 group-hover:opacity-100 hover:from-gray-dk hover:text-teal-lt">{"@" + data.user.username}</figcaption>
            </a>
        </div>
    );
}

export default Image;