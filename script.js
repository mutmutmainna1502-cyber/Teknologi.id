// JavaScript untuk navigasi aktif dan smooth scrolling

// Menunggu hingga dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan semua section dan link navigasi
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Fungsi untuk mengatur navigasi aktif berdasarkan section yang terlihat
    function setActiveNav() {
        let current = '';
        
        // Periksa setiap section untuk menentukan mana yang sedang terlihat
        sections.forEach(section => {
            // Mendapatkan posisi section relatif terhadap viewport
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Jika scroll position melewati bagian atas section (dengan offset 200px)
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        // Hapus kelas active dari semua link navigasi
        navLinks.forEach(link => {
            link.classList.remove('active');
            
            // Tambahkan kelas active ke link yang sesuai dengan section yang terlihat
            // substring(1) digunakan untuk menghapus karakter '#' dari href
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }
    
    // Panggil fungsi saat halaman di-scroll
    window.addEventListener('scroll', setActiveNav);
    
    // Smooth scroll untuk navigasi
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Mencegah perilaku default link (loncat langsung ke anchor)
            e.preventDefault();
            
            // Dapatkan ID target dari href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll ke section target dengan efek smooth
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Offset untuk header sticky
                behavior: 'smooth' // Efek scroll halus
            });
        });
    });
});