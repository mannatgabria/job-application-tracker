document.addEventListener("DOMContentLoaded", () => {
    const lightButton = document.getElementById("light-mode");
    const darkButton = document.getElementById("dark-mode");

    function setTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark");
            darkButton.classList.add("active");
            lightButton.classList.remove("active");
        } else {
            document.body.classList.remove("dark");
            lightButton.classList.add("active");
            darkButton.classList.remove("active");
        }

        localStorage.setItem("theme", theme);
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    lightButton.addEventListener("click", () => {
        setTheme("light");
    });

    darkButton.addEventListener("click", () => {
        setTheme("dark");
    });
});