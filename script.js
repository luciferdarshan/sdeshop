// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Language Dictionary
    const translations = {
        en: {
            "top-location": "Davanagere, Karnataka",
            "brand-name": "Sri Durgambika",
            "brand-sub": "ENTERPRISES",
            "nav-home": "Home",
            "nav-services": "Services",
            "nav-shop": "Shop",
            "nav-about": "About Us",
            "nav-contact": "Contact",
            "btn-whatsapp": "WhatsApp Chat",
            "hero-badge": "Davanagere's Trusted Electrical Experts",
            "hero-title": "Empowering Your Home & Business With Smart Solutions",
            "hero-desc": "From expert electrician services, CCTV setups, solar panels, and UPS installations to premium LED lighting and high-quality electrical supplies for your needs.",
            "hero-meta-1": "Basavaraj & Darshan",
            "hero-meta-2": "Guaranteed Safety & Quality",
            "btn-book-electrician": "Book Electrician Now",
            "btn-explore-shop": "Explore Shop",
            "badge-support-title": "24/7 Support",
            "badge-support-sub": "Emergency Services",
            "badge-star-title": "Top Rated",
            "badge-star-sub": "In Davanagere",
            "stat-title-1": "All-in-One",
            "stat-desc-1": "Sales & Services",
            "stat-title-2": "Fast Response",
            "stat-desc-2": "Electrician at your door",
            "stat-title-3": "Expert Care",
            "stat-desc-3": "Led by Basavaraj",
            "stat-title-4": "Best Pricing",
            "stat-desc-4": "Affordable pricing & sales",
            "services-badge": "What We Offer",
            "services-title": "Our Premium Sales & Services",
            "services-desc": "We are a one-stop-shop for your home electricity, security, clean energy, and hardware needs in Davanagere.",
            "s1-title": "Home Electrical Services",
            "s1-desc": "Professional home wiring, appliance repair, fusebox troubleshooting, switchboard installations, and all residential electrician tasks handled with strict safety standards.",
            "s1-f1": "Emergency breakdown service",
            "s1-f2": "Safe and secure wiring",
            "s1-f3": "Experienced technicians",
            "s1-link": "Book Electrician",
            "s2-title": "CCTV Sales & Services",
            "s2-desc": "Protect your home, shop, or factory with state-of-the-art surveillance cameras. We offer HD cameras, IP CCTV systems, installation, remote mobile view setup, and repairs.",
            "s2-f1": "HD & Night-Vision Cameras",
            "s2-f2": "Mobile live monitoring setup",
            "s2-f3": "Routine AMC maintenance",
            "s2-link": "Get Quote",
            "s3-title": "Solar Panels & Solutions",
            "s3-desc": "Transition to green, cost-effective energy. We provide solar rooftop panel sales, installation, solar water heaters, streetlights, and dedicated maintenance.",
            "s3-f1": "Premium high-efficiency panels",
            "s3-f2": "Grid-tied & off-grid setups",
            "s3-f3": "Save up to 80% on power bills",
            "s3-link": "Inquire Solar",
            "s4-title": "Battery & UPS Systems",
            "s4-desc": "Uninterrupted power supplies for homes and offices. Sales and expert servicing of tubular batteries, inverter UPS systems, automotive batteries, and diagnostics.",
            "s4-f1": "Top brands available",
            "s4-f2": "Instant power backup",
            "s4-f3": "Battery replacement & testing",
            "s4-link": "Get Inverter Quote",
            "s5-title": "LED Lightings & Decor",
            "s5-desc": "Brighten your space with energy-saving LED solutions. Retail sales of indoor/outdoor LEDs, decorative serial lighting for festivals, profile lighting, and custom layouts.",
            "s5-f1": "Energy-efficient LED bulbs & panels",
            "s5-f2": "Festival & marriage lighting setup",
            "s5-f3": "Commercial lighting design",
            "s5-link": "Browse Lighting",
            "card-featured": "Featured Brands",
            "s6-title": "Electrical Products & Retail Shop",
            "s6-desc": "We stock and sell modular switches, faceplates, copper wires, conduit pipes, LEDs, and electrical building items from top-tier brands like Anchor, GM, Goldmedal, and Hi-Fi.",
            "s6-f1": "Top switches: Anchor, GM, Goldmedal, Hi-Fi",
            "s6-f2": "Wires, PVC pipes & building items",
            "s6-f3": "Genuine products with warranty",
            "s6-link": "View Shop Products",
            "shop-badge": "Local Shop Products",
            "shop-title": "Explore Our Shop Supplies",
            "shop-desc": "We stock a complete range of premium electrical items for your home, commercial project, or building construction in Davanagere.",
            "filter-all": "All Products",
            "filter-switches": "Switches & Plates",
            "filter-wires": "Wires & Pipes",
            "filter-lights": "LED & Decoration Lights",
            "filter-building": "Building Materials",
            "p1-name": "Modular Switches & Plates",
            "p1-desc": "Premium quality modular switches, sleek faceplates, sockets, and regulators with multiple color options and smooth click actions.",
            "p2-name": "Copper Wires & Cables",
            "p2-desc": "Fire-retardant (FR), multi-strand flexible copper wiring cables for home, commercial, and industrial power distribution.",
            "p3-name": "LED & Decoration Lightings",
            "p3-desc": "Energy-saving LED panel lights, downlights, profile lighting, and decorative festival serial lights to illuminate your spaces.",
            "p4-name": "Building Electrical Materials",
            "p4-desc": "Heavy-duty electrical PVC conduit pipes, metal junction boxes, DB boards, MCBs, insulation tapes, and building wiring fittings.",
            "btn-inquire": "Inquire on WhatsApp",
            "about-badge": "Who We Are",
            "about-title": "Dedicated to Quality Electrical Supplies and Services",
            "about-p1": "Located in the heart of Davanagere, Sri Durgambika Enterprises was established with a singular goal: to provide reliable, professional, and budget-friendly electrical services and premium retail sales.",
            "about-p2": "Under the visionary leadership of our proprietor, Basavaraj, who is himself an expert electrician with years of field experience, we have successfully illuminated hundreds of homes, secured countless businesses with CCTV, and supplied top-quality electrical hardware for commercial and residential constructions.",
            "about-exp-years": "10+",
            "about-exp-text": "Years of Trusted Service in Davanagere",
            "about-v1-title": "Safety First",
            "about-v1-desc": "We adhere to strict Indian electrical safety standards for all residential and commercial wiring.",
            "about-v2-title": "Community Trust",
            "about-v2-desc": "Proudly serving Davanagere city and surrounding rural areas with local, prompt service.",
            "contact-badge": "Get In Touch",
            "contact-title": "Let's Discuss Your Project or Purchase",
            "contact-desc": "Have questions about CCTV installation? Need a quick electrician visit in Davanagere? Or looking to purchase electrical supplies? Reach out and we will help you promptly.",
            "contact-loc-title": "Office Location",
            "contact-loc-desc": "Durgambika Temple Road, Davanagere, Karnataka - 577002",
            "contact-phone-title": "Phone Numbers",
            "contact-email-title": "Email Address",
            "contact-hours-title": "Business Hours",
            "contact-hours-desc": "Monday - Sunday: 8:30 AM - 9:00 PM",
            "contact-hours-sub": "(Emergency services available 24/7)",
            "form-title": "Send a Direct Request",
            "form-desc": "Fill out the form and it will prepare a quick WhatsApp message to Basavaraj!",
            "label-name": "Your Name",
            "label-phone": "Phone Number",
            "label-location": "Area / Address",
            "label-service": "Required Service",
            "label-message": "Message / Details",
            "btn-submit-form": "Send Inquiry via WhatsApp",
            "footer-desc": "Complete sales, services, installation, and retail supplies. Trusted electrical work in Davanagere under the guidance of Basavaraj.",
            "footer-col1-title": "Our Services",
            "footer-col2-title": "Product Catalog",
            "footer-col3-title": "Contact Shop",
            "placeholder-name": "Enter your full name",
            "placeholder-phone": "Your mobile number",
            "placeholder-location": "e.g., MCC B Block, Davanagere",
            "placeholder-message": "Explain your requirement (e.g., CCTV quote, modular switches list...)",
            "opt-select": "-- Select a service --",
            "opt-electrician": "Home Electrician Services",
            "opt-cctv": "CCTV Camera Sales & Services",
            "opt-solar": "Solar Systems Sales & Install",
            "opt-battery": "Battery / UPS Sales & Services",
            "opt-led": "LED Lighting Sales & Decor",
            "opt-shop-purchase": "Electrical Shop Purchase",
            "opt-other": "Other Inquiry",
            "nav-gallery": "Gallery",
            "gallery-badge": "Our Store Visuals",
            "gallery-title": "Explore Our Physical Shop & Stock",
            "gallery-desc": "Take a virtual tour of Sri Durgambika Enterprises in Davanagere. See our physical shopfront, customer counter, and actual product inventories in stock.",
            "gallery-filter-all": "All Photos",
            "gallery-filter-showroom": "Shop Showroom",
            "gallery-filter-stock": "Stock & Inventory",
            "gallery-item-sh1": "Shop Counter & Display",
            "gallery-item-sh2": "Main Entrance & Facade",
            "gallery-item-sh3": "Electrical Supply Racks",
            "gallery-item-sh4": "Modular Display Section",
            "gallery-item-st1": "Switchboards & Modular Plates",
            "gallery-item-st2": "Premium LED & Panel Lights",
            "gallery-item-st3": "Copper Wires & Conduit Fittings",
            "gallery-item-st4": "MCBs, DBs & Distribution Gear",
            "gallery-item-st5": "Electrical Construction Materials"
        },
        kn: {
            "top-location": "ದಾವಣಗೆರೆ, ಕರ್ನಾಟಕ",
            "brand-name": "ಶ್ರೀ ದುರ್ಗಾಂಬಿಕಾ",
            "brand-sub": "ಎಂಟರ್‌ಪ್ರೈಸಸ್",
            "nav-home": "ಮುಖಪುಟ",
            "nav-services": "ಸೇವೆಗಳು",
            "nav-shop": "ಅಂಗಡಿ",
            "nav-about": "ನಮ್ಮ ಬಗ್ಗೆ",
            "nav-contact": "ಸಂಪರ್ಕಿಸಿ",
            "btn-whatsapp": "ವಾಟ್ಸಾಪ್ ಚಾಟ್",
            "hero-badge": "ದಾವಣಗೆರೆಯ ವಿಶ್ವಾಸಾರ್ಹ ಎಲೆಕ್ಟ್ರಿಕಲ್ ತಜ್ಞರು",
            "hero-title": "ನಿಮ್ಮ ಮನೆ ಮತ್ತು ವ್ಯವಹಾರಗಳಿಗೆ ಸ್ಮಾರ್ಟ್ ಪರಿಹಾರಗಳ ಶಕ್ತಿ",
            "hero-desc": "ಪರಿಣಿತ ಎಲೆಕ್ಟ್ರೀಷಿಯನ್ ಸೇವೆಗಳು, ಸಿಸಿಟಿವಿ ಅಳವಡಿಕೆ, ಸೋಲಾರ್ ಪ್ಯಾನಲ್ಗಳು ಮತ್ತು ಯುಪಿಎಸ್ ಅಳವಡಿಕೆಯಿಂದ ಹಿಡಿದು ನಿಮ್ಮ ಮನೆ ಮತ್ತು ವ್ಯವಹಾರಕ್ಕಾಗಿ ಪ್ರೀಮಿಯಂ ಎಲ್ಇಡಿ ಲೈಟಿಂಗ್ ಮತ್ತು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಎಲೆಕ್ಟ್ರಿಕಲ್ ಉತ್ಪನ್ನಗಳವರೆಗೆ.",
            "hero-meta-1": "ಬಸವರಾಜ್ ಮತ್ತು ದರ್ಶನ್",
            "hero-meta-2": "ಖಾತರಿ ಸುರಕ್ಷತೆ ಮತ್ತು ಗುಣಮಟ್ಟ",
            "btn-book-electrician": "ಈಗಲೇ ಬುಕ್ ಮಾಡಿ",
            "btn-explore-shop": "ಅಂಗಡಿಯನ್ನು ವೀಕ್ಷಿಸಿ",
            "badge-support-title": "24/7 ಬೆಂಬಲ",
            "badge-support-sub": "ತುರ್ತು ಸೇವೆಗಳು",
            "badge-star-title": "ಉನ್ನತ ದರ್ಜೆ",
            "badge-star-sub": "ದಾವಣಗೆರೆಯಲ್ಲಿ",
            "stat-title-1": "ಆಲ್-ಇನ್-ಒನ್",
            "stat-desc-1": "ಮಾರಾಟ ಮತ್ತು ಸೇವೆಗಳು",
            "stat-title-2": "ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆ",
            "stat-desc-2": "ಮನೆ ಬಾಗಿಲಿಗೆ ಎಲೆಕ್ಟ್ರೀಷಿಯನ್",
            "stat-title-3": "ಪರಿಣಿತ ಕಾಳಜಿ",
            "stat-desc-3": "ಬಸವರಾಜ್ ನೇತೃತ್ವದಲ್ಲಿ",
            "stat-title-4": "ಅತ್ಯುತ್ತಮ ಬೆಲೆ",
            "stat-desc-4": "ಕೈಗೆಟುಕುವ ಬೆಲೆ ಮತ್ತು ಮಾರಾಟ",
            "services-badge": "ನಾವು ನೀಡುವ ಸೇವೆಗಳು",
            "services-title": "ನಮ್ಮ ಪ್ರೀಮಿಯಂ ಮಾರಾಟ ಮತ್ತು ಸೇವೆಗಳು",
            "services-desc": "ನಾವು ದಾವಣಗೆರೆಯಲ್ಲಿ ನಿಮ್ಮ ಮನೆಯ ವಿದ್ಯುತ್, ಭದ್ರತೆ, ಶುದ್ಧ ಇಂಧನ ಮತ್ತು ಹಾರ್ಡ್‌ವೇರ್ ಅಗತ್ಯಗಳಿಗಾಗಿ ಒಂದೇ ಸೂರಿನಡಿ ಪರಿಹಾರ ನೀಡುತ್ತೇವೆ.",
            "s1-title": "ಮನೆಯ ಎಲೆಕ್ಟ್ರಿಕಲ್ ಸೇವೆಗಳು",
            "s1-desc": "ವೃತ್ತಿಪರ ಮನೆ ವೈರಿಂಗ್, ಉಪಕರಣಗಳ ದುರಸ್ತಿ, ಫ್ಯೂಸ್ ಬಾಕ್ಸ್ ದೋಷನಿವಾರಣೆ, ಸ್ವೀಚ್ ಬೋರ್ಡ್ ಅಳವಡಿಕೆ ಮತ್ತು ಎಲ್ಲಾ ವಸತಿ ಎಲೆಕ್ಟ್ರೀಷಿಯನ್ ಕೆಲಸಗಳನ್ನು ಸುರಕ್ಷತಾ ಮಾನದಂಡಗಳೊಂದಿಗೆ ಮಾಡಲಾಗುತ್ತದೆ.",
            "s1-f1": "ತುರ್ತು ಸ್ಥಗಿತ ಸೇವೆ",
            "s1-f2": "ಸುರಕ್ಷಿತ ಮತ್ತು ಭದ್ರವಾದ ವೈರಿಂಗ್",
            "s1-f3": "ಅನುಭವಿ ತಂತ್ರಜ್ಞರು",
            "s1-link": "ಎಲೆಕ್ಟ್ರೀಷಿಯನ್ ಬುಕ್ ಮಾಡಿ",
            "s2-title": "ಸಿಸಿಟಿವಿ ಮಾರಾಟ ಮತ್ತು ಸೇವೆಗಳು",
            "s2-desc": "ನಿಮ್ಮ ಮನೆ, ಅಂಗಡಿ ಅಥವಾ ಕಾರ್ಖಾನೆಯನ್ನು ಅತ್ಯಾಧುನಿಕ ಭದ್ರತಾ ಕ್ಯಾಮೆರಾಗಳೊಂದಿಗೆ ರಕ್ಷಿಸಿ. ನಾವು ಎಚ್ಡಿ ಕ್ಯಾಮೆರಾಗಳು, ಐಪಿ ಸಿಸಿಟಿವಿ ಸಿಸ್ಟಮ್ಸ್ ಅಳವಡಿಕೆ, ಮೊಬೈಲ್ ವೀಕ್ಷಣೆ ಸೆಟಪ್ ಮತ್ತು ರಿಪೇರಿ ಒದಗಿಸುತ್ತೇವೆ.",
            "s2-f1": "ಎಚ್ಡಿ ಮತ್ತು ನೈಟ್-ವಿಷನ್ ಕ್ಯಾಮೆರಾಗಳು",
            "s2-f2": "ಮೊಬೈಲ್ ಲೈವ್ ವೀಕ್ಷಣೆ ಸೆಟಪ್",
            "s2-f3": "ನಿಯಮಿತ ಎಎಮ್‌ಸಿ ನಿರ್ವಹಣೆ",
            "s2-link": "ದರಪಟ್ಟಿ ಪಡೆಯಿರಿ",
            "s3-title": "ಸೋಲಾರ್ ಪ್ಯಾನಲ್ ಮತ್ತು ಪರಿಹಾರಗಳು",
            "s3-desc": "ಹಸಿರು ಮತ್ತು ವೆಚ್ಚ-ಪರಿಣಾಮಕಾರಿ ಇಂಧನಕ್ಕೆ ಬದಲಾಗಿ. ನಾವು ಸೋಲಾರ್ ರೂಫ್‌ಟಾಪ್ ಪ್ಯಾನಲ್ ಮಾರಾಟ, ಅಳವಡಿಕೆ, ಸೋಲಾರ್ ವಾಟರ್ ಹೀಟರ್‌ಗಳು ಮತ್ತು ನಿಯಮಿತ ನಿರ್ವಹಣೆಯನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
            "s3-f1": "ಪ್ರೀಮಿಯಂ ಉನ್ನತ ಸಾಮರ್ಥ್ಯದ ಪ್ಯಾನಲ್‌ಗಳು",
            "s3-f2": "ಗ್ರಿಡ್-ಟೈಡ್ ಮತ್ತು ಆಫ್-ಗ್ರಿಡ್ ಸೆಟಪ್‌ಗಳು",
            "s3-f3": "ವಿದ್ಯುತ್ ಬಿಲ್‌ನಲ್ಲಿ ಶೇಕಡಾ 80 ರಷ್ಟು ಉಳಿಸಿ",
            "s3-link": "ಸೋಲಾರ್ ವಿಚಾರಿಸಿ",
            "s4-title": "ಬ್ಯಾಟರಿ ಮತ್ತು ಯುಪಿಎಸ್ ಸಿಸ್ಟಮ್ಸ್",
            "s4-desc": "ಮನೆ ಮತ್ತು ಕಚೇರಿಗಳಿಗೆ ಅಡೆತಡೆಯಿಲ್ಲದ ವಿದ್ಯುತ್ ಪೂರೈಕೆ. ಪ್ರಮುಖ ಬ್ಯಾಟರಿಗಳು, ಇನ್ವರ್ಟರ್ ಯುಪಿಎಸ್ ಸಿಸ್ಟಮ್‌ಗಳು, ಆಟೋಮೋಟಿವ್ ಬ್ಯಾಟರಿಗಳ ಮಾರಾಟ ಮತ್ತು ತಜ್ಞರ ಸೇವೆ.",
            "s4-f1": "ಪ್ರಮುಖ ಬ್ರ್ಯಾಂಡ್‌ಗಳು ಲಭ್ಯ",
            "s4-f2": "ತ್ವರಿತ ವಿದ್ಯುತ್ ಬ್ಯಾಕಪ್",
            "s4-f3": "ಬ್ಯಾಟರಿ ಬದಲಾವಣೆ ಮತ್ತು ಪರೀಕ್ಷೆ",
            "s4-link": "ಇನ್ವರ್ಟರ್ ದರಪಟ್ಟಿ ಪಡೆಯಿರಿ",
            "s5-title": "ಎಲ್ಇಡಿ ಲೈಟಿಂಗ್ಸ್ ಮತ್ತು ಡೆಕೋರ್",
            "s5-desc": "ವಿದ್ಯುತ್ ಉಳಿಸುವ ಎಲ್ಇಡಿ ಪರಿಹಾರಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಜಾಗವನ್ನು ಬೆಳಗಿಸಿ. ಒಳಾಂಗಣ/ಹೊರಾಂಗಣ ಎಲ್ಇಡಿಗಳು, ಹಬ್ಬಗಳಿಗೆ ಸೀರಿಯಲ್ ಲೈಟಿಂಗ್, ಪ್ರೊಫೈಲ್ ಲೈಟಿಂಗ್ ಮಾರಾಟ ಮತ್ತು ಅಳವಡಿಕೆ.",
            "s5-f1": "ವಿದ್ಯುತ್ ಉಳಿಸುವ ಎಲ್ಇಡಿ ಬಲ್ಬ್ಗಳು & ಪ್ಯಾನಲ್ಗಳು",
            "s5-f2": "ಹಬ್ಬ ಮತ್ತು ಮದುವೆಯ ಲೈಟಿಂಗ್ ಸೆಟಪ್",
            "s5-f3": "ವಾಣಿಜ್ಯ ಲೈಟಿಂಗ್ ವಿನ್ಯಾಸ",
            "s5-link": "ಲೈಟಿಂಗ್ ವೀಕ್ಷಿಸಿ",
            "card-featured": "ವಿಶೇಷ ಬ್ರ್ಯಾಂಡ್‌ಗಳು",
            "s6-title": "ಎಲೆಕ್ಟ್ರಿಕಲ್ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಅಂಗಡಿ",
            "s6-desc": "ನಾವು ಆಂಕರ್, ಜಿಎಂ, ಗೋಲ್ಡ್‌ಮೆಡಲ್ ಮತ್ತು ಹೈ-ಫೈ ನಂತಹ ಪ್ರಮುಖ ಬ್ರ್ಯಾಂಡ್‌ಗಳಿಂದ ಮಾಡ್ಯುಲರ್ ಸ್ವಿಚ್‌ಗಳು, ವೈರ್‌ಗಳು, ಪೈಪ್‌ಗಳು ಮತ್ತು ಎಲೆಕ್ಟ್ರಿಕಲ್ ವಸ್ತುಗಳನ್ನು ಮಾರಾಟ ಮಾಡುತ್ತೇವೆ.",
            "s6-f1": "ಅತ್ಯುತ್ತಮ ಸ್ವಿಚ್‌ಗಳು: ಆಂಕರ್, ಜಿಎಂ, ಗೋಲ್ಡ್‌ಮೆಡಲ್, ಹೈ-ಫೈ",
            "s6-f2": "ವೈರ್‌ಗಳು, ಪಿವಿಸಿ ಪೈಪ್‌ಗಳು ಮತ್ತು ಬಿಲ್ಡಿಂಗ್ ಸಾಮಗ್ರಿಗಳು",
            "s6-f3": "ಖಾತರಿಯೊಂದಿಗೆ ಅಸಲಿ ಉತ್ಪನ್ನಗಳು",
            "s6-link": "ಅಂಗಡಿ ಉತ್ಪನ್ನಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
            "shop-badge": "ಸ್ಥಳೀಯ ಅಂಗಡಿ ಉತ್ಪನ್ನಗಳು",
            "shop-title": "ನಮ್ಮ ಅಂಗಡಿಯ ಸಾಮಗ್ರಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ",
            "shop-desc": "ದಾವಣಗೆರೆಯಲ್ಲಿ ನಿಮ್ಮ ಮನೆ, ವಾಣಿಜ್ಯ ಯೋಜನೆ ಅಥವಾ ಕಟ್ಟಡ ನಿರ್ಮಾಣಕ್ಕಾಗಿ ನಾವು ಎಲ್ಲಾ ರೀತಿಯ ಎಲೆಕ್ಟ್ರಿಕಲ್ ಸಾಮಗ್ರಿಗಳನ್ನು ಹೊಂದಿದ್ದೇವೆ.",
            "filter-all": "ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳು",
            "filter-switches": "ಸ್ವಿಚ್ ಮತ್ತು ಪ್ಲೇಟ್‌ಗಳು",
            "filter-wires": "ವೈರ್ ಮತ್ತು ಪೈಪ್‌ಗಳು",
            "filter-lights": "ಎಲ್‌ಇಡಿ ಮತ್ತು ಅಲಂಕಾರಿಕ ದೀಪಗಳು",
            "filter-building": "ಕಟ್ಟಡ ನಿರ್ಮಾಣ ಸಾಮಗ್ರಿಗಳು",
            "p1-name": "ಮಾಡ್ಯುಲರ್ ಸ್ವಿಚ್ ಮತ್ತು ಪ್ಲೇಟ್‌ಗಳು",
            "p1-desc": "ಪ್ರೀಮಿಯಂ ಗುಣಮಟ್ಟದ ಮಾಡ್ಯುಲರ್ ಸ್ವಿಚ್‌ಗಳು, ಸುಂದರವಾದ ಪ್ಲೇಟ್‌ಗಳು, ಸಾಕೆಟ್‌ಗಳು ಮತ್ತು ರೆಗ್ಯುಲೇಟರ್‌ಗಳು ಲಭ್ಯವಿದೆ.",
            "p2-name": "ತಾಮ್ರದ ವೈರ್ ಮತ್ತು ಕೇಬಲ್‌ಗಳು",
            "p2-desc": "ಮನೆ, ವಾಣಿಜ್ಯ ಮತ್ತು ಕೈಗಾರಿಕಾ ವಿದ್ಯುತ್ ವಿತರಣೆಗಾಗಿ ಬೆಂಕಿ ನಿರೋಧಕ (FR) ತಾಮ್ರದ ವೈರಿಂಗ್ ಕೇಬಲ್‌ಗಳು.",
            "p3-name": "ಎಲ್‌ಇಡಿ ಮತ್ತು ಅಲಂಕಾರಿಕ ದೀಪಗಳು",
            "p3-desc": "ನಿಮ್ಮ ಮನೆಯನ್ನು ಬೆಳಗಿಸಲು ವಿದ್ಯುತ್ ಉಳಿಸುವ ಎಲ್ಇಡಿ ಪ್ಯಾನಲ್ ದೀಪಗಳು ಮತ್ತು ಹಬ್ಬದ ಅಲಂಕಾರಿಕ ಸೀರಿಯಲ್ ದೀಪಗಳು.",
            "p4-name": "ಕಟ್ಟಡ ಎಲೆಕ್ಟ್ರಿಕಲ್ ಸಾಮಗ್ರಿಗಳು",
            "p4-desc": "ಹೆವಿ ಡ್ಯೂಟಿ ಪಿವಿಸಿ ಪೈಪ್‌ಗಳು, ಮೆಟಲ್ ಜಂಕ್ಷನ್ ಬಾಕ್ಸ್‌ಗಳು, ಡಿಬಿ ಬೋರ್ಡ್‌ಗಳು, ಎಂಸಿಬಿಗಳು ಮತ್ತು ಇನ್ಸುಲೇಷನ್ ಟೇಪ್‌ಗಳು.",
            "btn-inquire": "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ",
            "about-badge": "ನಾವು ಯಾರು",
            "about-title": "ಗುಣಮಟ್ಟದ ವಿದ್ಯುತ್ ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ಸೇವೆಗಳಿಗೆ ಬದ್ಧರಾಗಿದ್ದೇವೆ",
            "about-p1": "ದಾವಣಗೆರೆಯ ಮಧ್ಯಭಾಗದಲ್ಲಿರುವ ಶ್ರೀ ದುರ್ಗಾಂಬಿಕಾ ಎಂಟರ್‌ಪ್ರೈಸಸ್ ವಿಶ್ವಾಸಾರ್ಹ, ವೃತ್ತಿಪರ ಮತ್ತು ಬಜೆಟ್ ಸ್ನೇಹಿ ವಿದ್ಯುತ್ ಸೇವೆಗಳು ಮತ್ತು ಪ್ರೀಮಿಯಂ ಚಿಲ್ಲರೆ ಮಾರಾಟವನ್ನು ಒದಗಿಸುವ ಗುರಿಯೊಂದಿಗೆ ಸ್ಥಾಪಿತವಾಗಿದೆ.",
            "about-p2": "ನಮ್ಮ ಪ್ರೊಪ್ರೈಟರ್ ಬಸವರಾಜ್ ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ, ನಾವು ನೂರಾರು ಮನೆಗಳನ್ನು ಬೆಳಗಿಸಿದ್ದೇವೆ, ಭದ್ರತೆ ನೀಡಿದ್ದೇವೆ ಮತ್ತು ವಸತಿ ಹಾಗೂ ವಾಣಿಜ್ಯ ಕಟ್ಟಡ ನಿರ್ಮಾಣಗಳಿಗಾಗಿ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಎಲೆಕ್ಟ್ರಿಕಲ್ ಸಾಮಗ್ರಿಗಳನ್ನು ಪೂರೈಸಿದ್ದೇವೆ.",
            "about-exp-years": "10+",
            "about-exp-text": "ದಾವಣಗೆರೆಯಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆಯ ವರ್ಷಗಳು",
            "about-v1-title": "ಸುರಕ್ಷತೆಗೆ ಮೊದಲ ಆದ್ಯತೆ",
            "about-v1-desc": "ಎಲ್ಲಾ ವಸತಿ ಮತ್ತು ವಾಣಿಜ್ಯ ವೈರಿಂಗ್‌ಗಾಗಿ ನಾವು ಕಟ್ಟುನಿಟ್ಟಾದ ಭಾರತೀಯ ವಿದ್ಯುತ್ ಸುರಕ್ಷತಾ ಮಾನದಂಡಗಳನ್ನು ಪಾಲಿಸುತ್ತೇವೆ.",
            "about-v2-title": "ಸಮುದಾಯದ ನಂಬಿಕೆ",
            "about-v2-desc": "ಸ್ಥಳೀಯ ಮತ್ತು ತ್ವರಿತ ಸೇವೆಯೊಂದಿಗೆ ದಾವಣಗೆರೆ ನಗರ ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಿಗೆ ಹೆಮ್ಮೆಯಿಂದ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದೇವೆ.",
            "contact-badge": "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
            "contact-title": "ನಿಮ್ಮ ಯೋಜನೆ ಅಥವಾ ಖರೀದಿಯ ಬಗ್ಗೆ ಚರ್ಚಿಸೋಣ",
            "contact-desc": "ಸಿಸಿಟಿವಿ ಅಳವಡಿಕೆ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ದಾವಣಗೆರೆಯಲ್ಲಿ ತ್ವರಿತ ಎಲೆಕ್ಟ್ರೀಷಿಯನ್ ಭೇಟಿ ಬೇಕೇ? ಅಥವಾ ಎಲೆಕ್ಟ್ರಿಕಲ್ ವಸ್ತುಗಳನ್ನು ಖರೀದಿಸಬೇಕೇ? ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ ಮತ್ತು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
            "contact-loc-title": "ಕಚೇರಿ ಸ್ಥಳ",
            "contact-loc-desc": "ದುರ್ಗಾಂಬಿಕಾ ದೇವಸ್ಥಾನ ರಸ್ತೆ, ದಾವಣಗೆರೆ, ಕರ್ನಾಟಕ - 577002",
            "contact-phone-title": "ಫೋನ್ ಸಂಖ್ಯೆಗಳು",
            "contact-email-title": "ಇಮೇಲ್ ವಿಳಾಸ",
            "contact-hours-title": "ಕೆಲಸದ ಸಮಯ",
            "contact-hours-desc": "ಸೋಮವಾರ - ಭಾನುವಾರ: ಬೆಳಗ್ಗೆ 8:30 - ರಾತ್ರಿ 9:00",
            "contact-hours-sub": "(ತುರ್ತು ಸೇವೆಗಳು 24/7 ಲಭ್ಯವಿದೆ)",
            "form-title": "ನೇರ ವಿನಂತಿ ಕಳುಹಿಸಿ",
            "form-desc": "ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ, ಇದು ತ್ವರಿತ ವಾಟ್ಸಾಪ್ ಸಂದೇಶವನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತದೆ!",
            "label-name": "ನಿಮ್ಮ ಹೆಸರು",
            "label-phone": "ಫೋನ್ ಸಂಖ್ಯೆ",
            "label-location": "ಪ್ರದೇಶ / ವಿಳಾಸ",
            "label-service": "ಅಗತ್ಯವಿರುವ ಸೇವೆ",
            "label-message": "ಸಂದೇಶ / ವಿವರಗಳು",
            "btn-submit-form": "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ವಿನಂತಿ ಕಳುಹಿಸಿ",
            "footer-desc": "ಸಂಪೂರ್ಣ ಮಾರಾಟ, ಸೇವೆಗಳು, ಅಳವಡಿಕೆ ಮತ್ತು ಚಿಲ್ಲರೆ ಪೂರೈಕೆಗಳು. ಬಸವರಾಜ್ ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ದಾವಣಗೆರೆಯಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ವಿದ್ಯುತ್ ಕೆಲಸಗಳು.",
            "footer-col1-title": "ನಮ್ಮ ಸೇವೆಗಳು",
            "footer-col2-title": "ಉತ್ಪನ್ನಗಳ ಪಟ್ಟಿ",
            "footer-col3-title": "ಅಂಗಡಿ ಸಂಪರ್ಕ",
            "placeholder-name": "ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
            "placeholder-phone": "ನಿಮ್ಮ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
            "placeholder-location": "ಉದಾಹರಣೆಗೆ, ಎಂಸಿಸಿ ಬಿ ಬ್ಲಾಕ್, ದಾವಣಗೆರೆ",
            "placeholder-message": "ನಿಮ್ಮ ಅವಶ್ಯಕತೆಯನ್ನು ವಿವರಿಸಿ (ಉದಾಹರಣೆಗೆ, ಸಿಸಿಟಿವಿ ದರಪಟ್ಟಿ, ಮಾಡ್ಯುಲರ್ ಸ್ವೀಚ್ ಪಟ್ಟಿ...)",
            "opt-select": "-- ಸೇವೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ --",
            "opt-electrician": "ಮನೆಯ ಎಲೆಕ್ಟ್ರಿಕಲ್ ಸೇವೆಗಳು",
            "opt-cctv": "ಸಿಸಿಟಿವಿ ಕ್ಯಾಮೆರಾ ಮಾರಾಟ ಮತ್ತು ಸೇವೆಗಳು",
            "opt-solar": "ಸೋಲಾರ್ ಸಿಸ್ಟಮ್ಸ್ ಮಾರಾಟ ಮತ್ತು ಅಳವಡಿಕೆ",
            "opt-battery": "ಬ್ಯಾಟರಿ / ಯುಪಿಎಸ್ ಮಾರಾಟ ಮತ್ತು ಸೇವೆಗಳು",
            "opt-led": "ಎಲ್ಇಡಿ ಲೈಟಿಂಗ್ ಮಾರಾಟ ಮತ್ತು ಡೆಕೋರ್",
            "opt-shop-purchase": "ಎಲೆಕ್ಟ್ರಿಕಲ್ ಅಂಗಡಿ ಖರೀದಿ",
            "opt-other": "ಇತರ ವಿಚಾರಣೆ",
            "nav-gallery": "ಗ್ಯಾಲರಿ",
            "gallery-badge": "ನಮ್ಮ ಅಂಗಡಿಯ ಚಿತ್ರಗಳು",
            "gallery-title": "ನಮ್ಮ ಅಂಗಡಿ ಮತ್ತು ಸ್ಟಾಕ್ ವೀಕ್ಷಿಸಿ",
            "gallery-desc": "ದಾವಣಗೆರೆಯಲ್ಲಿರುವ ಶ್ರೀ ದುರ್ಗಾಂಬಿಕಾ ಎಂಟರ್‌ಪ್ರೈಸಸ್‌ನ ವರ್ಚುವಲ್ ಪ್ರವಾಸ ಮಾಡಿ. ನಮ್ಮ ಭೌತಿಕ ಅಂಗಡಿ, ಗ್ರಾಹಕ ಕೌಂಟರ್ ಮತ್ತು ಲಭ್ಯವಿರುವ ಪ್ರಮುಖ ಉತ್ಪನ್ನಗಳನ್ನು ಇಲ್ಲಿ ನೋಡಿ.",
            "gallery-filter-all": "ಎಲ್ಲಾ ಚಿತ್ರಗಳು",
            "gallery-filter-showroom": "ಅಂಗಡಿ ಪ್ರದರ್ಶನ",
            "gallery-filter-stock": "ಉತ್ಪನ್ನಗಳ ಸ್ಟಾಕ್",
            "gallery-item-sh1": "ಅಂಗಡಿ ಕೌಂಟರ್ ಮತ್ತು ಡಿಸ್ಪ್ಲೇ",
            "gallery-item-sh2": "ಮುಖ್ಯ ದ್ವಾರ ಮತ್ತು ಮುಂಭಾಗ",
            "gallery-item-sh3": "ಎಲೆಕ್ಟ್ರಿಕಲ್ ಸರಬರಾಜು ರಾಕ್ಸ್",
            "gallery-item-sh4": "ಮಾಡ್ಯುಲರ್ ಡಿಸ್ಪ್ಲೇ ವಿಭಾಗ",
            "gallery-item-st1": "ಸ್ವಿಚ್‌ಬೋರ್ಡ್ ಮತ್ತು ಮಾಡ್ಯುಲರ್ ಪ್ಲೇಟ್‌ಗಳು",
            "gallery-item-st2": "ಪ್ರೀಮಿಯಂ ಎಲ್ಇಡಿ ಮತ್ತು ಪ್ಯಾನಲ್ ಲೈಟ್ಸ್",
            "gallery-item-st3": "ತಾಮ್ರದ ವೈರ್‌ಗಳು ಮತ್ತು ಪೈಪ್‌ಗಳು",
            "gallery-item-st4": "ಎಂಸಿಬಿಗಳು ಮತ್ತು ಹಂಚಿಕೆ ಪೆಟ್ಟಿಗೆಗಳು",
            "gallery-item-st5": "ಕಟ್ಟಡ ವಿದ್ಯುತ್ ನಿರ್ಮಾಣ ಸಾಮಗ್ರಿಗಳು"
        }
    };

    // State
    let currentLang = "en";

    // Toggle Button Ref
    const langToggle = document.getElementById("langToggle");

    // Function to apply translation state
    function applyTranslations(lang) {
        // Translate text contents
        document.querySelectorAll("[data-i18n]").forEach(elem => {
            const key = elem.getAttribute("data-i18n");
            if (translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });

        // Translate placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
            const key = elem.getAttribute("data-i18n-placeholder");
            if (translations[lang][key]) {
                elem.setAttribute("placeholder", translations[lang][key]);
            }
        });

        // Toggle button text based on the active language
        if (langToggle) {
            if (lang === "en") {
                langToggle.textContent = "ಕನ್ನಡ";
            } else {
                langToggle.textContent = "English";
            }
        }

        // Save selection
        localStorage.setItem("preferred_lang", lang);
    }

    // Language Toggle Listener
    if (langToggle) {
        langToggle.addEventListener("click", () => {
            currentLang = currentLang === "en" ? "kn" : "en";
            applyTranslations(currentLang);
        });
    }

    // Apply translations on load
    applyTranslations(currentLang);

    // Elements
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");
    const bookingForm = document.getElementById("bookingForm");
    const serviceSelect = document.getElementById("serviceType");

    // 1. Mobile Navigation Menu Toggle
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        
        // Toggle menu icon between menu and x
        const isMenuOpen = navMenu.classList.contains("active");
        if (isMenuOpen) {
            menuIcon.setAttribute("data-lucide", "x");
        } else {
            menuIcon.setAttribute("data-lucide", "menu");
        }
        lucide.createIcons(); // Refresh icons
    });

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuIcon.setAttribute("data-lucide", "menu");
            lucide.createIcons();
        });
    });

    // 2. Active Nav Link on Scroll
    window.addEventListener("scroll", () => {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Buffer to activate slightly before reaching the section
            if (pageYOffset >= (sectionTop - 150)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // 3. Pre-select Service Dropdown Function
    window.preselectService = function(serviceVal) {
        if (!serviceSelect) return;
        
        // Map keys to select option values
        const serviceMapping = {
            'electrician': 'electrician',
            'cctv': 'cctv',
            'solar': 'solar',
            'battery': 'battery',
            'led': 'led',
            'shop-purchase': 'shop-purchase',
            'shop-switches': 'shop-purchase',
            'shop-wires': 'shop-purchase',
            'shop-lights': 'shop-purchase',
            'shop-building': 'shop-purchase'
        };

        const targetValue = serviceMapping[serviceVal];
        if (targetValue) {
            serviceSelect.value = targetValue;
        }

        // Custom description template based on choice (in active language)
        const msgTextarea = document.getElementById("userMessage");
        if (msgTextarea) {
            if (currentLang === "kn") {
                if (serviceVal === 'shop-switches') {
                    msgTextarea.value = "ನಮಸ್ಕಾರ ಬಸವರಾಜ್, ನಾನು ನಮ್ಮ ಮನೆಗಾಗಿ ಪ್ರೀಮಿಯಂ ಬ್ರ್ಯಾಂಡ್‌ಗಳ ಮಾಡ್ಯುಲರ್ ಸ್ವಿಚ್ ಮತ್ತು ಪ್ಲೇಟ್‌ಗಳನ್ನು ಖರೀದಿಸಲು ಬಯಸುತ್ತೇನೆ. ದಯವಿಟ್ಟು ದರದ ವಿವರಗಳನ್ನು ತಿಳಿಸಿ.";
                } else if (serviceVal === 'shop-wires') {
                    msgTextarea.value = "ನಮಸ್ಕಾರ ಬಸವರಾಜ್, ನನಗೆ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ತಾಮ್ರದ ವೈರ್‌ಗಳು ಮತ್ತು ಎಲೆಕ್ಟ್ರಿಕಲ್ ಪೈಪ್‌ಗಳು ಬೇಕಾಗಿವೆ. ದಯವಿಟ್ಟು ದರಪಟ್ಟಿ ಕಳುಹಿಸಿ.";
                } else {
                    msgTextarea.value = `ನಮಸ್ಕಾರ ಬಸವರಾಜ್, ನಾನು ${serviceSelect.options[serviceSelect.selectedIndex].text} ಗಾಗಿ ಸೇವೆಗಳು / ದರಪಟ್ಟಿಗಳನ್ನು ಪಡೆಯಲು ಬಯಸುತ್ತೇನೆ.`;
                }
            } else {
                if (serviceVal === 'shop-switches') {
                    msgTextarea.value = "Hi Basavaraj, I'm looking to buy premium brand modular switches and plates for our house. Please share pricing details.";
                } else if (serviceVal === 'shop-wires') {
                    msgTextarea.value = "Hi Basavaraj, I need high-quality copper wires and PVC conduit pipes. Please share pricing details.";
                } else {
                    msgTextarea.value = `Hi Basavaraj, I would like to get services / quotes for ${serviceSelect.options[serviceSelect.selectedIndex].text}.`;
                }
            }
        }
    };

    // 4. Booking Form WhatsApp Link Generation
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Collect Form Data
            const name = document.getElementById("userName").value.trim();
            const phone = document.getElementById("userPhone").value.trim();
            const location = document.getElementById("userLocation").value.trim();
            const serviceIndex = serviceSelect.selectedIndex;
            const serviceName = serviceSelect.options[serviceIndex].text;
            const message = document.getElementById("userMessage").value.trim();

            // Format WhatsApp Message (in active language)
            const whatsappNumber = "919845511088"; // Shop's main contact number
            let text = "";

            if (currentLang === "kn") {
                const heading = `*🔔 ಶ್ರೀ ದುರ್ಗಾಂಬಿಕಾ ಎಂಟರ್‌ಪ್ರೈಸಸ್ ವಿಚಾರಣೆ*`;
                text = 
`${heading}
-----------------------------
👤 *ಹೆಸರು:* ${name}
📞 *ಫೋನ್ ಸಂಖ್ಯೆ:* ${phone}
📍 *ಸ್ಥಳ/ವಿಳಾಸ:* ${location}
🛠️ *ಅಗತ್ಯವಿರುವ ಸೇವೆ:* ${serviceName}

📝 *ವಿವರಗಳು:* 
${message}
-----------------------------
_ಶ್ರೀ ದುರ್ಗಾಂಬಿಕಾ ಎಂಟರ್‌ಪ್ರೈಸಸ್ ವೆಬ್‌ಸೈಟ್‌ನಿಂದ ಕಳುಹಿಸಲಾಗಿದೆ._`;
            } else {
                const heading = `*🔔 SRI DURGAMBIKA ENTERPRISES INQUIRY*`;
                text = 
`${heading}
-----------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📍 *Location:* ${location}
🛠️ *Service Needed:* ${serviceName}

📝 *Details:* 
${message}
-----------------------------
_Sent from Sri Durgambika Enterprises website._`;
            }

            // Encode URI
            const encodedText = encodeURIComponent(text);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

            // Open WhatsApp in new tab
            window.open(whatsappUrl, "_blank");
        });
    }

    // 5. Shop Category Filtering & Inquiry
    const filterButtons = document.querySelectorAll(".filter-btn");
    const productCards = document.querySelectorAll(".product-card");

    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                // Remove active class from all filter buttons
                filterButtons.forEach(b => b.classList.remove("active"));
                // Add active class to clicked button
                btn.classList.add("active");

                const filterValue = btn.getAttribute("data-filter");

                productCards.forEach(card => {
                    if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                        card.style.display = "block";
                        card.style.opacity = "0";
                        card.style.transform = "scale(0.95)";
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "scale(1)";
                            card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                        }, 50);
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    window.filterShop = function(category) {
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
        if (filterBtn) {
            filterBtn.click();
            // Scroll to shop section
            const shopSection = document.getElementById("shop");
            if (shopSection) {
                shopSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    window.inquireProduct = function(productName) {
        const whatsappNumber = "919845511088";
        let message = "";
        if (currentLang === "kn") {
            message = `ನಮಸ್ಕಾರ ಬಸವರಾಜ್, ನಾನು ನಿಮ್ಮ ಅಂಗಡಿಯಿಂದ "${productName}" ಖರೀದಿಸಲು ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೇನೆ. ದಯವಿಟ್ಟು ಲಭ್ಯತೆ ಮತ್ತು ದರಗಳ ವಿವರಗಳನ್ನು ತಿಳಿಸಿ.`;
        } else {
            message = `Hi Basavaraj, I'm interested in purchasing "${productName}" from your shop. Please share pricing and availability details.`;
        }
        const encodedText = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
        window.open(whatsappUrl, "_blank");
    };

    // 6. Gallery Filtering & Lightbox Modal
    const galleryFilters = document.querySelectorAll(".gallery-filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    let activeGalleryItems = Array.from(galleryItems);
    let currentImageIndex = 0;

    if (galleryFilters.length > 0 && galleryItems.length > 0) {
        galleryFilters.forEach(btn => {
            btn.addEventListener("click", () => {
                galleryFilters.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                const filterValue = btn.getAttribute("data-gallery-filter");

                galleryItems.forEach(item => {
                    if (filterValue === "all" || item.getAttribute("data-gallery-category") === filterValue) {
                        item.style.display = "block";
                        item.style.opacity = "0";
                        setTimeout(() => {
                            item.style.opacity = "1";
                            item.style.transition = "opacity 0.3s ease";
                        }, 50);
                    } else {
                        item.style.display = "none";
                    }
                });

                // Update active list for lightbox navigation
                activeGalleryItems = Array.from(galleryItems).filter(item => 
                    filterValue === "all" || item.getAttribute("data-gallery-category") === filterValue
                );
            });
        });

        // Open Lightbox
        galleryItems.forEach(item => {
            item.addEventListener("click", () => {
                currentImageIndex = activeGalleryItems.indexOf(item);
                openLightbox(item);
            });
        });
    }

    function openLightbox(item) {
        if (!lightbox || !lightboxImg || !lightboxCaption) return;
        const img = item.querySelector("img");
        const titleKey = item.querySelector(".gallery-item-title").getAttribute("data-i18n");
        const titleText = translations[currentLang][titleKey] || img.alt;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = titleText;
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent page scrolling
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.style.display = "none";
        document.body.style.overflow = "auto"; // Restore scrolling
    }

    function showNextImage() {
        if (activeGalleryItems.length === 0) return;
        currentImageIndex = (currentImageIndex + 1) % activeGalleryItems.length;
        openLightbox(activeGalleryItems[currentImageIndex]);
    }

    function showPrevImage() {
        if (activeGalleryItems.length === 0) return;
        currentImageIndex = (currentImageIndex - 1 + activeGalleryItems.length) % activeGalleryItems.length;
        openLightbox(activeGalleryItems[currentImageIndex]);
    }

    // Lightbox Event Listeners
    if (closeBtn) {
        closeBtn.addEventListener("click", closeLightbox);
    }
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            showNextImage();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            showPrevImage();
        });
    }

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (lightbox && lightbox.style.display === "flex") {
            if (e.key === "Escape") {
                closeLightbox();
            } else if (e.key === "ArrowRight") {
                showNextImage();
            } else if (e.key === "ArrowLeft") {
                showPrevImage();
            }
        }
    });
});
