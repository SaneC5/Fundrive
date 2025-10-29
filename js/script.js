// Car Data
const selfCars = [
    {
        name: "Swift",
        image: "img/swift.png",
        description: "A compact and stylish hatchback known for its agility, fuel efficiency, and modern design — ideal for city drives and weekend getaways.",
        features: [
            { type: "body", value: "Hatchback" },
            { type: "transmission", value: "Manual" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 1300/day"
    },
    {
        name: "Swift",
        image: "img/swift2.png",
        description: "Experience effortless driving with the Swift automatic — a sleek, efficient, and comfortable hatchback designed for smooth city travel.",
        features: [
            { type: "body", value: "Hatchback" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 1500/day"
    },
    {
        name: "Baleno",
        image: "img/baleno.png",
        description: "A premium hatchback offering refined performance, spacious interiors, and advanced features — perfect for family drives and long commutes.",
        features: [
            { type: "body", value: "Hatchback" },
            { type: "transmission", value: "manual" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 1400/day"
    },
    {
        name: "Baleno",
        image: "img/baleno2.jpg",
        description: "A smooth and stylish automatic hatchback that blends performance with comfort — ideal for urban travel with a touch of luxury.",
        features: [
            { type: "body", value: "Hatchback" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 1600/day"
    },
    {
        name: "i20 (Old)",
        image: "img/i20-1.png",
        description: "A dependable and comfortable hatchback with great mileage and spacious interiors — perfect for everyday travel and city rides.",
        features: [
            { type: "body", value: "Hatchback" },
            { type: "transmission", value: "Manual" },
            { type: "fuel", value: "petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 1000/day"
    },
    {
        name: "i20 (Old)",
        image: "img/i20-2.jpg",
        description: "Enjoy effortless city cruising with the i20 automatic — a stylish, refined hatchback known for comfort and reliability.",
        features: [
            { type: "body", value: "Hatchback" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 1200/day"
    },
    {
        name: "i20 (New)",
        image: "img/i20-3.png",
        description: "The new-generation i20 delivers a perfect balance of premium style, technology, and fuel efficiency for modern urban drives.",
        features: [
            { type: "body", value: "Hatchback" },
            { type: "transmission", value: "Manual" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 1400/day"
    },
    {
        name: "i20 (New)",
        image: "img/i20-4.png",
        description: "Drive in comfort and style with the i20 automatic — a feature-packed hatchback with advanced tech and premium interiors.",
        features: [
            { type: "body", value: "Hatchback" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 1600/day"
    },
    {
        name: "i20 (New) With Sunroof",
        image: "img/i20-sunroof.png",
        description: "Enjoy every drive under the open sky with the i20 Sunroof edition — sporty design, smart features, and exceptional comfort in one.",
        features: [
            { type: "body", value: "Hatchbqck" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 1800/day"
    },
    {
        name: "Ertiga",
        image: "img/ertiga.png",
        description: "A versatile 7-seater MPV that combines space, comfort, and efficiency — perfect for family trips and group travel.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Manual" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 7 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 2200/day"
    },
    {
        name: "Ertiga",
        image: "img/ertiga2.png",
        description: "The automatic Ertiga offers effortless long drives with spacious seating, smooth performance, and superior ride comfort.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 7 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 2800/day"
    },
    {
        name: "Kia Carens",
        image: "img/kia-carens2.jpg",
        description: "A premium 6-seater MPV offering luxurious interiors, cutting-edge safety, and a smooth, family-friendly driving experience.",
       features: [
            { type: "body", value: "Suv" },
            { type: "transmission", value: "Manual" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 6 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 2700/day"
    },
    {
        name: "Kia Sonet",
        image: "img/kia-sonet1.png",
        description: "A sporty compact SUV with dynamic performance, bold design, and modern features — built for both city and adventure drives.",
        features: [
            { type: "body", value: "Suv" },
            { type: "transmission", value: "Manual" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 2200/day"
    },
    {
        name: "Kia Sonet",
        image: "img/kia-sonet2.png",
        description: "The automatic Kia Sonet offers refined power, premium interiors, and advanced tech for a luxurious SUV experience.",
        features: [
            { type: "body", value: "Suv" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 2800/day"
    },
    {
        name: "Venue",
        image: "img/venue-1.png",
        description: "A stylish and compact SUV with a bold stance, efficient engine, and smart features for an enjoyable city or highway drive.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Manual" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 2200/day"
    },
    {
        name: "Venue",
        image: "img/venue-2.jpg",
        description: "The Venue automatic offers seamless driving with a premium interior, advanced safety, and impressive fuel efficiency.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 2800/day"
    },
    {
        name: "Creta",
        image: "img/creta.png",
        description: "A premium midsize SUV that delivers power, comfort, and luxury — designed for families and explorers alike.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Manual" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 2500/day"
    },
    {
        name: "Creta (Panoramic Roof)",
        image: "img/creta-2.jpg",
        description: "Experience open-sky luxury with the Creta Panoramic edition — elegant, powerful, and built for unforgettable journeys.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 3500/day"
    },
    {
        name: "Hycross",
        image: "img/innova-hycross.png",
        description: "A sophisticated 7-seater hybrid SUV that blends power and efficiency with Toyota’s legendary comfort and reliability.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Petrol" },
            { type: "seats", value: 7 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 3600/day"
    },
    {
        name: "Crysta",
        image: "img/innova-crysta.png",
        description: "A powerful 7-seater SUV offering premium interiors, robust diesel performance, and exceptional comfort for long journeys.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Manual" },
            { type: "fuel", value: "Diesel" },
            { type: "seats", value: 7 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 3200/day"
    },
    {
        name: "Crysta",
        image: "img/innova-crysta2.png",
        description: "Enjoy luxury on every mile with the Innova Crysta automatic — refined diesel power and unmatched comfort for family travel.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Diesel" },
            { type: "seats", value: 7 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 3500/day"
    },
    {
        name: "Thar",
        image: "img/thar1.png",
        description: "Built for adventure — the Thar manual is a rugged off-roader that offers iconic design, power, and off-road excellence.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Manual" },
            { type: "fuel", value: "Diesel" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 3300/day"
    },
    {
        name: "Thar",
        image: "img/thar2.jpg",
        description: "Take on any terrain effortlessly with the Thar automatic — a perfect blend of rugged capability and everyday comfort.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Diesel" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 3500/day"
    },
    {
        name: "Thar Roxx",
        image: "img/thar3.png",
        description: "The Thar Roxx takes adventure to new heights with premium interiors, superior off-road performance, and unmatched road presence.",
        features: [
            { type: "body", value: "SUV" },
            { type: "transmission", value: "Auto" },
            { type: "fuel", value: "Diesel" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ],
        price: "₹ 7000/day"
    }
];

const taxiCars = [
    {
        name: "Dzire",
        image: "img/dzire-taxi.png",
        description: "A reliable and fuel-efficient sedan offering ample comfort and luggage space — ideal for airport transfers and business trips.",
        features: [
            { type: "body", value: "Sedan" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ]
    },
    {
        name: "Crysta",
        image: "img/innova-taxi.png",
        description: "A premium 7-seater taxi option providing luxury, space, and unmatched comfort for long-distance travel or corporate rides.",
        features: [
            { type: "body", value: "SUV" },
            { type: "seats", value: 7 },
            { type: "luggage", value: 3 }
        ]
    },
    {
        name: "Ertiga",
        image: "img/ertiga-taxi.jpg",
        description: "A comfortable and efficient 7-seater taxi that’s perfect for family trips and group travel with generous luggage space.",
        features: [
            { type: "body", value: "SUV" },
            { type: "seats", value: 7 },
            { type: "luggage", value: 3 }
        ]
    },
    {
        name: "Baleno",
        image: "img/baleno-taxi.jpg",
        description: "A premium hatchback taxi offering comfort, style, and efficiency — ideal for city commutes and short-distance rides.",
        features: [
            { type: "body", value: "Hatchback" },
            { type: "seats", value: 5 },
            { type: "luggage", value: 3 }
        ]
    }
];

const yacht = [
    {
        name: "Yacht",
        image: "img/yacht.jpg",
        description: "Sail in luxury aboard our premium yacht — featuring elegant interiors, serene views, and an unforgettable on-water experience.",
    }
];

// DOM Elements
const loader = document.getElementById('loader');
const navbar = document.getElementById('mainNav');
const carsList = document.getElementById('carsList');
const taxiCarsList = document.getElementById('taxiCarsList');
const yachtList = document.getElementById('yachtList');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after 2 seconds (loader exists on all pages in your markup).
    setTimeout(() => {
        if (loader) {
            loader.classList.add('fade-out');
            setTimeout(() => { loader.style.display = 'none'; }, 500);
        }
    }, 1800);

    // Load cars only if #carsList exists on the page
    if (carsList) {
        loadCars();
    }

    // Load taxi cars only if #taxiCarsList exists on the page
    if (taxiCarsList) {
        loadTaxiCars();
    }
    // Load yacht only if #yachtList exists on the page
    if (yachtList) {
        loadYacht();
    }

    // Initialize counter animation only if there are counters on the page
    if (document.querySelectorAll('.counter-number').length > 0) {
        initCounters();
    }

    // Only run these if the page has the relevant elements (most pages will)
    if (document.querySelectorAll('.fade-in').length > 0) {
        initScrollAnimations();
    }
    if (navbar) {
        handleNavbarScroll();
    }
    initSmoothScrolling(); // safe — it only queries anchors
});

// for icon in car list
function getFeatureIcon(type) {
    switch(type) {
        case 'transmission':
            return '<img src="img/icons/gear.png" alt="Transmission" class="feature-icon">';
        case 'seats':
            return '<img src="img/icons/car-seat.png" alt="Seats" class="feature-icon">';
        case 'body':
            return '<img src="img/icons/car.png" alt="Body Type" class="feature-icon">';
        case 'fuel':
            return '<img src="img/icons/fuel.png" alt="Fuel Type" class="feature-icon">';
        case 'luggage':
            return '<img src="img/icons/luggage.png" alt="Luggage" class="feature-icon">';
        default:
            return '';
    }
}

// Load Cars Function
function loadCars() {
    carsList.innerHTML = '';
    
    selfCars.forEach((car, index) => {

        const carFeaturesHTML = car.features.map(feature => {
            const icon = getFeatureIcon(feature.type);
            return `<span>${icon} ${feature.value}</span>`;
        }).join('');

        const carCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="car-card fade-in" style="animation-delay: ${index * 0.1}s">
                    <div class="car-image">
                        <img src="${car.image}" alt="${car.name}" class="img-fluid">
                    </div>
                    <div class="car-info">
                        <h4 class="car-name">${car.name}</h4>
                        <div class="car-features">
                            ${carFeaturesHTML}
                        </div>
                        <div class="car-price">${car.price}</div>
                        <button class="btn btn-book dg-btn" onclick="callToBook()">
                            <span>
                                <i class="fas fa-phone"></i> Call to Book
                            </span>
                        </button>
                        <button class="btn btn-book2 dg-btn" onclick="bookCar('${car.name}', 'self')">
                            <span>
                                <i class="fab fa-whatsapp"></i> WhatsApp to Book
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        carsList.innerHTML += carCard;
    });
}

// Load taxi Cars Function
function loadTaxiCars() {
    taxiCarsList.innerHTML = '';
    
    taxiCars.forEach((car, index) => {

        const carFeaturesHTML = car.features.map(feature => {
            const icon = getFeatureIcon(feature.type);
            return `<span>${icon} ${feature.value}</span>`;
        }).join('');

        const carCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="car-card fade-in" style="animation-delay: ${index * 0.1}s">
                    <div class="car-image">
                        <img src="${car.image}" alt="${car.name}" class="img-fluid">
                    </div>
                    <div class="car-info">
                        <h4 class="car-name">${car.name}</h4>
                        <div class="car-features">
                            ${carFeaturesHTML}
                        </div>
                        <button class="btn btn-book dg-btn" onclick="callToBook()">
                            <span>
                                <i class="fas fa-phone"></i> Call to Book
                            </span>
                        </button>
                        <button class="btn btn-book2 dg-btn" onclick="bookCar('${car.name}','taxi')">
                            <span>
                                <i class="fab fa-whatsapp"></i> WhatsApp to Book
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        taxiCarsList.innerHTML += carCard;
    });
}

// Load taxi Cars Function
function loadYacht() {
    yachtList.innerHTML = '';
    
    yacht.forEach((car, index) => {

        const carCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="car-card fade-in" style="animation-delay: ${index * 0.1}s">
                    <div class="car-image">
                        <img src="${car.image}" alt="${car.name}" class="img-fluid">
                    </div>
                    <div class="car-info">
                        <h4 class="car-name">${car.name}</h4>
                        <p class="car-description">${car.description}</p>
                        <button class="btn btn-book dg-btn" onclick="callToBook()">
                            <span>
                                <i class="fas fa-phone"></i> Call to Book
                            </span>
                        </button>
                        <button class="btn btn-book2 dg-btn" onclick="bookCar('${car.name}', 'yacht')">
                            <span>
                                <i class="fab fa-whatsapp"></i> WhatsApp to Book
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        yachtList.innerHTML += carCard;
    });
}

function callToBook() {
  window.location.href = 'tel:+919764976913';
}

// Book Car Function
function bookCar(carName, type) {
    let car;

    if (type === 'self') {
        car = selfCars.find(c => c.name === carName);
    } else if (type === 'taxi') {
        car = taxiCars.find(c => c.name === carName);
    } else if (type === 'yacht') {
        car = yacht.find(c => c.name === carName);
    }

    if (!car) {
        alert("Car details not found!");
        return;
    }

    let message = `Hi, I'm interested in the ${car.name}:\n\n`;

    if (car.description) {
        message += `Description: ${car.description}\n\n`;
    }

    if (car.features && Array.isArray(car.features)) {
        message += `Features:\n`;
        const featureMap = {};
        car.features.forEach(f => (featureMap[f.type] = f.value));

        message += featureMap.body ? `  - Body Type: ${featureMap.body}\n` : '';
        message += featureMap.transmission ? `  - Transmission: ${featureMap.transmission}\n` : '';
        message += featureMap.fuel ? `  - Fuel: ${featureMap.fuel}\n` : '';
        message += featureMap.seats ? `  - Seats: ${featureMap.seats}\n` : '';
        message += featureMap.luggage ? `  - Luggage: ${featureMap.luggage}\n` : '';
        message += `\n`;
    }

    if (car.price) {
        message += `Price: ${car.price}\n\n`;
    }

    const phoneNumber = '9764976913';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
    // alert(`Thank you for choosing ${carName}! Please call us at +1 (234) 567-890 to complete your booking.`);
}

// Counter Animation
function initCounters() {
    const counters = document.querySelectorAll('.counter-number');
    const duration = 3000; // 2 seconds

    const animateCount = (el, target) => {
        const startTime = performance.now();

        const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);

        el.innerHTML = `${value}<sup>+</sup>`;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.innerHTML = `${target}<sup>+</sup>`; // Ensure exact final value
        }
        };

        requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'), 10);
            animateCount(el, target);
            observer.unobserve(el); // Only animate once
        }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counter.innerHTML = '0<sup>+</sup>';
        observer.observe(counter);
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth Scrolling for Navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form (if you want to add one later)
function submitContactForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Additional Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop(); // e.g. "contact.html"

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Show/Hide Back-to-Top Button on Scroll
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
});

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #00003e !important;
    }
`;
document.head.appendChild(style);













// About Page JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // Initialize carousel auto-play
    initCarousel();

});


// Carousel Initialization
function initCarousel() {
    const carousel = document.getElementById('reviewsCarousel');
    if (carousel) {
        // Auto-play carousel
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true
        });
        
        // Pause on hover
        carousel.addEventListener('mouseenter', () => {
            bsCarousel.pause();
        });
        
        carousel.addEventListener('mouseleave', () => {
            bsCarousel.cycle();
        });
    }
}






// Blog Page JavaScript

// Blog Data
const blogPosts = [
    {
        id: 1,
        title: "Dudhsagar Waterfall",
        image: "img/blog/dudhsagar-waterfall.webp",
        category: "South Goa",
        excerpt: "People say this scenic spot offers breathtaking views of a majestic waterfall, with opportunities for swimming in natural pools and trekking through lush greenery...",
        content: "People say this scenic spot offers breathtaking views of a majestic waterfall, with opportunities for swimming in natural pools and trekking through lush greenery. They highlight the adventurous jeep safari through the jungle, the refreshing experience of swimming in the cold water, and the chance to see monkeys and other wildlife",
        author: "Sarah Johnson",
        date: "2024-01-15",
        tags: "waterfall, nature, trekking, adventure",
        filter: "south-goa"
    },
    {
        id: 2,
        title: "Harvalem (Arvalem) Waterfall",
        image: "img/blog/harvalem-waterfalls.webp",
        category: "North Goa",
        excerpt: "Harvalem (Arvalem) Waterfall, Harvalem Sanquelim - Golden GoaHarvalem Waterfall in North Goa is a 70-meter (or 50-meter) cascade in the Sanquelim area, known for...",
        content: "Harvalem (Arvalem) Waterfall, Harvalem Sanquelim - Golden GoaHarvalem Waterfall in North Goa is a 70-meter (or 50-meter) cascade in the Sanquelim area, known for its serene atmosphere, scenic views, and nearby Arvalem Caves (Pandav Caves) and Rudreshwar Temple. It is an ideal spot for a refreshing experience, especially during the monsoon season, though it remains enjoyable even during non-monsoon times",
        author: "Mike Davis",
        date: "2024-01-12",
        tags: "waterfall, nature, caves, sightseeing",
        filter: "north-goa"
    },
    {
        id: 3,
        title: "Arvalem Caves",
        image: "img/blog/arvalem-caves.webp",
        category: "South Goa",
        excerpt: "The history of these caves dates back to the 6th century, when they are believed to have been carved. Legend has it that the five Pandava brothers of the Mahabharata...",
        content: "The history of these caves dates back to the 6th century, when they are believed to have been carved. Legend has it that the five Pandava brothers of the Mahabharata lived here during their time in exile. The cave is cut into five segments; lingas were discovered in three compartments. Each of the three shrines have the linga carved with inscriptions and set on a pitha, which is similar to those in the Ellora and Ajanta caves.",
        author: "Emma Wilson",
        date: "2024-01-10",
        tags: "caves, history, heritage, archaeology",
        filter: "south-goa"
    },
    {
        id: 4,
        title: "Fort Aguada",
        image: "img/blog/fort-aguada.webp",
        category: "North Goa",
        excerpt: "People say this fortress offers stunning panoramic views of the Arabian Sea and the surrounding landscape, and is a great spot for photography. They also highlight...",
        content: "People say this fortress offers stunning panoramic views of the Arabian Sea and the surrounding landscape, and is a great spot for photography. They also highlight the peaceful atmosphere, the well-preserved historical architecture, and the affordable entry fee",
        author: "John Smith",
        date: "2024-01-08",
        tags: "fort, history, sea view, photography",
        filter: "north-goa"
    },
    {
        id: 5,
        title: "Chapora Fort",
        image: "img/blog/chapora-fort.webp",
        category: "North Goa",
        excerpt: "People say this fortress offers breathtaking panoramic views of the sea, Vagator Beach, and the surrounding landscape, especially during sunset. They also highlight...",
        content: "People say this fortress offers breathtaking panoramic views of the sea, Vagator Beach, and the surrounding landscape, especially during sunset. They also highlight the peaceful and relaxing vibes, and the cool breeze",
        author: "David Brown",
        date: "2024-01-05",
        tags: "fort, sunset, view point, heritage",
        filter: "north-goa"
    },
    {
        id: 6,
        title: "Reis Magos Fort",
        image: "img/blog/Reis-Magos-Fort.webp",
        category: "North Goa",
        excerpt: "People say this historical fort offers stunning views of the Mandovi River and Arabian Sea, and features interesting exhibits about Goa's history. They also highlight...",
        content: "People say this historical fort offers stunning views of the Mandovi River and Arabian Sea, and features interesting exhibits about Goa's history. They also highlight the well-maintained architecture, the peaceful and less crowded atmosphere, and the reasonable entry fee",
        author: "Lisa Garcia",
        date: "2024-01-03",
        tags: "fort, history, museum, architecture",
        filter: "north-goa"
    },
    {
        id: 7,
        title: "Cabo de Rama Fort",
        image: "img/blog/cabo-rama-fort.webp",
        category: "South Goa",
        excerpt: "People say this fortress offers stunning panoramic views of the Arabian Sea and a serene pebble beach. They also highlight the peaceful and tranquil atmosphere...",
        content: "People say this fortress offers stunning panoramic views of the Arabian Sea and a serene pebble beach. They also highlight the peaceful and tranquil atmosphere, perfect for relaxation and photography, and the free entry",
        author: "Tech Team",
        date: "2024-01-01",
        tags: "fort, sea view, relaxation, photography",
        filter: "south-goa"
    },
    {
        id: 8,
        title: "Calangute Beach",
        image: "img/blog/Calangute-beach.webp",
        category: "North Goa",
        excerpt: "Calangute Beach Goa, Resorts, Nightlife, Shacks & Places in CalanguteCalangute Beach is a large and popular beach in North Goa, often called the 'Queen of Beaches,'...",
        content: "Calangute Beach Goa, Resorts, Nightlife, Shacks & Places in CalanguteCalangute Beach is a large and popular beach in North Goa, often called the 'Queen of Beaches,' known for its lively atmosphere, diverse crowds, and numerous water sports. It features many beach shacks and restaurants, and offers activities like parasailing, jet skiing, and fishing, with a bustling market area nearby. The beach is open 24 hours and is particularly busy during the Christmas/New Year and summer tourist seasons",
        author: "Travel Expert",
        date: "2023-12-28",
        tags: "beach, nightlife, water sports, market",
        filter: "north-goa"
    },
    {
        id: 9,
        title: "Baga Beach",
        image: "img/blog/Baga-Beach.jpeg",
        category: "North Goa",
        excerpt: "Most Famous Beach of Goa, Baga Beach, Famous among  Tourists, One of the most Visited Beach of Goa. Known for its Beach Shacks,  Water Sports, and Night Life...",
        content: "Most Famous Beach of Goa, Baga Beach, Famous among  Tourists, One of the most Visited Beach of Goa. Known for its Beach Shacks,  Water Sports, and Night Life., 100 Days Challenge - Day 51 / ...Baga Beach is a popular and lively beach in North Goa, famous for its vibrant nightlife, water sports, and beachfront restaurants and shacks. It is a major tourist destination with a wide variety of activities, including water sports like parasailing and jet skiing, and a buzzing market that leads to the shore",
        author: "Car Expert",
        date: "2023-12-25",
        tags: "beach, nightlife, water sports, popular",
        filter: "north-goa"
    },
    {
        id: 10,
        title: "Anjuna Beach",
        image: "img/blog/anjuna-beach.webp",
        category: "North Goa",
        excerpt: "Anjuna Beach is a popular destination in North Goa, known for its vibrant atmosphere, rocky and sandy shores, lively nightlife, and hippie culture. It is a great...",
        content: "Anjuna Beach is a popular destination in North Goa, known for its vibrant atmosphere, rocky and sandy shores, lively nightlife, and hippie culture. It is a great place for tourists and partygoers, offering water sports, beach shacks, and beautiful sunsets. Anjuna Beach is free to enter 24/7, but visiting during the day is best between 7 AM and 6:30 PM",
        author: "Safety Team",
        date: "2023-12-22",
        tags: "beach, nightlife, hippie culture, water sports",
        filter: "north-goa"
    },
    {
        id: 11,
        title: "Vagator beach ",
        image: "img/blog/vagator-beach.webp",
        category: "North Goa",
        excerpt: "Vagator is a lively coastal area centered on Vagator Beach, known for its striking red cliffs. At neighboring Ozran (Little Vagator) Beach, Vagator Cliff is a popular...",
        content: "Vagator is a lively coastal area centered on Vagator Beach, known for its striking red cliffs. At neighboring Ozran (Little Vagator) Beach, Vagator Cliff is a popular party spot drawing hip crowds to watch the sunset from sea-view bars and clubs. Global eateries, casual beach shacks, and trendy cafes along the coast serve experimental cuisine, while low-key backpacker haunts and upscale resorts cluster inland.",
        author: "Green Team",
        date: "2023-12-20",
        tags: "beach, cliffs, sunset, nightlife",
        filter: "north-goa"
    },
    {
        id: 12,
        title: "Morjim Beach",
        image: "img/blog/Morjim -Beach.webp",
        category: "North Goa",
        excerpt: "Know About Morjim and Why Choose MorjimMorjim Beach is a tranquil beach in North Goa known for its pristine white sand, relaxed atmosphere, and as a nesting...",
        content: "Know About Morjim and Why Choose MorjimMorjim Beach is a tranquil beach in North Goa known for its pristine white sand, relaxed atmosphere, and as a nesting ground for the endangered Olive Ridley turtles. It's a popular destination for water sports like kite-surfing, yoga, and for enjoying fresh seafood at local beach shacks. Due to its popularity with Russian tourists, it's also known as 'Little Russia'.",
        author: "Family Expert",
        date: "2023-12-18",
        tags: "beach, turtles, water sports, tranquility",
        filter: "north-goa"
    },
    {
        id: 13,
        title: "Arambol Beach",
        image: "img/blog/Arambol-beach.webp",
        category: "North Goa",
        excerpt: "Arambol Beach is a vibrant, bohemian beach in North Goa, India, known for its soft golden sands, calm waters, and a unique blend of relaxation, adventure, and culture...",
        content: "Arambol Beach is a vibrant, bohemian beach in North Goa, India, known for its soft golden sands, calm waters, and a unique blend of relaxation, adventure, and culture. It is famous for its laid-back vibe, with activities like yoga sessions, drum circles at sunset, paragliding, and dolphin watching. The beach features a sweet water lake, a local market, various shacks, and live music, offering a lively but informal atmosphere for tourists",
        author: "Summer Team",
        date: "2023-12-15",
        tags: "beach, bohemian, yoga, adventure",
        filter: "north-goa"
    },
    {
        id: 14,
        title: "Ashwem Beach",
        image: "img/blog/Ashwen-beach.webp",
        category: "North Goa",
        excerpt: "Ashwem Beach is a peaceful and clean beach in North Goa, known for its white sand, gentle waves, and relaxed atmosphere, making it a popular spot for those seeking a...",
        content: "Ashwem Beach is a peaceful and clean beach in North Goa, known for its white sand, gentle waves, and relaxed atmosphere, making it a popular spot for those seeking a quieter experience. It features numerous beach shacks and restaurants, and while some sources mention water sports, others highlight its tranquil vibe as ideal for a relaxing day. The beach is located north of Morjim beach, near the Chapora river, and is about 30km from Panaji",
        author: "Digital Team",
        date: "2023-12-12",
        tags: "beach, peaceful, relaxation, shacks",
        filter: "north-goa"
    },
    {
        id: 15,
        title: "Keri Beach",
        image: "img/blog/keri-beach.jpg",
        category: "North Goa",
        excerpt: "Querim Beach is the sandy coastline of the Querim village of Pernem, Goa. It is the largest and northernmost beach in Goa. The beach comprises a long stretch of sand...",
        content: "Querim Beach is the sandy coastline of the Querim village of Pernem, Goa. It is the largest and northernmost beach in Goa. The beach comprises a long stretch of sand with a few rocky outcrops, rows of trees, and a river inlet of Tiracol River. It is north of the Arambol beach, but in order to reach there by foot, one has to walk through the hill and jungle between the Paliem Sweet Water Lake and Querim Beach.",
        author: "Winter Expert",
        date: "2023-12-10",
        tags: "beach, quiet, scenic, relaxation",
        filter: "north-goa"
    },
    {
        id: 16,
        title: "Palolem Beach",
        image: "img/blog/palolem-beach.webp",
        category: "South Goa",
        excerpt: "Palolem Beach is a crescent-shaped beach located in South Goa, India, known for its calm, clear waters, lively atmosphere with colorful shacks, and unique nightlife...",
        content: "Palolem Beach is a crescent-shaped beach located in South Goa, India, known for its calm, clear waters, lively atmosphere with colorful shacks, and unique nightlife including 'silent discos'. It is a popular tourist destination, especially during the winter months (November to March), offering opportunities for swimming, kayaking, yoga, and exploring nearby attractions like Butterfly Beach. The beach provides a relaxed yet vibrant Goan experience, with many shops, international cuisine restaurants, and options for beachfront dining",
        author: "Business Team",
        date: "2023-12-08",
        tags: "beach, nightlife, kayaking, relaxation",
        filter: "south-goa"
    },
    {
        id: 17,
        title: "Betalbatim Beach",
        image: "img/blog/betalbatim-beach.webp",
        category: "South Goa",
        excerpt: "Visitors say this beach offers white sand, clean shores, and crystal-clear waters, perfect for relaxation and long walks. They also highlight the peaceful and serene...",
        content: "Visitors say this beach offers white sand, clean shores, and crystal-clear waters, perfect for relaxation and long walks. They also highlight the peaceful and serene atmosphere, with fewer crowds compared to other popular beaches, making it ideal for families and couples seeking tranquility",
        author: "Market Analyst",
        date: "2023-12-05",
        tags: "beach, family, couples, relaxation",
        filter: "south-goa"
    },
    {
        id: 18,
        title: "Shree Shantadurga Temple",
        image: "img/blog/Shree-Shantadurga-Temple.webp",
        category: "South Goa",
        excerpt: "Situated 33 kms from Panajim, Shree Shantadurga temple has an impressive idol of Goddess Shree Durga who mediated between Shree Vishnu and Shree Shiva and...",
        content: "Situated 33 kms from Panajim, Shree Shantadurga temple has an impressive idol of Goddess Shree Durga who mediated between Shree Vishnu and Shree Shiva and stopped the fiercefull war going on between the two. She is flanked by Vishnu and Shiva on both the sides.<br> The temples of Shree Shantadurga and Shree Mangesh, two of the most revered patron deities of the Hindu Goud Saraswat Brahmin community are located in Kavlem and Mangeshi respectively in the Ponda district of North Goa. This avatar of Shree Jagdamba devi which had come to make peace [Shanti] between Shree Vishnu and Shree Shiva, came to be known as Shree Shantadurga devi",
        author: "Airport Expert",
        date: "2023-12-03",
        tags: "emple, hindu, goddess, pilgrimage",
        filter: "south-goa"
    },
    {
        id: 19,
        title: "Shri Mahadeva Temple, Tambdisurla",
        image: "img/blog/shri-mahadev-temple.webp",
        category: "South Goa",
        excerpt: "Mahadeva Temple, Tambdi Surla is a 13th-century Hindu temple in the Kadamba style dedicated to Lord Shiva, one of the main deities in Hinduism, and is an active place...",
        content: "Mahadeva Temple, Tambdi Surla is a 13th-century Hindu temple in the Kadamba style dedicated to Lord Shiva, one of the main deities in Hinduism, and is an active place of Hindu worship. It is an ASI protected Monument of National Importance in Goa. The temple is dedicated to Lord Shiva and is reminiscent of the temples at Aihole in neighbouring Karnataka.",
        author: "Eco Expert",
        date: "2023-12-01",
        tags: "temple, hindu, heritage, architecture",
        filter: "south-goa"
    },
    {
        id: 20,
        title: "Mangueshi Temple",
        image: "img/blog/shri-mangushi-temple.webp",
        category: "South Goa",
        excerpt: "Shri Manguesh temple is Hindu temple, located at Mangeshi Village in Priol, Ponda taluk, Goa.It is at a distance of 1 km from Mardol close to Nagueshi, 21 km from Panaji...",
        content: "Shri Manguesh temple is Hindu temple, located at Mangeshi Village in Priol, Ponda taluk, Goa.It is at a distance of 1 km from Mardol close to Nagueshi, 21 km from Panaji the capital of Goa and 26 km from Margao. Shree Mangueshi is the Kuldeva (family deity) of Saraswat Brahmins and other gotras. Shrimad Swamiji of Shri Kavale Math is Spiritual chief Of Shri Manguesh Saunsthan, Mangueshi. This temple is one of the largest and most frequently visited temples in Goa.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "temple, hindu, pilgrimage, heritage",
        filter: "south-goa"
    },
    {
        id: 21,
        title: "Kamakshi Temple, Shiroda",
        image: "img/blog/shri-kamakshi-temple.webp",
        category: "South Goa",
        excerpt: "The temple of Shri Kamakshi is located amidst the hills of the picturesque village of Shiroda and was built in the late 16th century. In the village of Shiroda. A huge...",
        content: "The temple of Shri Kamakshi is located amidst the hills of the picturesque village of Shiroda and was built in the late 16th century. In the village of Shiroda. A huge Mahadwar or temple gate leads to the Kamakshi temple complex known as 'Sthal' or more commonly called 'Thal'. After passing under the Mahadwar,  one descends the flight of stairs. The temple, crowned by an octagonal, two-storied tower, with a golden Kalash perched on its Shikhar or peak, can be seen prominently. The temple of Shri Kamakshi has a large Sabha Mandap or the traditional open entrance hall. In front of the temple, one can see a tall Deepasthambh or the lamp tower and a holy water tank. The square shaped chowk, Gan is used for conducting the Prasad ritual.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "temple, hindu, heritage, architecture",
        filter: "south-goa"
    },
    {
        id: 22,
        title: "Shri Nageshi Temple",
        image: "img/blog/shri-nageshi-temple.webp",
        category: "South Goa",
        excerpt: "Nagueshi or Nagesh is a form of the Hindu god Shiva worshipped by Konkani Hindus of the Gaud Saraswat Brahmin community in India. The temple lies in verdant...",
        content: "Nagueshi or Nagesh is a form of the Hindu god Shiva worshipped by Konkani Hindus of the Gaud Saraswat Brahmin community in India. The temple lies in verdant surroundings in the Ponda district of Goa. Unlike many other Hindu temples of Goa which were shifted out of the Velha Conquistas the Nagueshi Temple is at its original place. It has, however, been renovated a number of times. It is located in Bandode village, Ponda, North Goa district",
        author: "Service Team",
        date: "2023-11-28",
        tags: "temple, hindu, heritage, nature",
        filter: "south-goa"
    },
    {
        id: 23,
        title: "Basilica of Bom Jesus",
        image: "img/blog/Basilica-of-Bom-Jesus.webp",
        category: "North Goa",
        excerpt: "Basilica of Bom Jesus, Roman Catholic church in the abandoned city of Old Goa, Goa state, India. Built between 1594 and 1605, it is regarded as an outstanding example of...",
        content: "Basilica of Bom Jesus, Roman Catholic church in the abandoned city of Old Goa, Goa state, India. Built between 1594 and 1605, it is regarded as an outstanding example of Renaissance Baroque and Portuguese colonial architecture. The basilica is also known for housing the remains of the missionary St. Francis Xavier, who was based in Goa in 1541–49.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "church, heritage, architecture, history",
        filter: "north-goa"
    },
    {
        id: 24,
        title: "Our Lady of the Immaculate Conception Church",
        image: "img/blog/church-of-our-lady-of-immaculate-conception.webp",
        category: "North Goa",
        excerpt: "The colonial Portuguese Baroque style church was first built in 1541 as a chapel on a hill side overlooking the city of Panjim. It was eventually replaced by a larger church...",
        content: "The colonial Portuguese Baroque style church was first built in 1541 as a chapel on a hill side overlooking the city of Panjim. It was eventually replaced by a larger church in the 1600s as part of Portuguese Goa's religious expansion. This church houses the ancient bell that was removed from the Augustinian ruins of the Church of Our Lady of Grace (Portuguese: Nossa Senhora da Graça) in the once famed city of Old Goa. This bell is considered to be the second largest of its kind in Goa, surpassed only by the Golden Bell which resides in the Sé Cathedral in Old Goa",
        author: "Service Team",
        date: "2023-11-28",
        tags: "church, heritage, portuguese, architecture",
        filter: "north-goa"
    },
    {
        id: 25,
        title: "Corjuem Fort",
        image: "img/blog/Corjuem-Fort.webp",
        category: "North Goa",
        excerpt: "Fort Assunção or Corjuem Fort is a fortress situated 4 kilometres (2.5 mi) from the village of Aldona on the river island of Corjuem, Goa. It was a military fortress for the...",
        content: "Fort Assunção or Corjuem Fort is a fortress situated 4 kilometres (2.5 mi) from the village of Aldona on the river island of Corjuem, Goa. It was a military fortress for the defense of Portuguese India. It is smaller than the other forts in Goa, but it gives a good view of the surrounding river and land. It is a protected monument under the Goa, Daman and Diu Ancient Monuments and Archaeological Sites and Remains Act. Corjuem Fort is 12 kilometres (7.5 mi) from Panjim.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "fort, history, heritage, architecture",
        filter: "north-goa"
    },
    {
        id: 26,
        title: "Water sports in Goa ",
        image: "img/blog/watersports.webp",
        category: "Adventure/Explore",
        excerpt: "With its sunkissed beaches,  gentle melodies of the waves and laid-back spirit, Goa is a destination worth exploring all year round. A slice of paradise on the western coast...",
        content: "With its sunkissed beaches,  gentle melodies of the waves and laid-back spirit, Goa is a destination worth exploring all year round. A slice of paradise on the western coast of India, this utopia is not just for beach lovers but also for adventure enthusiasts who want to get their adrenaline pumping. Whether you are a thrill seeker or leisure lover, many activities in Goa ignite your mind and body. Furthermore, if you truly want to experience the magic of this town, you just can’t miss out on all the water sports in Goa that entice you to come back for more. Let’s dig into the various aquatic activities in Goa that you can try during your visit.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "water sports, adventure, beach, thrill",
        filter: "adventure-explore"
    },
    {
        id: 27,
        title: "Scuba Diving",
        image: "img/blog/scuba-diving.webp",
        category: "Adventure/Explore",
        excerpt: "Scuba diving is an underwater diving mode where divers use breathing equipment completely independent of a surface breathing gas supply, and therefore has a limited but...",
        content: "Scuba diving is an underwater diving mode where divers use breathing equipment completely independent of a surface breathing gas supply, and therefore has a limited but variable endurance. The word scuba is an acronym for 'Self-Contained Underwater Breathing Apparatus' and was coined by Christian J. Lambertsen in a patent submitted in 1952. Scuba divers carry their source of breathing gas, affording them greater independence and movement than surface-supplied divers, and more time underwater than freedivers. Although compressed air is commonly used, other gas blends are also employed",
        author: "Service Team",
        date: "2023-11-28",
        tags: "scuba diving, underwater, adventure, marine life",
        filter: "adventure-explore"
    },
    {
        id: 28,
        title: "Dolphin Spotting",
        image: "img/blog/dolphin-spoting.webp",
        category: "Adventure/Explore",
        excerpt: "Dolphin-spotting in Goa offers a popular and memorable experience for tourists, primarily during the peak season from November to March when the weather is pleasant and...",
        content: "Dolphin-spotting in Goa offers a popular and memorable experience for tourists, primarily during the peak season from November to March when the weather is pleasant and the sea is calmer, increasing the chances of sightings. Early mornings are considered the best time for spotting dolphins, as they are most active then, often leaping and playing in the waves. The most commonly sighted species are the Indo-Pacific humpback dolphins and finless porpoises, known for their playful and social behavior. Popular launch points for dolphin-spotting tours include Candolim and Coco Beach in North Goa, where trips typically last 45 to 60 minutes and depart throughout the day from 9:00 AM to 5:00 PM. South Goa also offers excellent opportunities, with Cavelossim Beach, Palolem Beach, and Butterfly Beach being notable locations. Palolem Beach, known for its crescent shape and vibrant cafés, is particularly favored for its frequent dolphin sightings during tours that venture deeper into the sea",
        author: "Service Team",
        date: "2023-11-28",
        tags: "dolphins, boat tours, wildlife, sightseeing",
        filter: "adventure-explore"
    },
    {
        id: 29,
        title: "Beach Hopping",
        image: "img/blog/beach-hopping.webp",
        category: "Adventure/Explore",
        excerpt: "For a comprehensive beach-hopping adventure. A suggested week-long plan includes starting at Baga Beach for daytime fun and nightlife, moving to Anjuna for the flea...",
        content: "For a comprehensive beach-hopping adventure. A suggested week-long plan includes starting at Baga Beach for daytime fun and nightlife, moving to Anjuna for the flea market and bohemian vibe, then heading south to Palolem and Agonda for relaxation. A day at Morjim Beach allows for turtle spotting and peaceful sunbathing, while a visit to the lesser-known Kakolem or Velsao Beaches offers offbeat experiences. For a full day, one might begin at Calangute for water sports, head to Anjuna for the market, enjoy a sunset at Vagator, and end with a beach party at Palolem. Whether seeking adventure, relaxation, or cultural immersion, Goa’s coastline caters to every traveler’s preference.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "beaches, travel, adventure, itinerary",
        filter: "adventure-explore"
    },
    {
        id: 30,
        title: "Backwater Kayaking",
        image: "img/blog/backwater-kayaking.webp",
        category: "Adventure/Explore",
        excerpt: "Backwater kayaking in Goa offers a serene and immersive experience amidst the state's tranquil rivers, mangroves, and hidden lagoons, providing a peaceful contrast to...",
        content: "Backwater kayaking in Goa offers a serene and immersive experience amidst the state's tranquil rivers, mangroves, and hidden lagoons, providing a peaceful contrast to Goa's more vibrant beach scenes. Popular locations for backwater kayaking include the Mandovi and Zuari rivers in North Goa, the Sal Backwaters and Palolem Backwaters in South Goa, and the Nerul River near Candolim. The Chapora River is also a favored spot, especially for sunrise and sunset tours that showcase the area's natural beauty. These kayaking adventures allow participants to explore pristine mangrove forests, spot diverse wildlife such as kingfishers, egrets, otters, and even fruit bats, and witness traditional village life along the waterways. Some tours, particularly in South Goa near Palolem and Chorao Island, offer the unique experience of night kayaking, where bioluminescent waters create a sparkling effect under the stars. Operators like Goa Kayaking and Make It Happen provide guided tours with safety equipment, including life jackets, and offer instruction for beginners, making the activity accessible even to those with no prior experience. The best time for backwater kayaking in Goa is from October to May, when the weather is pleasant and the waters are calm.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "kayaking, backwaters, adventure, nature",
        filter: "adventure-explore"
    },
    {
        id: 31,
        title: "Colva Beach",
        image: "img/blog/colva-beach.jpeg",
        category: "South Goa",
        excerpt: "Colva (Portuguese: Colvá) is a coastal village situated in the Salcete taluka, in South Goa district, of Goa state on the west coast of the Indian subcontinent. Colva...",
        content: "Colva (Portuguese: Colvá) is a coastal village situated in the Salcete taluka, in South Goa district, of Goa state on the west coast of the Indian subcontinent. Colva Beach (Portuguese: Praia de Colvá) spans about 2.5 km (1.6 mi) along a sandy coastline of approximately 25 km (16 mi) extending from Bogmalo in the north to Cabo de Rama in the south. The village had significant importance to the Portuguese, local (Gancars) noble chardó (Kshatriya) Feudal Lords and was the retreat for Goa's high, elite and aristocratic society, who would come to Colvá for their mudança (change of air), to enjoy the private beach of the then Roiz family. Today the Portuguese area is dotted with the past elite houses and modern villas, including many ruins from more than 300 years. On weekends, huge crowds of tourists, visitors from around the world as well as local Indians, enjoy the sunset and various activities. The beach is particularly busy in October, when hordes of religious pilgrims come and visit Colvá Church, called Igreja de Nossa Senhora das Mercês (Church of Our Lady of Mercy), that was founded in AD 1630 by the Roiz family and the crown of the statue of our Lady has their family initials. The church was later modified in the eighteenth century which is located at the village square. The 1630 church construction was funded by the Roiz family, the Jesuits and the Gancars of Colluá.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "beach, heritage, church, nightlife",
        filter: "south-goa"
    },
    {
        id: 32,
        title: "Miramar Beach",
        image: "img/blog/miramar-beach.webp",
        category: "North Goa",
        excerpt: "Miramar is the beach area of the Goan capital of Panjim, also known as Panaji and is one of the most visited beaches of Goa. It is one of the two only beaches in Panjim...",
        content: "Miramar is the beach area of the Goan capital of Panjim, also known as Panaji and is one of the most visited beaches of Goa. It is one of the two only beaches in Panjim, other being Caranzalem beach. Many people, mostly tourists, come to this beach every day. Miramar Beach was the venue for Beach Volleyball events of the 2014 Lusofonia Games. Originally named Porta de Gaspar Dias by the Portuguese, the name was then changed to Miramar. Situated at the confluence of the Mandovi River and the Arabian Sea, it is a small beach that occasionally hosts some events. There are several educational institutions in the surrounding vicinity, including Dhempe College of Arts and Science, V. M. Salgaonkar College of Law and Sharada Mandir High School. Clube Gaspar de Dias and a popular café are nearby.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "beach, panjim, city, leisure",
        filter: "north-goa"
    },
    {
        id: 33,
        title: "Cola Beach",
        image: "img/blog/cola-beach.jpg",
        category: "South Goa",
        excerpt: "Cola Beach in Goa is a serene and less-crowded coastal spot ideal for visitors seeking a peaceful beach experience. It offers a quiet atmosphere with scenic views, making...",
        content: "Cola Beach in Goa is a serene and less-crowded coastal spot ideal for visitors seeking a peaceful beach experience. It offers a quiet atmosphere with scenic views, making it suitable for relaxation and casual strolls. The area is appreciated for its natural beauty and tranquil environment, particularly outside peak tourist hours. While facilities are limited, its unspoiled charm is a key draw. There are no major cons reported, though its remote feel may not suit those looking for lively beachside activities or extensive amenities.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "beach, hidden gem, relaxation, nature",
        filter: "south-goa"
    },
    {
        id: 34,
        title: "Cotigao Wildlife Sanctuary",
        image: "img/blog/cotigao-sanctuary.jpg",
        category: "South Goa",
        excerpt: "The Cotigao Wildlife Sanctuary is located in Canacona Taluka, South Goa district, of Goa, India, established in 1968. There is an eco-tourism complex at the entrance of...",
        content: "The Cotigao Wildlife Sanctuary is located in Canacona Taluka, South Goa district, of Goa, India, established in 1968. There is an eco-tourism complex at the entrance of the sanctuary that houses a nature interpretation centre, cottages, toilets, library, reception area, rescue centre, canteen, children's park, and forest ranger office. The sanctuary is known for its dense forest of tall trees, some of which reach 30 metres in height. The forest supports moist deciduous trees, semi-evergreen trees, and evergreen trees. A special feature of the sanctuary is a treetop watchtower positioned 25 metres above a watering hole where animals go to drink. The best times to visit the watchtower are dawn and dusk when animals are most likely to be visiting. Animals in the sanctuary include the flying squirrel, slender loris, Indian pangolin, mouse deer, four-horned antelope, Malabar pit viper, hump-nosed pit viper, white-bellied woodpecker, Malabar trogon, velvet-fronted nuthatch, heart-spotted woodpecker, speckled piculet, Malayan bittern, draco or flying lizard, golden-back gliding snake, and Malabar tree toad. Eight nature trails traverse the sanctuary, ranging from 500 metres to 5 kilometres long. Several tribal groups live in and around the sanctuary including the Velip and the Kunbil. Visitors can interact with these communities to learn about their culture and lifestyle.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "wildlife sanctuary, nature, trekking, forest",
        filter: "south-goa"
    },
    {
        id: 35,
        title: "Netravali Wildlife Sanctuary",
        image: "img/blog/netravali-waterfall.jpg",
        category: "South Goa",
        excerpt: "Netravali Wildlife Sanctuary is located in South-Eastern Goa, India.[2] It constitutes one of the vital corridors of the Western Ghats and covers an area of about 211km2...",
        content: "Netravali Wildlife Sanctuary is located in South-Eastern Goa, India.[2] It constitutes one of the vital corridors of the Western Ghats and covers an area of about 211km2. Netravali or Neturli is an important tributary of River Zuari, which originates in the sanctuary. Forests mostly consist of moist deciduous vegetation interspersed with evergreen and semi-evergreen habitat; there are also two all-season waterfalls in the sanctuary. There are two waterfalls located in Netravali, those being Savari and Mainapi.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "wildlife sanctuary, waterfalls, nature, trekking",
        filter: "south-goa"
    },
    {
        id: 36,
        title: "Siridao Beach (shell beach)",
        image: "img/blog/shell-beach.jpeg",
        category: "South Goa",
        excerpt: "Beach contains coarse sand and rocks and, is found at the mouth of Zuari river. Along the beach one can also find boats that are used by the local fishing community...",
        content: "Beach contains coarse sand and rocks and, is found at the mouth of Zuari river. Along the beach one can also find boats that are used by the local fishing community. The beach is a haven for shell collectors and one can easily find myriad types of shells here. It is located 7 km from the center of Panaji.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "beach, shells, fishing, photography",
        filter: "south-goa"
    },
    {
        id: 37,
        title: "Salavali Dam",
        image: "img/blog/salaulim-dam.jpg",
        category: "South Goa",
        excerpt: "Salavali Dam (Salaulim Dam), which is pronounced local Salauli Dam Says, India K Goa Of the state South Goa district K Sangem One located near the city Dam Is. It is...",
        content: "Salavali Dam (Salaulim Dam), which is pronounced local Salauli Dam Says, India K Goa Of the state South Goa district K Sangem One located near the city Dam Is. It is situated on the Salavali River, which Zuwari River Of one Tributary Is",
        author: "Service Team",
        date: "2023-11-28",
        tags: "dam, nature, river, sightseeing",
        filter: "south-goa"
    },
    {
        id: 38,
        title: "Dodol",
        image: "img/blog/dodol.jpg",
        category: "Goan Tradition Food",
        excerpt: "Dodol is a traditional Goan sweet known for its dark brownish color, firm, jelly-like texture, and rich, melt-in-the-mouth consistency. It is a cherished dessert, especially...",
        content: "Dodol is a traditional Goan sweet known for its dark brownish color, firm, jelly-like texture, and rich, melt-in-the-mouth consistency. It is a cherished dessert, especially during Christmas, and holds cultural significance in Goa, often prepared using time-honored methods passed down through generations. The sweet is made from a harmonious blend of rice flour, coconut milk, and black palm jaggery, with additional ingredients like cashew nuts and cardamom enhancing its flavor. The preparation involves slow-cooking the mixture in a copper vessel while stirring continuously to prevent burning, a process that can take over an hour. It is believed to have origins during the Portuguese colonial period and is also popular in other regions with historical Portuguese influence, including parts of Southeast Asia and Sri Lanka.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "dessert, goan sweets, christmas, traditional food",
        filter: "goan-tradition-food"
    },
    {
        id: 39,
        title: "Sanna",
        image: "img/blog/sanna.jpg",
        category: "Goan Tradition Food",
        excerpt: "Sanna is a traditional Goan steamed rice cake, often enjoyed as a soft, spongy snack or accompaniment to spicy curries. The sweet version, known as Godd Sanna or Chunachi...",
        content: "Sanna is a traditional Goan steamed rice cake, often enjoyed as a soft, spongy snack or accompaniment to spicy curries. The sweet version, known as Godd Sanna or Chunachi Sanna, features a filling of coconut and jaggery, making it a popular tea-time treat. This recipe uses fermented batter made from rice and coconut, with the sweet variant incorporating jaggery and cardamom for a rich, aromatic flavor.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "goan cuisine, steamed rice cake, snack, traditional food",
        filter: "goan-tradition-food"
    },
    {
        id: 40,
        title: "Bebinca",
        image: "img/blog/bebinca.jpg",
        category: "Goan Tradition Food",
        excerpt: "Bebinca is a traditional, multi-layered Goan dessert renowned as the 'Queen of Goan Sweets' and a symbol of Goa's Indo-Portuguese culinary heritage. It is a rich, golden-brown...",
        content: "Bebinca is a traditional, multi-layered Goan dessert renowned as the 'Queen of Goan Sweets' and a symbol of Goa's Indo-Portuguese culinary heritage. It is a rich, golden-brown, custard-like cake made with egg yolks, coconut milk, sugar, flour, and ghee, often flavored with nutmeg or cardamom, and baked layer by layer over several hours. The dessert is a staple during Christmas, Easter, weddings, and other festive occasions in Goa, and its popularity extends to the Indian diaspora. In 2023, bebinca was granted a Geographical Indication (GI) tag, recognizing it as a unique and authentic product of Goa",
        author: "Service Team",
        date: "2023-11-28",
        tags: "dessert, goan sweets, bebinca, festive food",
        filter: "goan-tradition-food"
    },
    {
        id: 41,
        title: "Poee",
        image: "img/blog/bread.jpeg",
        category: "Goan Tradition Food",
        excerpt: "Poee or poie is a leavened bread baked by the traditional bakers called paders in Goa, India, where it is a staple food. It has characteristics similar to a pita bread, notably...",
        content: "Poee or poie is a leavened bread baked by the traditional bakers called paders in Goa, India, where it is a staple food. It has characteristics similar to a pita bread, notably that it is round, soft, and has a pocket. Coconut palm wine or toddy was traditionally used for the fermenting process but yeast is now used in commercial production. The bread is made from half-maida and half-whole wheat flour. Bread is a significant part of Goan cuisine, introduced by the Portuguese in the early 17th century. According to Chef Hussain Shahzad, Goa is the only state in India with traditional leavened breads. According to Vogue India, in 2018 poee was becoming increasingly popular outside of Goa. Ross poee, a dish of an omelet, xacuti and poee, is a typical item of Goan home cooking. Poee traditionally was prepared by fermenting it with toddy for two days, rolling it into a ball, flattening it, and baking it on the floor of a wood-fired oven. This differentiates it from pao, which uses the same dough but is baked in a pan. Baking time is two minutes; in professional bakeries, poee is generally baked before pao because it requires hotter temperatures",
        author: "Service Team",
        date: "2023-11-28",
        tags: "bread, goan cuisine, traditional food, bakery",
        filter: "goan-tradition-food"
    },
    {
        id: 42,
        title: "Sol-kadhi",
        image: "img/blog/sol-kadhi.jpg",
        category: "Goan Tradition Food",
        excerpt: "Goan Sol-kadhi, also known as Solkadi or Kokum Curry, is a traditional, cooling, and digestive beverage from the Goan and Konkan coastal regions of India, renowned for its tart...",
        content: "Goan Sol-kadhi, also known as Solkadi or Kokum Curry, is a traditional, cooling, and digestive beverage from the Goan and Konkan coastal regions of India, renowned for its tart, mauve-hued flavor and ability to balance spicy meals. It is commonly served at the end of a meal, especially with fish or vegetarian thalis, and is a staple during hot summers.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "drink, kokum, cooling beverage, goan cuisine",
        filter: "goan-tradition-food"
    },
    {
        id: 43,
        title: "Seafood",
        image: "img/blog/seafood.avif",
        category: "Goan Tradition Food",
        excerpt: "Goan seafood cuisine is renowned for its rich, spicy, and tangy flavors, deeply influenced by centuries of Portuguese rule and the region's Konkani roots. The cuisine is predominantly...",
        content: "Goan seafood cuisine is renowned for its rich, spicy, and tangy flavors, deeply influenced by centuries of Portuguese rule and the region's Konkani roots. The cuisine is predominantly seafood-based, with staple ingredients including rice, fish, coconut, and a variety of local spices. Kingfish, pomfret, shark, tuna, sardines, mackerel, crabs, prawns, tiger prawns, lobster, squid, and mussels are commonly used. The use of kokum and vinegar, particularly toddy vinegar made from fermented coconut sap, is a defining characteristic of Goan cooking. Popular Goan seafood dishes include Squid Masala Fry, where soft squids are stir-fried with a spicy red Goan recheado masala. Prawn Balchao is a spicy, tangy dish made with prawns pickled in a tomato-vinegar sauce infused with tamarind and local chillies, often enjoyed as a side or pickle. Fish Recheado involves stuffing mackerel or pomfret with a spicy recheado masala, coating it with semolina, and pan-frying until crisp. Crab Xacuti is a flavorful coconut-based curry made with crab meat, white poppy seeds, dried chilies, and a blend of spices like nutmeg, cinnamon, and cloves, offering a rich, aromatic taste. Mussel Rawa Fry features mussels coated in a spiced semolina (rawa) batter and shallow-fried to golden crispness, prized for its tender interior and crunchy exterior. Other notable dishes include Goan Fish Curry, a foundational meal often served with rice or local bread, and Shark Ambot Tik, a red sour and spicy curry flavored with red chillies and kokum. Malvani Fish Fry, a dish from the neighboring Malvani region, features fish marinated in a spicy masala and fried to perfection, offering a crispy exterior and tender interior. In Pune, restaurants like Cafe Goa and Goenche offer authentic Goan seafood experiences, serving dishes such as Pomfret Masala Fry, Crab Sukka, and Prawn Curry, reflecting the popularity of Goan cuisine beyond Goa",
        author: "Service Team",
        date: "2023-11-28",
        tags: "seafood, goan cuisine, fish, traditional food",
        filter: "goan-tradition-food"
    },
    {
        id: 44,
        title: "Chicken Cafreal",
        image: "img/blog/chicken-cafreal.jpg",
        category: "Goan Tradition Food",
        excerpt: "Goan Chicken Cafreal is a traditional Goan dish with Portuguese and African influences, originating from the Portuguese colonies in Africa and introduced to Goa during the colonial...",
        content: "Goan Chicken Cafreal is a traditional Goan dish with Portuguese and African influences, originating from the Portuguese colonies in Africa and introduced to Goa during the colonial period. It is a rustic chicken curry made with a distinctive green masala paste, known for its aromatic, smoky, and fresh flavors, typically served with bread, potatoes, or rice",
        author: "Service Team",
        date: "2023-11-28",
        tags: "chicken, goan cuisine, spicy, traditional food",
        filter: "goan-tradition-food"
    },
    {
        id: 45,
        title: "Prawn Balchao",
        image: "img/blog/prawn-balchao.webp",
        category: "Goan Tradition Food",
        excerpt: "Goan Prawn Balchao is a fiery, tangy, and sweet pickle-style dish originating from the coastal state of Goa in India, traditionally made with prawns, dried chilies, and a blend of...",
        content: "Goan Prawn Balchao is a fiery, tangy, and sweet pickle-style dish originating from the coastal state of Goa in India, traditionally made with prawns, dried chilies, and a blend of spices, often served as a condiment with rice or bread. It is known for its complex flavor profile and long shelf life when properly prepared and stored.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "prawns, goan cuisine, spicy, pickle",
        filter: "goan-tradition-food"
    },
    {
        id: 46,
        title: "Chicken Xacuti",
        image: "img/blog/chicken-xacuti.webp",
        category: "Goan Tradition Food",
        excerpt: "Goan Chicken Xacuti is a rich, aromatic curry from the coastal region of Goa, India, known for its complex blend of spices and fresh coconut, creating a fiery yet balanced flavor profile...",
        content: "Goan Chicken Xacuti is a rich, aromatic curry from the coastal region of Goa, India, known for its complex blend of spices and fresh coconut, creating a fiery yet balanced flavor profile. It is traditionally made with chicken marinated in a green masala and cooked in a thick, fragrant coconut-based sauce.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "chicken, curry, goan cuisine, spicy",
        filter: "goan-tradition-food"
    },
    {
        id: 47,
        title: "Fish Thali",
        image: "img/blog/fish-thali.avif",
        category: "Goan Tradition Food",
        excerpt: "The Goan Fish Thali is a quintessential meal in Goa, representing the region's coastal culinary heritage with a harmonious blend of seafood, spices, coconut, and tangy-sour notes unique...",
        content: "The Goan Fish Thali is a quintessential meal in Goa, representing the region's coastal culinary heritage with a harmonious blend of seafood, spices, coconut, and tangy-sour notes unique to Goan cuisine. It is typically served on a single platter, featuring a variety of small dishes that offer a well-rounded experience of the region's flavors. The centerpiece of the thali is the rawa (semolina) fried fish, often made with kingfish, chonak (sea bass), modso (rock cod), or bangda (Indian mackerel), which is coated in a crispy layer and fried to golden perfection, providing a contrast between the crunchy exterior and the moist, tender fish inside. This is accompanied by a generous serving of steamed rice, which acts as a canvas for the bold curries, and a crisp papad for added texture. The thali includes several key components: a fish curry, often made with tamarind for a signature tartness and enriched with coconut milk, spices like turmeric, cumin, and red chili powder, and sometimes featuring prawns or crab; prawn curry, a creamy dish made with fresh prawns and coconut milk, offering a mild spiciness with a hint of tamarind; fish Ambot Tik, a tangy and spicy curry made with vinegar and red chilies, known for its bold, sour heat; prawn kismoor, a dry dish made with dried prawns, grated coconut, onions, and spices, delivering an umami punch; clam tisriyo sukha, a dry clam preparation cooked with grated coconut and curry leaves, offering an earthy, slightly sweet flavor; crab xacutti, a rich, deeply spiced curry made with roasted coconut and aromatic spices, where the crab meat absorbs the complex flavors; chana sabzi, a comforting chickpea dish with a mild, earthy taste that balances the stronger seafood flavors; and sol kadhi, a cooling pink-hued drink made from coconut milk and kokum, which helps cleanse the palate and aids digestion. The meal is often completed with a small bowl of kheer, a creamy vermicelli pudding flavored with cardamom, providing a sweet and smooth finish. The Goan Fish Thali is more than just a meal; it is considered a journey through the essence of Goa, capturing the flavors of the sea, the spice of the land, and the soul of the region. +For those seeking an authentic experience, several restaurants are renowned for their fish thalis. Vinayak Family Restaurant in Assagao is known for its prawns rawa fry thali and butter garlic squid, with prices ranging from INR 300 to 450. Ritz Classic in Panjim is famous for its generous portions, featuring a giant slice of fried surmai (kingfish), rich prawn curry, tisrya masala (spiced clams), sukka sungta kismoor (dried shrimp salad), and a spicy lentil gravy, with a thali priced around INR 350. Kuttikar Bar and Restaurant in Ribandar offers a chonak thali with a boneless sea bass fillet, rich fish curry, crab gravy, and stir-fried French beans, priced at approximately INR 270. Kokni Kanteen in Panjim, a family-run restaurant since 1972, is celebrated for its traditional Goan meals and is a popular spot for locals and tourists alike. Additionally, Fat Fish in Calangute serves a Special Goan Fish Thali for INR 200, featuring two fish curries, a large rawa-coated kingfish, crab masala, mussels curry, and vegetables, available only between 1–3 pm.",
        author: "Service Team",
        date: "2023-11-28",
        tags: "fish thali, seafood, goan cuisine, traditional food",
        filter: "goan-tradition-food"
    }
];

let currentFilter = 'all';
let postsPerPage = 9;
let currentPage = 1;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize blog
    loadBlogPosts();
    
    // Handle filter buttons
    initFilterButtons();
    
    // Handle load more button
    initLoadMoreButton();
    
});

// Load Blog Posts
function loadBlogPosts(filter = 'all', append = false) {
    const blogGrid = document.getElementById('blogGrid');
    const filteredPosts = filter === 'all' ? blogPosts : blogPosts.filter(post => post.filter === filter);
    
    const startIndex = append ? (currentPage - 1) * postsPerPage : 0;
    const endIndex = currentPage * postsPerPage;
    const postsToShow = filteredPosts.slice(startIndex, endIndex);
    
    if (!append) {
        blogGrid.innerHTML = '';
    }
    
    postsToShow.forEach((post, index) => {
        const postCard = createBlogCard(post, startIndex + index);
        blogGrid.appendChild(postCard);
    });
    
    // Update load more button visibility
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (endIndex >= filteredPosts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
    
    initScrollAnimations();

    // Animate new posts
    setTimeout(() => {
        const newPosts = document.querySelectorAll('.blog-item:not(.animate)');
        newPosts.forEach(post => {
            post.classList.add('animate');
        });
    }, 100);
}

// Create Blog Card
function createBlogCard(post, index) {
    const postElement = document.createElement('div');
    postElement.className = 'col-lg-4 col-md-6 mb-4';
    
    postElement.innerHTML = `
        <div class="blog-card blog-item fade-in" style="animation-delay: ${(index % 9) * 0.1}s">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}" class="img-fluid">
                <div class="blog-category dg-btn"><span>${post.category}</span></div>
            </div>
            <div class="blog-content">
                <h3 class="blog-title">
                    <a href="#blogs">${post.title}</a>
                </h3>
                <p class="blog-excerpt short-text">${post.excerpt}</p>
                <p class="blog-excerpt full-text" style="display: none;">${post.content}</p>

                <div class="blog-read-more" onclick="toggleReadMore(this)">
                    Read More <i class="fas fa-arrow-right"></i>
                </div>
                <div class="blog-footer">
                    <div class="blog-tags">
                        <i class="fas fa-tags"></i> ${post.tags}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return postElement;
}

function toggleReadMore(button) {
  const card = button.closest('.blog-card');
  const shortText = card.querySelector('.short-text');
  const fullText = card.querySelector('.full-text');

  if (fullText.style.display === 'none') {
    // Show full content
    fullText.style.display = 'block';
    shortText.style.display = 'none';
    button.innerHTML = 'Read Less <i class="fas fa-arrow-left"></i>';
  } else {
    // Collapse back to excerpt
    fullText.style.display = 'none';
    shortText.style.display = 'block';
    button.innerHTML = 'Read More <i class="fas fa-arrow-right"></i>';
  }
}

// Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Initialize Filter Buttons
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter and reload posts
            currentFilter = this.getAttribute('data-filter');
            currentPage = 1;
            loadBlogPosts(currentFilter);
        });
    });
}

// Initialize Load More Button
function initLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    loadMoreBtn.addEventListener('click', function() {
        currentPage++;
        loadBlogPosts(currentFilter, true);
    });
}

// Read Blog Post (placeholder function)
function readBlogPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        alert(`Opening blog post: "${post.title}"\n\nIn a real application, this would navigate to the full blog post page.`);
    }
}


// Search functionality (if you want to add search)
function searchBlogPosts(query) {
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.toLowerCase().includes(query.toLowerCase())
    );
    
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';
    
    if (filteredPosts.length === 0) {
        blogGrid.innerHTML = '<div class="col-12 text-center"><p>No blog posts found matching your search.</p></div>';
        return;
    }
    
    filteredPosts.forEach((post, index) => {
        const postCard = createBlogCard(post, index);
        blogGrid.appendChild(postCard);
    });
}









// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize map interaction
    initMapInteraction();
    
});

// Map Interaction
function initMapInteraction() {
    const mapContainer = document.querySelector('.map-container');
    const iframe = mapContainer.querySelector('iframe');
    
    // Add click overlay to enable map interaction
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        cursor: pointer;
    `;
    
    overlay.addEventListener('click', function() {
        this.style.display = 'none';
        iframe.style.pointerEvents = 'auto';
    });
    
    mapContainer.appendChild(overlay);
    
    // Reset overlay when clicking outside
    document.addEventListener('click', function(e) {
        if (!mapContainer.contains(e.target)) {
            overlay.style.display = 'block';
            iframe.style.pointerEvents = 'none';
        }
    });
}


