const SearchField = () => {
    return (
        <div className="flex">
            <input 
                className="bg-yellow-lt text-sm w-full px-6 p-2.5 rounded-tl rounded-bl outline-none focus:bg-white "
                type="Search"
                placeholder="Search Keywords..."
            />
            <button 
                className="bg-teal text-slate px-5 py-2.5 rounded-tr rounded-br active:bg-rose focus:bg-rose hover:bg-teal-dk disabled:bg-gray"
            >🔍</button>
        </div>
    );
  }
  
  export default SearchField;