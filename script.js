/**
 * R.U.V.A - Luxury Crochet Website
 * Interactive JavaScript Functions
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initPreloader();
    initNavigation();
    initScrollAnimations();
    initCollectionTabs();
    initProductModal();
    initCounterAnimation();
    initSmoothScroll();
    initHeaderScroll();
});

/**
 * Preloader
 */
function initPreloader() {
    const preloader = document.getElementById('preloader');

    // Hide preloader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            // Enable scroll animations after preloader
            document.body.style.overflow = 'visible';
        }, 800);
    });

    // Fallback: hide after 3 seconds max
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 3000);
}

/**
 * Navigation
 */
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Open menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';

            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            document.body.style.overflow = 'visible';
        }
    });
}

/**
 * Header Scroll Effect
 */
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Scroll Animations - Fade & Float Effect
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-float elements
    document.querySelectorAll('.fade-float').forEach(el => {
        observer.observe(el);
    });
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

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active panel with animation
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.dataset.panel === collection) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

/**
 * Product Modal
 */
function initProductModal() {
    const modal = document.getElementById('product-modal');
    const modalClose = document.getElementById('modal-close');
    const modalOverlay = modal.querySelector('.modal__overlay');
    const productCards = document.querySelectorAll('.product__card');

    // Product data
    const productData = {
        1: {
            name: 'Rosé Elegance Dress',
            category: 'Fine Artisan Dress',
            price: 'From $180',
            image: 'images/WhatsApp Image 2026-01-26 at 11.13.22.jpeg',
            description: 'A stunning handcrafted dress in vibrant pink, perfect for making a statement. Each stitch is carefully placed to create an intricate pattern that celebrates feminine grace and artisan excellence.'
        },
        2: {
            name: 'Blush Two-Piece Set',
            category: 'Luxury Summer Set',
            price: 'From $220',
            image: 'images/WhatsApp Image 2026-01-26 at 11.12.41.jpeg',
            description: 'This elegant two-piece set features an off-shoulder crop top and matching skirt, handcrafted with intricate openwork patterns. Perfect for summer occasions and resort wear.'
        },
        3: {
            name: 'Coral Star Dress',
            category: 'Statement Beach Dress',
            price: 'From $195',
            image: 'images/WhatsApp Image 2026-01-26 at 11.123.22.jpeg',
            description: 'A playful white dress adorned with hand-crocheted starfish motifs in vibrant coral. This piece brings joy and whimsy to your summer wardrobe while maintaining luxurious craftsmanship.'
        },
        4: {
            name: 'Autumn Stripe Pullover',
            category: 'Classic Cardigan',
            price: 'From $165',
            image: 'images/WhatsApp Image 2026-01-26 at 15.25.55.jpeg',
            description: 'Cozy yet sophisticated, this striped pullover features warm autumn tones and a chunky turtleneck. Each color band is carefully crafted for a professional finish.'
        },
        5: {
            name: 'Riviera Classic Shirt',
            category: 'Classic Open-Weave Shirt',
            price: 'From $175',
            image: 'images/WhatsApp Image 2026-01-26 at 11.13.17.jpeg',
            description: 'Our signature men\'s shirt features an open-weave design with bold vertical stripes. Perfect for sophisticated casual occasions, this piece exemplifies sartorial excellence.'
        },
        6: {
            name: 'Ivory Knit Sweater',
            category: 'Luxury Pullover',
            price: 'From $185',
            image: 'images/WhatsApp Image 2026-01-26 at 15.25.54.jpeg',
            description: 'This elegant cream sweater features balloon sleeves and ribbed detailing. Crafted from the softest premium yarn, it offers both warmth and refined style.'
        },
        7: {
            name: 'Sky Blue Layette Set',
            category: 'Complete Baby Set',
            price: 'From $145',
            image: 'images/WhatsApp Image 2026-01-26 at 11.13.23.jpeg',
            description: 'A complete layette set including cardigan, romper, beanie, and booties. Made with hypoallergenic baby-soft yarn, perfect for newborns and special occasions.'
        },
        8: {
            name: 'Peach Blossom Set',
            category: 'Hooded Jacket Set',
            price: 'From $135',
            image: 'images/WhatsApp Image 2026-01-6 at 11.13.23.jpeg',
            description: 'An adorable peach-colored set featuring a hooded jacket, pants, booties, and matching bonnet. The delicate shell stitch pattern adds elegance to every piece.'
        },
        9: {
            name: 'Fuchsia Play Set',
            category: 'Toddler Outfit',
            price: 'From $95',
            image: 'images/WhatsApp Image 2026-01-26 at 11.13.231.jpeg',
            description: 'A vibrant fuchsia and white outfit for toddlers, featuring a matching headband and bracelet. Perfect for photoshoots and special occasions.'
        },
        10: {
            name: 'Espresso Check Afghan',
            category: 'Luxury Bed Throw',
            price: 'From $275',
            image: 'images/WhatsApp Image 2026-01-26 at 11.13.21.jpeg',
            description: 'A stunning checkered throw in warm brown and cream tones. Large enough to drape beautifully over any bed, this afghan brings warmth and style to your bedroom.'
        },
        11: {
            name: 'Monochrome Plaid Throw',
            category: 'Statement Throw',
            price: 'From $285',
            image: 'images/WhatsApp Image 2026-01-26 at 11.13.20.jpeg',
            description: 'A bold black and white buffalo plaid throw that makes a statement in any living space. The classic pattern is timeless and versatile.'
        },
        12: {
            name: 'Storm Cloud Chunky',
            category: 'Arm-Knit Throw',
            price: 'From $320',
            image: 'images/WhatsApp Image 2026-01-26 at 11.3.22.jpeg',
            description: 'An ultra-chunky throw in sophisticated grey tones, created using arm-knitting techniques. The oversized stitches create a dramatic texture that\'s both cozy and modern.'
        },
        13: {
            name: 'Blue Rose Centrepiece',
            category: 'Artisan Table Runner',
            price: 'From $150',
            image: 'images/WhatsApp Image 2026-01-26 at 12.41.59.jpeg',
            description: 'A stunning circular centrepiece featuring delicate 3D blue roses around the edge. This piece transforms any table into an elegant display.'
        }
    };

    // Open modal
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.dataset.product;
            const product = productData[productId];

            if (product) {
                document.getElementById('modal-title').textContent = product.name;
                document.getElementById('modal-category').textContent = product.category;
                document.getElementById('modal-price').textContent = product.price;
                document.getElementById('modal-image').src = product.image;
                document.getElementById('modal-image').alt = product.name;
                document.getElementById('modal-description').textContent = product.description;

                // Update WhatsApp link
                const orderBtn = document.getElementById('modal-order');
                orderBtn.href = `https://wa.me/your-number?text=Hello! I'm interested in the ${product.name}`;

                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'visible';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/**
 * Counter Animation
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.banner__number[data-count]');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
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
    }, stepDuration);
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
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
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
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 200;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = sectionId;
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

// Initialize active section detection
initActiveSectionDetection();

/**
 * Parallax Effect for Hero Decoration
 */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-yarn');

    parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.1;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

/**
 * Image Lazy Loading
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

/**
 * Touch Device Detection
 */
function isTouchDevice() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
}

// Adjust hover effects for touch devices
if (isTouchDevice()) {
    document.body.classList.add('touch-device');
}

/**
 * Console Easter Egg
 */
console.log(
    '%c✦ R.U.V.A ✦',
    'font-family: Georgia, serif; font-size: 24px; font-weight: bold; color: #2C3E2F; background: #F8F6F0; padding: 20px 40px; border: 2px solid #C67454;'
);
console.log(
    '%cTimeless Style. Handcrafted with Heart.',
    'font-family: Georgia, serif; font-size: 14px; font-style: italic; color: #5C584F;'
);

/**
 * Viewport Resize Handler - Fixes mobile viewport height issues
 */
function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setViewportHeight();
window.addEventListener('resize', setViewportHeight);
window.addEventListener('orientationchange', () => {
    setTimeout(setViewportHeight, 100);
});
