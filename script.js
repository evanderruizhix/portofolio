// Menunggu hingga konten halaman sepenuhnya dimuat sebelum menjalankan kode
document.addEventListener('DOMContentLoaded', () => {
    // Mendapatkan elemen ikon menu dan navbar
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    // Menambahkan event listener untuk klik pada ikon menu
    menuIcon.addEventListener('click', () => {
        // Menambahkan atau menghapus kelas 'active' dari navbar untuk menampilkan atau menyembunyikan menu
        navbar.classList.toggle('active');
        // Menambahkan atau menghapus kelas 'bx-x' dari ikon menu untuk mengubah tampilannya (misalnya, menjadi ikon 'x' saat menu terbuka)
        menuIcon.classList.toggle('bx-x'); 
    });

    // Mendapatkan semua tautan di navbar yang dimulai dengan '#'
    const links = document.querySelectorAll('.navbar a[href^="#"]');
    
    // Menambahkan event listener untuk setiap tautan
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Mencegah perilaku default dari tautan (yakni scroll otomatis ke target)
            e.preventDefault();
            // Mendapatkan ID target dari atribut href tautan
            const targetId = link.getAttribute('href').substring(1);
            // Mendapatkan elemen target berdasarkan ID
            const targetElement = document.getElementById(targetId);
            // Melakukan scroll ke elemen target dengan animasi halus
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('.header').offsetHeight, // Menyesuaikan scroll untuk header tetap
                behavior: 'smooth'
            });
        });
    });

    // Mendapatkan elemen header dan posisi sticky header
    const header = document.querySelector('.header');
    const sticky = header.offsetTop;

    // Menambahkan event listener untuk scroll pada jendela
    window.addEventListener('scroll', () => {
        // Menambahkan atau menghapus kelas 'sticky' dari header berdasarkan posisi scroll
        if (window.scrollY > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Mendapatkan elemen dengan kelas 'text-animation' dan span di dalamnya
    const textAnimation = document.querySelector('.text-animation span');
    if (textAnimation) {
        // Mendapatkan teks yang ada di dalam elemen span
        const text = textAnimation.textContent;
        // Menghapus teks dari elemen span
        textAnimation.textContent = '';
        let index = 0;
        const speed = 100; // Kecepatan pengetikan dalam milidetik

        // Fungsi untuk melakukan efek pengetikan
        function typeWriter() {
            if (index < text.length) {
                // Menambahkan karakter satu per satu ke elemen span
                textAnimation.textContent += text.charAt(index);
                index++;
                // Menjalankan fungsi typeWriter secara rekursif dengan delay
                setTimeout(typeWriter, speed);
            }
        }

        // Memulai efek pengetikan
        typeWriter();
    }
});
