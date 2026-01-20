// script.js (ご提示のファイルと同じ)
const main = document.getElementById("main");
const foot_banner = document.querySelector('.foot-banner');
const screen_height = window.innerHeight;

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    scrollAdd(scrollY);
});

window.onload = function () {
    main.classList.add("active");
}

function scrollAdd(scrollY) {
    if( scrollY > window.innerHeight/100) {
        foot_banner.classList.add("active");
    } else if(scrollY < window.innerHeight/100) {
        foot_banner.classList.remove("active");
    }
}

// ========================================
// Modal Window Functionality
// ========================================

const modal = document.getElementById('entryModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

// Open modal
function openModal() {
    modal.style.display = 'flex';
    // Trigger reflow to enable transition
    modal.offsetHeight;
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }, 300); // Match transition duration
}

// Event listeners
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
