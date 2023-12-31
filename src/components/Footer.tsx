export default function Footer() {
    return (
        <div className="bg-gray-100 text-gray-600 py-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="grow flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-10 justify-evenly">
                        <div className="flex flex-col space-y-2">
                            <h5 className="text-lg font-semibold">HELP & INFORMATION</h5>
                            {/* <a href="#" className="text-sm hover:underline">Help</a> */}
                            <a href="#" className="text-sm hover:underline">FAQ</a>
                            {/* <a href="#" className="text-sm hover:underline">Delivery & returns</a> */}
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h5 className="text-lg font-semibold">ABOUT Efficeincy Hub</h5>
                            <a href="#" className="text-sm hover:underline">About us</a>
                            <a href="#" className="text-sm hover:underline">Contact Us</a>
                            {/* <a href="#" className="text-sm hover:underline">Careers at Efficeincy Hub</a>
                            <a href="#" className="text-sm hover:underline">Corporate responsibility</a> */}
                        </div>
                        {/* <div className="flex flex-col space-y-2">
                            <h5 className="text-lg font-semibold">MORE FROM Efficeincy Hub</h5>
                            <a href="#" className="text-sm hover:underline">Mobile and Efficeincy Hub apps</a>
                            <a href="#" className="text-sm hover:underline">Efficeincy Hub Marketplace</a>
                            <a href="#" className="text-sm hover:underline">Gift vouchers</a>
                            <a href="#" className="text-sm hover:underline">Black Friday</a>
                            <a href="#" className="text-sm hover:underline">Efficeincy Hub x Thrift+</a>
                            <a href="#" className="text-sm hover:underline">Discover the Efficeincy Hub Credit Card</a>
                        </div> */}
                    </div>
                    {/* <div className="flex items-center">
                        <div className="flex">
                            <a href="#" className="text-blue-600"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-purple-600"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-yellow-400"><i className="fab fa-snapchat-ghost"></i></a>
                        </div>
                        <div className="border-l border-gray-400 mx-4 h-6"></div>
                        <div className="flex">
                            <a href="#" className="text-blue-600"><i className="fab fa-cc-visa"></i></a>
                            <a href="#" className="text-blue-600"><i className="fab fa-cc-paypal"></i></a>
                            <a href="#" className="text-blue-600"><i className="fab fa-cc-amex"></i></a>
                            <a href="#" className="text-blue-600"><i className="fab fa-cc-mastercard"></i></a>
                        </div>
                    </div> */}
                </div>
                <div className="flex flex-col justify-between items-center mt-6 border-t border-gray-400 pt-6">
                    <div className="text-sm text-center">
                        &copy; {new Date().getFullYear()} Efficiency Hub
                    </div>
                    {/* <div className="flex">
                        <a href="#" className="text-sm hover:underline">Privacy & Cookies</a>
                        <a href="#" className="text-sm hover:underline">T&Cs</a>
                        <a href="#" className="text-sm hover:underline">Accessibility</a>
                    </div>
                    <div className="flex">
                        <span className="text-sm">SHOPPING FROM:</span>
                        <a href="#" className="text-sm hover:underline">You're in <i className="fas fa-globe-europe"></i> | CHANGE</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
