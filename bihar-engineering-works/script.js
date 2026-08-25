        document.addEventListener('DOMContentLoaded', () => {
        // --- 1. HERO SLIDER LOGIC ---
        const slides = document.querySelectorAll('.hero-slide');
        const prevBtn = document.getElementById('hero-prev');
        const nextBtn = document.getElementById('hero-next');
        
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
          slides.forEach((slide, i) => {
            if (i === index) {
              slide.classList.remove('opacity-0');
              slide.classList.add('opacity-100');
            } else {
              slide.classList.remove('opacity-100');
              slide.classList.add('opacity-0');
            }
          });
        }

        function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        }

        function prevSlide() {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;
          showSlide(currentSlide);
        }

        function startAutoPlay() {
          slideInterval = setInterval(nextSlide, 3000);
        }

        function resetAutoPlay() {
          clearInterval(slideInterval);
          startAutoPlay();
        }

        if (nextBtn) {
          nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
          });
        }

        if (prevBtn) {
          prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
          });
        }

        if (slides.length > 0) {
          startAutoPlay();
        }

        // --- 2. MOBILE MENU DRAWER LOGIC ---
        const mobileOpenBtn = document.getElementById('mobile-open-btn');
        const mobileCloseBtn = document.getElementById('mobile-close-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileOverlay = document.getElementById('mobile-overlay');

        function openMenu() {
            if (mobileMenu && mobileOverlay) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
                mobileOverlay.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeMenu() {
            if (mobileMenu && mobileOverlay) {
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.classList.add('translate-x-full');
                mobileOverlay.classList.remove('opacity-100', 'pointer-events-auto');
                mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }
        }

        if (mobileOpenBtn) mobileOpenBtn.addEventListener('click', openMenu);
        if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMenu);
        if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

        const mobileProductsBtn = document.getElementById('mobile-products-btn');
        const mobileProductsList = document.getElementById('mobile-products-list');
        const mobileProductsIcon = document.getElementById('mobile-products-icon');

        function toggleProductsAccordion(e) {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          if (mobileProductsList) {
            mobileProductsList.classList.toggle('hidden');
          }
          if (mobileProductsIcon) {
            mobileProductsIcon.classList.toggle('rotate-180');
          }
        }

        if (mobileProductsBtn) {
          mobileProductsBtn.addEventListener('click', toggleProductsAccordion);
        }

        if (mobileProductsIcon) {
          mobileProductsIcon.addEventListener('click', toggleProductsAccordion);
        }

        // --- 3. GLOBAL INTERACTIVE SEARCH MODAL ENGINE ---
        const globalSearchCatalog = [
          { id: "electric-servo-press", name: "Electric Servo Press Machine", category: "Refractory Equipments", price: "₹ 25 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/electric-servo-press-machine-1752602362-8203939.jpeg" },
          { id: "friction-screw-press", name: "Friction Screw Press Machine", category: "Refractory Equipments", price: "₹ 18 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/friction-screw-press-machine-1752602366-8203940.jpeg" },
          { id: "hydraulic-press-machine", name: "Hydraulic Press Machine", category: "Refractory Equipments", price: "₹ 15 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/hydraulic-press-machine.jpeg" },
          { id: "manual-hand-molding", name: "Manual Hand Molding Machine", category: "Refractory Equipments", price: "₹ 2.5 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/manual-hand-molding.jpg" },
          { id: "jaw-crusher", name: "Jaw Crusher", category: "Crushing Equipments", price: "₹ 12.5 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/jaw-crusher-1755513403-8274075.jpeg" },
          { id: "roll-crusher", name: "Roll Crusher", category: "Crushing Equipments", price: "₹ 9.5 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/roll-crusher-1755513566-8274087.jpeg" },
          { id: "impact-crushers", name: "Impact Crusher", category: "Crushing Equipments", price: "₹ 14 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/impact-crushers-1755513631-8274093.jpeg" },
          { id: "hammer-mill", name: "Hammer Mill", category: "Crushing Equipments", price: "₹ 6.8 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/hammer-mill-1755513740-8274104.webp" },
          { id: "ball-mill", name: "Ball Mill", category: "Grinding Equipment", price: "₹ 16 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/ball-mill-1755513884-8274111.jpeg" },
          { id: "pulverizer", name: "Pulverizer Machine", category: "Grinding Equipment", price: "₹ 4.5 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/stainless-steel-pulverizer-1755513967-8274117.jpg" },
          { id: "disintegrator-machine", name: "Disintegrator Machine", category: "Grinding Equipment", price: "₹ 5.2 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/disintegrator-machine-1755514031-8274128.jpg" },
          { id: "vibrating-screening-machine", name: "Vibrating Screening Machine", category: "Screening Equipments", price: "₹ 4.8 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/iron-vibrating-screening-machine-1754454776-8203944.jpeg" },
          { id: "rotary-screen", name: "Rotary Screen (Trommel)", category: "Screening Equipments", price: "₹ 5.5 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/rotary-screen-1755514115-8274149.jpeg" },
          { id: "industrial-vibrating-feeders", name: "Industrial Vibrating Feeders", category: "Feeding Equipment", price: "₹ 3.2 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/industrial-vibrating-feeders-1755930012-8203943.jpg" },
          { id: "grizzly-feeder", name: "Grizzly Feeder", category: "Feeding Equipment", price: "₹ 6.5 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/grizzly-feeder-1755514186-8274154.jpg" },
          { id: "rack-pinion-gate", name: "Rack & Pinion Gate", category: "Feeding Equipment", price: "₹ 1.2 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/rack-and-pinion-gate-1755514250-8274167.jpeg" },
          { id: "rod-gate", name: "Rod Gate", category: "Feeding Equipment", price: "₹ 85,000", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/rod-gate-1755514316-8274176.jpeg" },
          { id: "counter-current-mixer", name: "Counter Current Intensive Mixer", category: "Mixing Equipments", price: "₹ 14.5 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Latest%20Products/counter-current-mixer-machine-1755930013-8203942.jpeg" },
          { id: "pan-mixer-machine", name: "Pan Mixer Machine", category: "Mixing Equipments", price: "₹ 3.8 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/pan-mixer-machine-1755513812-8274106.jpg" },
          { id: "muller-mixer", name: "Muller Mixer Machine", category: "Mixing Equipments", price: "₹ 5.8 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/muller-mixer-1755514378-8274184.jpeg" },
          { id: "ribbon-blender-mixer", name: "Ribbon Blender Mixer", category: "Mixing Equipments", price: "₹ 4.2 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/ribbon-blender-mixer-1755514441-8274193.jpeg" },
          { id: "belt-conveyor-system", name: "Belt Conveyor System", category: "Material Handling Equipments", price: "₹ 2.8 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/belt-conveyor-system-1755514502-8274197.jpeg" },
          { id: "steep-angle-conveyor", name: "Steep Angle Conveyor", category: "Material Handling Equipments", price: "₹ 4.5 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/steep-angle-conveyor-1755514571-8274205.jpeg" },
          { id: "bucket-elevator", name: "Bucket Elevator", category: "Material Handling Equipments", price: "₹ 3.5 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/bucket-elevator-1755514631-8274209.jpeg" },
          { id: "roller-conveyor", name: "Roller Conveyor", category: "Material Handling Equipments", price: "₹ 1.8 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/roller-conveyor-1755514704-8274215.jpeg" },
          { id: "electric-winch-machine", name: "Electric Winch Machine", category: "Special Purpose Machines", price: "₹ 2.2 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/electric-winch-machine-1755514765-8274218.jpg" },
          { id: "sheet-bending-machine", name: "Sheet Bending Machine", category: "Special Purpose Machines", price: "₹ 7.5 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/sheet-bending-machine-1755514828-8274221.jpg" },
          { id: "stone-crusher-plant", name: "Stone Crusher Plant", category: "Turnkey Plants", price: "₹ 45 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/stone-crusher-plant-1755514890-8274226.jpeg" },
          { id: "skid-mounted-crushing-plant", name: "Skid Mounted Crushing Plant", category: "Turnkey Plants", price: "₹ 38 Lac", image: "https://ik.imagekit.io/4erfuvr85e/BEW/Products/skid-mounted-crushing-plant-1755514953-8274230.jpg" }
        ];

        // Create Modal Markup if not present
        if (!document.getElementById('global-search-modal')) {
          const modalHTML = `
            <div id="global-search-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] hidden flex items-start justify-center pt-12 sm:pt-20 px-4 transition-all">
              <div class="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[82vh]">
                <!-- Modal Header Bar -->
                <div class="p-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
                  <i class="fa-solid fa-magnifying-glass text-brand-blue text-lg ml-2"></i>
                  <input id="global-search-input" type="text" placeholder="Search 29+ industrial machines (e.g. Servo Press, Jaw Crusher, Mixer)..." class="w-full bg-transparent text-gray-900 font-bold text-sm sm:text-base focus:outline-none placeholder-gray-400" />
                  <button id="close-search-modal-btn" class="text-gray-400 hover:text-gray-700 p-2 rounded-xl text-lg font-bold transition">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <!-- Results Container -->
                <div id="global-search-results" class="p-4 overflow-y-auto space-y-2.5 divide-y divide-gray-50 flex-grow">
                  <div class="text-center py-8 text-gray-400 text-sm font-semibold">
                    Type a machine name or category to search...
                  </div>
                </div>
                <!-- Modal Footer -->
                <div class="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-semibold">
                  <span>Press <kbd class="px-1.5 py-0.5 bg-gray-200 text-gray-700 rounded font-mono text-[10px]">ESC</kbd> to close</span>
                  <a href="products.html" class="text-brand-blue font-bold hover:underline">View Full Catalog →</a>
                </div>
              </div>
            </div>
          `;
          document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        const modal = document.getElementById('global-search-modal');
        const searchInput = document.getElementById('global-search-input');
        const searchResults = document.getElementById('global-search-results');
        const closeModalBtn = document.getElementById('close-search-modal-btn');

        function openSearchModal() {
          if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            if (searchInput) {
              searchInput.value = '';
              searchInput.focus();
              renderSearchResults('');
            }
          }
        }

        function closeSearchModal() {
          if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
          }
        }

        function renderSearchResults(query) {
          if (!searchResults) return;
          const q = query.toLowerCase().trim();
          
          const filtered = globalSearchCatalog.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.category.toLowerCase().includes(q) || 
            p.id.toLowerCase().includes(q)
          );

          if (filtered.length === 0) {
            searchResults.innerHTML = `
              <div class="text-center py-10 text-gray-400">
                <i class="fa-solid fa-box-open text-3xl mb-2 text-gray-300"></i>
                <p class="text-sm font-bold text-gray-700">No machinery matching "${query}"</p>
                <p class="text-xs text-gray-400 mt-1">Try searching for press, crusher, mill, feeder, or conveyor</p>
              </div>
            `;
            return;
          }

          let html = '';
          filtered.forEach(p => {
            html += `
              <a href="product-detail.html?id=${p.id}" class="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50/60 transition group">
                <img src="${p.image}" alt="${p.name}" class="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-lg bg-gray-50 border border-gray-100 shrink-0 mix-blend-multiply" />
                <div class="flex-grow min-w-0">
                  <div class="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-0.5">${p.category}</div>
                  <h4 class="font-extrabold text-sm sm:text-base text-gray-900 truncate group-hover:text-brand-blue transition">${p.name}</h4>
                  <div class="text-xs text-gray-500 font-bold mt-0.5">Starting at <span class="text-brand-blue">${p.price}</span></div>
                </div>
                <i class="fa-solid fa-chevron-right text-gray-300 group-hover:text-brand-blue group-hover:translate-x-1 transition text-xs shrink-0 pr-2"></i>
              </a>
            `;
          });
          searchResults.innerHTML = html;
        }

        // Attach click triggers to all search buttons on the page
        document.querySelectorAll('button, a').forEach(btn => {
          if (btn.id === 'nav-search-btn' || btn.classList.contains('search-trigger-btn') || (btn.querySelector('.fa-magnifying-glass') && !btn.closest('#cat-search-input'))) {
            btn.addEventListener('click', (e) => {
              e.preventDefault();
              openSearchModal();
            });
          }
        });

        if (searchInput) {
          searchInput.addEventListener('input', (e) => {
            renderSearchResults(e.target.value);
          });
        }

        if (closeModalBtn) closeModalBtn.addEventListener('click', closeSearchModal);

        if (modal) {
          modal.addEventListener('click', (e) => {
            if (e.target === modal) closeSearchModal();
          });
        }

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeSearchModal();
          }
        });

      });
