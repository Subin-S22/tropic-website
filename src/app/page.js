
"use client"
import { useEffect, useState } from "react";
import Banner from "./components/Banner/banner";
import Header from "./components/Header/Header";
import Sale from "./components/Sale/Sale";
import Explore from "./components/Explore/Explore";
import FourCards from "./components/Cards/FourCards";
import AboutUs from "./components/Cards/AboutUs";
import OurUps from "./components/Cards/OurUps";
import VideoBanner from "./components/Banner/VideoBanner";
import Infographic from "./components/Cards/Infographic";
import Blogs from "./components/Cards/Blogs";
import Link from "next/link";
import Image from 'next/image';
import Footer from "./components/Footer/Footer";
import Instagram from "./components/Cards/instagram";
import Youtube from "./components/youtube/Tube";
import HomePageIcon from "./components/Cards/homepageIcon";
import Testimonials from "./components/testimonials/Testimonials";



export default function Home() {
  const [screenWidth, setScreenWidth] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false)


  return (
    <>

      <div className="pt-4 bg-[#1B2F1F] ">


      </div>
      <Banner />
      <Explore />
      <FourCards />
      <AboutUs />
      <OurUps />
      <HomePageIcon />
      <Youtube />
      <Testimonials />
      <Instagram />
      {/* <VideoBanner />
      <Infographic />
      <Blogs /> */}




      {/* <div className="font-sans">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-3">
            <ul className="flex justify-center space-x-6">
              <li><Link href="/about" className="hover:text-green-500">About Us</Link></li>
              <li><Link href="/products" className="hover:text-green-500">Products</Link></li>
              <li><Link href="/blogs" className="hover:text-green-500">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-green-500">Contact Us</Link></li>
            </ul>
          </nav>
        </header>

        <section className="bg-green-100 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Experience Purity in Every Drop</h1>
          <p className="text-xl mb-8">Narikela brings you the purest coconut products, carefully harvested and processed to retain their natural goodness.</p>
          <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">Experience the Natural Goodness</button>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Narikela 1ltr', 'Narikela 1/4ltr', 'Narikela 1/2ltr', 'Narikela dessicated powder'].map((product) => (
                <div key={product} className="text-center">
                  <div className="bg-gray-200 h-48 mb-4 rounded-lg"></div>
                  <p className="font-semibold">{product}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Generations of Purity</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-center">
              At Narikela, nestled in the lush greenery of Tiptur, our family heritage of coconut cultivation dates back to 1954. Our legacy is built on excellence and trust, passed down through generations. We are expanding beyond copra to offer coconut-based products, celebrating the coconut's versatility. Our philosophy supports local farmers with fair and sustainable practices. Each sun-ripened coconut is handpicked and cold-pressed to preserve its natural richness, ensuring the highest quality coconut oil.
            </p>
            <div className="text-center">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300">Know more</button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of Narikela Coconut Oil</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {['Moisturizes Skin', 'Boosts Energy', 'Nourishes Hair', 'Improves Metabolism', 'Boosts Immunity', 'Reduces Bad Cholesterol'].map((benefit) => (
                <div key={benefit} className="text-center">
                  <div className="bg-green-200 h-24 w-24 rounded-full mx-auto mb-4"></div>
                  <p className="font-semibold">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((blog) => (
                <div key={blog} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl mb-4">Blog {blog} heading</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button className="text-green-500 font-semibold hover:text-green-600">Know more</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Customers Diaries</h2>
            <p className="max-w-2xl mx-auto mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="font-semibold">Sushmitha</p>
          </div>
        </section>

        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Be Part of Our Instagram Family</h2>
          </div>
        </section>

        <footer className="bg-green-800 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">About Us</h4>
                <p>Narikela, from Tiptur since 1954, offers premium cold-pressed coconut oil. We honor tradition with quality, supporting local farmers and sustainable practices.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="hover:text-green-300">About Us</Link></li>
                  <li><Link href="/products" className="hover:text-green-300">Products</Link></li>
                  <li><Link href="/blogs" className="hover:text-green-300">Blogs</Link></li>
                  <li><Link href="/contact" className="hover:text-green-300">Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Contact Us</h4>
                <p>9148633721</p>
                <p>narikela.tiptur@gmail.com</p>
                <p>Vinayaka Nagara, Tiptur Tumkur district-572201</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Let's dive into Narikela's journey</h4>
              </div>
            </div>
            <div className="mt-8 text-center border-t border-green-700 pt-8">
              <p>© 2024. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div> */}
    </>
  );
}
