// the data being rendered for each iteration are the images
const Image = ({ data }) => {
    return (
        <div class="relative group overflow-hidden rounded-lg shadow-lg hover:opacity-90 transition duration-300">
            <a href={data.links.html} title={"View " + data.user.username + "'s photo on Unsplash"} target="_blank" rel="noreferrer">
                <img className="relative h-72 w-full object-cover group-hover:scale-105 ease-out duration-300" src={data.urls.regular} alt={data.alt_description} />
                <a href={data.user.links.html} title={"View " + data.user.username + "'s works on Unsplash"} target="_blank" rel="noreferrer">
                    <figcaption class="absolute flex justify-center items-center text-white opacity-0 bottom-0 inset-x-0 pt-8 pb-4 bg-gradient-to-t from-black transition duration-300 group-hover:opacity-100 hover:from-gray-dk hover:text-white/90">{"@" + data.user.username}</figcaption>
                </a>
            </a>
        </div>
    );
}

export default Image;

{/* <a href={data.urls.regular} target="_blank" rel="noreferrer">
<img className="h-72 w-full object-cover rounded-lg shadow-lg" src={data.urls.regular} alt={data.alt_description} />
</a> */}