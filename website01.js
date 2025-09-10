const menutoggle = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.nav-links');
menutoggle.addEventListener('click',()=> {
    navlinks.classList.toggle('show');
});