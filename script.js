/**
 * R.U.V.A - Luxury Crochet Website
 * Interactive JavaScript Functions
 * Enhanced with Shopping Cart & Premium Features
 */

// Global cart state
let cart = [];
const CART_STORAGE_KEY = 'ruva_cart';

// Product database
const productData = {
    1: { id: 1, name: 'Rosé Elegance Dress', category: 'Fine Artisan Dress', price: 180, image: 'images/WhatsApp Image 2026-01-26 at 11.13.22.jpeg', description: 'A stunning handcrafted dress in vibrant pink, perfect for making a statement.', materials: 'Premium Italian Cotton Yarn', availability: 'in_stock', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    2: { id: 2, name: 'Blush Two-Piece Set', category: 'Luxury Summer Set', price: 220, image: 'images/WhatsApp Image 2026-01-26 at 11.12.41.jpeg', description: 'Elegant two-piece set with intricate openwork patterns.', materials: 'Egyptian Cotton Blend', availability: 'made_to_order', sizes: ['S', 'M', 'L'] },
    3: { id: 3, name: 'Coral Star Dress', category: 'Statement Beach Dress', price: 195, image: 'images/WhatsApp Image 2026-01-26 at 11.123.22.jpeg', description: 'A playful white dress adorned with hand-crocheted starfish motifs.', materials: 'Organic Cotton & Bamboo', availability: 'in_stock', sizes: ['S', 'M', 'L', 'XL'] },
    4: { id: 4, name: 'Autumn Stripe Pullover', category: 'Classic Cardigan', price: 165, image: 'images/WhatsApp Image 2026-01-26 at 15.25.55.jpeg', description: 'Cozy striped pullover with warm autumn tones.', materials: 'Merino Wool Blend', availability: 'in_stock', sizes: ['S', 'M', 'L', 'XL'] },
    5: { id: 5, name: 'Riviera Classic Shirt', category: 'Classic Open-Weave Shirt', price: 175, image: 'images/WhatsApp Image 2026-01-26 at 11.13.17.jpeg', description: 'Signature men\'s shirt with bold vertical stripes.', materials: 'Premium Linen-Cotton', availability: 'in_stock', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    6: { id: 6, name: 'Ivory Knit Sweater', category: 'Luxury Pullover', price: 185, image: 'images/WhatsApp Image 2026-01-26 at 15.25.54.jpeg', description: 'Elegant cream sweater with balloon sleeves.', materials: 'Cashmere Blend', availability: 'made_to_order', sizes: ['S', 'M', 'L'] },
    7: { id: 7, name: 'Sky Blue Layette Set', category: 'Complete Baby Set', price: 145, image: 'images/WhatsApp Image 2026-01-26 at 11.13.23.jpeg', description: 'Complete layette set with cardigan, romper, beanie, and booties.', materials: 'Hypoallergenic Baby Yarn', availability: 'in_stock', sizes: ['0-3m', '3-6m', '6-12m'] },
    8: { id: 8, name: 'Peach Blossom Set', category: 'Hooded Jacket Set', price: 135, image: 'images/WhatsApp Image 2026-01-6 at 11.13.23.jpeg', description: 'Adorable peach set with hooded jacket and matching accessories.', materials: 'Soft Organic Cotton', availability: 'in_stock', sizes: ['0-3m', '3-6m', '6-12m'] },
    9: { id: 9, name: 'Fuchsia Play Set', category: 'Toddler Outfit', price: 95, image: 'images/WhatsApp Image 2026-01-26 at 11.13.231.jpeg', description: 'Vibrant toddler outfit perfect for photoshoots.', materials: 'Premium Acrylic-Cotton', availability: 'in_stock', sizes: ['6-12m', '12-18m', '18-24m'] },
    10: { id: 10, name: 'Espresso Check Afghan', category: 'Luxury Bed Throw', price: 275, image: 'images/WhatsApp Image 2026-01-26 at 11.13.21.jpeg', description: 'Stunning checkered throw in warm brown and cream.', materials: 'Chunky Merino Wool', availability: 'in_stock', sizes: ['One Size'] },
    11: { id: 11, name: 'Monochrome Plaid Throw', category: 'Statement Throw', price: 285, image: 'images/WhatsApp Image 2026-01-26 at 11.13.20.jpeg', description: 'Bold black and white buffalo plaid throw.', materials: 'Premium Wool Blend', availability: 'limited', sizes: ['One Size'] },
    12: { id: 12, name: 'Storm Cloud Chunky', category: 'Arm-Knit Throw', price: 320, image: 'images/WhatsApp Image 2026-01-26 at 11.3.22.jpeg', description: 'Ultra-chunky throw in sophisticated grey tones.', materials: 'Giant Merino Wool', availability: 'made_to_order', sizes: ['One Size'] },
    13: { id: 13, name: 'Blue Rose Centrepiece', category: 'Artisan Table Runner', price: 150, image: 'images/WhatsApp Image 2026-01-26 at 12.41.59.jpeg', description: 'Stunning circular centrepiece with 3D blue roses.', materials: 'Fine Cotton Thread', availability: 'limited', sizes: ['One Size'] },
    14: { id: 14, name: 'Amber Glow Crop Top', category: 'Summer Crop Top', price: 95, image: 'images/IMG-20260213-WA0032.jpg', description: 'A bold orange crochet crop top with intricate openwork texture. Perfect for pairing with denim or high-waist skirts.', materials: 'Premium Cotton Yarn', availability: 'in_stock', sizes: ['XS', 'S', 'M', 'L'] },
    15: { id: 15, name: 'Poolside Lace Bikini', category: 'Luxury Swimwear Set', price: 160, image: 'images/IMG-20260213-WA0033.jpg', description: 'Elegant white crochet bikini set with halter top and adjustable tie shorts. Resort-ready luxury.', materials: 'UV-Resistant Cotton Blend', availability: 'in_stock', sizes: ['XS', 'S', 'M', 'L'] },
    16: { id: 16, name: 'Crimson Knit Co-ord', category: 'Two-Piece Set', price: 240, image: 'images/IMG-20260213-WA0034.jpg', description: 'Stunning deep burgundy two-piece co-ord set with balloon sleeve crop top and fitted mini skirt.', materials: 'Premium Merino Wool Blend', availability: 'made_to_order', sizes: ['S', 'M', 'L'] },
    17: { id: 17, name: 'Safari Open-Weave Shirt', category: 'Men\'s Classic Shirt', price: 190, image: 'images/IMG-20260213-WA0035.jpg', description: 'Refined white open-weave button-up shirt for the modern gentleman. A safari-inspired classic.', materials: 'Egyptian Cotton', availability: 'in_stock', sizes: ['S', 'M', 'L', 'XL', 'XXL'] },
    18: { id: 18, name: 'Sahara Fringe Maxi', category: 'Statement Maxi Dress', price: 350, image: 'images/IMG-20260213-WA0036.jpg', description: 'Sculptural cream maxi dress with dramatic side slit and fringe hem. A wearable work of art.', materials: 'Organic Cotton & Bamboo Blend', availability: 'limited', sizes: ['S', 'M', 'L'] },
    19: { id: 19, name: 'Ivory Net Maxi Dress', category: 'Couture Maxi Dress', price: 320, image: 'images/IMG-20260213-WA0037.jpg', description: 'Floor-length open-net maxi dress with fringe detailing. Effortless elegance for resort and editorial styling.', materials: 'Premium Organic Cotton', availability: 'made_to_order', sizes: ['S', 'M', 'L'] },
    20: { id: 20, name: 'Heritage Stripe Sweater', category: 'Cozy Pullover', price: 175, image: 'images/IMG-20260214-WA0012.jpg', description: 'Warm striped crew-neck sweater inspired by African heritage. Earthy tones for everyday warmth.', materials: 'Merino Wool & Cotton Blend', availability: 'in_stock', sizes: ['S', 'M', 'L', 'XL'] }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    initPreloader();
    initNavigation();
    initScrollAnimations();
    initCollectionTabs();
    initProductModal();
    initCounterAnimation();
    initSmoothScroll();
    initHeaderScroll();
    initShoppingCart();
    initAddToCartButtons();
    initActiveSectionDetection();
    initTailorMake(); // Initialize Tailor Make modal
});

/**
 * Load cart from localStorage
 */
function loadCart() {
    try {
        const saved = localStorage.getItem(CART_STORAGE_KEY);
        cart = saved ? JSON.parse(saved) : [];
    } catch (e) {
        cart = [];
    }
    updateCartBadge();
}

/**
 * Save cart to localStorage
 */
function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

/**
 * Preloader
 */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = 'visible';
        }, 800);
    });
    setTimeout(() => preloader.classList.add('hidden'), 3000);
}

