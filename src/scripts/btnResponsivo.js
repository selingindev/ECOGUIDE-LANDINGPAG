document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.querySelector(".mobileMenu");
    const linksNav = document.querySelector(".linksNav");

    mobileMenu.addEventListener("click", function() {
        linksNav.classList.toggle("active");
    });
});
