window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 0) {
        nav.style.height = "45px";
    } else {
        nav.style.height = "60px";
    }
});