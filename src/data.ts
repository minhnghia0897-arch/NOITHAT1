export const ZALO_PHONE = '0909090909';
export const ZALO_URL = `https://zalo.me/${ZALO_PHONE}`;

export type ProductTag = 'Bán chạy' | 'Mới';

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  tag?: ProductTag;
  img: string;
  gallery: string[];
  priceFrom: number;
  unit: string;
  description: string;
  size: string;
  thickness: string;
  surface: string;
  origin: string;
  warranty: string;
  applications: string[];
  colors: { hex: string; name: string }[];
};

const IMG = {
  marble:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAVrSZ2y4n6SUOMXQFiEKJ0E07eaZ_DZbX8j4eTJvQoWh1CNSA5DGveNoeuSKxFHulNPhrJhx5pM6Awua1pPvSbL63sSJ1nZpwjz5Qy4Bx7gBqs7pOQKQEOwKJvr9VzwDmA4WIpwxAJG1gaHtVVdz8YGjGvsMKxo5TIChvpC0tK_XWKNKxajw62MgYn3KyfyKlus-jgSv_tcEnbM7qCTKjBl4LQctF3PK7Dx3la1Iz8M4iIva2gctiG_rs1-FO-P_4u1nXAEKttQ_E',
  oak: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpsNzq1OPpsNm7dB9Ks3L0B6msKRh8lEP3LNhDqvYvt-Oir5qNTGPzXgQ8nuB8lM_vPP5lrlEe2izrX0K8ukzjiQ_5uyQlZit6k_oAEuuNnKG15_JDpuoe6dDl9bP8OkLrjSbqT_iaEYBYzxLKY3xD7gw1pUCqzPPJaHwis9iX9uKiCVqYprHB1WX-jGXrDVsQAEloEyrXgdnfGg7Z4T8qZdLEDIiiMPnSjg0BUEwsTH3P1ASx_36cNmDbTbvoU-UoxYUeR2JELq4',
  concrete:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBs_qY9BzLhn6pe7BhXfQXOIquaxb9snkm0RPrxdTqpiRtiKJpBvxx7xeHmRMQQYRT-ozfY-Pg3_gG1K4qxs9tpdxpSo5seDmrO7Ksqf4qlzvK094-hx3AK5opc6NXrnP8zP0rqH8OGpjxcFGW_5HHWdqzACAh4p6CB2mfs8pp02AseHjiby8vJO2TG-og-GB250BqGkd3Kgpv-w6z0t-mBniFs2Etov133pbvLJlGvamA4sI6TDLX86jvZLHuM3DvtLVTjUtS7QTI',
  terracotta:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBpbVevkysGorX1CyL2i31F-m-aKLkVXB4EpyH7VYsCFy7Ir_QobQmUOj5lmtdEAaRT2UYjUNHfV6-Zyqm7HmGd4F4ue39ghoUZUqsgv4uSpdjbAMWHXvJzvKwVjcAKXxZCpR2H7T99jYYU0NdBXG1aY8e84pLhDZTAXzRQoxNCRhm-wmklSGerthaPawjSif8ZNwaJYOU9DqTYhqwP1RVj3nVVNP8XDLhYws0eOQWNbiolyPoIAjl2y6gpDLYhbPyamAEBX3MZTy4',
  granite:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDMQNR2_Wdt7w8JmY66ZzLwcpy6YmrxRpnmR63uAiqttrAJwg8ehdHkfGdWlKKf2GjqbiuF5l-VNSl1Vq6dOgCwbUEqwWtrtcNEAlD-QNP-NiAmWqSGZocwQPkd4TGuCY92VCVT0KJSGkYFFSaBBQztwexQviHrv6slAsjSwzB1WeuiZrgksMxzeq4o8KujghMboczZOe_4pNwr-3EHgEhiIfTvTQemlZUr7DrhUqjiFEMzGWCVvqbpSY3yvwnwBCNBG6EHeidD8dA',
  stone:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDGwZ0tcNZhU1mlVj6Ybc1t0dVEKGILALytgKEwI-2yRbpsUNTCHMUy433yvbx_LEtEmGyrFDYrGdLOcPgyr6wRmaKAyPT4CYwtsRewWRLVSN4_GuAt61fDPR8qTVPylPN96u5Z0QIt4wjNRsdQbpv5kdI5-p1ZHaDiu_ChRD3mGMv-mM-orraFWRJznujYIBzQFj4Y6xAUf7G7YjpKb5_hcyn-_1b3DlPGp6gB41LrqrGhOrfis0-8DjBcyf8xQmt_FoqDW7wENkU',
};