/**
 * Navigation
 */
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

/**
 * Header Scroll Effect
 */
function initHeaderScroll() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-float').forEach(el => observer.observe(el));
}

/**
 * Collection Tabs
 */
function initCollectionTabs() {
    const tabs = document.querySelectorAll('.collection__tab');
    const panels = document.querySelectorAll('.collection__panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const collection = tab.dataset.collection;
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.dataset.panel === collection) panel.classList.add('active');
            });
        });
    });
}

/**
 * Product Modal
 */
let currentModalProductId = null;

function initProductModal() {
    const modal = document.getElementById('product-modal');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = modal.querySelector('.modal__overlay');
    const productCards = document.querySelectorAll('.product__card');
    const modalAddCart = document.getElementById('modal-add-cart');
    const modalBespoke = document.getElementById('modal-bespoke');

    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.product__add-cart')) return;
            const productId = parseInt(card.dataset.product);
            openProductModal(productId);
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'visible';
        currentModalProductId = null;
    };

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Add to cart from modal
    if (modalAddCart) {
        modalAddCart.addEventListener('click', () => {
            if (currentModalProductId) {
                addToCart(currentModalProductId);
                closeModal();
            }
        });
    }

    // Bespoke request closes modal
    if (modalBespoke) {
        modalBespoke.addEventListener('click', () => closeModal());
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
}

