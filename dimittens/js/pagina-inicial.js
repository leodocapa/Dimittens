document.addEventListener("DOMContentLoaded", function() {
    var menuSmart = document.getElementById("menu-smart");
    var menuVertical = document.getElementById("menu-vertical");

    menuSmart.addEventListener("click", function() {
        if (menuVertical.style.display === "flex") {
            menuVertical.style.display = "none";
        } else {
            menuVertical.style.display = "flex";
        }
    });
});

