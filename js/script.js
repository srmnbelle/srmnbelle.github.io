const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
});

ScrollReveal({
    reset: true,
    duration: 1000,
    scale: 1.25,
});

ScrollReveal().reveal('.headline', {container: "#feature", delay: 200});