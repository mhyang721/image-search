const Header = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-orange via-rose to-violet-md border-double border-b-8 border-white flex flex-col items-center py-10">
        <div className="max-w-md mx-auto w-full">
            <h1 className="text-white text-center text-4xl font-bold mb-6 hover:opacity-80 transition duration-300"><a href="">Image Search</a></h1>
        </div>
        {children}
    </div>
  );
}

export default Header;