export const PRODUCTS: Product[] = [
  {
    id: 'DH-GL 6001',
    slug: 'dh-gl-6001',
    name: 'Đá Marble Trắng Carrara',
    category: 'Gạch lát nền',
    tag: 'Bán chạy',
    img: IMG.marble,
    gallery: [IMG.marble, IMG.granite, IMG.stone, IMG.concrete],
    priceFrom: 420000,
    unit: 'm²',
    description:
      'Gạch vân đá marble Carrara mang vẻ đẹp sang trọng, tinh khôi với những đường vân xám tự nhiên trên nền trắng sáng. Bề mặt bóng kiếng, độ mài nhẵn cao, phù hợp cho phòng khách, sảnh lớn và showroom cao cấp.',
    size: '80 x 80 cm',
    thickness: '9 mm',
    surface: 'Bóng kiếng',
    origin: 'Việt Nam (công nghệ Ý)',
    warranty: '5 năm',
    applications: ['Phòng khách', 'Sảnh khách sạn', 'Showroom', 'Văn phòng'],
    colors: [
      { hex: '#f5f5f5', name: 'Trắng Carrara' },
      { hex: '#e0dcd0', name: 'Trắng ngà' },
      { hex: '#cfcac0', name: 'Xám sáng' },
    ],
  },
  {
    id: 'DH-GL 6060',
    slug: 'dh-gl-6060',
    name: 'Vân Gỗ Sồi Tự Nhiên',
    category: 'Gạch lát nền',
    img: IMG.oak,
    gallery: [IMG.oak, IMG.terracotta, IMG.marble, IMG.stone],
    priceFrom: 350000,
    unit: 'm²',
    description:
      'Mẫu gạch giả gỗ sồi với vân ngang sắc nét, cảm giác ấm áp như sàn gỗ thật nhưng bền bỉ và chống thấm vượt trội. Lý tưởng cho phòng ngủ, phòng khách hiện đại.',
    size: '60 x 60 cm',
    thickness: '9 mm',
    surface: 'Mờ (Matt)',
    origin: 'Việt Nam',
    warranty: '5 năm',
    applications: ['Phòng ngủ', 'Phòng khách', 'Quán cà phê'],
    colors: [
      { hex: '#8b5a3c', name: 'Sồi tự nhiên' },
      { hex: '#5d3a23', name: 'Sồi đậm' },
    ],
  },
  {
    id: 'DH-GL 8015',
    slug: 'dh-gl-8015',
    name: 'Bê Tông Xi Măng',
    category: 'Gạch lát nền',
    tag: 'Mới',
    img: IMG.concrete,
    gallery: [IMG.concrete, IMG.stone, IMG.granite, IMG.marble],
    priceFrom: 480000,
    unit: 'm²',
    description:
      'Gạch vân bê tông mang phong cách industrial, bề mặt nhám nhẹ chống trượt. Tông xám trung tính, dễ phối nội thất tối giản, hiện đại.',
    size: '80 x 80 cm',
    thickness: '10 mm',
    surface: 'Nhám chống trượt',
    origin: 'Việt Nam',
    warranty: '7 năm',
    applications: ['Phòng khách', 'Ban công', 'Nhà hàng', 'Quán cà phê'],
    colors: [
      { hex: '#7a7a7a', name: 'Xám trung' },
      { hex: '#4a4a4a', name: 'Xám đậm' },
      { hex: '#bdbdbd', name: 'Xám sáng' },
    ],
  },
  {
    id: 'DH-GL 3060',
    slug: 'dh-gl-3060',
    name: 'Terracotta Đỏ Đất Nung',
    category: 'Gạch lát nền',
    img: IMG.terracotta,
    gallery: [IMG.terracotta, IMG.oak, IMG.marble, IMG.granite],
    priceFrom: 280000,
    unit: 'm²',
    description:
      'Gạch terracotta mô phỏng đất nung truyền thống, tông nâu đỏ ấm áp. Bề mặt sần tự nhiên, rất phù hợp cho không gian vintage, quán cà phê hay sân vườn.',
    size: '30 x 60 cm',
    thickness: '8 mm',
    surface: 'Nhám chống trượt',
    origin: 'Việt Nam',
    warranty: '5 năm',
    applications: ['Sân vườn', 'Ban công', 'Quán cà phê', 'Nhà bếp'],
    colors: [
      { hex: '#a0553b', name: 'Đỏ gạch' },
      { hex: '#6e3523', name: 'Nâu đất' },
    ],
  },
  {
    id: 'DH-GL 6002',
    slug: 'dh-gl-6002',
    name: 'Đá Granite Xám Khói',
    category: 'Gạch lát nền',
    tag: 'Bán chạy',
    img: IMG.granite,
    gallery: [IMG.granite, IMG.concrete, IMG.marble, IMG.stone],
    priceFrom: 520000,
    unit: 'm²',
    description:
      'Gạch vân granite xám khói với điểm lấp lánh tự nhiên. Bề mặt bóng mờ sang trọng, chịu lực cao, rất bền và chống trầy xước.',
    size: '60 x 60 cm',
    thickness: '10 mm',
    surface: 'Bóng mờ',
    origin: 'Việt Nam (công nghệ Tây Ban Nha)',
    warranty: '10 năm',
    applications: ['Sảnh thương mại', 'Văn phòng', 'Ngân hàng', 'Showroom'],
    colors: [
      { hex: '#5a5a5a', name: 'Xám khói' },
      { hex: '#2b2b2b', name: 'Đen than' },
    ],
  },
  {
    id: 'DH-GL 8001',
    slug: 'dh-gl-8001',
    name: 'Vân Hoa Cương Đen Vàng',
    category: 'Gạch lát nền',
    tag: 'Mới',
    img: IMG.stone,
    gallery: [IMG.stone, IMG.granite, IMG.marble, IMG.concrete],
    priceFrom: 580000,
    unit: 'm²',
    description:
      'Gạch cao cấp vân hoa cương đen pha vàng óng, tạo điểm nhấn đẳng cấp cho không gian. Thích hợp cho sảnh lễ tân, villa và biệt thự.',
    size: '80 x 80 cm',
    thickness: '10 mm',
    surface: 'Bóng kiếng',
    origin: 'Nhập khẩu',
    warranty: '10 năm',
    applications: ['Villa', 'Biệt thự', 'Sảnh khách sạn 5 sao'],
    colors: [
      { hex: '#2b2416', name: 'Đen vàng' },
      { hex: '#5a4a20', name: 'Vàng rêu' },
    ],
  },
];

export const formatVnd = (value: number) =>
  value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 });

export const findProduct = (slug: string | undefined) =>
  PRODUCTS.find(p => p.slug === slug);
