const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-bar ul li');

window.addEventListener('scroll', () => {
    // Log the current scroll positions
    console.log(window.scrollX, window.scrollY);
    
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Get the distance of the section from the top of the page
        const sectionHeight = section.offsetHeight; // Get the height of the section
        // Check if the section is in the viewport
        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
            current = section.getAttribute('id'); // Get the id of the current section
        }
    });

    // Log the current section id
    console.log('Current Section:', current);

    navLi.forEach(li => {
        li.classList.remove('active'); // Remove the active class from all navigation items
        // Add the active class to the navigation item corresponding to the current section
        if (li.querySelector('a').getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});
