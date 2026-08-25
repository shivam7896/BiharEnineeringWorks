//   Hamburger menu toggle

document.addEventListener("DOMContentLoaded", () => {
  // --- MOBILE MENU DRAWER LOGIC ---
  const mobileOpenBtn = document.getElementById("mobile-open-btn");
  const mobileCloseBtn = document.getElementById("mobile-close-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileOverlay = document.getElementById("mobile-overlay");

  // Open function
  function openMenu() {
    if (mobileMenu && mobileOverlay) {
      mobileMenu.classList.remove("translate-x-full");
      mobileMenu.classList.add("translate-x-0");
      mobileOverlay.classList.remove("opacity-0", "pointer-events-none");
      mobileOverlay.classList.add("opacity-100", "pointer-events-auto");
      document.body.style.overflow = "hidden"; // Stop background scrolling
    }
  }

  // Close function
  function closeMenu() {
    if (mobileMenu && mobileOverlay) {
      mobileMenu.classList.remove("translate-x-0");
      mobileMenu.classList.add("translate-x-full");
      mobileOverlay.classList.remove("opacity-100", "pointer-events-auto");
      mobileOverlay.classList.add("opacity-0", "pointer-events-none");
      document.body.style.overflow = ""; // Restore scrolling
    }
  }

  // Attach clicks
  if (mobileOpenBtn) mobileOpenBtn.addEventListener("click", openMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener("click", closeMenu);
  if (mobileOverlay) mobileOverlay.addEventListener("click", closeMenu);

  // --- MOBILE PRODUCTS ACCORDION LOGIC ---
  const mobileProductsBtn = document.getElementById("mobile-products-btn");
  const mobileProductsList = document.getElementById("mobile-products-list");
  const mobileProductsIcon = document.getElementById("mobile-products-icon");

  if (mobileProductsBtn) {
    mobileProductsBtn.addEventListener("click", () => {
      mobileProductsList.classList.toggle("hidden");
      mobileProductsIcon.classList.toggle("rotate-180");
    });
  }
});

const productCatalog = [
  // ==========================================
  // 1. REFRACTORY EQUIPMENTS
  // ==========================================
  {
    id: "electric-servo-press",
    name: "Electric Servo Press",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/electric-servo-press-machine-1752602362-8203939.jpeg",
    price: "₹ 25 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer, Exporter", "Application": "Refractory Industry" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Mechanical", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Capacity": "Up to 1000 Tons" },
    description: "Electric Servo Press Machine driven by hydrostatic screw and nut. Features a fully sealed structure for dust protection and increased service life of internal components. Ideal for precise pressure forming."
  },
  {
    id: "friction-screw-press",
    name: "Friction Screw Press",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/friction-screw-press-machine-1752602366-8203940.jpeg",
    price: "₹ 18 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer, Supplier", "Application": "Forging & Refractory" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Friction Drive", "Condition": "New", "Automatic Grade": "Semi-Automatic", "Brand": "Bihar Engineering Works", "Capacity": "Up to 500 Tons" },
    description: "Highly suitable for precision forging and the manufacturing of refractory bricks. Features a heavy-duty cast iron frame to absorb extreme vibrations and deliver high-impact blows for optimal material density."
  },
  {
    id: "hydraulic-press-machine",
    name: "Hydraulic Press Machine",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/hydraulic-press-machine.jpeg",
    price: "₹ 15 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Heavy Metal Forming" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Hydraulic", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Pressure Capacity": "200 - 800 Tons" },
    description: "Versatile hydraulic press engineered for deep drawing, stamping, and metal forming. Features advanced hydraulic circuitry for smooth operation and precise pressure control."
  },
  {
    id: "manual-hand-molding",
    name: "Manual Hand Molding Machine",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/manual-hand-molding.jpg",
    price: "₹ 2.5 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Small Scale Brick Making" },
    hasBrochure: false,
    fullSpecs: { "Driven Type": "Manual", "Condition": "New", "Automatic Grade": "Manual", "Brand": "Bihar Engineering Works", "Material": "Cast Iron" },
    description: "A highly durable, cost-effective manual molding machine designed for small-scale operations. Easy to operate and maintain with zero electrical power requirements."
  },

  // ==========================================
  // 2. CRUSHING EQUIPMENTS
  // ==========================================
  {
    id: "jaw-crusher",
    name: "Jaw Crusher",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/jaw-crusher-1755513403-8274075.jpeg",
    price: "₹ 12.5 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Mining & Construction" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electric Motor", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Material": "Mild Steel" },
    description: "Engineered for primary and secondary crushing of hard materials like granite and ore. Features a deep crushing cavity and heavy-duty spherical roller bearings for continuous operation."
  },
  {
    id: "impact-crushers",
    name: "Impact Crusher",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/impact-crushers-1755513631-8274093.jpeg",
    price: "₹ 14 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Aggregate & Mining" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electric", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Rotor Type": "Heavy Duty" },
    description: "Designed for high reduction ratios and excellent product shape. Ideal for processing limestone, concrete, and asphalt debris with low wear costs."
  },
  {
    id: "roll-crusher",
    name: "Roll Crusher",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/roll-crusher-1755513566-8274087.jpeg",
    price: "₹ 9 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Coal & Mineral Sizing" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electric", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Roll Material": "Manganese Steel" },
    description: "Provides precise crushing with minimal fines generation. Features adjustable gap settings to strictly control the maximum product size."
  },
  {
    id: "hammer-mill",
    name: "Hammer Mill",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/hammer-mill-1755513740-8274104.webp?updatedAt=1783873550340",
    price: "₹ 8.5 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Mineral Grinding" },
    hasBrochure: false,
    fullSpecs: { "Driven Type": "Mechanical", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Power": "15-50 HP" },
    description: "High-speed hammer mill designed for fine grinding of medium-hard materials. Features interchangeable screens for adjustable output fineness."
  },

  // ==========================================
  // 3. GRINDING EQUIPMENT
  // ==========================================
  {
    id: "ball-mill",
    name: "Ball Mill",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/ball-mill-1755513884-8274111.jpeg?updatedAt=1784813340935",
    price: "₹ 16 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Cement & Silicate" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electric", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Lining": "High Alumina / Rubber" },
    description: "A key equipment for grinding crushed materials into fine powder. Widely used in powder-making production lines including cement, silicate, and new-type building materials."
  },
  {
    id: "pulverizer",
    name: "Pulverizer",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/stainless-steel-pulverizer-1755513967-8274117.jpg?updatedAt=1784813345325",
    price: "₹ 4 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Spices & Chemicals Grinding" },
    hasBrochure: false,
    fullSpecs: { "Driven Type": "Electric", "Condition": "New", "Automatic Grade": "Semi-Automatic", "Brand": "Bihar Engineering Works", "Material": "Stainless Steel / MS" },
    description: "High-speed grinding machine for turning solid materials into fine powder. Features a cooling jacket to prevent heat-sensitive materials from degrading."
  },
  {
    id: "disintegrator-machine",
    name: "Disintegrator Machine",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/disintegrator-machine-1755514031-8274128.jpg?updatedAt=1784813333343",
    price: "₹ 3.5 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Ayurvedic & Herb Grinding" },
    hasBrochure: false,
    fullSpecs: { "Driven Type": "Electric", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "RPM": "High Speed" },
    description: "Robust machine designed to crush and grind hard and soft materials. Uses a combination of beating and shearing actions for uniform particle size."
  },

  // ==========================================
  // 4. SCREENING EQUIPMENTS
  // ==========================================
  {
    id: "vibrating-screening-machine",
    name: "Vibrating Screen Machine",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/iron-vibrating-screening-machine-1754454776-8203944.jpeg",
    price: "₹ 6 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Material Separation" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Vibratory Motor", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Decks": "1 to 4 Decks available" },
    description: "High-frequency vibrating screen designed for precise grading and separation of crushed materials. Features durable screen meshes and heavy-duty suspension springs."
  },
  {
    id: "rotary-screen",
    name: "Rotary Screen",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/rotary-screen-1755514115-8274149.jpeg?updatedAt=1784813345553",
    price: "₹ 4.5 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Compost & Sand Screening" },
    hasBrochure: false,
    fullSpecs: { "Driven Type": "Electric Motor", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Structure": "Cylindrical Drum" },
    description: "Trommel/Rotary screen for sorting materials by size. The rotating drum design ensures block-free screening for moist or sticky materials."
  },

  // ==========================================
  // 5. FEEDING EQUIPMENT
  // ==========================================
  {
    id: "industrial-vibrating-feeders",
    name: "Industrial Vibrator Feeders",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/industrial-vibrating-feeders-1755930012-8203943.jpg",
    price: "₹ 3.2 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Controlled Material Flow" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electromagnetic/Motor", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Material": "Carbon Steel" },
    description: "Ensures uniform and continuous feeding of bulk materials to crushers and conveyors. Adjustable vibration intensity allows for strict flow control."
  },
  {
    id: "grizzly-feeder",
    name: "Grizzly Feeder",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/grizzly-feeder-1755514186-8274154.jpg?updatedAt=1784813345403",
    price: "₹ 7 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Primary Crushing Feed" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Vibratory", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Feature": "Heavy Duty Impact Resistant" },
    description: "Combines feeding and pre-screening in one unit. Designed to handle massive shock loads from dumped materials before they enter the primary jaw crusher."
  },
  {
    id: "rack-pinion-gate",
    name: "Rack & Pinion Gate",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/rack-amp-pinion-gate-1755514339-8274172.jpg?updatedAt=1784813345480",
    price: "₹ 1.2 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Silo & Hopper Discharge" },
    hasBrochure: false,
    fullSpecs: { "Driven Type": "Manual/Motorized", "Condition": "New", "Automatic Grade": "Semi-Automatic", "Brand": "Bihar Engineering Works", "Material": "MS/SS" },
    description: "Reliable isolation gate used at the bottom of hoppers and silos. Features a smooth gear mechanism for easy flow regulation of dry bulk solids."
  },
  {
    id: "rod-gate",
    name: "Rod Gate",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/rod-gate-1755514433-8274177.jpg?updatedAt=1784813345147",
    price: "₹ 85,000", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Lump Material Control" },
    hasBrochure: false,
    fullSpecs: { "Driven Type": "Manual", "Condition": "New", "Automatic Grade": "Manual", "Brand": "Bihar Engineering Works", "Rods": "High Tensile Steel" },
    description: "Simple but effective cut-off valve for coarse or lumpy materials. Individual rods can be driven in or out to stop or allow material flow without jamming."
  },

  // ==========================================
  // 6. MIXING EQUIPMENTS
  // ==========================================
  {
    id: "counter-current-mixer",
    name: "Counter Current Intensive Mixer",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/ccim-1752602368-8203941.jpeg",
    price: "₹ 18 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Refractory & Foundry Sand" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electric", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Mixing Action": "High Shear" },
    description: "Advanced mixing technology using a rotating mixing pan and eccentrically positioned mixing tools. Guarantees 100% material circulation for perfectly homogenous mixtures."
  },
  {
    id: "pan-mixer-machine",
    name: "Pan Mixer Machine",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/pan-mixer-machine-1754454260-8203942.jpeg?updatedAt=1784813341648",
    price: "₹ 5.5 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Concrete & Fly Ash Bricks" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electric", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Discharge": "Bottom Door" },
    description: "Heavy-duty pan mixer designed for fast and thorough mixing of concrete, fly ash, and chemicals. Features wear-resistant bottom plates and adjustable mixing blades."
  },
  {
    id: "muller-mixer",
    name: "Muller Mixer Machine",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/muller-mixer-1755514597-8274182.jpeg?updatedAt=1784813343622",
    price: "₹ 6.2 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Foundry Sand Preparation" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electric Motor", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Rollers": "Heavy Cast Iron" },
    description: "Utilizes heavy muller wheels to knead, smear, and compress materials. Highly effective for preparing foundry sand and mixing clay-bonded materials."
  },
  {
    id: "ribbon-blender-mixer",
    name: "Ribbon Blender Mixer",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/ribbon-blender-mixer-1755514684-8274189.jpeg?updatedAt=1784813342639",
    price: "₹ 4.8 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Powder & Spice Mixing" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electric", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Material": "Stainless Steel 304/316" },
    description: "U-shaped horizontal trough housing a double helical ribbon agitator. Ideal for achieving homogenous blending of dry powders and granular materials in minimal time."
  },

  // ==========================================
  // 7. MATERIAL HANDLING EQUIPMENTS
  // ==========================================
  {
    id: "belt-conveyor-system",
    name: "Belt Conveyor System",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/belt-conveyor-system-1755514877-8274208.jpeg?updatedAt=1784813345601",
    price: "₹ 4500", priceUnit: "Per Meter",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Bulk Material Transport" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Motorized Pulley", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Belt Type": "Rubber/Nylon" },
    description: "Custom-built belt conveyor systems for continuous transport of bulk materials over long distances. Designed with heavy-duty idlers and premium grade belting."
  },
  {
    id: "steep-angle-conveyor",
    name: "Steep Angle Conveyor",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/steep-angle-conveyor-1755514989-8274217.jpg?updatedAt=1784813345555",
    price: "₹ 8500", priceUnit: "Per Meter",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Vertical Material Elevation" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electric Motor", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Belt": "Corrugated Sidewall" },
    description: "Space-saving conveyor featuring corrugated sidewalls and cleats. Capable of transporting materials at inclines up to 90 degrees without spillage."
  },
  {
    id: "bucket-elevator",
    name: "Bucket Elevator",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/bucket-elevator-1755515107-8274227.jpeg?updatedAt=1784813345238",
    price: "₹ 3.5 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Vertical Lifting" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Geared Motor", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Buckets": "Nylon / Steel" },
    description: "Fully enclosed vertical lifting system. Uses a series of buckets attached to a belt or chain to vertically elevate flowable bulk materials efficiently."
  },
  {
    id: "roller-conveyor",
    name: "Roller Conveyor",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/roller-conveyor-1755515206-8274235.jpeg?updatedAt=1784813345581",
    price: "₹ 3500", priceUnit: "Per Meter",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Box & Pallet Transport" },
    hasBrochure: false,
    fullSpecs: { "Driven Type": "Gravity/Motorized", "Condition": "New", "Automatic Grade": "Semi-Automatic", "Brand": "Bihar Engineering Works", "Rollers": "Galvanized Steel" },
    description: "Durable roller conveyors available in gravity or motorized configurations. Perfect for packaging lines and heavy pallet maneuvering."
  },

  // ==========================================
  // 8. SPECIAL PURPOSE MACHINES
  // ==========================================
  {
    id: "electric-winch-machine",
    name: "Electric Winch Machine",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/electric-winch-machine-1755515306-8274242.jpeg?updatedAt=1784813345579",
    price: "₹ 1.8 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Heavy Lifting & Pulling" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Electric", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Capacity": "1 to 20 Tons" },
    description: "Heavy-duty electric winch featuring fail-safe electro-magnetic brakes. Built for rugged construction and mining environments to safely pull or lift massive loads."
  },
  {
    id: "sheet-bending-machine",
    name: "Sheet Bending Machine",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/sheet-bending-machine-1755515361-8274243.jpeg?updatedAt=1784813345574",
    price: "₹ 4.5 Lac", priceUnit: "Piece",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Metal Fabrication" },
    hasBrochure: true,
    fullSpecs: { "Driven Type": "Hydraulic / Mechanical", "Condition": "New", "Automatic Grade": "Automatic", "Brand": "Bihar Engineering Works", "Bending Length": "Up to 3000mm" },
    description: "Precision press brake designed for bending mild and stainless steel sheets. Features rigid steel framing and micro-adjustable stops for high accuracy."
  },

  // ==========================================
  // 9. COMPLETE PLANTS (No Sub-menu items)
  // ==========================================
  {
    id: "stone-crusher-plant",
    name: "Complete Stone Crusher Plant",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/mild-steel-stone-crusher-plant-1754454941-8203945.jpeg",
    price: "Price on Request", priceUnit: "Plant",
    quickSpecs: { "Business Type": "Manufacturer, Turnkey Provider", "Application": "Aggregate Production" },
    hasBrochure: true,
    fullSpecs: { "Turnkey Project": "Yes", "Condition": "New", "Automatic Grade": "Fully Automatic", "Brand": "Bihar Engineering Works", "Capacity": "50 TPH - 500 TPH" },
    description: "A complete turnkey solution including vibrating feeders, jaw crushers, impact crushers, vibrating screens, and centralized electrical control panels. Designed to maximize output while minimizing operational costs."
  },
  {
    id: "skid-mounted-crushing-plant",
    name: "Skid Mounted Crushing Plant",
    image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/skid-mounted-crushing-plant-1755515461-8274253.jpg",
    price: "Price on Request", priceUnit: "Plant",
    quickSpecs: { "Business Type": "Manufacturer", "Application": "Mobile Mining & Construction" },
    hasBrochure: true,
    fullSpecs: { "Mobility": "Skid Mounted", "Condition": "New", "Automatic Grade": "Fully Automatic", "Brand": "Bihar Engineering Works", "Installation Time": "Rapid Setup" },
    description: "Compact, pre-wired, and pre-assembled crushing plants mounted on rigid steel skids. Ideal for temporary project sites requiring rapid installation without the need for extensive concrete foundations."
  }
];


