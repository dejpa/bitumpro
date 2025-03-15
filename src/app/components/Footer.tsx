import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-8">
            <div className="container mx-auto flex flex-wrap justify-between">
                {/* بخش تماس با ما */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h3 className="text-md md:text-lg font-bold text-yellow-400">Contact Us</h3>
                    <p className="text-gray-300">Address: 1470 Camelot RD, West Vancouver, BC, Canada</p>
                    <p className="text-gray-300">Phone:  +1 (778) 877-1052</p>
                    <p className="text-gray-300">Email:  info@company.com</p>
                </div>

                {/* بخش لینک‌های سریع */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h3 className="text-md md:text-lg font-bold text-yellow-400">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/privacy" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/terms" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-300">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* بخش شبکه‌های اجتماعی */}
                <div className="w-full md:w-1/3">
                    <h3 className="text-md md:text-lg font-bold text-yellow-400">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.instagram.com/yourcompany"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-yellow-400 transition duration-300"
                        >
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/yourcompany"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-yellow-400 transition duration-300"
                        >
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a
                            href="https://twitter.com/yourcompany"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-yellow-400 transition duration-300"
                        >
                            <FaXTwitter className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* بخش کپی‌رایت */}
            <div className="text-center mt-8 border-t border-gray-700 pt-8">
                <p className="text-gray-300">© 2025 Bitumasphalt. All rights reserved.</p>
            </div>
        </footer>
    );
}