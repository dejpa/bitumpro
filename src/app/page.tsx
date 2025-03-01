"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaLeaf, FaCheckCircle, FaShieldAlt, FaTruck, FaGlobe, FaBoxOpen } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/homepage-cover.webp')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400">
            Innovative Solutions for Land Restoration
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            We specialize in providing high-quality bitumen products and creative materials to restore land, improve ecosystems, and support sustainable development.
          </p>
          <div className="space-x-4">
            <Link
              href="/about-us"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              Learn More
            </Link>
            <a
              href="/contact"
              className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
            About Us
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Based in Canada, we are a trading company dedicated to delivering innovative bitumen products and eco-friendly solutions for land restoration. Our mission is to provide creative materials that revive ecosystems and promote sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <FaLeaf className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Our Vision</h3>
              <p className="text-gray-300">
              BitumAsphalt aims to be a leading producer and exporter of bitumen and asphalt in North America and beyond. Committed to innovation, sustainability, and quality, we deliver high-performance solutions for modern infrastructure. By leveraging advanced technologies and industry expertise, we strive to shape the future of sustainable road construction and engineering services worldwide.
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <FaCheckCircle className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Our Mission</h3>
              <p className="text-gray-300">
              Leading the way in expanding market share within the existing value chain by enhancing productivity, intelligence, and innovation in supply, production, and sales strategies. Additionally, BitumAsphalt is committed to entering the oil refining chain to gain expertise and build strategic capacity, ensuring long-term growth and a competitive edge in the future of the industry.
              </p>
            </div>

            {/* Values */}
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <FaShieldAlt className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Our Values</h3>
              <p className="text-gray-300">
               Our Values at BitumAsphalt
                BitumAsphalt is committed to innovation, sustainability, and excellence, delivering high-quality bitumen and asphalt solutions through advanced technology and responsible practices. With a customer-centric approach, we build strong partnerships while upholding integrity and reliability. By investing in growth and learning, we shape the future of sustainable infrastructure development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
            Our Products
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We offer a wide range of bitumen products, specially designed for the Canadian market and international clients. Our products are crafted to meet the highest standards of quality and sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1: Bitumen for Land Restoration */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <FaTruck className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Bitumen for Land Restoration</h3>
              <p className="text-gray-300">
                High-quality bitumen for soil stabilization and erosion control.
              </p>
            </div>

            {/* Product 2: Eco-Friendly Packaging */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <FaBoxOpen className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Eco-Friendly Packaging</h3>
              <p className="text-gray-300">
                Specially designed packaging for safe and sustainable delivery.
              </p>
            </div>

            {/* Product 3: International Distribution */}
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <FaGlobe className="text-yellow-400 h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">International Distribution</h3>
              <p className="text-gray-300">
                Available for global markets, including Amazon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with us for more information about our products and services. We are here to help you with your land restoration needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Canada Office</h3>
              <p className="text-gray-300">
                1234 Main Street, Toronto, ON, Canada
              </p>
              <p className="text-gray-300">
                Phone: +1 (416) 123-4567
              </p>
              <p className="text-gray-300">
                Email: info@company.com
              </p>
            </div>
            <div className="p-6 bg-gray-700 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Dubai Office</h3>
              <p className="text-gray-300">
                Business Bay, Dubai, UAE
              </p>
              <p className="text-gray-300">
                Phone: +971 4 123 4567
              </p>
              <p className="text-gray-300">
                Email: dubai@company.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-yellow-400">
            Ready to Restore Your Land?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today to learn more about our innovative bitumen products and how they can help you achieve your land restoration goals.
          </p>
          <a
            href="/contact"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}