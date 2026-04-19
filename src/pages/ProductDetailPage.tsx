import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Download, Heart, Minus, Phone, Plus, Share2, ShoppingBag, Truck } from 'lucide-react';
import { PRODUCTS, findProduct, formatVnd, type Product } from '../data';

const Spec = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between gap-6 py-3 border-b border-brand-text/10 text-sm">
    <span className="text-brand-gray">{label}</span>
    <span className="font-medium text-right">{value}</span>
  </div>
);

const RelatedCard = ({ product }: { product: Product }) => (
  <Link to={`/san-pham/${product.slug}`} className="group block">
    <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-brand-alt mb-3">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <h4 className="text-sm font-bold">{product.id}</h4>
    <p className="text-brand-gray text-xs">{product.name}</p>
  </Link>
);

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = findProduct(slug);
  const [activeImage, setActiveImage] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<'desc' | 'spec' | 'app'>('desc');

  const related = useMemo(
    () => PRODUCTS.filter(p => p.slug !== slug).slice(0, 3),
    [slug],
  );

  if (!product) {
    return (
      <section className="py-32 text-center container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">Không tìm thấy sản phẩm</h1>
        <p className="text-brand-gray mb-8">Sản phẩm bạn đang tìm có thể đã bị xóa hoặc đổi đường dẫn.</p>
        <Link to="/san-pham" className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-3 rounded-xl font-semibold">
          <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
        </Link>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-12 lg:pt-32 lg:pb-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <nav className="text-[11px] uppercase tracking-widest text-brand-gray mb-8">
          <Link to="/" className="hover:text-brand-red transition-colors">Trang chủ</Link>
          <span className="mx-3 opacity-60">/</span>
          <Link to="/san-pham" className="hover:text-brand-red transition-colors">Sản phẩm</Link>
          <span className="mx-3 opacity-60">/</span>
          <span className="text-brand-text">{product.id}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          <div>
            <div className="relative overflow-hidden rounded-2xl aspect-square bg-brand-alt mb-4 shadow-xl">
              {product.tag && (
                <span
                  className={`absolute top-4 left-4 z-10 text-white text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider ${
                    product.tag === 'Mới' ? 'bg-black' : 'bg-brand-red'
                  }`}
                >
                  {product.tag}
                </span>
              )}
              <img
                src={product.gallery[activeImage] ?? product.img}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.gallery.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative overflow-hidden rounded-lg aspect-square bg-brand-alt transition-all ${
                    activeImage === i ? 'ring-2 ring-brand-red' : 'ring-1 ring-brand-text/10 hover:ring-brand-red/50'
                  }`}
                >
                  <img src={src} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-widest text-brand-red mb-3">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-brand-gray mb-6">Mã sản phẩm: <span className="font-medium text-brand-text">{product.id}</span></p>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl md:text-4xl font-bold text-brand-red">{formatVnd(product.priceFrom)}</span>
              <span className="text-brand-gray text-sm">/ {product.unit}</span>
              <span className="text-brand-gray text-xs ml-2">(giá tham khảo, đã bao gồm VAT)</span>
            </div>

            <p className="text-brand-gray leading-relaxed mb-8">{product.description}</p>

            <div className="mb-6">
              <p className="text-[11px] uppercase tracking-widest text-brand-gray mb-3">Tùy chọn màu</p>
              <div className="flex gap-3">
                {product.colors.map((c, i) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setActiveColor(i)}
                    aria-label={c.name}
                    style={{ backgroundColor: c.hex }}
                    className={`w-11 h-11 rounded-full transition-all ${
                      activeColor === i
                        ? 'ring-2 ring-brand-red ring-offset-2 ring-offset-brand-dark'
                        : 'ring-1 ring-brand-text/20 hover:ring-brand-red/60'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-brand-gray mt-2">
                Đã chọn: <span className="text-brand-text font-medium">{product.colors[activeColor]?.name}</span>
              </p>
            </div>

            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-widest text-brand-gray mb-3">Số lượng (thùng)</p>
              <div className="inline-flex items-center border border-brand-text/15 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-bold">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                type="button"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-brand-red/20"
              >
                <ShoppingBag className="w-5 h-5" />
                Thêm vào giỏ hàng
              </button>
              <button
                type="button"
                className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-brand-text/15 hover:border-brand-red hover:text-brand-red font-semibold py-4 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                Yêu cầu báo giá
              </button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-gray mb-8">
              <button type="button" className="inline-flex items-center gap-2 hover:text-brand-red transition-colors">
                <Heart className="w-4 h-4" /> Thêm yêu thích
              </button>
              <button type="button" className="inline-flex items-center gap-2 hover:text-brand-red transition-colors">
                <Share2 className="w-4 h-4" /> Chia sẻ
              </button>
              <button type="button" className="inline-flex items-center gap-2 hover:text-brand-red transition-colors">
                <Download className="w-4 h-4" /> Tải catalog
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-3 bg-brand-card border border-brand-text/10 rounded-xl px-4 py-3">
                <Truck className="w-5 h-5 text-brand-red" />
                <div>
                  <p className="font-semibold">Giao hàng toàn quốc</p>
                  <p className="text-xs text-brand-gray">Miễn phí đơn ≥ 20 triệu</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-brand-card border border-brand-text/10 rounded-xl px-4 py-3">
                <Check className="w-5 h-5 text-brand-red" />
                <div>
                  <p className="font-semibold">Bảo hành {product.warranty}</p>
                  <p className="text-xs text-brand-gray">Chính hãng 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-card border border-brand-text/10 rounded-2xl p-6 md:p-10 mb-20">
          <div className="flex flex-wrap gap-2 border-b border-brand-text/10 mb-6">
            {[
              { key: 'desc' as const, label: 'Mô tả' },
              { key: 'spec' as const, label: 'Thông số kỹ thuật' },
              { key: 'app' as const, label: 'Ứng dụng' },
            ].map(t => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`px-5 py-3 text-sm font-bold uppercase tracking-widest transition-colors border-b-2 -mb-px ${
                  tab === t.key ? 'text-brand-red border-brand-red' : 'text-brand-gray border-transparent hover:text-brand-text'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'desc' && (
            <div className="text-brand-gray leading-relaxed space-y-4 max-w-3xl">
              <p>{product.description}</p>
              <p>
                Sản phẩm {product.id} của Duy Hưng được sản xuất theo tiêu chuẩn hiện đại, đảm bảo độ phẳng tuyệt đối,
                chống trầy, chống thấm và an toàn cho sức khỏe người sử dụng.
              </p>
            </div>
          )}

          {tab === 'spec' && (
            <div className="max-w-3xl">
              <Spec label="Mã sản phẩm" value={product.id} />
              <Spec label="Kích thước" value={product.size} />
              <Spec label="Độ dày" value={product.thickness} />
              <Spec label="Bề mặt" value={product.surface} />
              <Spec label="Xuất xứ" value={product.origin} />
              <Spec label="Bảo hành" value={product.warranty} />
            </div>
          )}

          {tab === 'app' && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
              {product.applications.map(a => (
                <li key={a} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-brand-red" />
                  {a}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Sản phẩm liên quan</h2>
            <Link to="/san-pham" className="text-xs uppercase tracking-widest text-brand-gray hover:text-brand-red transition-colors">
              Xem tất cả
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(p => (
              <RelatedCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
