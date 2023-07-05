const Header = ({ children }) => {
  return (
    <div className="bg-violet flex flex-col items-center py-10">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-3xl font-bold mb-5">📸 &nbsp;Unsplash Image Search &nbsp;📸</h1>
      </div>
      {children}
    </div>
  );
}

export default Header;