document.addEventListener("DOMContentLoaded", () => {
  // 1. Get the ID from URL query param or clean path (e.g., /product/electric-servo-press or electric-servo-press.html)
  const urlParams = new URLSearchParams(window.location.search);
  let productId = urlParams.get("id");
  if (!productId) {
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1] || "";
    const cleanSlug = lastPart.replace(/\.html$/, "").replace(/^product-/, "");
    if (cleanSlug && cleanSlug !== "product-detail") {
      productId = cleanSlug;
    }
  }

  // 2. Find Product in Data
  const product = productCatalog.find((p) => p.id === productId) || productCatalog[0];

  if (product) {
    // --- Populate Section 1: Hero ---
    document.getElementById("pd-title").textContent = product.name;
    document.getElementById("pd-price").textContent =
      product.price || "Price on Request";
    document.getElementById("pd-price-unit").textContent = product.priceUnit
      ? `/ ${product.priceUnit}`
      : "";
    document.getElementById("pd-image").src = product.image;
    document.getElementById("pd-image").alt = product.name;

    // Build Dashboard-Style Quick Specs
    if (document.getElementById("pd-quick-specs") && product.quickSpecs) {
      let quickSpecsHTML = "";
      for (const [key, value] of Object.entries(product.quickSpecs)) {
        quickSpecsHTML += `
            <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-3 flex flex-col justify-center">
                <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-1 truncate">${key}</span>
                <span class="text-white font-semibold text-xs sm:text-sm break-words">${value}</span>
            </div>
        `;
      }
      if (product.hasBrochure) {
        quickSpecsHTML += `
            <a href="#" class="bg-brand-blue/10 border border-brand-blue/30 rounded-xl p-3 flex items-center justify-between group hover:bg-brand-blue/20 transition cursor-pointer">
                <div class="flex flex-col">
                    <span class="text-brand-blue text-[10px] uppercase font-bold tracking-wider mb-1">Brochure</span>
                    <span class="text-white font-semibold text-xs sm:text-sm group-hover:text-brand-blue transition">Download PDF</span>
                </div>
                <i class="fa-solid fa-download text-brand-blue text-xs sm:text-sm"></i>
            </a>
        `;
      }
      document.getElementById("pd-quick-specs").innerHTML = quickSpecsHTML;
    }

    // --- Populate Section 2: Technical Data ---
    if (document.getElementById("pd-full-specs") && product.fullSpecs) {
      let fullSpecsHTML = "";
      for (const [key, value] of Object.entries(product.fullSpecs)) {
        fullSpecsHTML += `
            <div class="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-3.5 sm:p-4 shadow-xs hover:border-brand-blue/30 transition">
                <span class="text-gray-500 font-semibold text-xs sm:text-sm shrink-0 mr-2">${key}</span>
                <span class="font-extrabold text-gray-900 text-xs sm:text-sm text-right truncate">${value}</span>
            </div>
        `;
      }
      document.getElementById("pd-full-specs").innerHTML = fullSpecsHTML;
    }

    document.getElementById("pd-description").textContent =
      product.description || "No description available.";

    // --- Populate Section 3: Form ---
    document.getElementById("form-product-name").textContent = product.name;

    // Update Dynamic Page Title & Meta SEO
    document.title = `${product.name} - Price & Specs | Bihar Engineering Works`;
    
    const headMetaDesc = document.getElementById("head-meta-desc");
    if (headMetaDesc) headMetaDesc.setAttribute("content", `${product.name} manufactured by Bihar Engineering Works. Starting price ${product.price}. Specs: ${product.description.substring(0, 140)}...`);
    
    const headCanonical = document.getElementById("head-canonical");
    if (headCanonical) headCanonical.setAttribute("href", `https://www.biharengineeringworks.in/product-detail.html?id=${product.id}`);

    const ogTitle = document.getElementById("head-og-title");
    if (ogTitle) ogTitle.setAttribute("content", `${product.name} | Bihar Engineering Works`);

    const ogDesc = document.getElementById("head-og-desc");
    if (ogDesc) ogDesc.setAttribute("content", `${product.name} - Price: ${product.price}. ${product.description.substring(0, 120)}`);

    const ogImg = document.getElementById("head-og-img");
    if (ogImg) ogImg.setAttribute("content", product.image);

    // Update Schema.org Product JSON-LD
    const schemaScript = document.getElementById("product-schema-script");
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": [product.image],
        "description": product.description,
        "brand": {
          "@type": "Brand",
          "name": "Bihar Engineering Works"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": product.price.replace(/[^0-9.]/g, '') || "100000",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Bihar Engineering Works"
          }
        }
      });
    }
  } else {
    // Fallback for invalid product ID
    document.getElementById("pd-title").textContent = "Product Not Found";
  }
});

// --- Setup "Read More" Button for Mobile ---
const descElement = document.getElementById('pd-description');
const readMoreBtn = document.getElementById('read-more-btn');

if (readMoreBtn && descElement) {
    readMoreBtn.addEventListener('click', function() {
        // Check if the text is currently clamped
        if (descElement.classList.contains('line-clamp-4')) {
            // Expand the text
            descElement.classList.remove('line-clamp-4');
            this.innerHTML = 'Read Less <i class="fa-solid fa-chevron-up text-[10px]"></i>';
        } else {
            // Collapse the text
            descElement.classList.add('line-clamp-4');
            this.innerHTML = 'Read More <i class="fa-solid fa-chevron-down text-[10px]"></i>';
        }
    });
}