// Sidebar Accordion Logic
function toggleSideMenu(menuId, iconId) {
    const menu = document.getElementById(menuId);
    const icon = document.getElementById(iconId);
    
    // Toggle the hidden class on the list
    menu.classList.toggle('hidden');
    
    // Change the plus to a minus when open
    if (menu.classList.contains('hidden')) {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
    } else {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
    }
}

 //   Hamburger menu toggle
    
        document.addEventListener('DOMContentLoaded', () => {
            
            // --- MOBILE MENU DRAWER LOGIC ---
            const mobileOpenBtn = document.getElementById('mobile-open-btn');
            const mobileCloseBtn = document.getElementById('mobile-close-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileOverlay = document.getElementById('mobile-overlay');

            // Open function
            function openMenu() {
                if (mobileMenu && mobileOverlay) {
                    mobileMenu.classList.remove('translate-x-full');
                    mobileMenu.classList.add('translate-x-0');
                    mobileOverlay.classList.remove('opacity-0', 'pointer-events-none');
                    mobileOverlay.classList.add('opacity-100', 'pointer-events-auto');
                    document.body.style.overflow = 'hidden'; // Stop background scrolling
                }
            }

            // Close function
            function closeMenu() {
                if (mobileMenu && mobileOverlay) {
                    mobileMenu.classList.remove('translate-x-0');
                    mobileMenu.classList.add('translate-x-full');
                    mobileOverlay.classList.remove('opacity-100', 'pointer-events-auto');
                    mobileOverlay.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = ''; // Restore scrolling
                }
            }

            // Attach clicks
            if (mobileOpenBtn) mobileOpenBtn.addEventListener('click', openMenu);
            if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMenu);
            if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);

            // --- MOBILE PRODUCTS ACCORDION LOGIC ---
            const mobileProductsBtn = document.getElementById('mobile-products-btn');
            const mobileProductsList = document.getElementById('mobile-products-list');
            const mobileProductsIcon = document.getElementById('mobile-products-icon');

            if (mobileProductsBtn) {
                mobileProductsBtn.addEventListener('click', () => {
                    window.location.href='products.html';
                });
            }

            if(mobileProductsIcon){
              mobileProductsIcon.addEventListener('click', ()=>{
                mobileProductsList.classList.toggle('hidden');
                mobileProductsIcon.classList.toggle('rotate-180');
              })
            }

        });