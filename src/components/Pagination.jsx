import { useContext } from 'react';
import { ImageContext } from '../App';

const Pagination = () => {
    
    const { totalResults, isLoading, page, setPage } = useContext(ImageContext);
    const totalPages = Math.ceil(totalResults / imgPerPage);

    // jump to top of page after switching pages
    const jumpToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="flex justify-center items-center gap-4 my-12">
            {isLoading ? 
                (
                    <>
                        <button
                            className="bg-rose text-white text-lg px-4 py-2 rounded hover:bg-rose-lt hover:text-rose active:bg-rose-lt active:text-rose transition duration-300">
                            Prev
                        </button>
                        {/* spinner */}
                        <div className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-r-transparent text-orange rounded-full" aria-label="loading"></div>
                        <button 
                            className="bg-teal-dk text-white text-lg px-4 py-2 rounded hover:bg-teal-lt hover:text-teal-dk transition duration-300 animate-pulse hover:animate-none">
                            Next
                        </button>
                    </>
                ) : 
                (
                    <>
                        <button
                            className="bg-rose text-white text-lg px-4 py-2 rounded hover:none md:hover:bg-rose-lt md:hover:text-rose transition duration-300 disabled:bg-shdw disabled:text-white"
                            disabled={page === 1}
                            onClick={() => {
                                setPage((prevPage) => prevPage - 1);
                                jumpToTop();
                            }}>
                            Prev
                        </button>
                        <p className="w-5 text-center text-gray text-lg">{page}</p>
                        <button 
                            className="bg-teal-dk text-white text-lg px-4 py-2 rounded hover:none md:hover:bg-teal-lt md:hover:text-teal-dk transition duration-300 animate-pulse md:hover:animate-none disabled:animate-none disabled:bg-shdw disabled:text-white"
                            disabled={page === totalPages}
                            onClick={() => {
                                setPage((prevPage) => prevPage + 1);
                                jumpToTop();
                            }}>
                            Next
                        </button>
                    </>
                )
            }
        </div>
    );
}

export default Pagination;