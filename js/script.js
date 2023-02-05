const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
});

document.addEventListener("mousemove", parallax);
function parallax(e){
    document.querySelectorAll(".object").forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value /50;
        var y = e.clientY * moving_value /50;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        
    });
}