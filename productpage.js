function changeMainImage(newImageUrl) {
    const mainImage = document.querySelector('.product-image-main');
    mainImage.src = newImageUrl;
}

// PAGE DESCRIPTION TABS Javascript WORKING

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-underline .nav-link');
    const sections = document.querySelectorAll('[id^="nav-"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all
            navLinks.forEach(l => {
                l.classList.remove('active');
                l.removeAttribute('aria-current');
            });

            // Add active class to clicked
            this.classList.add('active');
            this.setAttribute('aria-current', 'page');

            // Hide all sections
            sections.forEach(section => section.style.display = 'none');

            // Show selected section
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.style.display = 'block';
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        sections.forEach(section => section.style.display = 'none');
        sections[0].style.display = 'block';
    }
});
