/* ==========================================================================
   A-1 HANDLOOMS - LUXURY WHOLESALE TEXTILES JS ENGINE (CATALOG RESTUCTURE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  // Initialize Lucide Icons
  lucide.createIcons();

  // Loader Handler
  const loader = document.getElementById('loader-wrapper');
  if (loader) {
    window.addEventListener('load', () => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    });
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 1200);
  }

  // Mobile Menu Drawer Handler
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const drawerClose = document.querySelector('.mobile-drawer-close');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  function openDrawer() {
    drawer.classList.add('open');
    drawerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (navToggle) navToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
  mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // Header Scroll Effect
  const header = document.querySelector('.sticky-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Back to Top Button Handler
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* --- Products Database (Restructured B2B Catalog) --- */
  const products = [
    // 1. Sarees & Saree Accessories
    {
      id: "p1",
      code: "SAR-001",
      name: "9 Ware Saree",
      category: "Sarees & Saree Accessories",
      fabric: "Silk Blend",
      width: "44",
      minPrice: 225,
      maxPrice: 600,
      priceRange: "₹225 – ₹600",
      moq: "50 pcs",
      sizes: ["Standard 9 Yards (8.2m)"],
      colors: ["Kashmiri Crimson", "Emerald Zari", "Royal Violet"],
      colorsHex: ["#9B1C31", "#097969", "#4B0082"],
      image: "assets/images/sarees_banner.jpg",
      description: "Authentic Maharashtra Nauvari (9-yard) saree fabric with golden zari borders. Soft silk blend weave providing structural durability and traditional luster.",
      composition: "60% Art Silk, 40% Cotton blend",
      packagingDetails: "Single carded poly packaging inside bundle blocks of 10 sarees.",
      washingInstructions: "Dry clean recommended. Hand wash in cold water with mild liquid soap."
    },
    {
      id: "p2_kp",
      code: "SAR-002-KP",
      name: "Kath Padar Saree",
      category: "Sarees & Saree Accessories",
      fabric: "Mulberry Silk",
      width: "44",
      minPrice: 300,
      maxPrice: 1800,
      priceRange: "₹300 – ₹1800",
      moq: "20 pcs",
      sizes: ["Standard 5.5m + Blouse Piece"],
      colors: ["Kath Padar Crimson Red", "Zari Gold", "Emerald Green"],
      colorsHex: ["#800020", "#D4AF37", "#097969"],
      image: "assets/images/kath_padar_saree.png",
      description: "Traditional Maharashtra Kath Padar sarees with broad contrasting borders. Highly detailed silk weave perfect for weddings and festivals.",
      composition: "Pure Art Silk, gold zari borders",
      packagingDetails: "Individual cardboard boxes wrapped in clear protective film.",
      washingInstructions: "Dry clean only. Store in muslin cloth wrappers."
    },
    {
      id: "p2_pt",
      code: "SAR-002-PT",
      name: "Paithani Saree",
      category: "Sarees & Saree Accessories",
      fabric: "Mulberry Silk",
      width: "44",
      minPrice: 800,
      maxPrice: 3000,
      priceRange: "₹800 – ₹3000",
      moq: "10 pcs",
      sizes: ["Standard 5.5m + Blouse Piece"],
      colors: ["Peacock Royal Blue", "Crimson Magenta", "Saffron Gold"],
      colorsHex: ["#1A237E", "#C2185B", "#FFA000"],
      image: "assets/images/paithani_saree.png",
      description: "Premium handloom Paithani sarees featuring the signature peacock pallu motif. Woven with dual-shaded pure mulberry silk yarn.",
      composition: "100% Mulberry Silk, gold-plated thread borders",
      packagingDetails: "Luxury velvet-lined wooden gift boxes.",
      washingInstructions: "Dry clean only. Avoid spraying perfume directly on zari."
    },
    {
      id: "p2_fc",
      code: "SAR-002-FC",
      name: "Fancy Designer Saree",
      category: "Sarees & Saree Accessories",
      fabric: "Georgette / Organza",
      width: "44",
      minPrice: 250,
      maxPrice: 1200,
      priceRange: "₹250 – ₹1200",
      moq: "30 pcs",
      sizes: ["Standard 5.5m + Blouse Piece"],
      colors: ["Mint Green", "Lavender Pink", "Aqua Blue"],
      colorsHex: ["#A5D6A7", "#E1BEE7", "#80DEEA"],
      image: "assets/images/fancy_saree.png",
      description: "Contemporary fancy sarees with delicate stone embroidery, sequins, and scalloped lace borders. Perfect for partywear and boutiques.",
      composition: "Premium Georgette / Viscose Organza mix",
      packagingDetails: "Single polybags in packs of 10 sorted patterns.",
      washingInstructions: "Dry clean recommended. Cool iron on reverse."
    },
    {
      id: "p2_dy",
      code: "SAR-002-DY",
      name: "Daily Use Saree",
      category: "Sarees & Saree Accessories",
      fabric: "Combed Cotton / Crepe",
      width: "44",
      minPrice: 65,
      maxPrice: 250,
      priceRange: "₹65 – ₹250",
      moq: "50 pcs",
      sizes: ["Standard 5.5m"],
      colors: ["Turmeric Yellow Floral", "Indigo Blue Checked", "Rose Pink Print"],
      colorsHex: ["#FFD54F", "#3F51B5", "#F06292"],
      image: "assets/images/daily_use_saree.png",
      description: "Lightweight, soft daily wear sarees featuring gorgeous floral prints. Easy to drape, breathable, and colorfast for everyday laundry.",
      composition: "60% Combed Cotton, 40% Crepe Polyester",
      packagingDetails: "Compressed bulk bundles of 25 sorted daily prints.",
      washingInstructions: "Machine wash cold with mild detergent."
    },
    {
      id: "p3",
      code: "SAR-003",
      name: "Saree Fall",
      category: "Sarees & Saree Accessories",
      fabric: "Pure Cotton",
      width: "5",
      minPrice: 9,
      maxPrice: 11.50,
      priceRange: "₹9 – ₹11.50",
      moq: "500 pcs",
      sizes: ["Standard length 2.25m"],
      colors: ["Matching Color Cards", "Ivory Beige", "Jet Black"],
      colorsHex: ["#D4AF37", "#F5F2EB", "#0D0D0D"],
      image: "https://images.unsplash.com/photo-1598048145816-43e512708307?auto=format&fit=crop&w=600&q=80",
      description: "Preshrunk, starch-finished cotton saree falls with reinforced borders. Excellent dye matching across 250+ catalog shades.",
      composition: "100% Cotton Rubia",
      packagingDetails: "Pack of 50 falls wrapped in waterproof plastic covers.",
      washingInstructions: "Machine wash warm, iron while damp."
    },

    // 2. Blouse Collection
    {
      id: "p4",
      code: "BLS-001",
      name: "Blouse Piece",
      category: "Blouse Collection",
      fabric: "Cotton Blend",
      width: "36",
      minPrice: 7,
      maxPrice: 150,
      priceRange: "₹7 – ₹150",
      moq: "100 pcs",
      sizes: ["Standard Cut (80cm)", "Jumbo Cut (1m)"],
      colors: ["Rose Pink", "Royal Blue", "Golden Mustard"],
      colorsHex: ["#FF69B4", "#4169E1", "#FFDB58"],
      image: "assets/images/blouse_piece.png",
      description: "High-grade Rubia and brocade blouse cut pieces. Rich thread count with anti-fraying double lock stitching.",
      composition: "80% Cotton, 20% Polyester blend",
      packagingDetails: "100 cuts bundled together in transparent bale sheets.",
      washingInstructions: "Machine wash warm, iron at medium temperatures."
    },
    {
      id: "p5",
      code: "BLS-002",
      name: "Ready-made Blouse",
      category: "Blouse Collection",
      fabric: "Silk Blend",
      width: "Free Size",
      minPrice: 40,
      maxPrice: 150,
      priceRange: "₹40 – ₹150",
      moq: "50 pcs",
      sizes: ["Size 34 - 42 Adjustable"],
      colors: ["Gold Brocade", "Velvet Maroon", "Silk Teal"],
      colorsHex: ["#DAA520", "#800000", "#008080"],
      image: "assets/images/readymade_blouse.png",
      description: "B2B catalog of ready-to-wear padded and non-padded blouses. Backed with extra side margins for easy boutique refitting.",
      composition: "Polyester Viscose Blend, inner cotton lining",
      packagingDetails: "Single hangers pack in plastic sleeves.",
      washingInstructions: "Gentle hand wash. Turn inside out before washing."
    },

    // 3. Suiting & Shirting
    {
      id: "p6",
      code: "SUT-001",
      name: "Pant Piece",
      category: "Suiting & Shirting",
      fabric: "Polyester Viscose",
      width: "58",
      minPrice: 50,
      maxPrice: 300,
      priceRange: "₹50 – ₹300",
      moq: "100 pcs",
      sizes: ["Standard Cut (1.2m)", "Custom Roll"],
      colors: ["Charcoal Grey", "Navy Blue", "Dark Khaki"],
      colorsHex: ["#36454F", "#1A2542", "#C2B280"],
      image: "assets/images/pant_piece.png",
      description: "Durable, wrinkle-free suiting twill. Outstanding crease retention and tear resistance for everyday corporate and executive trousers.",
      composition: "70% Polyester, 30% Viscose",
      packagingDetails: "Individually boxed cuts inside a bundle of 50 boxes.",
      washingInstructions: "Dry clean or gentle machine wash warm."
    },
    {
      id: "p7",
      code: "SRT-001",
      name: "Shirt Piece",
      category: "Suiting & Shirting",
      fabric: "Cotton / Blended",
      width: "58",
      minPrice: 50,
      maxPrice: 500,
      priceRange: "₹50 – ₹500",
      moq: "100 pcs",
      sizes: ["Standard Cut (2.25m)", "Lump Roll"],
      colors: ["Sky Blue Stripe", "Classic White", "Mint Checked"],
      colorsHex: ["#87CEEB", "#FFFFFF", "#E0F2F1"],
      image: "assets/images/shirt_piece.png",
      description: "Lightweight, breathable dobby and oxford shirting fabrics. Features easy-iron chemistry for uniform and corporate buyer demands.",
      composition: "60% Cotton, 40% Polyester",
      packagingDetails: "Folded flat cuts wrapped in crystal clear sleeves.",
      washingInstructions: "Machine wash warm, iron on medium setting."
    },
    {
      id: "p8",
      code: "SET-001",
      name: "Pant-Shirt Set",
      category: "Suiting & Shirting",
      fabric: "Blended Fabrics",
      width: "58",
      minPrice: 60,
      maxPrice: 500,
      priceRange: "₹60 – ₹500",
      moq: "50 sets",
      sizes: ["Cut Set (1.2m + 2.25m)"],
      colors: ["Grey & Blue", "Navy & White", "Khaki & Cream"],
      colorsHex: ["#5C6B73", "#1A2542", "#C2B280"],
      image: "assets/images/pant_shirt_set.png",
      description: "Corporate and wedding gifting coordinate combos. Neatly matched trouser and shirt fabrics inside executive gift packing boxes.",
      composition: "Polyester Cotton Twill blend",
      packagingDetails: "Luxury cardboard boxes inside a primary carton box.",
      washingInstructions: "Follow individual shirt/pant labels."
    },

    // 4. Towels & Napkins
    {
      id: "p9",
      code: "TWL-001",
      name: "Towel",
      category: "Towels & Napkins",
      fabric: "Pure Cotton",
      width: "30x60 in",
      minPrice: 40,
      maxPrice: 200,
      priceRange: "₹40 – ₹200",
      moq: "100 pcs",
      sizes: ["Standard Full Size"],
      colors: ["Soft Indigo", "Rose Pink", "Ivory White"],
      colorsHex: ["#7986CB", "#FF8A80", "#FFFFFF"],
      image: "assets/images/towels_banner.jpg",
      description: "Quick-dry, loop-spun cotton bath towels. Highly absorbent construction suited for standard retail and institutional supply.",
      composition: "100% Combed Cotton Terry",
      packagingDetails: "10 pieces compressed bundle pack inside protective bags.",
      washingInstructions: "Machine wash hot, tumble dry high."
    },
    {
      id: "p10",
      code: "TWL-002",
      name: "Turkish Towel",
      category: "Towels & Napkins",
      fabric: "Turkish Cotton",
      width: "30x60 in",
      minPrice: 40,
      maxPrice: 500,
      priceRange: "₹40 – ₹500",
      moq: "100 pcs",
      sizes: ["Large Bath Size"],
      colors: ["Slate Grey", "Beige Oat", "Ocean Teal"],
      colorsHex: ["#708090", "#D2B48C", "#008080"],
      image: "assets/images/turkish_towel.png",
      description: "Luxury heavy terry towels featuring zero-twist Turkish cotton loops. Remains fluffy and highly absorbant after institutional washings.",
      composition: "100% Pure Turkish Cotton",
      packagingDetails: "Single polybags in export cartons.",
      washingInstructions: "Machine wash warm, do not use fabric softeners."
    },
    {
      id: "p11",
      code: "TWL-003",
      name: "White Turkish Towel",
      category: "Towels & Napkins",
      fabric: "Turkish Cotton",
      width: "30x60 in",
      minPrice: 150,
      maxPrice: 300,
      priceRange: "₹150 – ₹300",
      moq: "50 pcs",
      sizes: ["Hospitality Standard Size"],
      colors: ["Bleached White"],
      colorsHex: ["#FFFFFF"],
      image: "assets/images/white_turkish_towel.jpg",
      description: "Vat-dyed, chlorine-resistant pure white towels. Custom manufactured for boutique hotels, gyms, and premium spa centers.",
      composition: "100% Bleached Terry Cotton",
      packagingDetails: "Compressed bulk bundles of 25 pieces.",
      washingInstructions: "Bleach safe, machine wash hot."
    },
    {
      id: "p12",
      code: "TWL-004",
      name: "Black Turkish Towel",
      category: "Towels & Napkins",
      fabric: "Turkish Cotton",
      width: "30x60 in",
      minPrice: 150,
      maxPrice: 300,
      priceRange: "₹150 – ₹300",
      moq: "50 pcs",
      sizes: ["Standard Salon Size"],
      colors: ["Jet Black"],
      colorsHex: ["#000000"],
      image: "assets/images/black_turkish_towel.png",
      description: "Colorfast, salon-bleach resistant deep black Terry towels. Ideal for professional spas and high-end hair salons.",
      composition: "100% Indanthrene Dyed Cotton",
      packagingDetails: "25 towels shrink wrapped in clear sheets.",
      washingInstructions: "Machine wash warm with like colors."
    },
    {
      id: "p13",
      code: "TWL-005",
      name: "Baby Towel",
      category: "Towels & Napkins",
      fabric: "Soft Terry Cotton",
      width: "24x48 in",
      minPrice: 35,
      maxPrice: 150,
      priceRange: "₹35 – ₹150",
      moq: "100 pcs",
      sizes: ["Small Hooded / Plain"],
      colors: ["Soft Mint", "Baby Pink", "Lemon Yellow"],
      colorsHex: ["#A5D6A7", "#F8BBD0", "#FFF59D"],
      image: "assets/images/baby_towel.png",
      description: "Super soft, zero-twist organic terry towels designed specifically for sensitive infant skin. High absorption speed.",
      composition: "100% Organic Cotton Terry",
      packagingDetails: "Individual box pack with cartoon labels.",
      washingInstructions: "Gentle baby cycle, mild detergent only."
    },
    {
      id: "p14",
      code: "TWL-006",
      name: "Napkin Towel Set",
      category: "Towels & Napkins",
      fabric: "Terry Cotton",
      width: "Multi",
      minPrice: 290,
      maxPrice: 500,
      priceRange: "₹290 – ₹500",
      moq: "20 sets",
      sizes: ["3-Piece Combo (Bath, Hand, Face)"],
      colors: ["Warm Cocoa Combo", "Pebble Grey Combo"],
      colorsHex: ["#5D4037", "#9E9E9E"],
      image: "assets/images/napkin_towel_set.png",
      description: "A coordinated 3-piece hospitality towel bundle (Bath, Hand, Face towel) matching color tones for luxury resorts and guest homes.",
      composition: "100% Ring Spun Cotton Terry",
      packagingDetails: "Ribbon tied boxes ready for B2B retail display.",
      washingInstructions: "Machine wash warm, tumble dry low."
    },
    {
      id: "p15",
      code: "NPK-001",
      name: "Gents Napkin",
      category: "Towels & Napkins",
      fabric: "Pure Cotton",
      width: "12x12 in",
      minPrice: 102,
      maxPrice: 600,
      priceRange: "₹102 – ₹600 per dozen",
      moq: "10 dozens",
      sizes: ["Pack of 12 pcs"],
      colors: ["Checked Mix Cards", "Plain White"],
      colorsHex: ["#7986CB", "#FFFFFF"],
      image: "assets/images/gents_napkin.png",
      description: "Thick cotton pocket napkins. Fine hems with classic checked and striped configurations. Extremely durable.",
      composition: "100% Combed Cotton",
      packagingDetails: "Pack of 12 rolls wrapped in cardboard pockets.",
      washingInstructions: "Machine wash hot, warm iron."
    },
    {
      id: "p16",
      code: "NPK-002",
      name: "Ladies Napkin",
      category: "Towels & Napkins",
      fabric: "Soft Cotton",
      width: "10x10 in",
      minPrice: 72,
      maxPrice: 300,
      priceRange: "₹72 – ₹300 per dozen",
      moq: "10 dozens",
      sizes: ["Pack of 12 pcs"],
      colors: ["Pastel Floral Mix"],
      colorsHex: ["#FF8A80"],
      image: "assets/images/ladies_napkin.png",
      description: "Lightweight, soft pastel cotton handkerchiefs featuring subtle scalloped embroidery corners.",
      composition: "100% Pure Fine Cotton",
      packagingDetails: "Hanger box containing 12 sorted napkins.",
      washingInstructions: "Hand wash warm, warm iron."
    },

    // 5. Handkerchiefs & Gamcha
    {
      id: "p17",
      code: "GMC-001",
      name: "Gamcha",
      category: "Handkerchiefs & Gamcha",
      fabric: "Pure Cotton",
      width: "36x72 in",
      minPrice: 10,
      maxPrice: 300,
      priceRange: "₹10 – ₹300",
      moq: "100 pcs",
      sizes: ["Standard Length 1.8m"],
      colors: ["Checked Red-Yellow", "Orange Checked"],
      colorsHex: ["#D32F2F", "#FF8F00"],
      image: "assets/images/handkerchiefs_banner.jpg",
      description: "Traditional hand-woven checked gamchas. Made of absorbent light-twist cotton yarns, serving agricultural and manual work sectors.",
      composition: "100% Local Handloom Cotton",
      packagingDetails: "Compressed bundles of 50 pieces.",
      washingInstructions: "First wash separately in cold water."
    },
    {
      id: "p18",
      code: "RML-001",
      name: "Gents Rumal",
      category: "Handkerchiefs & Gamcha",
      fabric: "Cotton",
      width: "16x16 in",
      minPrice: 81,
      maxPrice: 1000,
      priceRange: "₹81 – ₹1000 per dozen",
      moq: "10 dozens",
      sizes: ["Pack of 12 pcs"],
      colors: ["Satin Stripes White", "Executive Grey Checked"],
      colorsHex: ["#FFFFFF", "#708090"],
      image: "assets/images/gents_rumal.png",
      description: "Premium large executive pocket handkerchiefs with satin borders. Soft mercerized cotton sheen.",
      composition: "100% Egyptian Giza Cotton",
      packagingDetails: "Exquisite window-face boxes of 12.",
      washingInstructions: "Machine wash warm, hot iron with starch."
    },
    {
      id: "p19",
      code: "RML-002",
      name: "Scarf Rumal",
      category: "Handkerchiefs & Gamcha",
      fabric: "Cotton / Rayon",
      width: "22x22 in",
      minPrice: 20,
      maxPrice: 200,
      priceRange: "₹20 – ₹200",
      moq: "50 pcs",
      sizes: ["Boutique Scarf Cut"],
      colors: ["Paisley Prints Mix", "Traditional Bandhani Red"],
      colorsHex: ["#3F51B5", "#B22222"],
      image: "assets/images/scarf_rumal.png",
      description: "Fashionable square bandana scarves. Multi-use soft fabric, ideal as face wraps or hair styling bands.",
      composition: "50% Viscose Rayon, 50% Combed Cotton",
      packagingDetails: "Loose poly packs of 10 sorted designs.",
      washingInstructions: "Hand wash cold, warm iron."
    },

    // 6. Bedsheets & Bedding
    {
      id: "p20",
      code: "BDS-001",
      name: "3D Bedsheet",
      category: "Bedsheets & Bedding",
      fabric: "Microfiber / Cotton",
      width: "90x100 in",
      minPrice: 65,
      maxPrice: 1000,
      priceRange: "₹65 – ₹1000",
      moq: "50 pcs",
      sizes: ["Double Bed King Size"],
      colors: ["Modern Geo Print", "3D Landscape print"],
      colorsHex: ["#36454F", "#0047AB"],
      image: "assets/images/bedsheets_banner.jpg",
      description: "Pigment printed bedsheets with high-definition 3D shadow designs. Soft brushing finish for comfort.",
      composition: "80% Microfiber, 20% Cotton blend",
      packagingDetails: "Book-fold pack inside PVC zipper bags with graphic inlay sheets.",
      washingInstructions: "Machine wash cold, do not tumble dry."
    },
    {
      id: "p21",
      code: "BDS-002",
      name: "Jaipuri Bedsheet",
      category: "Bedsheets & Bedding",
      fabric: "Pure Cotton",
      width: "108x108 in",
      minPrice: 300,
      maxPrice: 1500,
      priceRange: "₹300 – ₹1500",
      moq: "20 pcs",
      sizes: ["Super King Size Double"],
      colors: ["Indigo Block Print", "Sanganeri Floral Gold"],
      colorsHex: ["#1A237E", "#DAA520"],
      image: "assets/images/jaipuri_bedsheet.png",
      description: "Traditional Jaipuri hand-printed bedsheets with matching pillow covers. High-grade thread counts ensure long life.",
      composition: "100% Cambric Cotton (240 TC)",
      packagingDetails: "B2B cardboard boxed boxes.",
      washingInstructions: "First wash in saltwater to bind vegetable dyes. Do not dry in direct sun."
    },
    {
      id: "p22",
      code: "BDS-003",
      name: "Comfort",
      category: "Bedsheets & Bedding",
      fabric: "Glazed Cotton",
      width: "90x100 in",
      minPrice: 210,
      maxPrice: 1500,
      priceRange: "₹210 – ₹1500",
      moq: "20 pcs",
      sizes: ["Double Bed Standard"],
      colors: ["Golden Stripes", "Silver Satin grids"],
      colorsHex: ["#DAA520", "#C0C0C0"],
      image: "assets/images/comfort_bedsheet.png",
      description: "Satin-finished premium cotton bedding rolls. Silky smooth skin feel, suited for luxury hotels and wedding decor orders.",
      composition: "100% Glazed Cotton (300 TC)",
      packagingDetails: "Individually boxed gift packing.",
      washingInstructions: "Machine wash warm, iron on reverse."
    },
    {
      id: "p23",
      code: "BDS-004",
      name: "Comfort Bedsheet Set",
      category: "Bedsheets & Bedding",
      fabric: "Glazed Cotton",
      width: "King Size Combo",
      minPrice: 480,
      maxPrice: 1500,
      priceRange: "₹480 – ₹1500",
      moq: "10 sets",
      sizes: ["4-Piece Set (Sheet, Duvet cover, 2 Pillow covers)"],
      colors: ["Champagne Cream Set", "Navy Blue Set"],
      colorsHex: ["#FFFDD0", "#1B2A4A"],
      image: "assets/images/comfort_bedsheet.png",
      description: "Coordinated luxury bedsheet, elastic fitted sheets, and envelope duvet covers. Styled for B2B hospitality clients.",
      composition: "100% Satin Glazed Cotton",
      packagingDetails: "Premium cardboard suitcases with handles.",
      washingInstructions: "Machine wash hot, iron medium."
    },

    // 7. Blankets & Dohars
    {
      id: "p24",
      code: "BLK-001",
      name: "Blanket",
      category: "Blankets & Dohars",
      fabric: "Fleece / Woolen",
      width: "60x90 in",
      minPrice: 70,
      maxPrice: 1500,
      priceRange: "₹70 – ₹1500",
      moq: "50 pcs",
      sizes: ["Single Bed Size"],
      colors: ["Cocoa Brown", "Crimson Red", "Navy Blue"],
      colorsHex: ["#5D4037", "#B22222", "#1E3A5F"],
      image: "assets/images/blankets_banner.jpg",
      description: "Thick thermal fleece blankets. Provides heavy warmth with lightweight properties, popular for budget hotels.",
      composition: "100% Polyester Micro-Fleece",
      packagingDetails: "Compressed roll packing in large transport packs.",
      washingInstructions: "Machine wash cold, gentle cycle, do not iron."
    },
    {
      id: "p25",
      code: "BLK-002",
      name: "Blanket Set",
      category: "Blankets & Dohars",
      fabric: "Premium Sherpa",
      width: "90x100 in",
      minPrice: 2000,
      maxPrice: 7000,
      priceRange: "₹2000 – ₹7000",
      moq: "5 sets",
      sizes: ["Double Bed King Set"],
      colors: ["Cream & Slate Set", "Charcoal Set"],
      colorsHex: ["#F5F2EB", "#2E2E2E"],
      image: "assets/images/blanket_set.png",
      description: "Luxury winter bed sets featuring double-sided Sherpa curly fleece drapes. Heavy weight comfort.",
      composition: "100% Micro-Sherpa Polyester",
      packagingDetails: "Luxury zippered PVC luggage packaging.",
      washingInstructions: "Dry clean only, tumble dry low."
    },
    {
      id: "p26",
      code: "DOH-001",
      name: "Rajasthani Single Bed Dohar",
      category: "Blankets & Dohars",
      fabric: "Cotton Cambric",
      width: "60x90 in",
      minPrice: 400,
      maxPrice: 950,
      priceRange: "₹400 – ₹950",
      moq: "30 pcs",
      sizes: ["Standard Single Bed"],
      colors: ["Hand-block Indigo Floral", "Mughal Jaal Print"],
      colorsHex: ["#1E2A4A", "#D4AF37"],
      image: "assets/images/single_dohar.jpg",
      description: "Traditional 3-layer light summer blankets. Core organic flannel cotton layer sandwiched between fine cotton cambric sheets.",
      composition: "100% Organic Cotton throughout",
      packagingDetails: "Individually wrapped poly sleeves inside bundle boxes of 10.",
      washingInstructions: "Machine wash cold, tumble dry gentle."
    },
    {
      id: "p27",
      code: "DOH-002",
      name: "Rajasthani Double Bed Dohar",
      category: "Blankets & Dohars",
      fabric: "Cotton Cambric",
      width: "90x100 in",
      minPrice: 400,
      maxPrice: 950,
      priceRange: "₹400 – ₹950",
      moq: "30 pcs",
      sizes: ["Double Bed King Size"],
      colors: ["Hand-block Indigo Floral", "Sanganeri Booti Print"],
      colorsHex: ["#1E2A4A", "#DAA520"],
      image: "assets/images/double_dohar.png",
      description: "Extra wide 3-layer summer dohars with traditional Rajasthani piping borders. Natural thermal balancing.",
      composition: "100% Combed Cotton",
      packagingDetails: "Bundle packs of 10 inside woven bags.",
      washingInstructions: "Machine wash cold, wash dark colors separately."
    },
    {
      id: "p28",
      code: "BLK-003",
      name: "Baby Blanket Set",
      category: "Blankets & Dohars",
      fabric: "Soft Flannel",
      width: "40x40 in",
      minPrice: 250,
      maxPrice: 500,
      priceRange: "₹250 – ₹500",
      moq: "50 sets",
      sizes: ["Newborn / Infant Size"],
      colors: ["Teddy Blue", "Bunny Pink", "Cloud Yellow"],
      colorsHex: ["#90CAF9", "#F48FB1", "#FFF59D"],
      image: "assets/images/baby_blanket_set.png",
      description: "Ultra-soft baby wrapper blankets with matching booties and pillows. Certified lead-free organic colors.",
      composition: "100% Hypoallergenic Fleece Polyester",
      packagingDetails: "Premium transparent suitcase packaging.",
      washingInstructions: "Machine wash cold, baby cycles only."
    },

    // 8. Curtains & Home Furnishing
    {
      id: "p29",
      code: "CUR-001",
      name: "Curtains (Parda)",
      category: "Curtains & Home Furnishing",
      fabric: "Polyester Jacquard",
      width: "58x84 in",
      minPrice: 75,
      maxPrice: 500,
      priceRange: "₹75 – ₹500",
      moq: "50 pcs",
      sizes: ["Standard 7 Feet Door", "5 Feet Window", "9 Feet Long"],
      colors: ["Antique Gold Damask", "Silver Cream"],
      colorsHex: ["#DAA520", "#FFFDD0"],
      image: "assets/images/curtains.png",
      description: "Thick jacquard parda curtains with pre-installed rust-proof steel eyelets. Thermal insulation and blackout backing.",
      composition: "100% Polyester Jacquard weave",
      packagingDetails: "Cardboard insert rolls inside single poly packs.",
      washingInstructions: "Machine wash cold on gentle settings, warm iron."
    },
    {
      id: "p30",
      code: "SOF-001",
      name: "Sofa Cover",
      category: "Curtains & Home Furnishing",
      fabric: "Chenille / Polyester",
      width: "Standard 5-Seater",
      minPrice: 240,
      maxPrice: 2000,
      priceRange: "₹240 – ₹2000",
      moq: "10 sets",
      sizes: ["3+1+1 Seater Combo"],
      colors: ["Velvet Maroon", "Royal Navy Blue", "Earthy Beige"],
      colorsHex: ["#800000", "#1E3A5F", "#D2B48C"],
      image: "assets/images/sofa_cover.png",
      description: "Anti-slip heavy chenille sofa covers with premium lace borders. Enhances furniture life in high-traffic hotels.",
      composition: "80% Polyester, 20% Acrylic Chenille",
      packagingDetails: "PVC zipper bags inside bundle cases.",
      washingInstructions: "Dry clean recommended, or gentle hand wash."
    },
    {
      id: "p31",
      code: "SOF-002",
      name: "Elastic Sofa Cover",
      category: "Curtains & Home Furnishing",
      fabric: "Spandex Blend",
      width: "Universal Stretch",
      minPrice: 750,
      maxPrice: 1850,
      priceRange: "₹750 – ₹1850",
      moq: "10 sets",
      sizes: ["1/2/3/4 Seater Options"],
      colors: ["Slate Grey", "Midnight Black", "Camel Brown"],
      colorsHex: ["#708090", "#0D0D0D", "#C19A6B"],
      image: "assets/images/elastic_sofa_cover.png",
      description: "Highly elastic, form-fitting sofa slipcovers. Rejuvenates old sofas, fully dust-proof and liquid-repellant.",
      composition: "92% Polyester, 8% Spandex Stretch",
      packagingDetails: "Boxed packs with foam rods for fitting.",
      washingInstructions: "Machine wash cold, do not bleach."
    },
    {
      id: "p32",
      code: "CSH-001",
      name: "Cushion Cover",
      category: "Curtains & Home Furnishing",
      fabric: "Cotton / Velvet",
      width: "16x16 in",
      minPrice: 165,
      maxPrice: 550,
      priceRange: "₹165 – ₹550",
      moq: "100 pcs",
      sizes: ["Square Size 16x16"],
      colors: ["Gold Brocade Mix", "Teal Velvet", "Jute Beige"],
      colorsHex: ["#DAA520", "#008080", "#E5D3B3"],
      image: "assets/images/cushion_cover.png",
      description: "Premium cushion shell slips with hidden zipper closures. Styled with piping edges for a luxury look.",
      composition: "Cotton Velvet / Jacquard blends",
      packagingDetails: "10 cushion covers bundled in clear sleeves.",
      washingInstructions: "Wash inside out, cool iron."
    },
    {
      id: "p33",
      code: "CSH-002",
      name: "Cushion Pillow Set",
      category: "Curtains & Home Furnishing",
      fabric: "Cotton / Polyester",
      width: "Multi Combo",
      minPrice: 410,
      maxPrice: 900,
      priceRange: "₹410 – ₹900",
      moq: "20 sets",
      sizes: ["5-Piece Cushion Combo Set"],
      colors: ["Emerald Gold combo", "Royal Burgundy combo"],
      colorsHex: ["#004B49", "#6B1D2F"],
      image: "assets/images/cushion_pillow_set.jpg",
      description: "A coordinated 5-piece accent cushion cover set designed to match contemporary B2B hotel lounge setups.",
      composition: "Polyester Jacquard / Velvet mix",
      packagingDetails: "Boxed combos ready for gifting sales.",
      washingInstructions: "Gentle wash cycle only."
    },
    {
      id: "p34",
      code: "PIL-001",
      name: "Pillow",
      category: "Curtains & Home Furnishing",
      fabric: "Microfiber Filled",
      width: "17x27 in",
      minPrice: 160,
      maxPrice: 780,
      priceRange: "₹160 – ₹780",
      moq: "50 pcs",
      sizes: ["Standard Hotel Size"],
      colors: ["Pristine White Stripe"],
      colorsHex: ["#FFFFFF"],
      image: "assets/images/pillow.png",
      description: "Thick microfiber pillows with bounce-back technology. Oeko-Tex cotton shell handles hospitality moisture levels.",
      composition: "100% Hollow Conjugated Silconized Fiber",
      packagingDetails: "Vacuum compressed flat rolls to reduce logistics shipping costs.",
      washingInstructions: "Machine wash cold, spin dry thoroughly."
    },
    {
      id: "p35",
      code: "WMC-001",
      name: "Washing Machine Cover",
      category: "Curtains & Home Furnishing",
      fabric: "Waterproof PVC",
      width: "Universal Fit",
      minPrice: 280,
      maxPrice: 500,
      priceRange: "₹280 – ₹500",
      moq: "30 pcs",
      sizes: ["Top Load", "Front Load Options"],
      colors: ["Grey Floral Print", "Brown Geometric Print"],
      colorsHex: ["#9E9E9E", "#5D4037"],
      image: "assets/images/washing_machine_cover.png",
      description: "Heavy-duty waterproof PVC sheets with elastic closures and zipper openings, preventing mechanical weather damage.",
      composition: "100% Heavy Vinyl PVC",
      packagingDetails: "PVC envelopes with hanger hooks.",
      washingInstructions: "Wipe with damp cloth only, do not wash."
    },
    {
      id: "p36",
      code: "DTC-001",
      name: "Dinner Table Cover",
      category: "Curtains & Home Furnishing",
      fabric: "PVC / Cotton Blend",
      width: "60x90 in",
      minPrice: 55,
      maxPrice: 500,
      priceRange: "₹55 – ₹500",
      moq: "50 pcs",
      sizes: ["4-Seater", "6-Seater Options"],
      colors: ["Lace Border Transparent", "Gold Damask Tablecloth"],
      colorsHex: ["#FFFFFF", "#D4AF37"],
      image: "assets/images/dinner_table_cover.png",
      description: "Wipe-clean transparent and woven table sheets. Scuff-resistant design ideal for restaurant and banquet clients.",
      composition: "PVC vinyl coating over polyester mesh",
      packagingDetails: "Hanger poly packaging bundles of 10.",
      washingInstructions: "Wipe with clean wet cloth."
    },
    {
      id: "p37",
      code: "MAT-001",
      name: "Doormat",
      category: "Curtains & Home Furnishing",
      fabric: "Coir / Cotton Terry",
      width: "16x24 in",
      minPrice: 18,
      maxPrice: 500,
      priceRange: "₹18 – ₹500",
      moq: "200 pcs",
      sizes: ["Standard Entry Size"],
      colors: ["Charcoal Grey Mat", "Cocoa Welcome Mat"],
      colorsHex: ["#2E2E2E", "#5D4037"],
      image: "assets/images/doormat.png",
      description: "High density scuff doormats featuring vulcanized non-slip rubber backings. Scrapes mud and water instantly.",
      composition: "Rubber backing with Coir/Cotton face",
      packagingDetails: "Compressed heavy crates of 100 doormats.",
      washingInstructions: "Hose wash, air dry."
    },

    // 9. Carpets & Mats
    {
      id: "p38",
      code: "CAR-001",
      name: "Galicha",
      category: "Carpets & Mats",
      fabric: "Chenille Velvet",
      width: "4x6, 5x7, 6x9, 9x12",
      minPrice: 180,
      maxPrice: 1500,
      priceRange: "₹180 – ₹1500",
      moq: "10 pcs",
      sizes: ["4×6 ft", "5×7 ft", "6×9 ft", "9×12 ft"],
      colors: ["Kashmiri Persian Red", "Royal Ivory Gold"],
      colorsHex: ["#800020", "#FFFDD0"],
      image: "assets/images/galicha.png",
      description: "Thick woven Chenille Galicha rugs. Replicates intricate Persian silk rug designs with durable floor grip threads.",
      composition: "80% Chenille Viscose, 20% Polyester back",
      packagingDetails: "Rolled and double jute sacked for transport safety.",
      washingInstructions: "Vacuum clean regularly, dry clean only."
    },
    {
      id: "p39",
      code: "ASN-001",
      name: "Assan",
      category: "Carpets & Mats",
      fabric: "Woven Wool / Acrylic",
      width: "24x24 in",
      minPrice: 120,
      maxPrice: 900,
      priceRange: "₹120 – ₹900 per dozen",
      moq: "10 dozens",
      sizes: ["Square Seating size"],
      colors: ["Crimson Red", "Saffron Orange", "Teal Blue"],
      colorsHex: ["#B22222", "#FF5722", "#008080"],
      image: "assets/images/assan.png",
      description: "Thick woven floor sitting mats. Providing clean thermal isolation on marble surfaces.",
      composition: "Acrylic Wool blend",
      packagingDetails: "Bundle packs of 12 rolls wrapped in poly covers.",
      washingInstructions: "Hand wash cold."
    },
    {
      id: "p40",
      code: "ASN-002",
      name: "Pooja Assan",
      category: "Carpets & Mats",
      fabric: "Velvet / Brocade",
      width: "18x18 in",
      minPrice: 48,
      maxPrice: 1020,
      priceRange: "₹48 – ₹1020 per dozen",
      moq: "10 dozens",
      sizes: ["Mandir Seating Mat"],
      colors: ["Sacred Red with Gold Lace", "Saffron Gold"],
      colorsHex: ["#800020", "#FFA726"],
      image: "assets/images/pooja_assan.png",
      description: "Luxury velvet pooja room seating mats. Bordered with golden zari zardosi lace details.",
      composition: "Polyester Velvet warp, gold laces",
      packagingDetails: "Transparent bags of 12.",
      washingInstructions: "Gentle wipe clean, dry clean only."
    },

    // 10. Dupattas & Stoles
    {
      id: "p41",
      code: "DPT-001",
      name: "Ladies Dupatta",
      category: "Dupattas & Stoles",
      fabric: "Chiffon / Georgette",
      width: "44",
      minPrice: 25,
      maxPrice: 70,
      priceRange: "₹25 – ₹70",
      moq: "200 pcs",
      sizes: ["Length 2.25m"],
      colors: ["Solid White", "Ruby Red", "Royal Violet"],
      colorsHex: ["#FFFFFF", "#E91E63", "#7F00FF"],
      image: "assets/images/ladies_dupatta.png",
      description: "Fine, soft chiffon stoles with double gold stripe borders. Drapes elegantly on casual and formal wear.",
      composition: "100% Viscose Chiffon",
      packagingDetails: "Loose packages of 50 sorted colors.",
      washingInstructions: "Hand wash cold, dry flat."
    },
    {
      id: "p42",
      code: "STL-001",
      name: "Ladies Stole",
      category: "Dupattas & Stoles",
      fabric: "Cotton / Viscose",
      width: "28x72 in",
      minPrice: 30,
      maxPrice: 150,
      priceRange: "₹30 – ₹150",
      moq: "100 pcs",
      sizes: ["Standard Stole Size"],
      colors: ["Rose Peach", "Charcoal Black", "Olive Green"],
      colorsHex: ["#FFDAB9", "#111111", "#556B2F"],
      image: "assets/images/ladies_stole.png",
      description: "Lightweight summer coordinates stoles. Features micro-fringing details for a modern look.",
      composition: "100% Viscose Visco-cotton",
      packagingDetails: "B2B cardboard packs.",
      washingInstructions: "Gentle wash cycle, iron warm."
    },
    {
      id: "p43",
      code: "DPT-002",
      name: "Mahakal Gents Dupatta",
      category: "Dupattas & Stoles",
      fabric: "Pure Cotton",
      width: "40x80 in",
      minPrice: 58,
      maxPrice: 100,
      priceRange: "₹58 – ₹100",
      moq: "100 pcs",
      sizes: ["Length 2m"],
      colors: ["Sacred Saffron with Red Prints"],
      colorsHex: ["#FF5722"],
      image: "assets/images/mahakal_gents_dupatta.png",
      description: "Traditional saffron cotton dupatta printed with sacred 'Om Mahakal' typography symbols. Popular B2B pilgrimage demand.",
      composition: "100% Handloom Cotton",
      packagingDetails: "100 pieces bundled inside primary cartons.",
      washingInstructions: "First wash separately, hand wash only."
    },
    {
      id: "p44",
      code: "DPT-003",
      name: "Jai Shree Ram Gents Dupatta",
      category: "Dupattas & Stoles",
      fabric: "Pure Cotton",
      width: "40x80 in",
      minPrice: 40,
      maxPrice: 80,
      priceRange: "₹40 – ₹80",
      moq: "100 pcs",
      sizes: ["Length 2m"],
      colors: ["Bright Saffron Gold"],
      colorsHex: ["#FFA726"],
      image: "assets/images/jaishreeram_gents_dupatta.png",
      description: "Religious saffron cotton stole printed with 'Jai Shree Ram' devanagari script. Durable inks.",
      composition: "100% Cotton Handloom",
      packagingDetails: "Bale bundles of 50.",
      washingInstructions: "Hand wash only in cold water."
    },
    {
      id: "p45",
      code: "DPT-004",
      name: "Orange Dupatta",
      category: "Dupattas & Stoles",
      fabric: "Cotton / Polyester",
      width: "44x90 in",
      minPrice: 30,
      maxPrice: 100,
      priceRange: "₹30 – ₹100",
      moq: "100 pcs",
      sizes: ["Standard Length 2.25m"],
      colors: ["Bright Saffron Orange"],
      colorsHex: ["#FF6D00"],
      image: "assets/images/orange_dupatta.png",
      description: "Solid orange color religious stoles, woven with breathable yarns. Fast color dye matching.",
      composition: "65% Cotton, 35% Polyester",
      packagingDetails: "Poly wrapping in packs of 20.",
      washingInstructions: "Machine wash warm."
    },
    {
      id: "p46",
      code: "DPT-005",
      name: "Blue Dupatta",
      category: "Dupattas & Stoles",
      fabric: "Cotton / Polyester",
      width: "44x90 in",
      minPrice: 30,
      maxPrice: 100,
      priceRange: "₹30 – ₹100",
      moq: "100 pcs",
      sizes: ["Standard Length 2.25m"],
      colors: ["Royal Blue"],
      colorsHex: ["#2962FF"],
      image: "assets/images/blue_dupatta.png",
      description: "Solid blue color dupatta cuts. Suited for festival wear, uniform coordinations, and ritual wear bulk orders.",
      composition: "65% Cotton, 35% Polyester",
      packagingDetails: "50 pieces bundled package.",
      washingInstructions: "Machine wash warm."
    },
    {
      id: "p47",
      code: "DPT-006",
      name: "Black Dupatta",
      category: "Dupattas & Stoles",
      fabric: "Cotton / Polyester",
      width: "44x90 in",
      minPrice: 30,
      maxPrice: 100,
      priceRange: "₹30 – ₹100",
      moq: "100 pcs",
      sizes: ["Standard Length 2.25m"],
      colors: ["Jet Black"],
      colorsHex: ["#000000"],
      image: "assets/images/black_dupatta.png",
      description: "Vat-dyed deep black coordinates dupatta stoles. High thread density prevents see-through when folded.",
      composition: "65% Cotton, 35% Polyester",
      packagingDetails: "Bags of 50 cuts.",
      washingInstructions: "Wash warm with similar dark shades."
    },
    {
      id: "p48",
      code: "DPT-007",
      name: "Yellow Dupatta",
      category: "Dupattas & Stoles",
      fabric: "Cotton / Polyester",
      width: "44x90 in",
      minPrice: 30,
      maxPrice: 100,
      priceRange: "₹30 – ₹100",
      moq: "100 pcs",
      sizes: ["Standard Length 2.25m"],
      colors: ["Turmeric Yellow"],
      colorsHex: ["#FFD600"],
      image: "assets/images/yellow_dupatta.png",
      description: "Sacred turmeric yellow stoles, widely booked during festival wedding seasons and temple programs.",
      composition: "65% Cotton, 35% Polyester",
      packagingDetails: "Poly packages of 20 pieces.",
      washingInstructions: "Machine wash cold, do not bleach."
    },

    // 11. Shawls & Winter Collection
    {
      id: "p49",
      code: "SHL-001",
      name: "Shawl",
      category: "Shawls & Winter Collection",
      fabric: "Acrylic Wool",
      width: "40x80 in",
      minPrice: 45,
      maxPrice: 1000,
      priceRange: "₹45 – ₹1000",
      moq: "50 pcs",
      sizes: ["Standard Full Wrap"],
      colors: ["Himachali Checked", "Kashmiri Palla Cream"],
      colorsHex: ["#B22222", "#FFFDD0"],
      image: "assets/images/winter_shawl.png",
      description: "Heavyweight winter shawls featuring detailed jacquard weave patterns. Soft cashmere feel wool replica.",
      composition: "100% Soft Acrylic Wool",
      packagingDetails: "Zip-lock envelopes, packed in heavy carton blocks.",
      washingInstructions: "Dry clean only, do not hand wring."
    },

    // 12. Lungi Collection
    {
      id: "p50",
      code: "LNG-001",
      name: "Lungi (2m & 2.5m)",
      category: "Lungi Collection",
      fabric: "Pure Cotton",
      width: "50",
      minPrice: 85,
      maxPrice: 200,
      priceRange: "₹85 – ₹200",
      moq: "100 pcs",
      sizes: ["Standard 2.0m", "Jumbo 2.5m"],
      colors: ["Checked Red-Blue", "South checked Green"],
      colorsHex: ["#3F51B5", "#2E7D32"],
      image: "assets/images/lungi.png",
      description: "Premium South-style checked and plain lungis. Woven with double-ply cotton yarns for regular comfort.",
      composition: "100% Combed Cotton",
      packagingDetails: "Flat book fold bundles of 25 lungis.",
      washingInstructions: "First wash separately. Machine wash warm."
    },

    // 13. Religious & Festival Collection
    {
      id: "p51",
      code: "REL-001",
      name: "Mata Chunri",
      category: "Religious & Festival Collection",
      fabric: "Net / Brocade with lace",
      width: "12x24 in",
      minPrice: 30,
      maxPrice: 1000,
      priceRange: "₹30 – ₹1000 per dozen",
      moq: "10 dozens",
      sizes: ["Small Murti chunri", "Large Pandal Chunri"],
      colors: ["Shining Red Net with Gold Laces"],
      colorsHex: ["#D32F2F"],
      image: "assets/images/mata_chunri.png",
      description: "Navratri Mata Chunri with scalloped metallic gold sequin lace borders. Sparkling net mesh prints.",
      composition: "Polyester Net with metal zari laces",
      packagingDetails: "Bulk dozen boxes.",
      washingInstructions: "Dry clean only, do not wash or iron."
    },
    {
      id: "p52",
      code: "REL-002",
      name: "Gandhi Topi (White)",
      category: "Religious & Festival Collection",
      fabric: "Khadi Cotton",
      width: "Universal Head Fit",
      minPrice: 90,
      maxPrice: 400,
      priceRange: "₹90 – ₹400 per dozen",
      moq: "20 dozens",
      sizes: ["Size 5 - 8 Options"],
      colors: ["Bleached White"],
      colorsHex: ["#FFFFFF"],
      image: "assets/images/gandhi_topi_white.png",
      description: "Traditional handloom Khadi Gandhi caps. Woven with stiff cotton fibers to maintain shape, popular for election rallies and ritual events.",
      composition: "100% Handloom Khadi Cotton",
      packagingDetails: "Sorted packs of 12 within waterproof sleeves.",
      washingInstructions: "Hand wash cold, use starch to restore stiffness."
    },
    {
      id: "p53",
      code: "REL-003",
      name: "Gandhi Topi (Orange)",
      category: "Religious & Festival Collection",
      fabric: "Cotton",
      width: "Universal Head Fit",
      minPrice: 126,
      maxPrice: 126,
      priceRange: "₹126 per dozen",
      moq: "20 dozens",
      sizes: ["Standard size fit"],
      colors: ["Saffron Orange"],
      colorsHex: ["#E65100"],
      image: "assets/images/gandhi_topi_orange.png",
      description: "Saffron orange cotton caps. Popularly ordered in large bulks for political events and regional holy festivals.",
      composition: "100% Pure Cotton Twill",
      packagingDetails: "Exquisite boxes of 12.",
      washingInstructions: "Hand wash cold, cool iron."
    },

    // 14. Baby Care Collection
    {
      id: "p54",
      code: "BC-001",
      name: "Baby Mosquito Net",
      category: "Baby Care Collection",
      fabric: "Net Mesh Polyester",
      width: "36x48 in",
      minPrice: 115,
      maxPrice: 115,
      priceRange: "₹115",
      moq: "50 pcs",
      sizes: ["Crib Mattress standard Size"],
      colors: ["Pastel Blue Net", "Pastel Pink Net"],
      colorsHex: ["#90CAF9", "#F48FB1"],
      image: "assets/images/baby_mosquito_net.png",
      description: "Ultra-fine mesh baby crib mosquito screens. Stitched with sturdy steel wires that collapse easily for storage.",
      composition: "100% Polyester Netting, Steel framework",
      packagingDetails: "Single zipper sleeves inside cartons of 50.",
      washingInstructions: "Wipe with wet antiseptic solution, air dry."
    },
    {
      id: "p54_bb",
      code: "BLK-003",
      name: "Baby Blanket Set",
      category: "Baby Care Collection",
      fabric: "Soft Flannel",
      width: "40x40 in",
      minPrice: 250,
      maxPrice: 500,
      priceRange: "₹250 – ₹500",
      moq: "50 sets",
      sizes: ["Newborn / Infant Size"],
      colors: ["Teddy Blue", "Bunny Pink", "Cloud Yellow"],
      colorsHex: ["#90CAF9", "#F48FB1", "#FFF59D"],
      image: "assets/images/baby_blanket_set.png",
      description: "Ultra-soft baby wrapper blankets with matching booties and pillows. Certified lead-free organic colors.",
      composition: "100% Hypoallergenic Fleece Polyester",
      packagingDetails: "Premium transparent suitcase packaging.",
      washingInstructions: "Machine wash cold, baby cycles only."
    },
    {
      id: "p54_bt",
      code: "TWL-005",
      name: "Baby Towel",
      category: "Baby Care Collection",
      fabric: "Soft Terry Cotton",
      width: "24x48 in",
      minPrice: 35,
      maxPrice: 150,
      priceRange: "₹35 – ₹150",
      moq: "100 pcs",
      sizes: ["Small Hooded / Plain"],
      colors: ["Soft Mint", "Baby Pink", "Lemon Yellow"],
      colorsHex: ["#A5D6A7", "#F8BBD0", "#FFF59D"],
      image: "assets/images/baby_towel.png",
      description: "Super soft, zero-twist organic terry towels designed specifically for sensitive infant skin. High absorption speed.",
      composition: "100% Organic Cotton Terry",
      packagingDetails: "Individual box pack with cartoon labels.",
      washingInstructions: "Gentle baby cycle, mild detergent only."
    }
  ];

  // Render Product Categories
  const categoriesGrid = document.getElementById('categories-container');
  const catSelect = document.getElementById('filter-category');
  const inquiryProduct = document.getElementById('inquiry-product');
  const partnerProduct = document.getElementById('partner-product');

  const uniqueCategories = [...new Set(products.map(p => p.category))];

  function renderCategories() {
    if (!categoriesGrid) return;
    categoriesGrid.innerHTML = '';
    
    uniqueCategories.forEach(cat => {
      const prod = products.find(p => p.category === cat) || products[0];
      const card = document.createElement('div');
      card.className = 'category-card scroll-reveal';
      card.innerHTML = `
        <div class="category-img-wrap">
          <img src="${prod.image}" alt="${cat} category" loading="lazy">
        </div>
        <div class="category-overlay">
          <h3>${cat}</h3>
          <p>Explore Fabrics <i data-lucide="chevron-right"></i></p>
        </div>
      `;
      categoriesGrid.appendChild(card);
      
      card.addEventListener('click', () => {
        const productSection = document.getElementById('products');
        if (productSection) {
          productSection.scrollIntoView({ behavior: 'smooth' });
          catSelect.value = cat;
          filterProducts();
        }
      });
    });
    lucide.createIcons();
  }

  // Populate Dropdown Filters
  function populateFilters() {
    if (!catSelect) return;
    uniqueCategories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      catSelect.appendChild(opt);
    });

    // Populate Category fields in forms
    const catForms = [inquiryProduct, partnerProduct];
    catForms.forEach(formField => {
      if (formField) {
        formField.innerHTML = '<option value="" disabled selected>Select fabric category</option>';
        uniqueCategories.forEach(cat => {
          const opt = document.createElement('option');
          opt.value = cat;
          opt.textContent = cat;
          formField.appendChild(opt);
        });
        const optOther = document.createElement('option');
        optOther.value = "Other";
        optOther.textContent = "Other (Specify in remarks)";
        formField.appendChild(optOther);
      }
    });
  }

  // Render Products Grid
  const productsGrid = document.getElementById('products-grid-container');
  const resultsCount = document.getElementById('results-count');

  function renderProducts(filteredList) {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    if (filteredList.length === 0) {
      productsGrid.innerHTML = `
        <div class="form-full-width text-center" style="grid-column: 1 / -1; padding: 60px 0;">
          <i data-lucide="alert-circle" style="width: 48px; height: 48px; color: var(--accent-gold); margin-bottom: 16px;"></i>
          <h3>No matching B2B items found</h3>
          <p style="color: var(--text-muted); margin-top: 8px;">Try clearing search keywords or resetting filters.</p>
        </div>
      `;
      resultsCount.textContent = 'Showing 0 products';
      lucide.createIcons();
      return;
    }

    filteredList.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card scroll-reveal';
      card.setAttribute('data-id', prod.id);
      
      // Generate Color Swatches HTML
      let swatchesHTML = '';
      if (prod.colors && prod.colorsHex) {
        swatchesHTML = `<div class="swatch-list">`;
        prod.colors.forEach((color, idx) => {
          const hex = prod.colorsHex[idx] || '#D4AF37';
          const activeClass = idx === 0 ? 'active' : '';
          swatchesHTML += `
            <span class="swatch-circle ${activeClass}" 
                  style="background-color: ${hex}" 
                  data-color="${color}" 
                  title="${color}">
            </span>`;
        });
        swatchesHTML += `</div>`;
      }

      // Compiled WhatsApp text
      const waText = `Hello A-1 Handlooms, I am interested in Product: ${prod.name} (Code: ${prod.code}). Please share wholesale pricing, MOQ, available colors, and delivery details.`;

      card.innerHTML = `
        <div class="product-image-container">
          <span class="wholesale-only-badge">Wholesale Only</span>
          <img class="product-card-img" src="${prod.image}" alt="${prod.name} fabric photo" loading="lazy">
        </div>
        <div class="product-details-wrap">
          <div class="product-meta-row">
            <span class="product-code">Code: ${prod.code}</span>
            <span class="product-material">${prod.fabric}</span>
          </div>
          <h3 class="product-title">${prod.name}</h3>
          
          <div class="product-specs-list">
            <div class="spec-item">
              <span class="spec-label">Wholesale Price</span>
              <span class="spec-val" style="color: var(--accent-gold-hover);">${prod.priceRange}</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Width / Fit</span>
              <span class="spec-val">${prod.width}"</span>
            </div>
          </div>

          <!-- Color Swatch Row -->
          ${swatchesHTML}
          
          <div class="product-moq-block">
            <span>MOQ:</span><strong>${prod.moq}</strong>
          </div>
          
          <div class="product-card-ctas">
            <button class="btn btn-quick-view" data-id="${prod.id}">Quick View</button>
            <div class="btn-row">
              <button class="btn btn-secondary card-quote-btn" data-id="${prod.id}">Quote</button>
              <a href="https://wa.me/919876543210?text=${encodeURIComponent(waText)}" 
                 target="_blank" class="btn btn-whatsapp card-whatsapp-btn" aria-label="Ask on WhatsApp">
                <i data-lucide="message-square"></i> Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);

      // Add Swatch Clicking Listener for this card
      const swatches = card.querySelectorAll('.swatch-circle');
      const cardImg = card.querySelector('.product-card-img');
      swatches.forEach(sw => {
        sw.addEventListener('click', (e) => {
          e.stopPropagation();
          swatches.forEach(s => s.classList.remove('active'));
          sw.classList.add('active');
          const colorName = sw.getAttribute('data-color');
          if (prod.colorImages && prod.colorImages[colorName]) {
            cardImg.src = prod.colorImages[colorName];
          }
        });
      });
    });

    resultsCount.textContent = `Showing ${filteredList.length} of ${products.length} products`;
    lucide.createIcons();
    registerProductEvents();
  }

  // Filter Engine
  const searchInput = document.getElementById('product-search');
  const priceSelect = document.getElementById('filter-price');
  const resetBtn = document.getElementById('reset-filters-btn');

  function filterProducts() {
    const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const catVal = catSelect ? catSelect.value : 'all';
    const priceVal = priceSelect ? priceSelect.value : 'all';

    let filtered = products.filter(prod => {
      // Advanced B2B Search (Name, Code, Fabric, Category)
      const matchesSearch = prod.name.toLowerCase().includes(searchVal) ||
                            prod.code.toLowerCase().includes(searchVal) ||
                            prod.fabric.toLowerCase().includes(searchVal) ||
                            prod.category.toLowerCase().includes(searchVal);

      // Category Match
      const matchesCategory = (catVal === 'all') || (prod.category === catVal);

      // Price Overlap Match
      let matchesPrice = true;
      if (priceVal !== 'all') {
        if (priceVal === 'under-50') {
          matchesPrice = (prod.minPrice < 50);
        } else if (priceVal === '50-200') {
          matchesPrice = (prod.minPrice <= 200 && prod.maxPrice >= 50);
        } else if (priceVal === '200-500') {
          matchesPrice = (prod.minPrice <= 500 && prod.maxPrice >= 200);
        } else if (priceVal === '500-1500') {
          matchesPrice = (prod.minPrice <= 1500 && prod.maxPrice >= 500);
        } else if (priceVal === '1500-above') {
          matchesPrice = (prod.maxPrice >= 1500);
        }
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });

    renderProducts(filtered);
  }

  // Bind Filter Events
  if (searchInput) searchInput.addEventListener('input', filterProducts);
  if (catSelect) catSelect.addEventListener('change', filterProducts);
  if (priceSelect) priceSelect.addEventListener('change', filterProducts);
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (catSelect) catSelect.value = 'all';
      if (priceSelect) priceSelect.value = 'all';
      filterProducts();
    });
  }

  // Footer Category Link Handler
  const footerCatLinks = document.querySelectorAll('.cat-link');
  footerCatLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = link.getAttribute('data-cat');
      const productSection = document.getElementById('products');
      if (productSection && targetCat) {
        productSection.scrollIntoView({ behavior: 'smooth' });
        if (catSelect) {
          catSelect.value = targetCat;
          filterProducts();
        }
      }
    });
  });

  /* --- Modal View Engine --- */
  const detailModal = document.getElementById('product-detail-modal');
  const quoteModal = document.getElementById('quote-modal');
  const downloadModal = document.getElementById('download-modal');

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.modal-close, .mobile-drawer-overlay').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(detailModal);
      closeModal(quoteModal);
      closeModal(downloadModal);
      closeDrawer();
    });
  });

  window.addEventListener('click', (e) => {
    if (e.target === detailModal) closeModal(detailModal);
    if (e.target === quoteModal) closeModal(quoteModal);
    if (e.target === downloadModal) closeModal(downloadModal);
  });

  document.querySelectorAll('.open-download-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-type') || 'Catalog';
      const typeInput = document.getElementById('download-type-input');
      const docTypeSpan = document.getElementById('download-doc-type');
      if (typeInput) typeInput.value = type;
      if (docTypeSpan) docTypeSpan.textContent = type;
      openModal(downloadModal);
    });
  });

  document.querySelectorAll('.open-inquiry-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qProdName = document.getElementById('quote-product-name');
      const qProdId = document.getElementById('quote-product-id');
      if (qProdName) qProdName.textContent = 'All Fabric Catalogues';
      if (qProdId) qProdId.value = '';
      openModal(quoteModal);
    });
  });

  function registerProductEvents() {
    document.querySelectorAll('.btn-quick-view').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodId = btn.getAttribute('data-id');
        const prod = products.find(p => p.id === prodId);
        if (prod) {
          populateDetailModal(prod);
          openModal(detailModal);
        }
      });
    });

    document.querySelectorAll('.card-quote-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodId = btn.getAttribute('data-id');
        const prod = products.find(p => p.id === prodId);
        if (prod) {
          const qProdName = document.getElementById('quote-product-name');
          const qProdId = document.getElementById('quote-product-id');
          if (qProdName) qProdName.textContent = prod.name;
          if (qProdId) qProdId.value = prod.id;
          openModal(quoteModal);
        }
      });
    });
  }

  function populateDetailModal(prod) {
    document.getElementById('detail-category').textContent = `${prod.category} (${prod.code})`;
    document.getElementById('detail-name').textContent = prod.name;
    document.getElementById('detail-moq').textContent = prod.moq;
    document.getElementById('detail-description').textContent = prod.description;
    
    // Specs Table
    document.getElementById('detail-composition').textContent = prod.composition || 'Standard weave';
    document.getElementById('detail-width').textContent = `${prod.width} inches`;
    document.getElementById('detail-gsm').textContent = prod.priceRange; // Using price range for spec highlights
    document.getElementById('detail-colors').textContent = prod.colors ? prod.colors.join(', ') : 'Assorted Colors';
    document.getElementById('detail-packing').textContent = prod.packagingDetails || 'Standard rolls packaging';
    document.getElementById('detail-washing').textContent = prod.washingInstructions || 'N/A';
    document.getElementById('detail-applications').textContent = prod.category;

    const stockBadge = document.getElementById('detail-stock-status');
    if (stockBadge) {
      stockBadge.textContent = 'Wholesale Only';
      stockBadge.style.backgroundColor = 'var(--accent-gold)';
    }

    const mainImg = document.getElementById('detail-main-image');
    mainImg.src = prod.image;
    mainImg.alt = `${prod.name} close-up`;

    const thumbContainer = document.getElementById('detail-thumbnails');
    thumbContainer.innerHTML = '';
    
    if (prod.colors) {
      prod.colors.forEach((color, idx) => {
        const swatchThumb = document.createElement('div');
        swatchThumb.className = `thumbnail-item ${idx === 0 ? 'active' : ''}`;
        
        const colorHex = prod.colorsHex ? prod.colorsHex[idx] : '#D4AF37';
        swatchThumb.innerHTML = `
          <div style="width:100%; height:100%; background-color:${colorHex}; position:relative;">
            <span style="position:absolute; bottom:2px; left:2px; font-size:9px; color:#fff; background:rgba(0,0,0,0.6); padding:1px 3px; border-radius:2px;">${color.substring(0,3)}</span>
          </div>
        `;
        thumbContainer.appendChild(swatchThumb);
        
        swatchThumb.addEventListener('click', () => {
          document.querySelectorAll('#detail-thumbnails .thumbnail-item').forEach(t => t.classList.remove('active'));
          swatchThumb.classList.add('active');
          if (prod.colorImages && prod.colorImages[color]) {
            mainImg.src = prod.colorImages[color];
          }
        });
      });
    }

    const imgWrap = document.querySelector('.main-image-wrap');
    if (imgWrap) {
      imgWrap.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = imgWrap.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        mainImg.style.transformOrigin = `${x}% ${y}%`;
        mainImg.style.transform = 'scale(1.8)';
      });
      imgWrap.addEventListener('mouseleave', () => {
        mainImg.style.transform = 'scale(1)';
      });
    }

    const modalInquire = document.querySelector('.modal-inquire-btn');
    const modalWhatsapp = document.querySelector('.modal-whatsapp-btn');
    const modalSample = document.querySelector('.modal-sample-btn');

    const waMsgText = `Hello A-1 Handlooms, I am interested in Product: ${prod.name} (Code: ${prod.code}). Please share wholesale pricing, MOQ, available colors, and delivery details.`;

    modalInquire.onclick = () => {
      closeModal(detailModal);
      const qProdName = document.getElementById('quote-product-name');
      const qProdId = document.getElementById('quote-product-id');
      if (qProdName) qProdName.textContent = prod.name;
      if (qProdId) qProdId.value = prod.id;
      openModal(quoteModal);
    };

    modalWhatsapp.onclick = () => {
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(waMsgText)}`, '_blank');
    };

    modalSample.onclick = () => {
      const text = `Hello A-1 Handlooms, I would like to request a physical swatch sample card for "${prod.name}" (Code: ${prod.code}). Please advise on shipping details.`;
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
    };

    // Render Related Products
    const relatedContainer = document.getElementById('related-products-container');
    if (relatedContainer) {
      relatedContainer.innerHTML = '';
      const related = products
        .filter(p => p.category === prod.category && p.id !== prod.id)
        .slice(0, 4);
      
      if (related.length < 4) {
        const diff = 4 - related.length;
        const fill = products.filter(p => p.category !== prod.category).slice(0, diff);
        related.push(...fill);
      }

      related.forEach(rel => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <div class="product-image-container">
            <img src="${rel.image}" alt="${rel.name}" loading="lazy">
          </div>
          <div class="product-details-wrap" style="padding:15px;">
            <span class="product-material" style="font-size:10px;">${rel.fabric}</span>
            <h4 class="product-title" style="font-size:14px; margin-bottom:8px;">${rel.name}</h4>
            <div style="font-size:11px; color:var(--text-muted); margin-bottom:10px;">MOQ: ${rel.moq}</div>
            <button class="btn btn-quick-view rel-view-btn" data-id="${rel.id}" style="padding:6px; font-size:11px; width:100%;">View Fabric</button>
          </div>
        `;
        relatedContainer.appendChild(card);
        card.querySelector('.rel-view-btn').onclick = () => {
          populateDetailModal(rel);
          document.querySelector('#product-detail-modal .modal-body').scrollTop = 0;
        };
      });
    }
  }

  /* --- Lead Capture Forms --- */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input').value;
      alert(`Thank you for subscribing! Seasonal catalogues and wholesale price updates will be sent to: ${email}`);
      newsletterForm.reset();
    });
  }

  const dlForm = document.getElementById('download-form');
  if (dlForm) {
    dlForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('dl-name').value;
      const business = document.getElementById('dl-business').value;
      const phone = document.getElementById('dl-mobile').value;
      const email = document.getElementById('dl-email').value;
      const docType = document.getElementById('download-type-input').value;

      closeModal(downloadModal);
      dlForm.reset();

      const link = document.createElement('a');
      link.href = 'assets/A1_Handlooms_Catalogue_2026.pdf';
      link.setAttribute('download', `A1_Handlooms_Catalogue_2026.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      alert(`Brochure lead recorded! Initiating download for A1_Handlooms_Catalogue_2026.pdf. A WhatsApp link has also been dispatched to +91 ${phone}.`);
    });
  }

  const mQuoteForm = document.getElementById('modal-quote-form');
  if (mQuoteForm) {
    mQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const prodName = document.getElementById('quote-product-name').textContent;
      const name = document.getElementById('mq-name').value;
      const business = document.getElementById('mq-business').value;
      const phone = document.getElementById('mq-mobile').value;
      const qty = document.getElementById('mq-quantity').value;
      const msg = document.getElementById('mq-message').value;

      const text = `Hello A-1 Handlooms,\nI am submitting a B2B Quote Request via website.\nProduct of Interest: ${prodName}\nRequired Volume: ${qty}\nBuyer Name: ${name}\nCompany Name: ${business}\nPhone: +91 ${phone}\nComments: ${msg}`;

      closeModal(quoteModal);
      mQuoteForm.reset();
      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  const pageInquiryForm = document.getElementById('wholesale-inquiry-form');
  if (pageInquiryForm) {
    pageInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inquiry-name').value;
      const business = document.getElementById('inquiry-business').value;
      const phone = document.getElementById('inquiry-mobile').value;
      const email = document.getElementById('inquiry-email').value;
      const city = document.getElementById('inquiry-city').value;
      const state = document.getElementById('inquiry-state').value;
      const businessType = document.getElementById('inquiry-business-type').value;
      const category = document.getElementById('inquiry-product').value;
      const requirement = document.getElementById('inquiry-requirement').value;
      const message = document.getElementById('inquiry-message').value || 'No extra remarks.';

      const text = `Hello A-1 Handlooms Sales Desk,\n\nI would like to submit a B2B Bulk Inquiry:\n----------------------------------------\n- Product Category: ${category}\n- Monthly Requirement: ${requirement}\n- Company Name: ${business}\n- Business Type: ${businessType}\n- Contact Person: ${name}\n- Mobile (WhatsApp): +91 ${phone}\n- Email: ${email}\n- Shipping Location: ${city}, ${state}\n----------------------------------------\n- Requirements: ${message}`;

      pageInquiryForm.reset();
      window.open(`https://wa.me/919588621126?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  const partnerForm = document.getElementById('wholesale-partner-form');
  if (partnerForm) {
    partnerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('partner-name').value;
      const business = document.getElementById('partner-business').value;
      const gst = document.getElementById('partner-gst').value || 'Not provided';
      const phone = document.getElementById('partner-mobile').value;
      const email = document.getElementById('partner-email').value;
      const city = document.getElementById('partner-city').value;
      const years = document.getElementById('partner-years').value;
      const category = document.getElementById('partner-product').value;

      const text = `Hello A-1 Handlooms Partner Desk,\n\nI want to apply to Become a Wholesale Partner:\n----------------------------------------\n- Company Name: ${business}\n- GSTIN: ${gst}\n- Contact Person: ${name}\n- WhatsApp: +91 ${phone}\n- Email: ${email}\n- City: ${city}\n- Years in Business: ${years}\n- Category Interest: ${category}`;

      partnerForm.reset();
      window.open(`https://wa.me/919588621126?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  /* --- FAQ Accordion Engine --- */
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const body = item.querySelector('.accordion-body');
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(accItem => {
        accItem.classList.remove('active');
        accItem.querySelector('.accordion-body').style.maxHeight = '0px';
      });

      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  /* --- Testimonials Slider Engine --- */
  const testimonials = [
    {
      name: "Rohan Singhal",
      business: "Singhal Boutique & Studio",
      city: "New Delhi",
      businessType: "Boutique Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      review: "A-1 Handlooms is our main fabric supplier. Their Banarasi Katan Silk and Giza Shirting quality is outstanding. The thread counts are precisely as advertised, and custom print runs have enabled us to launch exclusive collections."
    },
    {
      name: "Priya Sharma",
      business: "Priya Vastra Garments",
      city: "Mumbai",
      businessType: "Garment Manufacturer",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      review: "We buy Giza Cotton and slub materials in massive rolls. The consistency of width and color shades across batches is exceptional. Their logistics manager coordinates and tracks shipments straight to our loading bays."
    },
    {
      name: "Amit Patel",
      business: "Indus Uniform Distributors",
      city: "Surat",
      businessType: "Wholesale Distributor",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      review: "For corporate staff uniforms, A-1 Handlooms' Trovine fabric is our top recommendation. Their massive stock availability ensures we never experience delays. Direct wholesale pricing helps us bid highly competitively."
    }
  ];

  const slider = document.getElementById('testimonial-slider');
  const prevBtn = document.getElementById('prev-testi-btn');
  const nextBtn = document.getElementById('next-testi-btn');
  const dotsContainer = document.getElementById('slider-dots');
  let currentSlide = 0;

  function renderTestimonials() {
    if (!slider) return;
    slider.innerHTML = '';
    if (dotsContainer) dotsContainer.innerHTML = '';

    testimonials.forEach((t, idx) => {
      const slide = document.createElement('div');
      slide.className = 'testimonial-slide';
      
      let starsHTML = '';
      for (let s = 0; s < t.rating; s++) {
        starsHTML += '<i data-lucide="star" class="fill-gold"></i>';
      }

      slide.innerHTML = `
        <div class="testimonial-card">
          <img src="${t.avatar}" alt="${t.name} photo" class="testimonial-avatar" loading="lazy">
          <div class="rating-stars">${starsHTML}</div>
          <p class="testimonial-review">"${t.review}"</p>
          <div class="testimonial-author">
            <h4>${t.name}</h4>
            <p>${t.business} (${t.businessType}) — ${t.city}</p>
          </div>
        </div>
      `;
      slider.appendChild(slide);

      if (dotsContainer) {
        const dot = document.createElement('span');
        dot.className = `dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
          goToSlide(idx);
        });
        dotsContainer.appendChild(dot);
      }
    });
    
    lucide.createIcons();
    document.querySelectorAll('.fill-gold').forEach(star => {
      star.style.fill = 'var(--accent-gold)';
    });
  }

  function goToSlide(slideIdx) {
    if (!slider) return;
    currentSlide = slideIdx;
    slider.style.transform = `translateX(-${slideIdx * 100}%)`;
    
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, dIdx) => {
      if (dIdx === slideIdx) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      let prevIdx = currentSlide - 1;
      if (prevIdx < 0) prevIdx = testimonials.length - 1;
      goToSlide(prevIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let nextIdx = currentSlide + 1;
      if (nextIdx >= testimonials.length) nextIdx = 0;
      goToSlide(nextIdx);
    });
  }

  setInterval(() => {
    if (!slider) return;
    let nextIdx = currentSlide + 1;
    if (nextIdx >= testimonials.length) nextIdx = 0;
    goToSlide(nextIdx);
  }, 6000);

  /* --- Infrastructure Gallery Lightbox Engine --- */
  const galleryPhotos = [
    { type: "warehouse", title: "Manufacturing Unit looms", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80", desc: "Our contract loom systems running custom orders." },
    { type: "warehouse", title: "Storage Depot & Warehouse", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80", desc: "Bales of cotton, linens, and rayon fabrics stored safely." },
    { type: "warehouse", title: "High-Density Packing", img: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=600&q=80", desc: "Double layer moisture wrapping area before bale packing." },
    { type: "machinery", title: "Looms & Machinery", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80", desc: "Heavy mechanical spinners producing clean weaves." },
    { type: "showroom", title: "Showroom Display Area", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80", desc: "Custom order swatch catalog hangers inside showroom." },
    { type: "team", title: "Team at Work", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80", desc: "Our QA managers inspecting fabric rolls for defects." }
  ];

  const galleryGrid = document.getElementById('gallery-masonry-container');
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');

  function renderGallery(filterType = 'all') {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    const filtered = filterType === 'all' 
      ? galleryPhotos 
      : galleryPhotos.filter(photo => photo.type === filterType);

    filtered.forEach((photo, idx) => {
      const item = document.createElement('div');
      item.className = 'gallery-item scroll-reveal';
      item.innerHTML = `
        <img src="${photo.img}" alt="${photo.title} photo" loading="lazy">
        <div class="gallery-item-overlay">
          <h3>${photo.title}</h3>
          <p>${photo.desc}</p>
        </div>
      `;
      galleryGrid.appendChild(item);

      item.addEventListener('click', () => {
        openLightbox(idx, filtered);
      });
    });

    setTimeout(triggerScrollReveal, 100);
  }

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderGallery(filter);
    });
  });

  let activeLightboxIndex = 0;
  let lightboxList = [];

  const lightboxModal = document.getElementById('gallery-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');

  function openLightbox(index, list) {
    activeLightboxIndex = index;
    lightboxList = list;
    updateLightboxContent();
    if (lightboxModal) {
      lightboxModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function updateLightboxContent() {
    if (lightboxList.length === 0 || !lightboxImg) return;
    const item = lightboxList[activeLightboxIndex];
    lightboxImg.src = item.img;
    lightboxImg.alt = item.title;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.desc;
  }

  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      activeLightboxIndex = (activeLightboxIndex - 1 + lightboxList.length) % lightboxList.length;
      updateLightboxContent();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      activeLightboxIndex = (activeLightboxIndex + 1) % lightboxList.length;
      updateLightboxContent();
    });
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      if (lightboxModal) lightboxModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', () => {
      lightboxModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  /* --- Animated Statistics Counter Engine --- */
  const statsSection = document.querySelector('.stats-bar');
  let countTriggered = false;

  function runCounters() {
    const numbers = document.querySelectorAll('.stat-number');
    numbers.forEach(num => {
      const target = parseInt(num.getAttribute('data-target'));
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / target), 10);
      let current = 0;
      
      const increment = Math.ceil(target / (duration / stepTime));

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          num.textContent = target.toLocaleString() + (target === 10 || target === 250 || target === 18 ? '+' : '+');
          clearInterval(timer);
        } else {
          num.textContent = current.toLocaleString() + '+';
        }
      }, stepTime);
    });
  }

  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countTriggered) {
          runCounters();
          countTriggered = true;
        }
      });
    }, { threshold: 0.2 });

    statsObserver.observe(statsSection);
  }

  /* --- Scroll Reveal Animations --- */
  function triggerScrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(rev => {
      const elementTop = rev.getBoundingClientRect().top;
      const elementVisible = 120;

      if (elementTop < windowHeight - elementVisible) {
        rev.classList.add('revealed');
      }
    });
  }

  // Scroll Active Link Highlighting
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavigation() {
    const scrollY = window.scrollY;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 150;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.desktop-nav a').forEach(a => {
          a.classList.remove('active');
          if (a.getAttribute('href') === `#${sectionId}`) {
            a.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', () => {
    triggerScrollReveal();
    highlightNavigation();
  });
  
  setTimeout(() => {
    triggerScrollReveal();
    highlightNavigation();
  }, 300);

  // BOOTSTRAP INITIAL DATA RUNS
  renderCategories();
  populateFilters();
  renderProducts(products);
  renderTestimonials();
  renderGallery();

});
