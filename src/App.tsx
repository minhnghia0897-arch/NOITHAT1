/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, ArrowRight, Filter, ChevronLeft, ChevronRight, ChevronDown, Eye, Download, Twitter, Instagram, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRODUCTS, ZALO_URL, type Product } from './data';
import ProductDetailPage from './pages/ProductDetailPage';

type Theme = 'light' | 'dark';

const navLinkClass = (isActive: boolean) =>
  `uppercase tracking-wide transition-colors ${
    isActive ? 'text-brand-red border-b-2 border-brand-red pb-1' : 'hover:text-brand-red'
  }`;

const Header = ({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) => {
  const { pathname } = useLocation();
  const isProductRoute = pathname.startsWith('/san-pham');
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2.5">
            <img
              src="https://dmtkxjqlcrcddcuvzqqb.supabase.co/storage/v1/object/public/logos/DUYHUNG.png"
              alt="Duy Hưng"
              className="h-10 w-auto rounded-[5px]"
              referrerPolicy="no-referrer"
            />
            <span className="tracking-widest text-lg font-logo font-bold">DUY HƯNG</span>
          </Link>
          <nav className="hidden lg:flex space-x-8 text-sm font-medium tracking-wide uppercase">
            <Link to="/san-pham" className={navLinkClass(isProductRoute)}>Sản phẩm</Link>
            <a href="#" className="hover:text-brand-red transition-colors">Bề mặt</a>
            <a href="#" className="hover:text-brand-red transition-colors">Dự án</a>
            <a href="#" className="hover:text-brand-red transition-colors">Tin tức</a>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative group hidden md:block">
            <input
              type="text"
              placeholder="Tìm vật liệu..."
              className="bg-brand-card border-none rounded-full py-2 px-6 w-64 text-sm focus:ring-1 focus:ring-brand-red outline-none"
            />
            <Search className="w-4 h-4 absolute right-4 top-2.5 text-brand-gray" />
          </div>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
              className="p-2 rounded-full hover:bg-brand-text/10 hover:text-brand-red transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="relative cursor-pointer group">
              <Heart className="w-6 h-6 group-hover:text-brand-red transition-colors" />
              <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] rounded-full px-1.5 py-0.5">0</span>
            </div>
            <ShoppingBag className="w-6 h-6 hover:text-brand-red cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden bg-brand-alt pt-20">
    <picture>
      <source
        media="(max-width: 767px)"
        srcSet="https://dmtkxjqlcrcddcuvzqqb.supabase.co/storage/v1/object/public/logos/DUYHUNG2.png"
      />
      <img
        src="https://dmtkxjqlcrcddcuvzqqb.supabase.co/storage/v1/object/public/logos/DUYHUNG1.png"
        alt="Showroom Duy Hưng"
        className="block w-full h-auto"
        referrerPolicy="no-referrer"
      />
    </picture>
  </section>
);

