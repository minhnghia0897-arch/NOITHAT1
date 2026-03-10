/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, Heart, ShoppingBag, ArrowRight, Filter, ChevronLeft, ChevronRight, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="bg-brand-red p-1 rounded text-white font-bold text-xl">A</div>
          <span className="font-bold tracking-widest text-lg">AN CUONG</span>
        </div>
        <nav className="hidden lg:flex space-x-8 text-sm font-medium tracking-wide uppercase">
          <a href="#" className="text-brand-red border-b-2 border-brand-red pb-1">Products</a>
          <a href="#" className="hover:text-brand-red transition-colors">Surfaces</a>
          <a href="#" className="hover:text-brand-red transition-colors">Projects</a>
          <a href="#" className="hover:text-brand-red transition-colors">News</a>
        </nav>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative group hidden md:block">
          <input 
            type="text" 
            placeholder="Search materials..." 
            className="bg-brand-card border-none rounded-full py-2 px-6 w-64 text-sm focus:ring-1 focus:ring-brand-red outline-none"
          />
          <Search className="w-4 h-4 absolute right-4 top-2.5 text-brand-gray" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative cursor-pointer group">
            <Heart className="w-6 h-6 group-hover:text-brand-red transition-colors" />
            <span className="absolute -top-2 -right-2 bg-brand-red text-[10px] rounded-full px-1.5 py-0.5">0</span>
          </div>
          <ShoppingBag className="w-6 h-6 hover:text-brand-red cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtyL0Mqdj6HqDHmp7tc9kF0wTUCPFHskoQpnbgtu2Gd_b12wszVrB2vxa0wzJqR4_BcLkkr5EKSU6bXvrtChKpDkj0AE0QrunlLL7xc2SBHpIZdpe0FpB1imtq1uxvPwbrOa9viEcdL28DN5iv8nR797EQ6QGOHvlzOA3fMNuDXOEOc8LzaoP5lXke1vUKqcbQL07CTCgE5YnCYLXMZMup9EwjsLB0PUBttOCg2CeZVBLq3T51wXtAvq4xrepfQ1hSLlo73uFprps" 
        alt="Architectural Interior" 
        className="w-full h-full object-cover opacity-60"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] to-transparent"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <h3 className="text-brand-red font-semibold tracking-widest uppercase mb-4">Innovation in Surfaces</h3>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Elevate Your <br/>Living Spaces</h1>
        <p className="text-lg text-brand-gray mb-10 leading-relaxed max-w-lg">
          Discover the perfect harmony of nature and technology. Our premium MDF and architectural solutions bring timeless wood aesthetics to modern interiors.
        </p>
        <div className="flex space-x-4">
          <button className="bg-brand-red hover:bg-red-700 text-white px-10 py-4 rounded-2xl font-semibold transition-all shadow-lg">Explore Collection</button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-semibold transition-all glass-effect">Order Samples</button>
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gray mb-2">Scroll</span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent"></div>
    </div>
  </section>
);

