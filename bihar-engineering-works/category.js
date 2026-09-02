      // 1. Your Nested Product Dataset
      const database = {
    "refractory-equipments": {
        name: "Refractory Equipments",
        products: [
            {
                name: "Electric Servo Press Machine",
                price: "₹ 25 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/electric-servo-press-machine-1752602362-8203939.jpeg",
                specs: {
                    "Application": "Refractory Industry",
                    "Driven Type": "Mechanical",
                    "Condition": "New",
                    "Automatic Grade": "Automatic",
                    "Certification": "ISO 9001:2008"
                },
                description: "Electric Servo Press Machine. Capacity upto 1000 Tons. Electric Screw Press is a kind of pressure forming equipment that being driven by hydrostatic screw, nut, and hydrostatic bearing, ding vertical motion by screw rotation, the nut assists drive the slider. When the equipment is in operation, the lubrication system will inject lubricating oil from upper part of beam, through the hydrostatic bearing into the cylinder block, giving continuous lubrication to the screw rod, nut. so that forming the oil film between the transmission structure, generally reduce the friction caused by the transmission."
            },
            {
                name: "Friction Screw Press Machine",
                price: "₹ 18 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/friction-screw-press-machine-1752602366-8203940.jpeg",
                specs: {
                    "Application": "Forging & Refractory",
                    "Driven Type": "Friction Drive",
                    "Condition": "New",
                    "Automatic Grade": "Semi Automatic",
                    "Capacity": "Up to 500 Tons"
                },
                description: "The Friction Screw Press is highly suitable for precision forging, coining, and the manufacturing of refractory bricks. Driven by a robust friction wheel mechanism, it delivers a high-impact blow that ensures optimal material density. The machine features a heavy-duty cast iron frame designed to absorb extreme vibrations."
            },
            {
                name: "Hydraulic Press Machine",
                price: "₹ 15 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/hydraulic-press-machine.jpeg",
                specs: {
                    "Application": "Industrial Pressing",
                    "Driven Type": "Hydraulic",
                    "Condition": "New",
                    "Material": "Mild Steel"
                },
                description: "High-performance hydraulic press designed for heavy-duty industrial applications. Features advanced control systems for precise pressure regulation and safe operation across various molding and forming tasks."
            },
            {
                name: "Manual Hand Molding Machine",
                price: "₹ 2.5 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/manual-hand-molding.jpg",
                specs: {
                    "Application": "Small Scale Refractory",
                    "Driven Type": "Manual",
                    "Condition": "New",
                    "Material": "Cast Iron"
                },
                description: "A robust and easy-to-operate manual hand molding machine ideal for small-scale refractory brick production. Built with high-grade cast iron to ensure longevity and minimal maintenance."
            }
        ]
    },
    "crushing-equipments": {
        name: "Crushing Equipments",
        products: [
            {
                name: "Jaw Crusher",
                price: "₹ 12.5 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/jaw-crusher-1755513403-8274075.jpeg",
                specs: {
                    "Type": "Jaw Crusher",
                    "Material": "Steel",
                    "Color": "Multicoloured",
                    "Usage": "Crushing Solid Materials"
                },
                description: "Engineered for primary and secondary crushing of hard materials like granite and ore. Features a deep crushing cavity and heavy-duty spherical roller bearings for continuous operation."
            },
            {
                name: "Impact Crusher",
                price: "₹ 14 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/impact-crushers-1755513631-8274093.jpeg",
                specs: {
                    "Type": "Impact Crusher",
                    "Material": "High Manganese Steel",
                    "Usage": "Secondary Crushing",
                    "Condition": "New"
                },
                description: "Delivers highly efficient secondary crushing with excellent particle shape control. The impact crusher utilizes heavy-duty blow bars and a durable impact apron for maximum reduction ratios."
            },
            {
                name: "Roll Crusher",
                price: "₹ 9 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/roll-crusher-1755513566-8274087.jpeg",
                specs: {
                    "Type": "Roll Crusher",
                    "Material": "Steel Alloy",
                    "Usage": "Fine Crushing",
                    "Condition": "New"
                },
                description: "Ideal for fine crushing applications, the roll crusher provides a consistent output size with minimal dust generation, making it perfect for the cement and refractory industries."
            },
            {
                name: "Hammer Mill",
                price: "₹ 8.5 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/hammer-mill-1755513740-8274104.webp?updatedAt=1783873550340",
                specs: {
                    "Type": "Hammer Mill",
                    "Material": "Mild Steel",
                    "Usage": "Material Pulverization",
                    "Condition": "New"
                },
                description: "A high-speed rotor equipped with heavy-duty hammers designed to crush, pulverize, and grind various materials into fine particles."
            }
        ]
    },
    "mixing-equipments": {
        name: "Mixing Equipments",
        products: [
            {
                name: "Counter Current Intensive Mixer",
                price: "₹ 18 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/ccim-1752602368-8203941.jpeg",
                specs: {
                    "Brand Name": "Bihar Engineering Works",
                    "Driven Type": "Mechanical",
                    "Application": "Mixing Materials Intensively",
                    "Certification": "CE Certified"
                },
                description: "Advanced counter-current mixing technology ensures highly homogenous mixtures in minimal time. The rotating mixing pan and eccentrically mounted mixing tools create a high-shear environment ideal for complex refractory and concrete mixes."
            },
            {
                name: "Pan Mixer Machine",
                price: "₹ 5.5 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/pan-mixer-machine-1754454260-8203942.jpeg?updatedAt=1784813341648",
                specs: {
                    "Type": "Pan Mixer",
                    "Driven Type": "Mechanical",
                    "Application": "Industrial Mixing",
                    "Condition": "New"
                },
                description: "A heavy-duty pan mixer designed for thorough blending of raw materials. Features wear-resistant liners and heavy-duty gearboxes to withstand harsh industrial environments."
            },
            {
                name: "Muller Mixer Machine",
                price: "₹ 6.2 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/muller-mixer-1755514597-8274182.jpeg?updatedAt=1784813343622",
                specs: {
                    "Type": "Muller Mixer",
                    "Driven Type": "Mechanical",
                    "Application": "Foundry Sand Mixing",
                    "Condition": "New"
                },
                description: "Utilizes heavy muller wheels to knead and mix materials simultaneously. Highly effective for preparing foundry sand and specialized refractory clays."
            },
            {
                name: "Ribbon Blender Mixer",
                price: "₹ 4.8 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/ribbon-blender-mixer-1755514684-8274189.jpeg?updatedAt=1784813342639",
                specs: {
                    "Type": "Ribbon Blender",
                    "Material": "Stainless Steel",
                    "Application": "Dry Powder Mixing",
                    "Condition": "New"
                },
                description: "Features a U-shaped horizontal trough and a specially designed double helical ribbon agitator to quickly and efficiently blend dry powders and granular materials."
            }
        ]
    },
    "grinding-equipment": {
        name: "Grinding Equipment",
        products: [
            {
                name: "Ball Mill",
                price: "₹ 16 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/ball-mill-1755513884-8274111.jpeg?updatedAt=1784813340935",
                specs: {
                    "Condition": "New",
                    "Country of Origin": "India",
                    "Type": "Ball Mill",
                    "Material": "Stainless Steel"
                },
                description: "A horizontal cylinder partially filled with steel balls that rotates to grind materials to extreme fineness. Extensively used in the cement, silicate, and refractory industries."
            },
            {
                name: "Pulverizer",
                price: "₹ 4 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/stainless-steel-pulverizer-1755513967-8274117.jpg?updatedAt=1784813345325",
                specs: {
                    "Condition": "New",
                    "Type": "Impact Pulverizer",
                    "Application": "Fine Grinding",
                    "Material": "Mild Steel"
                },
                description: "High-speed impact pulverizer designed for the continuous grinding of soft to medium-hard materials. Delivers consistent particle sizes with minimal thermal degradation."
            },
            {
                name: "Disintegrator Machine",
                price: "₹ 3.5 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/disintegrator-machine-1755514031-8274128.jpg?updatedAt=1784813333343",
                specs: {
                    "Condition": "New",
                    "Type": "Disintegrator",
                    "Application": "Coarse Grinding",
                    "Material": "Cast Iron"
                },
                description: "Robustly built for coarse grinding and crushing of lumpy materials. Features replaceable beating arms and screening grids to customize output size."
            }
        ]
    },
    "screening-equipments": {
        name: "Screening Equipments",
        products: [
            {
                name: "Vibrating Screen Machine",
                price: "₹ 6 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/iron-vibrating-screening-machine-1754454776-8203944.jpeg",
                specs: {
                    "Application": "Separating And Sorting Materials",
                    "Material": "Iron",
                    "Type": "Vibrating Screen",
                    "Country of Origin": "India"
                },
                description: "High-efficiency vibrating screen designed for accurate grading and separating of bulk materials. Utilizes robust eccentric shafts and specialized screening meshes for maximum throughput."
            },
            {
                name: "Rotary Screen",
                price: "₹ 4.5 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/rotary-screen-1755514115-8274149.jpeg?updatedAt=1784813345553",
                specs: {
                    "Application": "Material Sorting",
                    "Material": "Mild Steel",
                    "Type": "Trommel Screen",
                    "Country of Origin": "India"
                },
                description: "A cylindrical rotary screen (trommel) perfect for sorting and grading wet, sticky, or difficult materials that would typically blind standard vibrating screens."
            }
        ]
    },
    "feeding-equipment": {
        name: "Feeding Equipment",
        products: [
            {
                name: "Industrial Vibrator Feeders",
                price: "₹ 3.2 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/industrial-vibrating-feeders-1755930012-8203943.jpg",
                specs: {
                    "Warranty": "2 Year",
                    "Capacity": "5-10 Tons",
                    "Application": "Industrial",
                    "Material": "Mild Steel"
                },
                description: "Engineered to ensure a continuous and uniform flow of bulk materials into crushers, conveyors, or processing lines. Highly reliable with adjustable vibration intensity."
            },
            {
                name: "Grizzly Feeder",
                price: "₹ 7 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/grizzly-feeder-1755514186-8274154.jpg?updatedAt=1784813345403",
                specs: {
                    "Warranty": "1 Year",
                    "Capacity": "High Capacity",
                    "Application": "Primary Crushing Feed",
                    "Material": "Heavy Duty Steel"
                },
                description: "Combines feeding and scalping in a single unit. Designed to handle large, heavy rocks and separate fine materials before they enter the primary crusher."
            },
            {
                name: "Rack & Pinion Gate",
                price: "₹ 1.2 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/rack-amp-pinion-gate-1755514339-8274172.jpg?updatedAt=1784813345480",
                specs: {
                    "Operation": "Manual / Motorized",
                    "Application": "Material Flow Control",
                    "Material": "Cast Iron / Steel",
                    "Condition": "New"
                },
                description: "Heavy-duty discharge gates used to strictly control the flow of dry bulk materials from hoppers, bins, and silos."
            },
            {
                name: "Rod Gate",
                price: "₹ 85,000",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/rod-gate-1755514433-8274177.jpg?updatedAt=1784813345147",
                specs: {
                    "Operation": "Manual",
                    "Application": "Silo Discharge",
                    "Material": "Steel",
                    "Condition": "New"
                },
                description: "Simple, robust cut-off gates used to isolate material flow. Ideal for maintenance purposes under silos and heavy-duty hoppers."
            }
        ]
    },
    "material-handling-equipments": {
        name: "Material Handling Equipments",
        products: [
            {
                name: "Belt Conveyor System",
                price: "₹ 4500 / Meter",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/belt-conveyor-system-1755514877-8274208.jpeg?updatedAt=1784813345601",
                specs: {
                    "Weight": "Depends On Size And Capacity",
                    "Color": "Black, Silver",
                    "Material": "Steel, Rubber",
                    "Type": "Belt Conveyor System"
                },
                description: "Custom-engineered belt conveyors for efficient, continuous transport of bulk materials over short or long distances. Features high-grade rubber belting and durable idlers."
            },
            {
                name: "Steep Angle Conveyor",
                price: "₹ 8500 / Meter",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/steep-angle-conveyor-1755514989-8274217.jpg?updatedAt=1784813345555",
                specs: {
                    "Application": "Vertical Transport",
                    "Color": "Multicoloured",
                    "Material": "Stainless Steel, Rubber",
                    "Type": "Cleated Conveyor"
                },
                description: "Designed with corrugated sidewalls and cleats to transport bulk materials at highly inclined angles or completely vertically, saving valuable floor space."
            },
            {
                name: "Bucket Elevator",
                price: "₹ 3.5 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/bucket-elevator-1755515107-8274227.jpeg?updatedAt=1784813345238",
                specs: {
                    "Application": "Vertical Lifting",
                    "Material": "Mild Steel",
                    "Type": "Centrifugal Discharge",
                    "Condition": "New"
                },
                description: "Reliable vertical lifting solution for dry, granular, and powdery materials. Fully enclosed design to prevent dust emission during material elevation."
            },
            {
                name: "Roller Conveyor",
                price: "₹ 3500 / Meter",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/roller-conveyor-1755515206-8274235.jpeg?updatedAt=1784813345581",
                specs: {
                    "Application": "Unit Handling",
                    "Material": "Galvanized Steel",
                    "Type": "Gravity / Powered",
                    "Condition": "New"
                },
                description: "Durable roller conveyors ideal for moving heavy unit loads, boxes, and pallets across manufacturing floors or warehouse spaces."
            }
        ]
    },
    "special-purpose-machines": {
        name: "Special Purpose Machines",
        products: [
            {
                name: "Electric Winch Machine",
                price: "₹ 1.8 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/electric-winch-machine-1755515306-8274242.jpeg?updatedAt=1784813345579",
                specs: {
                    "Power Source": "Electric",
                    "Application": "Lifting Heavy Loads",
                    "Color": "Multicoloured",
                    "Material": "Steel"
                },
                description: "Heavy-duty industrial electric winches designed for safe and powerful pulling or lifting of extreme loads in construction, mining, and factory settings."
            },
            {
                name: "Sheet Bending Machine",
                price: "₹ 4.5 Lac",
                image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/sheet-bending-machine-1755515361-8274243.jpeg?updatedAt=1784813345574",
                specs: {
                    "Power Source": "Hydraulic / Motorized",
                    "Application": "Metal Fabrication",
                    "Condition": "New",
                    "Material": "Steel"
                },
                description: "Precision sheet metal bending machines built with rigid steel frames to ensure exact bending angles and high repeatability for fabrication workshops."
            }
        ]
    }
};

      // 2. Logic to build the page
      document.addEventListener("DOMContentLoaded", () => {
        // Get category ID from URL (e.g., category.html?cat=refractory-equipments)
        const urlParams = new URLSearchParams(window.location.search);
        // Default to refractory if no parameter is provided (for testing)
        const categoryId = urlParams.get("cat") || "refractory-equipments";

        const categoryData = database[categoryId];

        if (!categoryData) {
          document.getElementById("page-title").innerText =
            "Category Not Found";
          return;
        }

       
        // Populate Headers with Dynamic Color Splitting
const categoryName = categoryData.name;
const words = categoryName.split(' ');
const lastWord = words.pop(); // Removes and stores the last word

// Rebuild title making the last word brand-blue
document.getElementById('page-title').innerHTML = `${words.join(' ')} <span class="text-brand-blue">${lastWord}</span>`;
document.getElementById('breadcrumb-current').innerText = categoryName;

        // Generate SEO Description based on products
        const productNames = categoryData.products
          .map((p) => p.name)
          .join(", ");
        document.getElementById("seo-description").innerHTML =
          `Leading Manufacturers, Exporters and Wholesaler of <strong>${productNames}</strong> from Dhanbad.`;

        // Build Product Cards
        const container = document.getElementById("product-list-container");
        let html = "";

        // Map exact product names to detail page IDs
        function getProductSlug(name) {
            const slugMap = {
                "Electric Servo Press Machine": "electric-servo-press",
                "Friction Screw Press Machine": "friction-screw-press",
                "Hydraulic Press Machine": "hydraulic-press-machine",
                "Manual Hand Molding Machine": "manual-hand-molding",
                "Jaw Crusher": "jaw-crusher",
                "Impact Crusher": "impact-crushers",
                "Roll Crusher": "roll-crusher",
                "Hammer Mill": "hammer-mill",
                "Counter Current Intensive Mixer": "counter-current-mixer",
                "Pan Mixer Machine": "pan-mixer-machine",
                "Muller Mixer Machine": "muller-mixer",
                "Ribbon Blender Mixer": "ribbon-blender-mixer",
                "Ball Mill": "ball-mill",
                "Pulverizer": "pulverizer",
                "Disintegrator Machine": "disintegrator-machine",
                "Vibrating Screen Machine": "vibrating-screening-machine",
                "Rotary Screen": "rotary-screen",
                "Industrial Vibrator Feeders": "industrial-vibrating-feeders",
                "Grizzly Feeder": "grizzly-feeder",
                "Rack & Pinion Gate": "rack-pinion-gate",
                "Rod Gate": "rod-gate",
                "Belt Conveyor System": "belt-conveyor-system",
                "Steep Angle Conveyor": "steep-angle-conveyor",
                "Bucket Elevator": "bucket-elevator",
                "Roller Conveyor": "roller-conveyor",
                "Electric Winch Machine": "electric-winch-machine",
                "Sheet Bending Machine": "sheet-bending-machine",
                "Stone Crusher Plant": "stone-crusher-plant",
                "Skid Mounted Crushing Plant": "skid-mounted-crushing-plant"
            };
            return slugMap[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        }

        categoryData.products.forEach((product) => {
          const productId = getProductSlug(product.name);
          const productUrl = `product-detail.html?id=${productId}`;

          // Build a Modern Grid for Specs
          let specsGrid = '';
          for (const [key, value] of Object.entries(product.specs)) {
              specsGrid += `
                  <div class="bg-slate-50 border border-slate-100 p-2.5 sm:p-3 rounded-xl flex flex-col justify-center">
                      <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 truncate">${key}</span>
                      <span class="text-xs sm:text-[14px] font-bold text-gray-800 break-words">${value}</span>
                  </div>
              `;
          }

// Add Premium Card to HTML
html += `
    <div onclick="window.location.href='${productUrl}'" class="cursor-pointer bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:-translate-y-1 hover:border-brand-blue/30 transition-all duration-300 flex flex-col lg:flex-row overflow-hidden group">
        
        <!-- Left: Image Showcase -->
        <div class="w-full lg:w-[40%] bg-[#f8f9fc] relative p-4 sm:p-8 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-100">
            <!-- Subtle background decoration -->
            <div class="absolute top-0 right-0 w-40 h-40 bg-brand-blue/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-125 duration-700"></div>
            
            <a href="${productUrl}" onclick="event.stopPropagation()" class="w-full h-full flex items-center justify-center">
                <img src="${product.image}" alt="${product.name}" class="relative z-10 w-full h-[220px] sm:h-[300px] lg:h-[400px] object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply drop-shadow-xl">
            </a>
            
            <!-- Premium Glassmorphism Badge -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 font-bold text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20 pointer-events-none border border-gray-100">
                <i class="fa-solid fa-arrow-right text-brand-blue"></i> View Details
            </div>
        </div>

        <!-- Right: Premium Details Area -->
        <div class="w-full lg:w-[60%] p-5 sm:p-8 lg:p-10 flex flex-col">
            
            <!-- Header: Title & Price Badge -->
            <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 lg:mb-8">
                <div>
                    <div class="inline-flex items-center text-[10px] font-black tracking-widest uppercase text-brand-accent bg-blue-50 px-3 py-1.5 rounded-full mb-3 border border-blue-100">
                        <span class="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></span> BEW Engineered
                    </div>
                    <a href="${productUrl}" onclick="event.stopPropagation()">
                        <h2 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight hover:text-brand-blue transition">${product.name}</h2>
                    </a>
                </div>
                
                <!-- Floating Price Tag -->
                <div class="bg-blue-50/50 border border-brand-blue/10 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-left sm:text-center shrink-0 min-w-[130px]">
                    <p class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">Starting Price</p>
                    <p class="text-lg sm:text-xl font-black text-brand-blue">${product.price}</p>
                </div>
            </div>

            <!-- Modern Specs Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 py-4 sm:py-6 border-y border-gray-100 mb-6 lg:mb-8">
                ${specsGrid}
            </div>
            
            <!-- Description Block -->
            <div class="mb-6 lg:mb-8 relative">
                <h4 class="font-bold text-gray-900 text-sm sm:text-[15px] mb-2 flex items-center">
                    <i class="fa-solid fa-circle-info text-brand-blue mr-2"></i> Product Overview
                </h4>
                <p class="text-gray-600 text-xs sm:text-[14.5px] leading-relaxed line-clamp-3 transition-all duration-300">
                    ${product.description}
                </p>
                <button onclick="event.stopPropagation(); toggleText(this)" class="text-brand-blue font-bold text-xs sm:text-sm hover:underline mt-2 flex items-center gap-1">
                    Read More <i class="fa-solid fa-chevron-down text-[10px]"></i>
                </button>
            </div>

            <!-- Action Buttons -->
            <div class="mt-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <a href="${productUrl}" onclick="event.stopPropagation()" class="w-full sm:w-auto flex-1 bg-brand-blue hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-xs sm:text-[15px]">
                    View Product Details <i class="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </a>
                <a href="contactus.html" onclick="event.stopPropagation()" class="w-full sm:w-auto bg-white border-2 border-gray-200 hover:border-brand-accent hover:text-brand-accent text-gray-700 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-xs sm:text-[15px]">
                    <i class="fa-solid fa-phone-volume"></i> Request Callback
                </a>
            </div>

        </div>
    </div>
`;
        });

        container.innerHTML = html;
      });

      // 3. Simple toggle function for descriptions
      function toggleText(btn) {
        const paragraph = btn.previousElementSibling;
        if (paragraph.classList.contains("line-clamp-3")) {
          paragraph.classList.remove("line-clamp-3");
          btn.innerText = "Read Less";
        } else {
          paragraph.classList.add("line-clamp-3");
          btn.innerText = "Read More...";
        }
      }

      // 4. Live Search Filter for Category Page
      function filterCategoryProducts() {
        const input = document.getElementById('cat-search-input');
        if (!input) return;
        const filter = input.value.toLowerCase().trim();
        const container = document.getElementById('product-list-container');
        if (!container) return;
        const cards = container.children;
        
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i];
          const text = card.textContent || card.innerText;
          if (text.toLowerCase().indexOf(filter) > -1) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        }
      }
