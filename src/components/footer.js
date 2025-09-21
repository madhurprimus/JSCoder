const Footer = () => {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <div href="#" className="flex justify-center lg:justify-start">
                            <img src="https://img.icons8.com/ios-filled/50/0000FF/code.png" alt="logo" className="h-8 w-8 mr-2 inline" />
                            <a href="#" className="font-bold text-xl text-indigo-600">JSCoder</a>
                        </div>
                        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
                        <a href="javascript:;" className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0">
                            Contact us
                        </a>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">JSCoder</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Home</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">About</a></li>
                            <li><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">HR Management</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">ChatBot</a></li>
                            <li><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Customer Support</a></li>
                            <li className="mb-6"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
                            <li ><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Subscribe</h4>
                        <p className="text-sm text-gray-500 leading-6 mb-7">Subscribe to get the latest news from us</p>
                        <a href="javascript:;" className="flex items-center justify-center gap-2 border border-indigo-600 rounded-full py-3 px-6 w-fit lg:mx-0  text-sm text-indigo-600 font-semibold transition-all duration-500 hover:bg-indigo-50">Subscribe<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;