const Categories = () => (
  <section className="py-24 bg-brand-alt">
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Danh mục chính</h2>
          <div className="w-20 h-1 bg-brand-red"></div>
        </div>
        <a href="#" className="text-brand-gray hover:text-brand-red transition-colors text-sm uppercase tracking-widest flex items-center">
          Xem tất cả vật liệu <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Gỗ công nghiệp",
            desc: "MDF, HDF & Plywood bền vững",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXxlWYxtUoyVPxXoaDnQnDklECMblPlwiT3JoDNBE80J9HHdMM_hgsuKet_bqeYFM1S96OX8QF13FjbatZmBA4kQQFzVeuOrBi1P6mvZCghLGvgX6ITI1Um-lvsXNSCwkIk0zoT3PQKzsP8fKVbgwjc5QLkdb0DeShppe0gIvfgFlDVtJiYNNKD4vb9hxZLKUphIgPZiCiJqjYzaQ4FDg9z6G5_8bAEXgKgP22clYD1nYVh3z4l6xaybGET8Ze58eWvaonNxAmJQY"
          },
          {
            title: "Tấm trang trí",
            desc: "Melamine, Laminate & Acrylic",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxtlj0IYfBTYuVhLvc-LTzlrKhPBhSZDmTEhdlTCsXE4DyIihm5PcIcMClkT0H_cjIPd1c_vuz_h_7ZIva24bGDEjPT1lU_Ot46ICcZndo70zcAX5nmWzs2kY9v1OKKz4AV7nd7QWG2zEKB5WcSNEc8VaTpuPhChko7sIHyZW2dwD0Qbd-DGTSMLk-F-HRs_TViznP4ShT_rSDWz4vW1qkiRlll2kjfnsQ6Oi7vxHQLz_f3zbG-39XVxE8bdX15ZoQfk2ISSgEJG0"
          },
          {
            title: "Phụ kiện kiến trúc",
            desc: "Phụ kiện cao cấp Hettich & Imundex",
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
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
              <p className="text-white/80 text-sm mb-4">{cat.desc}</p>
              <button className="text-sm border-b border-brand-red text-brand-red font-medium py-1">Khám phá →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

type FilterKey = 'type' | 'color' | 'size' | 'surface';

const COLOR_SWATCHES = [
  { hex: '#8b5a3c', name: 'Nâu gỗ' },
  { hex: '#d4c4a8', name: 'Be kem' },
  { hex: '#4a2717', name: 'Nâu đậm' },
  { hex: '#f5f5f5', name: 'Trắng' },
  { hex: '#2b2b2b', name: 'Đen' },
];

const FilterAccordion = ({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}) => (
  <div className="py-5 border-b border-brand-text/10 last:border-b-0">
    <button
      type="button"
      onClick={onToggle}
      className="w-full flex items-center justify-between text-left"
    >
      <span className="text-[11px] font-bold tracking-widest uppercase">{title}</span>
      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && <div className="mt-5">{children}</div>}
  </div>
);