let currentModalSize = null;

function getAvailabilityInfo(availability) {
    switch (availability) {
        case 'in_stock': return { label: 'In Stock', class: 'availability--instock', icon: '●', delivery: '3–7 business days' };
        case 'made_to_order': return { label: 'Made to Order', class: 'availability--mto', icon: '◐', delivery: '2–4 weeks' };
        case 'limited': return { label: 'Limited Edition', class: 'availability--limited', icon: '◆', delivery: '3–5 business days' };
        default: return { label: 'Available', class: 'availability--instock', icon: '●', delivery: '3–7 business days' };
    }
}

function openProductModal(productId) {
    const modal = document.getElementById('product-modal');
    const product = productData[productId];

    if (product) {
        currentModalProductId = productId;
        currentModalSize = null;
        document.getElementById('modal-title').textContent = product.name;
        document.getElementById('modal-category').textContent = product.category;
        document.getElementById('modal-price').textContent = `From $${product.price}`;
        document.getElementById('modal-image').src = product.image;
        document.getElementById('modal-image').alt = product.name;
        document.getElementById('modal-description').textContent = product.description;
        document.getElementById('modal-materials').textContent = product.materials;

        // Availability badge
        const avail = getAvailabilityInfo(product.availability);
        const availEl = document.getElementById('modal-availability');
        if (availEl) {
            availEl.className = `modal__availability ${avail.class}`;
            availEl.innerHTML = `<span class="availability__dot">${avail.icon}</span> ${avail.label}`;
        }

        // Delivery estimate
        const deliveryEl = document.getElementById('modal-delivery');
        if (deliveryEl) {
            deliveryEl.textContent = `Estimated delivery: ${avail.delivery}`;
        }

        // Size selector
        const sizeContainer = document.getElementById('modal-sizes');
        if (sizeContainer) {
            sizeContainer.innerHTML = product.sizes.map(size =>
                `<button class="size-pill" data-size="${size}">${size}</button>`
            ).join('');

            sizeContainer.querySelectorAll('.size-pill').forEach(btn => {
                btn.addEventListener('click', () => {
                    sizeContainer.querySelectorAll('.size-pill').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentModalSize = btn.dataset.size;
                });
            });
        }

        // Create detailed WhatsApp message with product info and image link
        const siteUrl = window.location.origin;
        const imageUrl = `${siteUrl}/${product.image}`;
        const orderMessage = `Hello! I'm interested in ordering:

📦 *Product:* ${product.name}
📂 *Category:* ${product.category}
💰 *Price:* From $${product.price}
🧵 *Materials:* ${product.materials}
📦 *Availability:* ${avail.label}

🖼️ *Product Image:* ${imageUrl}

Please let me know the availability and delivery options. Thank you!`;

        document.getElementById('modal-order').href = `https://wa.me/263782080563?text=${encodeURIComponent(orderMessage)}`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Counter Animation
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.banner__number[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target, parseInt(entry.target.dataset.count));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000, steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, duration / steps);
}

