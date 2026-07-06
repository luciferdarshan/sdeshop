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
            "nav-home": "ಹೋಮ್",
            "nav-services": "ಸರ್ವೀಸಸ್",
            "nav-shop": "ಶಾಪ್",
            "nav-about": "ನಮ್ಮ ಬಗ್ಗೆ",
            "nav-contact": "ಕಾಂಟಾಕ್ಟ್",
            "btn-whatsapp": "ವಾಟ್ಸಾಪ್ ಚಾಟ್",
            "hero-badge": "ದಾವಣಗೆರೆಯ ಬೆಸ್ಟ್ ಎಲೆಕ್ಟ್ರಿಕಲ್ ಶಾಪ್",
            "hero-title": "ಮನೆ & ಆಫೀಸ್ ಎಲೆಕ್ಟ್ರಿಕಲ್, CCTV ಮತ್ತು ಸೋಲಾರ್ ಸರ್ವೀಸ್",
            "hero-desc": "ನಿಮ್ಮ ಮನೆಗೆ ಬೇಕಾದ ಎಲೆಕ್ಟ್ರಿಷಿಯನ್ ಕೆಲಸಗಳು, CCTV ಕ್ಯಾಮೆರಾಗಳು, ಸೋಲಾರ್ ಪ್ಯಾನಲ್ಸ್, ಬ್ಯಾಟರಿ, ಇನ್ವರ್ಟರ್‌ಗಳು ಮತ್ತು ಬೆಸ್ಟ್ ಕ್ವಾಲಿಟಿ LED ಲೈಟ್ಸ್ - ಎಲ್ಲವೂ ಒಂದೇ ಸೂರಿನಡಿ!",
            "hero-meta-1": "ಬಸವರಾಜ್ ಮತ್ತು ದರ್ಶನ್",
            "hero-meta-2": "ಖಾತರಿ ಸುರಕ್ಷತೆ ಮತ್ತು ಗುಣಮಟ್ಟ",
            "btn-book-electrician": "ಬುಕ್ ಮಾಡಿ",
            "btn-explore-shop": "ಶಾಪ್ ನೋಡಿ",
            "badge-support-title": "24/7 ಸರ್ವೀಸ್",
            "badge-support-sub": "ಎಮರ್ಜೆನ್ಸಿ ಸರ್ವೀಸ್",
            "badge-star-title": "ಬೆಸ್ಟ್ ರೇಟೆಡ್",
            "badge-star-sub": "ದಾವಣಗೆರೆಯಲ್ಲಿ",
            "stat-title-1": "ಆಲ್-ಇನ್-ಒನ್",
            "stat-desc-1": "ಸೇಲ್ಸ್ & ಸರ್ವೀಸ್",
            "stat-title-2": "ಫಾಸ್ಟ್ ರೆಸ್ಪಾನ್ಸ್",
            "stat-desc-2": "ಮನೆ ಬಾಗಿಲಿಗೆ ಎಲೆಕ್ಟ್ರೀಷಿಯನ್",
            "stat-title-3": "ಬೆಸ್ಟ್ ಕ್ವಾಲಿಟಿ",
            "stat-desc-3": "ಬಸವರಾಜ್ ಟೀಮ್",
            "stat-title-4": "ಬೆಸ್ಟ್ ರೇಟ್",
            "stat-desc-4": "ರೀಸನಬಲ್ ಪ್ರೈಸ್",
            "services-badge": "ನಮ್ಮ ಸರ್ವೀಸಸ್",
            "services-title": "ನಮ್ಮ ಸೇಲ್ಸ್ & ಸರ್ವೀಸ್",
            "services-desc": "ದಾವಣಗೆರೆಯಲ್ಲಿ ನಿಮ್ಮ ಮನೆಗೆ ಬೇಕಾದ ಕರೆಂಟ್ ಕೆಲಸ, CCTV, ಸೋಲಾರ್ ಮತ್ತು ಎಲೆಕ್ಟ್ರಿಕಲ್ ಐಟಮ್ಸ್ ಎಲ್ಲವನ್ನೂ ನಾವೇ ಮಾಡಿಕೊಡ್ತೀವಿ.",
            "s1-title": "ಹೌಸ್ ವೈರಿಂಗ್ & ರಿಪೇರಿ",
            "s1-desc": "ಮನೆ ವೈರಿಂಗ್, ಸ್ವಿಚ್ ಬೋರ್ಡ್ ಫಿಟ್ಟಿಂಗ್, ಫ್ಯಾನ್/ಗೀಸರ್ ರಿಪೇರಿ, ಶಾರ್ಟ್ ಸರ್ಕ್ಯೂಟ್ ಪ್ರಾಬ್ಲಮ್ಸ್ ಮತ್ತು ಎಲ್ಲಾ ತರಹದ ಕರೆಂಟ್ ಕೆಲಸಗಳನ್ನು ಮಾಡಿಕೊಡ್ತೀವಿ.",
            "s1-f1": "ಎಮರ್ಜೆನ್ಸಿ ಸರ್ವೀಸ್",
            "s1-f2": "ಸೇಫ್ ವೈರಿಂಗ್",
            "s1-f3": "ಎಕ್ಸ್‌ಪರ್ಟ್ ಟೆಕ್ನಿಷಿಯನ್ಸ್",
            "s1-link": "ಎಲೆಕ್ಟ್ರೀಷಿಯನ್ ಬುಕ್ ಮಾಡಿ",
            "s2-title": "CCTV ಕ್ಯಾಮೆರಾ ಸೇಲ್ಸ್ & ಸರ್ವೀಸ್",
            "s2-desc": "ನಿಮ್ಮ ಮನೆ ಅಥವಾ ಅಂಗಡಿಗೆ CCTV ಕ್ಯಾಮೆರಾ ಅಳವಡಿಸಿ. ಮೊಬೈಲ್‌ನಲ್ಲಿ ಲೈವ್ ನೋಡುವ ಸೆಟಪ್ ಮತ್ತು ರಿಪೇರಿ ಕೆಲಸಗಳನ್ನು ಮಾಡ್ತೀವಿ.",
            "s2-f1": "HD ಮತ್ತು ನೈಟ್ ವಿಷನ್ ಕ್ಯಾಮೆರಾ",
            "s2-f2": "ಮೊಬೈಲ್ ಲೈವ್ ಸೆಟಪ್",
            "s2-f3": "ಕ್ಲೀನಿಂಗ್ & ಮೇಂಟೆನೆನ್ಸ್",
            "s2-link": "ಕೊಟೇಶನ್ ಪಡೆಯಿರಿ",
            "s3-title": "ಸೋಲಾರ್ ಪ್ಯಾನಲ್ಸ್ & ಹೀಟರ್ಸ್",
            "s3-desc": "ಸೋಲಾರ್ ಪ್ಯಾನಲ್ ಮತ್ತು ಸೋಲಾರ್ ಗೀಸರ್ ಅಳವಡಿಸಿ ಕರೆಂಟ್ ಬಿಲ್ ಉಳಿಸಿ. ರೂಫ್‌ಟಾಪ್ ಸೋಲಾರ್ ಇನ್‌ಸ್ಟಾಲೇಶನ್ ನಾವೇ ಮಾಡ್ತೀವಿ.",
            "s3-f1": "ಬೆಸ್ಟ್ ಕ್ವಾಲಿಟಿ ಸೋಲಾರ್ ಪ್ಯಾನಲ್ಸ್",
            "s3-f2": "ಬಿಲ್ ಉಳಿಸುವ ಸೆಟಪ್",
            "s3-f3": "ಕರೆಂಟ್ ಬಿಲ್ ಶೇ. 80ರಷ್ಟು ಕಮ್ಮಿ",
            "s3-link": "ಸೋಲಾರ್ ರೇಟ್ ಕೇಳಿ",
            "s4-title": "ಬ್ಯಾಟರಿ & ಇನ್ವರ್ಟರ್ (UPS)",
            "s4-desc": "ಮನೆಯಲ್ಲಿ ಕರೆಂಟ್ ಹೋದ್ರೆ ಚಿಂತೆ ಬೇಡ. ಬೆಸ್ಟ್ ಇನ್ವರ್ಟರ್ ಮತ್ತು ಬ್ಯಾಟರಿ ಸೇಲ್ಸ್ & ಸರ್ವೀಸ್ ಇಲ್ಲಿದೆ.",
            "s4-f1": "ಟಾಪ್ ಬ್ರ್ಯಾಂಡ್ ಇನ್ವರ್ಟರ್ಸ್",
            "s4-f2": "ಕರೆಂಟ್ ಹೋದ ತಕ್ಷಣ ಬ್ಯಾಕಪ್",
            "s4-f3": "ಹಳೆ ಬ್ಯಾಟರಿ ಎಕ್ಸ್ಚೇಂಜ್",
            "s4-link": "ಇನ್ವರ್ಟರ್ ರೇಟ್ ಕೇಳಿ",
            "s5-title": "LED ಲೈಟ್ಸ್ & ಡೆಕೋರೇಷನ್",
            "s5-desc": "ಮನೆ ಅಥವಾ ಅಂಗಡಿಗೆ ಡಿಸೈನ್ ಲೈಟ್ಸ್, ಪ್ರೊಫೈಲ್ ಲೈಟ್ಸ್ ಮತ್ತು ಹಬ್ಬಗಳಿಗೆ ಸೀರಿಯಲ್ ಲೈಟಿಂಗ್ ಡೆಕೋರೇಷನ್ ಮಾಡಿಕೊಡ್ತೀವಿ.",
            "s5-f1": "ಕರೆಂಟ್ ಉಳಿಸೋ LED ಬಲ್ಬ್ಸ್",
            "s5-f2": "ಹಬ್ಬ & ಮದುವೆ ಲೈಟಿಂಗ್ ಡೆಕೋರ್",
            "s5-f3": "ಫ್ಯಾನ್ಸಿ ಮತ್ತು ಪ್ರೊಫೈಲ್ ಲೈಟ್ಸ್",
            "s5-link": "ಲೈಟಿಂಗ್ ಡಿಸೈನ್ಸ್ ನೋಡಿ",
            "card-featured": "ವಿಶೇಷ ಬ್ರ್ಯಾಂಡ್‌ಗಳು",
            "s6-title": "ಎಲೆಕ್ಟ್ರಿಕಲ್ ಅಂಗಡಿ & ಸಾಮಗ್ರಿಗಳು",
            "s6-desc": "ನಮ್ಮಲ್ಲಿ ಆಂಕರ್, GM, ಗೋಲ್ಡ್‌ಮೆಡಲ್ ಮತ್ತು ಹೈ-ಫೈ ನಂತಹ ಕಂಪನಿಗಳ ಮಾಡ್ಯುಲರ್ ಸ್ವಿಚ್, ಪ್ಲೇಟ್, ವೈರ್ ಮತ್ತು ಪೈಪ್‌ಗಳು ಹೋಲ್‌ಸೇಲ್ ರೇಟ್‌ನಲ್ಲಿ ಸಿಗುತ್ತವೆ.",
            "s6-f1": "ಸ್ವಿಚ್‌ಗಳು: Anchor, GM, Goldmedal, Hi-Fi",
            "s6-f2": "ಕರೆಂಟ್ ವೈರ್, ಪೈಪ್ಸ್ & ಫಿಟ್ಟಿಂಗ್ಸ್",
            "s6-f3": "ವಾರಂಟಿ ಜೊತೆ ಒರಿಜಿನಲ್ ಐಟಮ್ಸ್",
            "s6-link": "ಸಾಮಗ್ರಿಗಳನ್ನು ನೋಡಿ",
            "shop-badge": "ನಮ್ಮ ಅಂಗಡಿಯ ವಸ್ತುಗಳು",
            "shop-title": "ನಮ್ಮಲ್ಲಿ ಸಿಗುವ ಪ್ರಮುಖ ಸಾಮಗ್ರಿಗಳು",
            "shop-desc": "ಹೊಸ ಮನೆ ಕಟ್ತಿದೀರಾ? ನಮ್ಮಲ್ಲಿ ಎಲ್ಲಾ ರೀತಿಯ ಬ್ರ್ಯಾಂಡೆಡ್ ಎಲೆಕ್ಟ್ರಿಕಲ್ ವೈರಿಂಗ್ ಮೆಟೀರಿಯಲ್ಸ್ ಸಿಗುತ್ತವೆ.",
            "filter-all": "ಎಲ್ಲಾ ಐಟಮ್ಸ್",
            "filter-switches": "ಸ್ವಿಚ್ & ಪ್ಲೇಟ್ಸ್",
            "filter-wires": "ವೈರ್ & ಪೈಪ್ಸ್",
            "filter-lights": "LED & ಫ್ಯಾನ್ಸಿ ಲೈಟ್ಸ್",
            "filter-building": "ಬಿಲ್ಡಿಂಗ್ ಕರೆಂಟ್ ಐಟಮ್ಸ್",
            "p1-name": "ಮಾಡ್ಯುಲರ್ ಸ್ವಿಚ್ & ಪ್ಲೇಟ್ಸ್",
            "p1-desc": "ಟಾಪ್ ಕಂಪನಿಗಳ ಸುಂದರವಾದ ಡಿಸೈನ್ ಹೊಂದಿರುವ ಮಾಡ್ಯುಲರ್ ಸ್ವಿಚ್‌ಗಳು ಮತ್ತು ಬೋರ್ಡ್‌ಗಳು.",
            "p2-name": "ತಾಮ್ರದ ವೈರ್ & ಕೇಬಲ್ಸ್",
            "p2-desc": "ಶಾರ್ಟ್ ಸರ್ಕ್ಯೂಟ್ ತಡೆಯುವ ಸುರಕ್ಷಿತ ಕರೆಂಟ್ ವೈರ್‌ಗಳು ಮತ್ತು ಕೇಬಲ್‌ಗಳು.",
            "p3-name": "LED & ಡೆಕೋರೇಷನ್ ಲೈಟ್ಸ್",
            "p3-desc": "ಮನೆ ಚೆನ್ನಾಗಿ ಕಾಣಿಸಲು ಫ್ಯಾನ್ಸಿ ಎಲ್ಇಡಿ ಲೈಟ್ಸ್ ಮತ್ತು ಕಲರ್ ಕಲರ್ ಸೀರಿಯಲ್ ದೀಪಗಳು.",
            "p4-name": "ಕಟ್ಟಡ ವೈರಿಂಗ್ ಸಾಮಗ್ರಿಗಳು",
            "p4-desc": "ವೈರಿಂಗ್ ಪೈಪ್ಸ್, ಜಂಕ್ಷನ್ ಬಾಕ್ಸ್, DB ಬೋರ್ಡ್, MCB ಸ್ವಿಚ್ ಮತ್ತು ಇನ್ಸುಲೇಷನ್ ಟೇಪ್ಸ್.",
            "btn-inquire": "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕೇಳಿ",
            "about-badge": "ನಮ್ಮ ಬಗ್ಗೆ",
            "about-title": "ಕರೆಂಟ್ ಕೆಲಸ ಮತ್ತು ವಸ್ತುಗಳಿಗೆ ನಮ್ಮ ಮೇಲೆ ನಂಬಿಕೆ ಇಡಿ",
            "about-p1": "ಶ್ರೀ ದುರ್ಗಾಂಬಿಕಾ ಎಂಟರ್‌ಪ್ರೈಸಸ್ ದಾವಣಗೆರೆಯಲ್ಲಿ ಬಹಳ ವರ್ಷಗಳಿಂದ ಮನೆಗಳಿಗೆ ಅತ್ಯುತ್ತಮ ಕರೆಂಟ್ ಸರ್ವೀಸ್ ಹಾಗೂ ಹೋಲ್‌ಸೇಲ್ ರೇಟ್‌ನಲ್ಲಿ ಎಲೆಕ್ಟ್ರಿಕಲ್ ವಸ್ತುಗಳನ್ನು ನೀಡುತ್ತಿದೆ.",
            "about-p2": "ನಮ್ಮ ಪ್ರೊಪ್ರೈಟರ್ ಆದ ಬಸವರಾಜ್ ಅವರು ಸ್ವತಃ ಅನುಭವಿ ಎಲೆಕ್ಟ್ರೀಷಿಯನ್ ಆಗಿದ್ದು, ಅವರ ನೇತೃತ್ವದಲ್ಲಿ ನೂರಾರು ಮನೆಗಳಿಗೆ ವೈರಿಂಗ್, CCTV ಅಳವಡಿಕೆ ಮತ್ತು ಸೋಲಾರ್ ಫಿಟ್ಟಿಂಗ್ ಅನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಮಾಡಿಕೊಟ್ಟಿದ್ದೇವೆ.",
            "about-exp-years": "10+ ವರ್ಷ",
            "about-exp-text": "ದಾವಣಗೆರೆಯಲ್ಲಿ ಗ್ರಾಹಕರ ನಂಬಿಕೆ",
            "about-v1-title": "ಸುರಕ್ಷತೆ ಮೊದಲ ಆದ್ಯತೆ",
            "about-v1-desc": "ಮನೆಯ ಸುರಕ್ಷತೆಗಾಗಿ ಕ್ವಾಲಿಟಿ ವೈರ್ ಮತ್ತು ಎಂಸಿಬಿಗಳನ್ನು ಮಾತ್ರ ಬಳಸಿ ಕೆಲಸ ಮಾಡ್ತೀವಿ.",
            "about-v2-title": "ಜನರ ನಂಬಿಕೆ",
            "about-v2-desc": "ದಾವಣಗೆರೆ ಸುತ್ತಮುತ್ತಲಿನ ಗ್ರಾಹಕರಿಗೆ ಯಾವಾಗ್ಲೂ ಬೆಸ್ಟ್ ಮತ್ತು ಸ್ಪೀಡ್ ಸರ್ವೀಸ್ ಕೊಡ್ತೀವಿ.",
            "contact-badge": "ಸಂಪರ್ಕಿಸಿ",
            "contact-title": "ನಿಮ್ಮ ಕೆಲಸ ಅಥವಾ ಖರೀದಿ ಬಗ್ಗೆ ಮಾತನಾಡೋಣ",
            "contact-desc": "CCTV ರೇಟ್ ಬೇಕಾ? ಮನೆಯಲ್ಲಿ ಶಾರ್ಟ್ ಸರ್ಕ್ಯೂಟ್ ಆಗಿದ್ಯಾ? ಅಥವಾ ಎಲೆಕ್ಟ್ರಿಕಲ್ ಐಟಮ್ಸ್ ಖರೀದಿ ಮಾಡಬೇಕಾ? ನಮಗೆ ಕಾಲ್ ಮಾಡಿ ಅಥವಾ ವಾಟ್ಸಾಪ್ ಮಾಡಿ.",
            "contact-loc-title": "ನಮ್ಮ ಶಾಪ್ ಅಡ್ರೆಸ್",
            "contact-loc-desc": "ದುರ್ಗಾಂಬಿಕಾ ಟೆಂಪಲ್ ರೋಡ್, ದಾವಣಗೆರೆ, ಕರ್ನಾಟಕ - 577002",
            "contact-phone-title": "ಫೋನ್ ನಂಬರ್ಸ್",
            "contact-email-title": "ಇಮೇಲ್",
            "contact-hours-title": "ಶಾಪ್ ಟೈಮಿಂಗ್ಸ್",
            "contact-hours-desc": "ವಾರದ ಎಲ್ಲಾ ದಿನಗಳು: ಬೆಳಗ್ಗೆ 8:30 ರಿಂದ ರಾತ್ರಿ 9:00",
            "contact-hours-sub": "(ತುರ್ತು ಸರ್ವೀಸ್ ಯಾವಾಗ್ಲೂ ಇರುತ್ತೆ)",
            "form-title": "ಡೈರೆಕ್ಟ್ ಇನ್ಕ್ವೈರಿ",
            "form-desc": "ಕೆಳಗಿನ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ ಬಸವರಾಜ್ ಅವರಿಗೆ ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಕಳಿಸಿ!",
            "label-name": "ನಿಮ್ಮ ಹೆಸರು",
            "label-phone": "ಫೋನ್ ನಂಬರ್",
            "label-location": "ಏರಿಯಾ / ಅಡ್ರೆಸ್",
            "label-service": "ಯಾವ ಕೆಲಸ ಬೇಕು?",
            "label-message": "ಮೆಸೇಜ್ / ವಿವರಗಳು",
            "btn-submit-form": "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಇನ್ಕ್ವೈರಿ ಕಳಿಸಿ",
            "footer-desc": "ದಾವಣಗೆರೆಯಲ್ಲಿ ನಂಬಿಕಸ್ಥ ಎಲೆಕ್ಟ್ರಿಕಲ್ ಶಾಪ್ ಮತ್ತು ಅತ್ಯುತ್ತಮ ಕೆಲಸಗಳು. ಪ್ರೊಪ್ರೈಟರ್ ಬಸವರಾಜ್.",
            "footer-col1-title": "ನಮ್ಮ ಸರ್ವೀಸಸ್",
            "footer-col2-title": "ವಸ್ತುಗಳ ಕ್ಯಾಟಲಾಗ್",
            "footer-col3-title": "ಸಂಪರ್ಕಿಸಿ",
            "placeholder-name": "ನಿಮ್ಮ ಹೆಸರು ಬರೆಯಿರಿ",
            "placeholder-phone": "ನಿಮ್ಮ ಮೊಬೈಲ್ ನಂಬರ್",
            "placeholder-location": "ಉದಾ: MCC ಬಿ ಬ್ಲಾಕ್, ದಾವಣಗೆರೆ",
            "placeholder-message": "ನಿಮ್ಮ ಅವಶ್ಯಕತೆ ಬರೆಯಿರಿ (ಉದಾ: CCTV ಕೊಟೇಶನ್, ಸ್ವಿಚ್ ಬೋರ್ಡ್ ಪ್ರಾಬ್ಲಮ್...)",
            "opt-select": "-- ಕೆಲಸ ಆಯ್ಕೆ ಮಾಡಿ --",
            "opt-electrician": "ಕರೆಂಟ್ ಕೆಲಸಗಳು (Electrician)",
            "opt-cctv": "CCTV ಸೇಲ್ಸ್ & ಸರ್ವೀಸ್",
            "opt-solar": "ಸೋಲಾರ್ ಸಿಸ್ಟಮ್ ಇನ್‌ಸ್ಟಾಲೇಶನ್",
            "opt-battery": "ಬ್ಯಾಟರಿ / UPS ಇನ್ವರ್ಟರ್ಸ್",
            "opt-led": "LED ಲೈಟಿಂಗ್ಸ್ & ಡೆಕೋರೇಷನ್",
            "opt-shop-purchase": "ಅಂಗಡಿಯಿಂದ ಖರೀದಿ (Shop Purchase)",
            "opt-other": "ಇತರೇ ವಿಚಾರಣೆ",
            "nav-gallery": "ಗ್ಯಾಲರಿ",
            "gallery-badge": "ಶಾಪ್ ಫೋಟೋಗಳು",
            "gallery-title": "ನಮ್ಮ ಶಾಪ್ ಮತ್ತು ಗೋದಾಮಿನ ಫೋಟೋಗಳು",
            "gallery-desc": "ನಮ್ಮ ದಾವಣಗೆರೆಯ ಅಂಗಡಿಯ ಫೋಟೋಗಳು ಮತ್ತು ನಮ್ಮಲ್ಲಿರುವ ವೈರಿಂಗ್ ವೈರ್, ಸ್ವಿಚ್ ಬೋರ್ಡ್ ದಾಸ್ತಾನುಗಳ ಚಿತ್ರಗಳನ್ನು ಇಲ್ಲಿ ನೋಡಿ.",
            "gallery-filter-all": "ಎಲ್ಲಾ ಫೋಟೋಗಳು",
            "gallery-filter-showroom": "ಶಾಪ್ ಫೋಟೋಗಳು",
            "gallery-filter-stock": "ಸ್ಟಾಕ್ & ಗೋದಾಮು",
            "gallery-item-sh1": "ಶಾಪ್ ಕೌಂಟರ್",
            "gallery-item-sh2": "ಶಾಪ್ ಮುಂಭಾಗ",
            "gallery-item-sh3": "ಮೆಟೀರಿಯಲ್ ರಾಕ್ಸ್",
            "gallery-item-sh4": "ಸ್ವಿಚ್ ಡಿಸ್ಪ್ಲೇ ಬೋರ್ಡ್",
            "gallery-item-st1": "ಸ್ವಿಚ್ ಬೋರ್ಡ್ ಬಾಕ್ಸ್",
            "gallery-item-st2": "LED ಲೈಟ್ಸ್ ಸ್ಟಾಕ್",
            "gallery-item-st3": "ವೈರ್ & ಪೈಪ್ ಸ್ಟಾಕ್",
            "gallery-item-st4": "MCB & DB ಬೋರ್ಡ್ ಸ್ಟಾಕ್",
            "gallery-item-st5": "ಕಟ್ಟಡ ನಿರ್ಮಾಣ ವೈರಿಂಗ್ ಸಾಮಗ್ರಿ"
        }
    };

    // State
    let currentLang = localStorage.getItem("preferred_lang") || "en";

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

        // Toggle button text based on the active language, preserving icon
        if (langToggle) {
            const iconHtml = `<i data-lucide="languages"></i> `;
            if (lang === "en") {
                langToggle.innerHTML = `${iconHtml}<span>ಕನ್ನಡ</span>`;
            } else {
                langToggle.innerHTML = `${iconHtml}<span>English</span>`;
            }
            if (window.lucide) {
                window.lucide.createIcons();
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

    // Hero Title Language Auto-Rotation (5-second gap)
    const heroTitleRotate = document.getElementById("heroTitleRotate");
    if (heroTitleRotate) {
        const titles = {
            en: "Sri Durgambika Enterprises",
            kn: "ಶ್ರೀ ದುರ್ಗಾಂಬಿಕಾ ಎಂಟರ್‌ಪ್ರೈಸಸ್"
        };
        
        // Initialize with preferred/current language
        let rotatorLang = currentLang;
        heroTitleRotate.textContent = titles[rotatorLang];
        
        setInterval(() => {
            heroTitleRotate.classList.add("fade-out");
            
            setTimeout(() => {
                rotatorLang = rotatorLang === "en" ? "kn" : "en";
                heroTitleRotate.textContent = titles[rotatorLang];
                heroTitleRotate.classList.remove("fade-out");
            }, 600); // 600ms matches the CSS transition
        }, 5000); // 5 seconds gap
    }

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
