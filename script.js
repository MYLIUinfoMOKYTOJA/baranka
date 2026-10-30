const changeTheme = document.getElementById("changeTheme");

let isDarkTheme = false;

themeButton.addEventListener("click", changeTheme);

function changeTheme() {
    if (isDarkTheme === false) {
        document.body.style.backgroundColor = "#222";
    document.body.style.color = "#fff";

    } else {
          document.body.style.backgroundColor = "#222";
    document.body.style.color = "#2336ab";

    themeButton 
    }
}