const FilterCheckbox = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <label className="flex items-center space-x-3 cursor-pointer group py-1.5 text-sm">
    <span
      className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
        checked ? 'bg-brand-red' : 'bg-brand-alt border border-brand-text/20 group-hover:border-brand-red'
      }`}
    >
      {checked && (
        <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
    <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
    <span className="text-brand-text/90 group-hover:text-brand-red transition-colors">{label}</span>
  </label>
);

const ProductCard = ({ product }: { product: Product }) => (
  <article className="group">
    <Link
      to={`/san-pham/${product.slug}`}
      className="block relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[4/3] bg-brand-alt mb-3 sm:mb-5 shadow-xl"
    >
      {product.tag && (
        <span
          className={`absolute top-2 left-2 sm:top-4 sm:left-4 z-10 text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-md uppercase tracking-wider ${
            product.tag === 'Mới' ? 'bg-black' : 'bg-brand-red'
          }`}
        >
          {product.tag}
        </span>
      )}
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
    </Link>
    <Link to={`/san-pham/${product.slug}`} className="block hover:text-brand-red transition-colors">
      <h3 className="text-base sm:text-xl font-bold mb-1">{product.id}</h3>
    </Link>
    <p className="text-brand-gray text-xs sm:text-sm mb-3 sm:mb-5 line-clamp-1">{product.name}</p>
    <div className="flex gap-2">
      <Link
        to={`/san-pham/${product.slug}`}
        className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 rounded-lg bg-brand-alt text-brand-text text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-brand-text/10 hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors"
      >
        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span className="hidden sm:inline">Chi tiết</span>
        <span className="sm:hidden">Xem</span>
      </Link>
      <button
        type="button"
        className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 rounded-lg bg-brand-alt text-brand-text text-[10px] sm:text-[11px] font-bold uppercase tracking-wider border border-brand-text/10 hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors"
      >
        <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span>Map màu</span>
      </button>
    </div>
  </article>
);

const ProductGrid = () => {
  const [open, setOpen] = useState<Record<FilterKey, boolean>>({
    type: true,
    color: true,
    size: false,
    surface: false,
  });
  const [selectedType, setSelectedType] = useState<string[]>(['Gạch lát nền']);
  const [selectedColor, setSelectedColor] = useState<string>('#4a2717');
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [selectedSurface, setSelectedSurface] = useState<string[]>([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const toggleOpen = (key: FilterKey) => setOpen(s => ({ ...s, [key]: !s[key] }));
  const toggleItem = (setter: Dispatch<SetStateAction<string[]>>, value: string) =>
    setter(s => (s.includes(value) ? s.filter(x => x !== value) : [...s, value]));

  const activeFilterCount =
    selectedType.length + selectedSize.length + selectedSurface.length + (selectedColor ? 1 : 0);

  return (
    <section className="pt-28 pb-20 lg:pt-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <nav className="text-[11px] uppercase tracking-widest text-brand-gray mb-10">
          <a href="#" className="hover:text-brand-red transition-colors">Trang chủ</a>
          <span className="mx-3 opacity-60">/</span>
          <a href="#" className="hover:text-brand-red transition-colors">Sản phẩm</a>
          <span className="mx-3 opacity-60">/</span>
          <span className="text-brand-text">Gạch lát nền</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-none mb-3 sm:mb-4">
              Gạch Lát <span className="font-bold">Nền</span>
            </h1>
            <p className="text-brand-gray text-sm sm:text-base">Tìm thấy 1.248 mẫu sản phẩm phù hợp với phong cách của bạn</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-widest text-brand-gray">Sắp xếp:</span>
            <div className="relative">
              <select className="appearance-none bg-brand-card border border-brand-text/10 rounded-xl pl-4 pr-10 py-3 text-sm outline-none focus:border-brand-red transition-colors cursor-pointer">
                <option>Mới nhất</option>
                <option>Bán chạy</option>
                <option>Giá: Thấp đến Cao</option>
                <option>Giá: Cao đến Thấp</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="border-t border-brand-text/10 mb-8 lg:mb-12"></div>

        <button
          type="button"
          onClick={() => setMobileFilterOpen(v => !v)}
          aria-expanded={mobileFilterOpen}
          className="lg:hidden w-full flex items-center justify-between gap-3 bg-brand-card border border-brand-text/10 rounded-xl px-5 py-4 mb-4"
        >
          <span className="flex items-center gap-3">
            <span className="bg-brand-red p-1.5 rounded-md text-white flex items-center justify-center">
              <Filter className="w-3.5 h-3.5" />
            </span>
            <span className="font-bold tracking-widest text-xs">BỘ LỌC SẢN PHẨM</span>
            {activeFilterCount > 0 && (
              <span className="bg-brand-red text-white text-[10px] font-bold rounded-full min-w-5 h-5 px-1.5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${mobileFilterOpen ? 'rotate-180' : ''}`} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside
            className={`${mobileFilterOpen ? 'block' : 'hidden'} lg:block bg-brand-card rounded-2xl p-6 border border-brand-text/10 self-start lg:sticky lg:top-28`}
          >
            <div className="hidden lg:flex items-center gap-3 pb-5 mb-2 border-b border-brand-text/10">
              <span className="bg-brand-red p-2 rounded-lg text-white flex items-center justify-center">
                <Filter className="w-4 h-4" />
              </span>
              <span className="font-bold tracking-widest text-sm">BỘ LỌC SẢN PHẨM</span>
            </div>

            <FilterAccordion title="Loại sản phẩm" isOpen={open.type} onToggle={() => toggleOpen('type')}>
              <div className="space-y-1">
                {['Gạch lát nền', 'Gạch ốp tường', 'Gạch trang trí'].map(v => (
                  <FilterCheckbox
                    key={v}
                    label={v}
                    checked={selectedType.includes(v)}
                    onChange={() => toggleItem(setSelectedType, v)}
                  />
                ))}
              </div>
            </FilterAccordion>

            <FilterAccordion title="Màu sắc" isOpen={open.color} onToggle={() => toggleOpen('color')}>
              <div className="flex gap-3 flex-wrap">
                {COLOR_SWATCHES.map(c => {
                  const active = selectedColor === c.hex;
                  return (
                    <button
                      type="button"
                      key={c.hex}
                      onClick={() => setSelectedColor(c.hex)}
                      aria-label={c.name}
                      style={{ backgroundColor: c.hex }}
                      className={`w-9 h-9 rounded-full transition-all ${
                        active
                          ? 'ring-2 ring-brand-red ring-offset-2 ring-offset-brand-card'
                          : 'ring-1 ring-brand-text/15 hover:ring-brand-red/60'
                      }`}
                    />
                  );
                })}
              </div>
            </FilterAccordion>

            <FilterAccordion title="Kích thước" isOpen={open.size} onToggle={() => toggleOpen('size')}>
              <div className="space-y-1">
                {['60 x 60 cm', '80 x 80 cm', '30 x 60 cm', '80 x 40 cm'].map(v => (
                  <FilterCheckbox
                    key={v}
                    label={v}
                    checked={selectedSize.includes(v)}
                    onChange={() => toggleItem(setSelectedSize, v)}
                  />
                ))}
              </div>
            </FilterAccordion>

            <FilterAccordion title="Bề mặt" isOpen={open.surface} onToggle={() => toggleOpen('surface')}>
              <div className="space-y-1">
                {['Bóng kiếng', 'Mờ (Matt)', 'Nhám chống trượt'].map(v => (
                  <FilterCheckbox
                    key={v}
                    label={v}
                    checked={selectedSurface.includes(v)}
                    onChange={() => toggleItem(setSelectedSurface, v)}
                  />
                ))}
              </div>
            </FilterAccordion>

            <button
              type="button"
              className="w-full bg-brand-red hover:bg-[#0d2a8a] text-white font-bold tracking-widest uppercase text-xs py-4 rounded-xl mt-8 transition-colors shadow-lg shadow-brand-red/20"
            >
              Áp dụng bộ lọc
            </button>
          </aside>

          <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
            {PRODUCTS.map(prod => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center space-x-2">
          <button className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-brand-text/10 hover:bg-brand-red hover:text-white transition-colors"><ChevronLeft className="w-4 h-4" /></button>
          <button className="w-10 h-10 rounded-lg bg-brand-red text-white font-bold">1</button>
          <button className="w-10 h-10 rounded-lg bg-brand-card border border-brand-text/10 hover:border-brand-red transition-colors">2</button>
          <button className="w-10 h-10 rounded-lg bg-brand-card border border-brand-text/10 hover:border-brand-red transition-colors">3</button>
          <span className="w-10 h-10 flex items-center justify-center text-brand-gray">...</span>
          <button className="w-10 h-10 rounded-lg bg-brand-card border border-brand-text/10 hover:border-brand-red transition-colors">42</button>
          <button className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-brand-text/10 hover:bg-brand-red hover:text-white transition-colors"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = () => (
  <section className="py-24 bg-brand-dark">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-3">Sản phẩm nổi bật</h2>
          <p className="text-brand-gray max-w-lg">Những mẫu gạch được khách hàng lựa chọn nhiều nhất trong tháng.</p>
        </div>
        <Link to="/san-pham" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-brand-gray hover:text-brand-red transition-colors">
          Xem tất cả sản phẩm <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
        {PRODUCTS.slice(0, 3).map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section className="py-24 bg-brand-alt">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
        <h2 className="text-4xl font-bold">Dự án tiêu biểu</h2>
        <p className="text-brand-gray max-w-md">Không gian nội thất truyền cảm hứng được hiện thực hóa bằng vật liệu Duy Hưng cho các công trình dân dụng và thương mại.</p>
      </div>
      <div className="grid grid-cols-12 grid-rows-2 gap-6 h-[800px]">
        <div className="col-span-12 md:col-span-8 row-span-1 md:row-span-2 relative group overflow-hidden rounded-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGwZ0tcNZhU1mlVj6Ybc1t0dVEKGILALytgKEwI-2yRbpsUNTCHMUy433yvbx_LEtEmGyrFDYrGdLOcPgyr6wRmaKAyPT4CYwtsRewWRLVSN4_GuAt61fDPR8qTVPylPN96u5Z0QIt4wjNRsdQbpv5kdI5-p1ZHaDiu_ChRD3mGMv-mM-orraFWRJznujYIBzQFj4Y6xAUf7G7YjpKb5_hcyn-_1b3DlPGp6gB41LrqrGhOrfis0-8DjBcyf8xQmt_FoqDW7wENkU" 
            alt="Modern Penthouse" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end text-white">
            <h4 className="text-2xl font-bold">Penthouse Sapphire</h4>
            <p className="text-white/80">Phong cách Công nghiệp</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs_qY9BzLhn6pe7BhXfQXOIquaxb9snkm0RPrxdTqpiRtiKJpBvxx7xeHmRMQQYRT-ozfY-Pg3_gG1K4qxs9tpdxpSo5seDmrO7Ksqf4qlzvK094-hx3AK5opc6NXrnP8zP0rqH8OGpjxcFGW_5HHWdqzACAh4p6CB2mfs8pp02AseHjiby8vJO2TG-og-GB250BqGkd3Kgpv-w6z0t-mBniFs2Etov133pbvLJlGvamA4sI6TDLX86jvZLHuM3DvtLVTjUtS7QTI" 
            alt="Office Space" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
            <h4 className="text-xl font-bold">Văn phòng Eco-Tech</h4>
            <p className="text-white/80">Thiết kế bền vững</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 row-span-1 relative group overflow-hidden rounded-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7TZRDT_z9Y1-FDvVgvS0Q1kc-3IE71Yfh5mQpFhBqeUGosouHf9KqiU3eZWcShqWYJ7UViYFl5_XskbmVGTAdGwy_9z9z7-SPXcAqwZt00aJKJu4ip4e1al4oAKWw7kP8h6lZjzL2ZgdSo98fdSw9iG0Fb1ShCByxwJ3jUgaTVqGtzwRQ-6MhBDjMP3BPcmzsz3bLpmLasu8Q-EmyvgxhVNyG2yZnYh-e9aDB3ROtFX-jLzb4yFwjrZ9kA08RkhYkOSqQZAEgab8" 
            alt="Luxury Kitchen" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end text-white">
            <h4 className="text-xl font-bold">Gian Bếp Grand</h4>
            <p className="text-white/80">Hoàn thiện bóng cao</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark pt-20 pb-10 border-t border-brand-text/10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="flex items-center space-x-2.5 mb-8">
            <img
              src="https://dmtkxjqlcrcddcuvzqqb.supabase.co/storage/v1/object/public/logos/DUYHUNG.png"
              alt="Duy Hưng"
              className="h-10 w-auto rounded-[5px]"
              referrerPolicy="no-referrer"
            />
            <span className="tracking-widest text-lg font-logo font-bold">DUY HƯNG</span>
          </div>
          <p className="text-brand-gray leading-relaxed text-sm mb-8">
            Nhà sản xuất và cung cấp vật liệu trang trí hàng đầu tại Việt Nam và Đông Nam Á. Chuyên về các sản phẩm gỗ công nghiệp cao cấp.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-brand-red transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-brand-red transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-brand-text font-bold uppercase tracking-widest text-sm mb-8">Liên kết nhanh</h4>
          <ul className="space-y-4 text-brand-gray text-sm">
            <li><a href="#" className="hover:text-brand-red transition-colors">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Hệ thống showroom</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Thư viện bảng màu</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Tuyển dụng</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-text font-bold uppercase tracking-widest text-sm mb-8">Hỗ trợ</h4>
          <ul className="space-y-4 text-brand-gray text-sm">
            <li><a href="#" className="hover:text-brand-red transition-colors">Chính sách bảo hành</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Chính sách giao hàng</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Tải catalog</a></li>
            <li><a href={ZALO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red transition-colors">Liên hệ báo giá (Zalo)</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-text font-bold uppercase tracking-widest text-sm mb-8">Bản tin</h4>
          <p className="text-brand-gray text-xs mb-6">Nhận cập nhật về các bộ sưu tập mới nhất và những đổi mới bền vững.</p>
          <form className="flex">
            <input type="email" placeholder="Địa chỉ email" className="bg-brand-card border-none rounded-l-lg py-3 px-4 w-full text-sm focus:ring-1 focus:ring-brand-red outline-none" />
            <button className="bg-brand-red text-white px-4 rounded-r-lg font-bold text-xs uppercase tracking-tighter">Đăng ký</button>
          </form>
        </div>
      </div>
      <div className="border-t border-brand-text/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-brand-gray">
        <p>© 2024 NỘI THẤT DUY HƯNG. BẢO LƯU MỌI QUYỀN.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-brand-text">Chính sách bảo mật</a>
          <a href="#" className="hover:text-brand-text">Điều khoản dịch vụ</a>
        </div>
      </div>
    </div>
  </footer>
);

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('theme');
  return stored === 'dark' ? 'dark' : 'light';
};

const HomePage = () => (
  <>
    <Hero />
    <Categories />
    <FeaturedProducts />
    <Projects />
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
};

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/san-pham" element={<ProductGrid />} />
          <Route path="/san-pham/:slug" element={<ProductDetailPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