/**
 * Smooth Scroll
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Active Section Detection
 */
function initActiveSectionDetection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 200;
            if (window.pageYOffset > top && window.pageYOffset <= top + section.offsetHeight) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });
}

/**
 * Shopping Cart Functions
 */
function initShoppingCart() {
    const cartToggle = document.getElementById('cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartClose = document.getElementById('cart-close');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartClear = document.getElementById('cart-clear');
    const cartBrowse = document.getElementById('cart-browse');

    cartToggle.addEventListener('click', () => openCart());
    cartClose.addEventListener('click', () => closeCart());
    cartOverlay.addEventListener('click', () => closeCart());
    cartClear.addEventListener('click', () => clearCart());
    cartBrowse.addEventListener('click', () => closeCart());

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartSidebar.classList.contains('active')) closeCart();
    });

    renderCart();
}

function openCart() {
    document.getElementById('cart-sidebar').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cart-sidebar').classList.remove('active');
    document.body.style.overflow = 'visible';
}

function addToCart(productId, size) {
    const product = productData[productId];
    if (!product) return;

    const selectedSize = size || currentModalSize || product.sizes[0];
    const cartKey = `${productId}_${selectedSize}`;

    const existingItem = cart.find(item => item.id === productId && item.size === selectedSize);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1, size: selectedSize, cartKey: cartKey });
    }

    saveCart();
    updateCartBadge();
    renderCart();
    showToast(`${product.name} (${selectedSize}) added to cart`);
}

function removeFromCart(cartKey) {
    cart = cart.filter(item => item.cartKey !== cartKey);
    saveCart();
    updateCartBadge();
    renderCart();
}

function updateQuantity(cartKey, change) {
    const item = cart.find(item => item.cartKey === cartKey);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(cartKey);
            return;
        }
    }
    saveCart();
    renderCart();
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartBadge();
    renderCart();
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = total;
    badge.classList.add('pulse');
    setTimeout(() => badge.classList.remove('pulse'), 400);
}

