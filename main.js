import { faker } from '@faker-js/faker';

// Product data structure
let products = [];
let cart = [];
let wishlist = [];
let filteredProducts = [];
let currentPage = 1;
const itemsPerPage = 20; // Show all 20 products at once

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const wishlistIcon = document.getElementById('wishlistIcon');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');
const cartModal = document.getElementById('cartModal');
const wishlistModal = document.getElementById('wishlistModal');
const checkoutModal = document.getElementById('checkoutModal');
const quickViewModal = document.getElementById('quickViewModal');
const cartItems = document.getElementById('cartItems');
const wishlistItems = document.getElementById('wishlistItems');
const quickViewContent = document.getElementById('quickViewContent');
const cartTotal = document.getElementById('cartTotal');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortBy = document.getElementById('sortBy');
const pagination = document.getElementById('pagination');

// Generate realistic water hyacinth handicraft products
function generateProducts() {
    const realProducts = [
        {
            name: 'Tas Anyam Eceng Gondok Klasik Premium',
            category: 'tas',
            basePrice: 285000,
            description: 'Tas anyam elegan dari eceng gondok berkualitas tinggi dengan desain klasik yang timeless. Dilengkapi dengan lapisan dalam dan tali kulit sintetis yang kuat. Cocok untuk acara formal maupun casual.',
            features: [
                'Bahan eceng gondok pilihan berkualitas premium',
                'Lapisan dalam waterproof untuk perlindungan ekstra',
                'Tali kulit sintetis yang kuat dan nyaman',
                'Ukuran 35x25x15 cm - ideal untuk kebutuhan harian',
                'Proses pengeringan dan pewarnaan alami'
            ],
            images: [
                'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop'
            ],
            popular: true,
            discount: 20
        },
        {
            name: 'Keranjang Multifungsi Eceng Gondok Besar',
            category: 'keranjang',
            basePrice: 195000,
            description: 'Keranjang serbaguna berukuran besar yang sangat praktis untuk penyimpanan berbagai keperluan rumah tangga. Dibuat dengan teknik anyam tradisional yang rapi dan kuat.',
            features: [
                'Ukuran jumbo 45x35x25 cm untuk kapasitas maksimal',
                'Konstruksi anyam yang sangat kuat dan tahan lama',
                'Dilengkapi dengan pegangan ergonomis',
                'Ideal untuk laundry, mainan anak, atau storage umum',
                'Finishing natural tanpa bahan kimia berbahaya'
            ],
            images: [
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 0
        },
        {
            name: 'Kotak Penyimpanan Serbaguna Eceng Gondok',
            category: 'penyimpanan',
            basePrice: 165000,
            description: 'Kotak penyimpanan dengan tutup yang rapat, sempurna untuk menyimpan dokumen, aksesoris, atau barang-barang penting lainnya. Desain minimalis yang cocok untuk berbagai interior.',
            features: [
                'Desain kotak dengan tutup yang pas dan rapat',
                'Ukuran 30x20x15 cm - perfect untuk storage',
                'Interior halus yang aman untuk barang sensitif',
                'Anyaman rapat yang memberikan kekuatan optimal',
                'Cocok untuk ruang kerja, kamar, atau ruang tamu'
            ],
            images: [
                'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop'
            ],
            popular: true,
            discount: 15
        },
        {
            name: 'Tempat Tisu Eksklusif Anyam Eceng Gondok',
            category: 'penyimpanan',
            basePrice: 75000,
            description: 'Tempat tisu dengan desain eksklusif yang akan mempercantik meja makan atau ruang tamu Anda. Dibuat dengan detail yang sangat rapi dan finishing yang halus.',
            features: [
                'Desain eksklusif dengan motif anyam yang artistik',
                'Ukuran standar untuk berbagai merk tisu',
                'Bagian bawah anti slip untuk stabilitas',
                'Mudah dibersihkan dan maintenance rendah',
                'Cocok sebagai hadiah atau dekorasi rumah'
            ],
            images: [
                'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 0
        },
        {
            name: 'Vas Bunga Artistik Eceng Gondok Tinggi',
            category: 'dekorasi',
            basePrice: 145000,
            description: 'Vas bunga dengan desain artistik yang akan menjadi focal point ruangan Anda. Dibuat dengan teknik anyam spiral yang unik dan menarik mata.',
            features: [
                'Desain spiral artistik yang sangat menarik',
                'Tinggi 35 cm - ideal untuk bunga segar atau kering',
                'Lapisan dalam waterproof untuk bunga segar',
                'Cocok untuk berbagai gaya interior modern',
                'Handmade dengan kualitas pengerjaan premium'
            ],
            images: [
                'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop'
            ],
            popular: true,
            discount: 25
        },
        {
            name: 'Tempat Pensil & ATK Desk Organizer Eceng Gondok',
            category: 'penyimpanan',
            basePrice: 85000,
            description: 'Organizer meja kerja yang praktis dengan beberapa kompartemen untuk pensil, pulpen, dan alat tulis lainnya. Desain kompak yang tidak memakan banyak tempat.',
            features: [
                'Multi kompartemen untuk berbagai alat tulis',
                'Ukuran compact 20x15x12 cm untuk meja kerja',
                'Base yang stabil dan tidak mudah terjatuh',
                'Cocok untuk kantor, sekolah, atau rumah',
                'Membantu menjaga kerapihan meja kerja'
            ],
            images: [
                'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 0
        },
        {
            name: 'Keranjang Laundry Premium Eceng Gondok',
            category: 'keranjang',
            basePrice: 225000,
            description: 'Keranjang laundry berukuran besar dengan tutup dan pegangan yang kuat. Sirkulasi udara yang baik mencegah bau tidak sedap dan menjaga pakaian tetap segar.',
            features: [
                'Kapasitas besar 60 liter untuk keluarga',
                'Tutup yang rapat namun breathable',
                'Pegangan kuat di kedua sisi untuk mobilitas',
                'Konstruksi extra strong untuk beban berat',
                'Interior smooth yang tidak merusak kain'
            ],
            images: [
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop'
            ],
            popular: true,
            discount: 18
        },
        {
            name: 'Set Alas Piring Makan Anyam Eceng Gondok',
            category: 'dekorasi',
            basePrice: 95000,
            description: 'Set 6 buah alas piring dengan desain anyam yang elegan. Memberikan sentuhan natural pada meja makan Anda dan melindungi permukaan meja dari panas.',
            features: [
                'Set lengkap 6 pieces untuk satu keluarga',
                'Tahan panas hingga 80°C untuk piring hangat',
                'Diameter 35 cm cocok untuk berbagai ukuran piring',
                'Easy cleaning dengan lap basah',
                'Cocok untuk daily use maupun special occasion'
            ],
            images: [
                'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 12
        },
        {
            name: 'Tempat Buah Tradisional Eceng Gondok Oval',
            category: 'keranjang',
            basePrice: 125000,
            description: 'Tempat buah dengan bentuk oval tradisional yang cocok sebagai centerpiece meja makan. Ventilasi alami menjaga buah tetap segar lebih lama.',
            features: [
                'Bentuk oval tradisional yang timeless',
                'Ventilasi natural untuk kesegaran buah',
                'Ukuran 40x25x8 cm ideal untuk centerpiece',
                'Anyaman terbuka yang artistik dan fungsional',
                'Mudah dicuci dan maintenance minimal'
            ],
            images: [
                'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 0
        },
        {
            name: 'Dompet Anyam Modern Eceng Gondok',
            category: 'tas',
            basePrice: 115000,
            description: 'Dompet dengan desain modern yang unik, dilengkapi dengan resleting YKK berkualitas tinggi. Compartemen yang well-organized untuk kartu, uang, dan koin.',
            features: [
                'Resleting YKK premium anti macet',
                'Multiple compartment untuk organisasi optimal',
                'Ukuran 20x12x3 cm pas di tangan atau tas',
                'Water resistant coating untuk perlindungan',
                'Design unisex cocok untuk pria dan wanita'
            ],
            images: [
                'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop'
            ],
            popular: true,
            discount: 22
        },
        {
            name: 'Keranjang Piknik Keluarga Eceng Gondok',
            category: 'keranjang',
            basePrice: 245000,
            description: 'Keranjang piknik berukuran besar dengan tutup dan handle yang kuat. Ideal untuk family outing, beach trip, atau acara outdoor lainnya.',
            features: [
                'Kapasitas besar untuk keperluan piknik keluarga',
                'Tutup yang dapat dikunci untuk keamanan',
                'Handle reinforced untuk carrying capacity tinggi',
                'Compartment dalam untuk pemisahan items',
                'Tahan cuaca dan mudah dibersihkan'
            ],
            images: [
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 0
        },
        {
            name: 'Tempat Majalah & Buku Display Eceng Gondok',
            category: 'penyimpanan',
            basePrice: 135000,
            description: 'Rak display untuk majalah dan buku dengan desain terbuka yang memudahkan akses. Cocok untuk ruang tunggu, perpustakaan mini, atau reading corner.',
            features: [
                'Desain terbuka untuk easy access dan display',
                'Multiple slot untuk berbagai ukuran publikasi',
                'Struktur stable tidak mudah roboh',
                'Cocok untuk office, rumah, atau commercial space',
                'Mudah dipindahkan sesuai kebutuhan'
            ],
            images: [
                'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 0
        },
        {
            name: 'Hiasan Dinding Artistik Anyam Eceng Gondok',
            category: 'dekorasi',
            basePrice: 175000,
            description: 'Wall art dengan teknik anyam yang rumit dan artistic. Menjadi statement piece yang memberikan nuansa natural dan artistic pada ruangan.',
            features: [
                'Teknik anyam artistik yang sangat detail',
                'Ukuran 50x30 cm cocok untuk berbagai ruangan',
                'Mounting system mudah dan aman',
                'Finishing premium tahan lama',
                'Cocok untuk living room, bedroom, atau office'
            ],
            images: [
                'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop'
            ],
            popular: true,
            discount: 30
        },
        {
            name: 'Tas Belanja Ramah Lingkungan Eceng Gondok',
            category: 'tas',
            basePrice: 155000,
            description: 'Tas belanja eco-friendly yang kuat dan stylish. Menggantikan plastic bag dengan solusi yang sustainable dan fashionable untuk daily shopping.',
            features: [
                'Eco-friendly alternative untuk plastic bags',
                'Kapasitas besar untuk groceries dan shopping',
                'Handle panjang untuk shoulder carry yang nyaman',
                'Foldable untuk storage yang compact',
                'Mudah dicuci dan quick dry'
            ],
            images: [
                'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 0
        },
        {
            name: 'Tempat Sepatu Minimalis Eceng Gondok',
            category: 'penyimpanan',
            basePrice: 195000,
            description: 'Rak sepatu dengan desain minimalis dan modern. Ventilasi yang baik menjaga sepatu tetap fresh dan organized dengan style.',
            features: [
                'Desain minimalis cocok untuk modern home',
                'Ventilasi optimal untuk kesehatan sepatu',
                'Kapasitas 6-8 pasang sepatu dewasa',
                'Mudah assembly tanpa tools khusus',
                'Space efficient untuk area entrance'
            ],
            images: [
                'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop'
            ],
            popular: true,
            discount: 16
        },
        {
            name: 'Keranjang Buah Mewah Eceng Gondok Bertingkat',
            category: 'keranjang',
            basePrice: 185000,
            description: 'Keranjang buah bertingkat dengan desain mewah yang menjadi centerpiece elegan di meja makan. Memisahkan berbagai jenis buah dengan style.',
            features: [
                'Desain bertingkat untuk variety buah',
                'Konstruksi mewah dengan finishing premium',
                'Sirkulasi udara optimal untuk kesegaran',
                'Easy access dari segala arah',
                'Cocok untuk entertaining guests'
            ],
            images: [
                'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 0
        },
        {
            name: 'Lampion Anyam Dekoratif Eceng Gondok',
            category: 'dekorasi',
            basePrice: 165000,
            description: 'Lampion dengan pattern anyam yang menciptakan shadow pattern yang cantik saat dinyalakan. Perfect untuk ambient lighting di berbagai acara.',
            features: [
                'Shadow pattern yang artistic saat dinyalakan',
                'Wiring aman untuk indoor dan outdoor use',
                'Bulb LED energy efficient included',
                'Hanging system yang kuat dan adjustable',
                'Cocok untuk party, wedding, atau daily ambiance'
            ],
            images: [
                'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
            ],
            images: [
                'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
            ],
            popular: true,
            discount: 28
        },
        {
            name: 'Tas Laptop Profesional Eceng Gondok 15 inch',
            category: 'tas',
            basePrice: 325000,
            description: 'Tas laptop professional dengan padding khusus untuk laptop 15 inch. Stylish, eco-friendly, dan memberikan proteksi optimal untuk device berharga Anda.',
            features: [
                'Padded compartment untuk laptop hingga 15 inch',
                'Professional look cocok untuk business meeting',
                'Extra pockets untuk accessories dan dokumen',
                'Shoulder strap yang empuk dan adjustable',
                'Water resistant coating untuk weather protection'
            ],
            images: [
                'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 0
        },
        {
            name: 'Tempat Mainan Anak Eceng Gondok Ceria',
            category: 'penyimpanan',
            basePrice: 165000,
            description: 'Storage box khusus untuk mainan anak dengan desain fun dan colorful. Aman untuk anak, mudah dibersihkan, dan membantu mengajarkan kerapihan.',
            features: [
                'Child-safe materials tanpa sharp edges',
                'Kapasitas besar untuk berbagai jenis mainan',
                'Colorful design yang disukai anak-anak',
                'Easy clean untuk maintenance harian',
                'Lightweight untuk anak ikut membereskan'
            ],
            images: [
                'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop'
            ],
            popular: true,
            discount: 20
        },
        {
            name: 'Keranjang Handuk Spa Eceng Gondok Mewah',
            category: 'keranjang',
            basePrice: 215000,
            description: 'Keranjang handuk dengan design spa-like yang memberikan nuansa luxury hotel di kamar mandi Anda. Ventilasi baik untuk handuk selalu kering.',
            features: [
                'Spa-inspired design untuk luxury bathroom',
                'Ventilasi optimal untuk quick drying',
                'Ukuran perfect untuk bath towels dan hand towels',
                'Anti-moisture coating untuk bathroom use',
                'Elegant appearance sebagai bathroom accessory'
            ],
            images: [
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
                'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=300&fit=crop'
            ],
            popular: false,
            discount: 0
        }
    ];
    
    products = realProducts.map((product, index) => {
        // Calculate pricing
        const priceVariation = faker.number.float({ min: 0.9, max: 1.2 });
        const originalPrice = Math.floor(product.basePrice * priceVariation);
        const discountPercent = product.discount || 0;
        const finalPrice = discountPercent > 0 ? Math.floor(originalPrice * (1 - discountPercent / 100)) : originalPrice;
        
        // Generate ratings
        const rating = product.popular ? 
            faker.number.float({ min: 4.3, max: 5.0, fractionDigits: 1 }) :
            faker.number.float({ min: 3.9, max: 4.7, fractionDigits: 1 });
        
        const reviewCount = product.popular ? 
            faker.number.int({ min: 35, max: 220 }) :
            faker.number.int({ min: 12, max: 85 });
        
        // Determine badge
        let badge = '';
        if (discountPercent > 0) badge = 'discount';
        else if (index < 8) badge = 'new';
        else if (product.popular && Math.random() > 0.4) badge = 'bestseller';
        
        return {
            id: index + 1,
            name: product.name,
            category: product.category,
            price: finalPrice,
            originalPrice: discountPercent > 0 ? originalPrice : null,
            discount: discountPercent,
            rating: rating,
            reviewCount: reviewCount,
            badge: badge,
            image: product.images[0],
            images: product.images,
            description: product.description,
            features: product.features,
            inStock: Math.random() > 0.03, // 97% in stock
            stock: faker.number.int({ min: 8, max: 75 }),
            createdAt: faker.date.recent({ days: 60 - (index * 3) }) // Newer products have higher index
        };
    });
    
    filteredProducts = [...products];
}

// Format currency to Indonesian Rupiah
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '⭐';
    }
    
    if (hasHalfStar) {
        starsHtml += '⭐'; // Using full star for simplicity
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '☆';
    }
    
    return starsHtml;
}

// Get badge HTML
function getBadgeHtml(product) {
    if (!product.badge) return '';
    
    const badgeConfig = {
        discount: { text: `-${product.discount}%`, class: 'product__badge' },
        new: { text: 'BARU', class: 'product__badge product__badge--new' },
        bestseller: { text: 'TERLARIS', class: 'product__badge product__badge--bestseller' }
    };
    
    const config = badgeConfig[product.badge];
    return config ? `<div class="${config.class}">${config.text}</div>` : '';
}

// Create product card HTML
function createProductCard(product) {
    const isWishlisted = wishlist.some(item => item.id === product.id);
    const badgeHtml = getBadgeHtml(product);
    const originalPriceHtml = product.originalPrice ? 
        `<span class="product__original-price">${formatCurrency(product.originalPrice)}</span>
         <span class="product__discount">-${product.discount}%</span>` : '';
    
    const whatsappMessage = `Halo Alatacraft, saya tertarik dengan produk "${product.name}" seharga ${formatCurrency(product.price)}. Apakah masih tersedia?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6283119226089&text=${encodeURIComponent(whatsappMessage)}`;
    
    return `
        <div class="product__card">
            ${badgeHtml}
            <button class="product__wishlist ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                ${isWishlisted ? '❤️' : '🤍'}
            </button>
            <div class="product__image-container">
                <img src="${product.image}" alt="${product.name}" class="product__image" loading="lazy">
                <button class="product__quick-view" onclick="showQuickView(${product.id})">
                    👁️ Quick View
                </button>
            </div>
            <div class="product__info">
                <div class="product__category">${getCategoryName(product.category)}</div>
                <h3 class="product__name">${product.name}</h3>
                <div class="product__rating">
                    <span class="rating__stars">${generateStars(product.rating)}</span>
                    <span class="rating__count">(${product.reviewCount} ulasan)</span>
                </div>
                <div class="product__price-container">
                    <span class="product__price">${formatCurrency(product.price)}</span>
                    ${originalPriceHtml}
                </div>
                ${!product.inStock ? '<div style="color: #e74c3c; font-weight: bold; font-size: 0.9rem; margin-bottom: 0.5rem;">⚠️ Stok Habis</div>' : ''}
                <div class="product__actions">
                    <a href="${whatsappUrl}" 
                       target="_blank" 
                       class="btn btn--secondary btn--small"
                       onclick="showNotification('Mengarahkan ke WhatsApp...')">
                        💬 Chat WA
                    </a>
                    <button class="btn btn--primary" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? '🛒 + Keranjang' : 'Stok Habis'}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'tas': 'Tas & Dompet',
        'keranjang': 'Keranjang',
        'dekorasi': 'Dekorasi',
        'penyimpanan': 'Penyimpanan'
    };
    return categoryNames[category] || category;
}

// Filter and sort products
function filterAndSortProducts() {
    let filtered = [...products];
    
    // Search filter
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            getCategoryName(product.category).toLowerCase().includes(searchTerm)
        );
    }
    
    // Category filter
    const selectedCategory = categoryFilter.value;
    if (selectedCategory) {
        filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Sort products
    const sortOption = sortBy.value;
    switch (sortOption) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        default:
            // Keep original order
            break;
    }
    
    filteredProducts = filtered;
    currentPage = 1;
    renderProducts();
    renderPagination();
}

// Render products with pagination
function renderProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #7f8c8d; font-size: 1.1rem;">Tidak ada produk yang ditemukan</div>';
        return;
    }
    
    productsGrid.innerHTML = productsToShow.map(createProductCard).join('');
    
    // Add a message showing total products
    if (filteredProducts.length > 0) {
        const productCount = document.createElement('div');
        productCount.style.cssText = 'grid-column: 1/-1; text-align: center; margin-top: 2rem; color: #2d5016; font-weight: bold;';
        productCount.innerHTML = `Menampilkan ${productsToShow.length} dari ${filteredProducts.length} produk kerajinan eceng gondok berkualitas tinggi`;
        productsGrid.appendChild(productCount);
    }
}

// Render pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHtml = '';
    
    // Previous button
    paginationHtml += `
        <button class="pagination__btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
            ‹ Sebelumnya
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage || i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
            paginationHtml += `
                <button class="pagination__btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                    ${i}
                </button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHtml += '<span style="padding: 0.75rem;">...</span>';
        }
    }
    
    // Next button
    paginationHtml += `
        <button class="pagination__btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
            Selanjutnya ›
        </button>
    `;
    
    pagination.innerHTML = paginationHtml;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderProducts();
    renderPagination();
    
    // Scroll to products section
    document.getElementById('produk').scrollIntoView({ behavior: 'smooth' });
}

// Toggle wishlist
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showNotification('Produk dihapus dari wishlist');
    } else {
        wishlist.push(product);
        showNotification('Produk ditambahkan ke wishlist');
    }
    
    updateWishlistCount();
    renderProducts(); // Re-render to update heart icons
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.inStock) {
        showNotification('Produk sedang tidak tersedia');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showNotification(`Jumlah ${product.name} berhasil ditambahkan`);
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
        showNotification('Produk berhasil ditambahkan ke keranjang!');
    }
    
    updateCartCount();
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCartItems();
    updateCartTotal();
    showNotification('Produk dihapus dari keranjang');
}

// Update quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        renderCartItems();
        updateCartTotal();
    }
}

// Update cart count in header
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Update wishlist count in header
function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
    wishlistCount.style.display = wishlist.length > 0 ? 'flex' : 'none';
}

// Calculate cart total
function calculateCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Update cart total display
function updateCartTotal() {
    const total = calculateCartTotal();
    cartTotal.textContent = `Total: ${formatCurrency(total)}`;
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">Keranjang kosong</p>';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart__item">
            <img src="${item.image}" alt="${item.name}" class="cart__item-image">
            <div class="cart__item-info">
                <div class="cart__item-name">${item.name}</div>
                <div class="cart__item-price">${formatCurrency(item.price)}</div>
            </div>
            <div class="cart__item-controls">
                <button class="quantity__btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span style="padding: 0 0.5rem; font-weight: bold;">${item.quantity}</span>
                <button class="quantity__btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="btn" onclick="removeFromCart(${item.id})" style="margin-left: 0.5rem; background: #e74c3c; color: white; padding: 0.25rem 0.5rem;">×</button>
            </div>
        </div>
    `).join('');
}

// Render wishlist items
function renderWishlistItems() {
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p style="text-align: center; color: #7f8c8d; padding: 2rem;">Wishlist kosong</p>';
        return;
    }
    
    wishlistItems.innerHTML = wishlist.map(item => `
        <div class="cart__item">
            <img src="${item.image}" alt="${item.name}" class="cart__item-image">
            <div class="cart__item-info">
                <div class="cart__item-name">${item.name}</div>
                <div class="cart__item-price">${formatCurrency(item.price)}</div>
            </div>
            <div class="cart__item-controls">
                <button class="btn btn--primary btn--small" onclick="addToCart(${item.id}); hideModal(wishlistModal);">
                    🛒 Tambah ke Keranjang
                </button>
                <button class="btn" onclick="toggleWishlist(${item.id}); renderWishlistItems();" style="background: #e74c3c; color: white; padding: 0.25rem 0.5rem; margin-left: 0.5rem;">×</button>
            </div>
        </div>
    `).join('');
}

// Show quick view
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const isWishlisted = wishlist.some(item => item.id === productId);
    
    quickViewContent.innerHTML = `
        <div class="quick-view__content">
            <div class="quick-view__images">
                <img src="${product.image}" alt="${product.name}" class="quick-view__image">
            </div>
            <div class="quick-view__info">
                <h3>${product.name}</h3>
                <div class="quick-view__rating">
                    <span class="rating__stars">${generateStars(product.rating)}</span>
                    <span class="rating__count">(${product.reviewCount} ulasan)</span>
                </div>
                <div class="quick-view__price">
                    ${formatCurrency(product.price)}
                    ${product.originalPrice ? `<span style="font-size: 1rem; color: #7f8c8d; text-decoration: line-through; margin-left: 0.5rem;">${formatCurrency(product.originalPrice)}</span>` : ''}
                </div>
                <p class="quick-view__description">${product.description}</p>
                <h4 style="color: #2d5016; margin: 1rem 0 0.5rem 0;">Fitur Unggulan:</h4>
                <ul style="margin-bottom: 1.5rem; color: #7f8c8d;">
                    ${product.features.map(feature => `<li style="margin-bottom: 0.25rem;">• ${feature}</li>`).join('')}
                </ul>
                <div class="quick-view__actions">
                    <button class="btn btn--secondary" onclick="toggleWishlist(${product.id}); showQuickView(${product.id});">
                        ${isWishlisted ? '❤️ Hapus dari Wishlist' : '🤍 Tambah ke Wishlist'}
                    </button>
                    <button class="btn btn--primary" onclick="addToCart(${product.id}); hideModal(quickViewModal);" ${!product.inStock ? 'disabled' : ''}>
                        ${product.inStock ? '🛒 Tambah ke Keranjang' : 'Stok Habis'}
                    </button>
                </div>
            </div>
        </div>
    `;
    
    showModal(quickViewModal);
}

// Show notification
function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Show modal
function showModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide modal
function hideModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Show cart modal
function showCart() {
    renderCartItems();
    updateCartTotal();
    showModal(cartModal);
}

// Show wishlist modal
function showWishlist() {
    renderWishlistItems();
    showModal(wishlistModal);
}

// Show checkout modal
function showCheckout() {
    if (cart.length === 0) {
        showNotification('Keranjang kosong! Tambahkan produk terlebih dahulu.');
        return;
    }
    
    hideModal(cartModal);
    renderOrderSummary();
    showModal(checkoutModal);
}

// Render order summary in checkout
function renderOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    const total = calculateCartTotal();
    
    const itemsHtml = cart.map(item => `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>${item.name} x${item.quantity}</span>
            <span>${formatCurrency(item.price * item.quantity)}</span>
        </div>
    `).join('');
    
    orderSummary.innerHTML = `
        <h4>Ringkasan Pesanan</h4>
        ${itemsHtml}
        <hr style="margin: 1rem 0;">
        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 1.1rem;">
            <span>Total:</span>
            <span>${formatCurrency(total)}</span>
        </div>
    `;
}

// Handle checkout form submission
function handleCheckout(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const customerData = {
        name: formData.get('customerName'),
        phone: formData.get('customerPhone'),
        email: formData.get('customerEmail'),
        address: formData.get('address'),
        city: formData.get('city'),
        province: formData.get('province'),
        postalCode: formData.get('postalCode'),
        paymentMethod: formData.get('paymentMethod')
    };
    
    const orderData = {
        customer: customerData,
        items: cart,
        total: calculateCartTotal(),
        orderDate: new Date().toISOString()
    };
    
    // Simulate order processing
    showNotification('Pesanan berhasil dibuat! Anda akan dihubungi segera.');
    
    // Reset cart and close modal
    cart = [];
    updateCartCount();
    hideModal(checkoutModal);
    
    // Reset form
    event.target.reset();
    
    // In a real application, you would send this data to your backend
    console.log('Order data:', orderData);
}

// Search functionality
function handleSearch() {
    filterAndSortProducts();
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup navigation active states
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    generateProducts();
    filterAndSortProducts();
    setupSmoothScroll();
    setupNavigation();
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    document.getElementById('searchBtn').addEventListener('click', handleSearch);
    
    // Filter and sort
    categoryFilter.addEventListener('change', filterAndSortProducts);
    sortBy.addEventListener('change', filterAndSortProducts);
    
    // Header actions
    cartIcon.addEventListener('click', showCart);
    wishlistIcon.addEventListener('click', showWishlist);
    
    // Close modal buttons
    document.getElementById('closeCart').addEventListener('click', () => hideModal(cartModal));
    document.getElementById('closeWishlist').addEventListener('click', () => hideModal(wishlistModal));
    document.getElementById('closeCheckout').addEventListener('click', () => hideModal(checkoutModal));
    document.getElementById('closeQuickView').addEventListener('click', () => hideModal(quickViewModal));
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', showCheckout);
    
    // Checkout form submission
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
    
    // Close modal when clicking outside
    [cartModal, wishlistModal, checkoutModal, quickViewModal].forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideModal(modal);
            }
        });
    });
    
    // Close notification when clicked
    notification.addEventListener('click', () => {
        notification.classList.remove('show');
    });
});

// Make functions available globally for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleWishlist = toggleWishlist;
window.showQuickView = showQuickView;
window.changePage = changePage;
window.hideModal = hideModal;