const Categories = () => (
  <section className="py-24 bg-[#0f0f0f]">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Core Categories</h2>
          <div className="w-20 h-1 bg-brand-red"></div>
        </div>
        <a href="#" className="text-brand-gray hover:text-brand-red transition-colors text-sm uppercase tracking-widest flex items-center">
          View All Materials <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Industrial Wood",
            desc: "Sustainable MDF, HDF & Plywood",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXxlWYxtUoyVPxXoaDnQnDklECMblPlwiT3JoDNBE80J9HHdMM_hgsuKet_bqeYFM1S96OX8QF13FjbatZmBA4kQQFzVeuOrBi1P6mvZCghLGvgX6ITI1Um-lvsXNSCwkIk0zoT3PQKzsP8fKVbgwjc5QLkdb0DeShppe0gIvfgFlDVtJiYNNKD4vb9hxZLKUphIgPZiCiJqjYzaQ4FDg9z6G5_8bAEXgKgP22clYD1nYVh3z4l6xaybGET8Ze58eWvaonNxAmJQY"
          },
          {
            title: "Decorative Panels",
            desc: "Melamine, Laminate & Acrylic",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxtlj0IYfBTYuVhLvc-LTzlrKhPBhSZDmTEhdlTCsXE4DyIihm5PcIcMClkT0H_cjIPd1c_vuz_h_7ZIva24bGDEjPT1lU_Ot46ICcZndo70zcAX5nmWzs2kY9v1OKKz4AV7nd7QWG2zEKB5WcSNEc8VaTpuPhChko7sIHyZW2dwD0Qbd-DGTSMLk-F-HRs_TViznP4ShT_rSDWz4vW1qkiRlll2kjfnsQ6Oi7vxHQLz_f3zbG-39XVxE8bdX15ZoQfk2ISSgEJG0"
          },
          {
            title: "Architectural Hardware",
            desc: "Hettich & Imundex Premium Fittings",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMQNR2_Wdt7w8JmY66ZzLwcpy6YmrxRpnmR63uAiqttrAJwg8ehdHkfGdWlKKf2GjqbiuF5l-VNSl1Vq6dOgCwbUEqwWtrtcNEAlD-QNP-NiAmWqSGZocwQPkd4TGuCY92VCVT0KJSGkYFFSaBBQztwexQviHrv6slAsjSwzB1WeuiZrgksMxzeq4o8KujghMboczZOe_4pNwr-3EHgEhiIfTvTQemlZUr7DrhUqjiFEMzGWCVvqbpSY3yvwnwBCNBG6EHeidD8dA"
          }
        ].map((cat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl h-[500px] hover-zoom cursor-pointer"
          >
            <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
              <p className="text-brand-gray text-sm mb-4">{cat.desc}</p>
              <button className="text-sm border-b border-brand-red text-brand-red font-medium py-1">Discover →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProductGrid = () => (
  <section className="py-24 bg-brand-dark">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Explore Our Sàn Gỗ MDF</h2>
        <p className="text-brand-gray max-w-2xl mx-auto">Browse through our curated selection of 1,248+ patterns designed to complement your unique style and architectural vision.</p>
      </div>
      
      <div className="flex flex-wrap items-center justify-between mb-12 gap-6">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 cursor-pointer text-brand-red">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter Products</span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-sm text-brand-gray">
            {["Walnut", "Oak", "Mahogany"].map(tag => (
              <span key={tag} className="px-4 py-2 bg-brand-card rounded-full border border-white/5 hover:border-brand-red transition-colors cursor-pointer">{tag}</span>
            ))}
          </div>
        </div>
        <select className="bg-brand-card border border-white/10 rounded-lg text-sm px-4 py-2 outline-none focus:ring-brand-red">
          <option>Sort By: Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {[
          {
            id: "SAN AC 1161 T",
            name: "Walnut Bronze Texture",
            tag: "Bestseller",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpbVevkysGorX1CyL2i31F-m-aKLkVXB4EpyH7VYsCFy7Ir_QobQmUOj5lmtdEAaRT2UYjUNHfV6-Zyqm7HmGd4F4ue39ghoUZUqsgv4uSpdjbAMWHXvJzvKwVjcAKXxZCpR2H7T99jYYU0NdBXG1aY8e84pLhDZTAXzRQoxNCRhm-wmklSGerthaPawjSif8ZNwaJYOU9DqTYhqwP1RVj3nVVNP8XDLhYws0eOQWNbiolyPoIAjl2y6gpDLYhbPyamAEBX3MZTy4"
          },
          {
            id: "SAN AC 388 RL",
            name: "Santana Oak Natural",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpsNzq1OPpsNm7dB9Ks3L0B6msKRh8lEP3LNhDqvYvt-Oir5qNTGPzXgQ8nuB8lM_vPP5lrlEe2izrX0K8ukzjiQ_5uyQlZit6k_oAEuuNnKG15_JDpuoe6dDl9bP8OkLrjSbqT_iaEYBYzxLKY3xD7gw1pUCqzPPJaHwis9iX9uKiCVqYprHB1WX-jGXrDVsQAEloEyrXgdnfGg7Z4T8qZdLEDIiiMPnSjg0BUEwsTH3P1ASx_36cNmDbTbvoU-UoxYUeR2JELq4"
          },
          {
            id: "SAN AC 4001 PL",
            name: "Super White Glossy",
            tag: "New",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVrSZ2y4n6SUOMXQFiEKJ0E07eaZ_DZbX8j4eTJvQoWh1CNSA5DGveNoeuSKxFHulNPhrJhx5pM6Awua1pPvSbL63sSJ1nZpwjz5Qy4Bx7gBqs7pOQKQEOwKJvr9VzwDmA4WIpwxAJG1gaHtVVdz8YGjGvsMKxo5TIChvpC0tK_XWKNKxajw62MgYn3KyfyKlus-jgSv_tcEnbM7qCTKjBl4LQctF3PK7Dx3la1Iz8M4iIva2gctiG_rs1-FO-P_4u1nXAEKttQ_E"
          }
        ].map((prod, i) => (
          <div key={i} className="group">
            <div className="relative overflow-hidden rounded-2xl aspect-video bg-zinc-900 mb-6 shadow-2xl">
              {prod.tag && (
                <span className={`absolute top-4 left-4 z-10 text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-tighter ${prod.tag === 'New' ? 'bg-black' : 'bg-brand-red'}`}>
                  {prod.tag}
                </span>
              )}
              <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                <button className="bg-white text-black p-3 rounded-full hover:bg-brand-red hover:text-white transition-colors"><Search className="w-5 h-5" /></button>
                <button className="bg-white text-black p-3 rounded-full hover:bg-brand-red hover:text-white transition-colors"><ShoppingBag className="w-5 h-5" /></button>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-1">{prod.id}</h4>
            <p className="text-brand-gray text-sm mb-4">{prod.name}</p>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 rounded-lg bg-zinc-800 text-[11px] font-bold uppercase tracking-wider hover:bg-brand-red transition-colors">Details</button>
              <button className="flex-1 py-2 rounded-lg bg-zinc-800 text-[11px] font-bold uppercase tracking-wider hover:bg-brand-red transition-colors">Map Color</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center space-x-2">
        <button className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-white/5 hover:bg-brand-red transition-colors"><ChevronLeft className="w-4 h-4" /></button>
        <button className="w-10 h-10 rounded-lg bg-brand-red text-white font-bold">1</button>
        <button className="w-10 h-10 rounded-lg bg-brand-card border border-white/5 hover:border-brand-red transition-colors">2</button>
        <button className="w-10 h-10 rounded-lg bg-brand-card border border-white/5 hover:border-brand-red transition-colors">3</button>
        <span className="w-10 h-10 flex items-center justify-center">...</span>
        <button className="w-10 h-10 rounded-lg bg-brand-card border border-white/5 hover:border-brand-red transition-colors">42</button>
        <button className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-white/5 hover:bg-brand-red transition-colors"><ChevronRight className="w-4 h-4" /></button>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-24 bg-[#0f0f0f]">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
        <h2 className="text-4xl font-bold">Featured Projects</h2>
        <p className="text-brand-gray max-w-md">Inspiring interiors realized with An Cuong materials across residential and commercial sectors.</p>
      </div>
      <div className="grid grid-cols-12 grid-rows-2 gap-6 h-[800px]">
        <div className="col-span-12 md:col-span-8 row-span-1 md:row-span-2 relative group overflow-hidden rounded-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGwZ0tcNZhU1mlVj6Ybc1t0dVEKGILALytgKEwI-2yRbpsUNTCHMUy433yvbx_LEtEmGyrFDYrGdLOcPgyr6wRmaKAyPT4CYwtsRewWRLVSN4_GuAt61fDPR8qTVPylPN96u5Z0QIt4wjNRsdQbpv5kdI5-p1ZHaDiu_ChRD3mGMv-mM-orraFWRJznujYIBzQFj4Y6xAUf7G7YjpKb5_hcyn-_1b3DlPGp6gB41LrqrGhOrfis0-8DjBcyf8xQmt_FoqDW7wENkU" 
            alt="Modern Penthouse" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
            <h4 className="text-2xl font-bold">The Sapphire Penthouse</h4>
            <p className="text-brand-gray">Industrial Chic Concept</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs_qY9BzLhn6pe7BhXfQXOIquaxb9snkm0RPrxdTqpiRtiKJpBvxx7xeHmRMQQYRT-ozfY-Pg3_gG1K4qxs9tpdxpSo5seDmrO7Ksqf4qlzvK094-hx3AK5opc6NXrnP8zP0rqH8OGpjxcFGW_5HHWdqzACAh4p6CB2mfs8pp02AseHjiby8vJO2TG-og-GB250BqGkd3Kgpv-w6z0t-mBniFs2Etov133pbvLJlGvamA4sI6TDLX86jvZLHuM3DvtLVTjUtS7QTI" 
            alt="Office Space" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
            <h4 className="text-xl font-bold">Eco-Tech Office</h4>
            <p className="text-brand-gray">Sustainable Design</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7TZRDT_z9Y1-FDvVgvS0Q1kc-3IE71Yfh5mQpFhBqeUGosouHf9KqiU3eZWcShqWYJ7UViYFl5_XskbmVGTAdGwy_9z9z7-SPXcAqwZt00aJKJu4ip4e1al4oAKWw7kP8h6lZjzL2ZgdSo98fdSw9iG0Fb1ShCByxwJ3jUgaTVqGtzwRQ-6MhBDjMP3BPcmzsz3bLpmLasu8Q-EmyvgxhVNyG2yZnYh-e9aDB3ROtFX-jLzb4yFwjrZ9kA08RkhYkOSqQZAEgab8" 
            alt="Luxury Kitchen" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
            <h4 className="text-xl font-bold">Grand Kitchen Suite</h4>
            <p className="text-brand-gray">High-Gloss Finish</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-brand-red p-1 rounded text-white font-bold text-xl">A</div>
            <span className="font-bold tracking-widest text-lg">AN CUONG WOOD</span>
          </div>
          <p className="text-brand-gray leading-relaxed text-sm mb-8">
            The leading manufacturer and supplier of decorative materials in Vietnam and Southeast Asia. Specializing in high-end industrial wood products.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-brand-red transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-brand-red transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Quick Links</h4>
          <ul className="space-y-4 text-brand-gray text-sm">
            <li><a href="#" className="hover:text-brand-red transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Showroom System</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Map Color Library</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Recruitment</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Support</h4>
          <ul className="space-y-4 text-brand-gray text-sm">
            <li><a href="#" className="hover:text-brand-red transition-colors">Warranty Policy</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Delivery Policy</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Download Catalog</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Contact for Quotes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Newsletter</h4>
          <p className="text-brand-gray text-xs mb-6">Receive updates on our latest collections and sustainable innovations.</p>
          <form className="flex">
            <input type="email" placeholder="Email address" className="bg-brand-card border-none rounded-l-lg py-3 px-4 w-full text-sm focus:ring-1 focus:ring-brand-red outline-none" />
            <button className="bg-brand-red px-4 rounded-r-lg font-bold text-xs uppercase tracking-tighter">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-brand-gray">
        <p>© 2024 AN CUONG WOOD WORKING. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
