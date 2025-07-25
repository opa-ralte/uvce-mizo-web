window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const scrollPosition = window.scrollY;
    const heroHeight = heroSection.offsetHeight; // Get the height of the hero section

    // Define the scroll range over which the fade should happen
    // For example, start fading after 20% of the hero section is scrolled,
    // and be fully faded by 80%
    const fadeStart = heroHeight * 0.2;
    const fadeEnd = heroHeight * 0.8;

    let opacity = 1;

    if (scrollPosition > fadeStart) {
        // Calculate opacity based on scroll position within the fade range
        opacity = 1 - ((scrollPosition - fadeStart) / (fadeEnd - fadeStart));
        opacity = Math.max(0, opacity); // Ensure opacity doesn't go below 0
    }

    heroSection.style.opacity = opacity;

    // Optional: If you want the image to completely disappear and stop being interactive
    // after it's faded, you can also set display: none or visibility: hidden
    if (opacity === 0) {
        // heroSection.style.display = 'none'; // Or visibility: hidden;
    } else {
        // heroSection.style.display = 'block'; // Or visibility: visible;
    }
});