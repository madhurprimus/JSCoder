const Header = () => {
    return (
        <div className="header-2">
            <nav className="bg-white py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">
                    <div className="flex justify-between items-center">
                        <img src="https://img.icons8.com/ios-filled/50/0000FF/code.png" alt="logo" className="h-8 w-8 mr-2 inline" />
                        <a href="#" className="font-bold text-xl text-indigo-600">JSCoder</a>
                        <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0">
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-white bg-indigo-600 rounded hover:bg-indigo-500 transition-colors duration-300">Home</a>
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 transition-colors duration-300">About</a>
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 transition-colors duration-300">Products</a>
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 transition-colors duration-300">Pricing</a>
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header; 