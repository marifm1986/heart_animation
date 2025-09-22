function changeTheme(){
    var element = document.body;
    element.classList.toggle("light");
    var themeButton = document.getElementById("themeButton");
    if (element.classList.contains("dark-mode")) {
        themeButton.innerHTML = "Switch to Light Mode";
    } else {
        themeButton.innerHTML = "Switch to Dark Mode";
    }

}