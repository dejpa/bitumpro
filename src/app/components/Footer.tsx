import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20"></div>
            </div>
            
            <div className="relative container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* بخش تماس با ما */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold gradient-text">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="glass-card p-4 hover-lift">
                                <p className="text-gray-300 leading-relaxed">
                                    <span className="text-primary-400 font-medium">Address:</span><br />
                                    1470 Camelot RD, West Vancouver, BC, Canada
                                </p>
                            </div>
                            <div className="glass-card p-4 hover-lift">
                                <p className="text-gray-300">
                                    <span className="text-primary-400 font-medium">Phone:</span> +1 (778) 877-1052
                                </p>
                            </div>
                            <div className="glass-card p-4 hover-lift">
                                <p className="text-gray-300">
                                    <span className="text-primary-400 font-medium">Email:</span> info@company.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* بخش لینک‌های سریع */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold gradient-text">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { href: "/privacy", label: "Privacy Policy" },
                                { href: "/terms", label: "Terms of Service" },
                                { href: "/about", label: "About Us" },
                                { href: "/contact", label: "Contact Us" }
                            ].map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href} 
                                        className="group flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 hover-cursor-glow py-2"
                                    >
                                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* بخش شبکه‌های اجتماعی */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold gradient-text">Follow Us</h3>
                        <div className="flex space-x-4">
                            {[
                                { 
                                    href: "https://www.instagram.com/yourcompany", 
                                    icon: FaInstagram, 
                                    label: "Instagram" 
                                },
                                { 
                                    href: "https://www.linkedin.com/company/yourcompany", 
                                    icon: FaLinkedin, 
                                    label: "LinkedIn" 
                                },
                                { 
                                    href: "https://twitter.com/yourcompany", 
                                    icon: FaXTwitter, 
                                    label: "Twitter" 
                                }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card p-4 hover-lift hover-cursor-expand group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-6 w-6 text-gray-300 group-hover:text-primary-400 transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                        
                        {/* Newsletter signup */}
                        <div className="glass-card p-6 mt-6">
                            <h4 className="text-lg font-semibold text-primary-400 mb-3">Stay Updated</h4>
                            <p className="text-gray-300 text-sm mb-4">Subscribe to our newsletter for latest updates.</p>
                            <div className="flex gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Your email"
                                    className="flex-1 bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
                                />
                                <button className="glass-button px-4 py-2 rounded-lg text-sm font-medium hover-cursor-expand">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* بخش کپی‌رایت */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-300 text-sm">
                            © 2025 Bitumasphalt. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover-cursor-glow">
                                Privacy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover-cursor-glow">
                                Terms
                            </a>
                            <a href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover-cursor-glow">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}