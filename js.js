const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-bar ul li');
const navBar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop; // 섹션이 페이지 상단에서부터 떨어진 거리
        const sectionHeight = section.offsetHeight; // 섹션의 높이
        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + 953) {
            current = section.getAttribute('id'); 
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active'); 
        if (li.querySelector('a').getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
});

window.addEventListener('load', function() {
    document.getElementById('home').scrollIntoView();
});

function changeImage(src, button) {
    document.getElementById('mainImage').src = src;

    const buttons = document.querySelectorAll('.image-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    button.classList.add('active');
}
