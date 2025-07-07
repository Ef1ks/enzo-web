window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const logo = document.querySelector(".logo");

    if (window.scrollY > 0) {
        nav.style.height = "45px";
        logo.style.transform = "scale(0.5)";


    } else {
        nav.style.height = "100px";
        logo.style.transform = "scale(1)";

    }
});