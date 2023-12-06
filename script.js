document.addEventListener("DOMContentLoaded", function () {
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    themeIcon.addEventListener("click", function () {
        // Toggle light/dark mode
        body.classList.toggle("light-mode");

        // Toggle the icon between light and dark
        const currentSrc = themeIcon.src;
        const lightIconPath = "light.png";
        const darkIconPath = "dark.png"; // Replace with the path to your dark theme icon

        themeIcon.src = currentSrc.includes(lightIconPath) ? darkIconPath : lightIconPath;
    });
});
