window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer');
    const content = document.querySelector('.content');
    const footerHeight = footer.offsetHeight;
    const contentHeight = content.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (contentHeight + footerHeight < windowHeight + scrollY) {
        const overlap = (contentHeight + footerHeight) - (windowHeight + scrollY);
        footer.style.transform = `translateY(-${overlap}px)`;
    } else {
        footer.style.transform = 'translateY(0)';
    }
});