function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartCheckout = document.getElementById('cart-checkout');

    // Safety check - exit if elements not found
    if (!cartItems || !cartEmpty || !cartFooter || !cartSubtotal || !cartCheckout) {
        console.log('Cart elements not found');
        return;
    }

    // Clear existing items (except empty state)
    cartItems.querySelectorAll('.cart-item').forEach(el => el.remove());

    if (cart.length === 0) {
        cartEmpty.style.display = 'flex';
        cartFooter.style.display = 'none';
        return;
    }

    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';

    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        // Display size if available
        const sizeDisplay = item.size ? `<span class="cart-item__size">Size: ${item.size}</span>` : '';
        // Ensure cartKey is generated if missing (for backward compatibility)
        const itemKey = item.cartKey || `${item.id}_${item.size || 'One Size'}`;

        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item__image">
            <div class="cart-item__details">
                <h4 class="cart-item__name">${item.name}</h4>
                ${sizeDisplay}
                <span class="cart-item__price">$${item.price * item.quantity}</span>
            </div>
            <div class="cart-item__actions">
                <button class="cart-item__remove" data-key="${itemKey}" aria-label="Remove item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
                <div class="quantity-controls">
                    <button class="quantity-btn" data-action="decrease" data-key="${itemKey}">−</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-key="${itemKey}">+</button>
                </div>
            </div>
        `;
        cartItems.appendChild(itemEl);
    });

    // Add event listeners
    cartItems.querySelectorAll('.cart-item__remove').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.dataset.key));
    });

    cartItems.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const change = btn.dataset.action === 'increase' ? 1 : -1;
            updateQuantity(btn.dataset.key, change);
        });
    });


    // Update subtotal
    cartSubtotal.textContent = `$${calculateSubtotal().toFixed(2)}`;

    // Update WhatsApp checkout link with detailed order info
    const siteUrl = window.location.origin;
    const itemsList = cart.map(item => {
        const imageUrl = `${siteUrl}/${item.image}`;
        return `📦 *${item.name}*
   • Size: ${item.size || 'Standard'}
   • Quantity: ${item.quantity}
   • Price: $${item.price} each ($${item.price * item.quantity} total)
   • Image: ${imageUrl}`;
    }).join('\n\n');

    const cartOrderMessage = `Hello! I'd like to place an order from R.U.V.A:

🛒 *ORDER DETAILS:*

${itemsList}

💰 *SUBTOTAL: $${calculateSubtotal().toFixed(2)}*

Please confirm availability and let me know the delivery options. Thank you!`;

    cartCheckout.href = `https://wa.me/263782080563?text=${encodeURIComponent(cartOrderMessage)}`;
}

/**
 * Add to Cart Buttons
 */
function initAddToCartButtons() {
    const productCards = document.querySelectorAll('.product__card');

    productCards.forEach(card => {
        const productId = card.dataset.product;
        const imageWrapper = card.querySelector('.product__image-wrapper');

        // Create add to cart button
        const addBtn = document.createElement('button');
        addBtn.className = 'product__add-cart';
        addBtn.setAttribute('aria-label', 'Add to cart');
        addBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
                <line x1="12" y1="12" x2="12" y2="18"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
            </svg>
        `;

        addBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(parseInt(productId));
        });

        // Availability Badge
        const product = productData[productId];
        if (product && product.availability !== 'in_stock') {
            const avail = getAvailabilityInfo(product.availability);
            const badge = document.createElement('span');
            badge.className = `product__badge ${avail.class}`;
            badge.style.top = '10px';
            badge.style.left = '10px';
            badge.style.right = 'auto';
            badge.textContent = avail.label;
            imageWrapper.appendChild(badge);
        }

        imageWrapper.appendChild(addBtn);
    });
}

/**
 * Toast Notification
 */
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

/**
 * Console Easter Egg
 */
console.log('%c✦ R.U.V.A ✦', 'font-family: Georgia, serif; font-size: 24px; font-weight: bold; color: #1F2D21; background: #FAF9F6; padding: 20px 40px; border: 2px solid #C67454;');
console.log('%cTimeless Style. Handcrafted with Heart.', 'font-family: Georgia, serif; font-size: 14px; font-style: italic; color: #5A5751;');
/**
 * Tailor Make Modal Logic
 */
function initTailorMake() {
    const modal = document.getElementById('tailor-modal');
    const btn = document.getElementById('btn-tailor-make');
    const closeBtn = document.getElementById('tailor-close');
    const overlay = modal.querySelector('.modal__overlay');
    const form = document.getElementById('tailor-form');

    if (!modal || !btn) return;

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'visible';
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const desc = document.getElementById('tailor-desc').value;

        const message = `Hello! I'm interested in a *BESPOKE TAILOR MADE* piece from R.U.V.A.

📝 *My Vision:*
${desc}

I have a reference picture to share. Can we start a consultation?`;

        const whatsappUrl = `https://wa.me/263782080563?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        closeModal();
    });
}
