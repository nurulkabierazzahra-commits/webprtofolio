// 1. Menu Hamburger untuk Layar HP
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    // Berubah icon saat diklik agar interaktif
    icon.classList.toggle('fa-heart');
    icon.classList.toggle('fa-heart-broken');
});

// Tutup menu otomatis setelah klik salah satu link di HP
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.add('fa-heart');
        icon.classList.remove('fa-heart-broken');
    });
});

// 2. Scroll Spy (Menandai menu aktif otomatis saat layar di-scroll)
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 160;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navItems.forEach(item => {
                item.classList.remove('active');
                const activeLink = document.querySelector('.nav-links a[href*=' + id + ']');
                if(activeLink) activeLink.classList.add('active');
            });
        }
    });
};