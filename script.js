const changeThemeBtn = document.querySelector("#change-theme");

function toggleDarkMode() {
    document.body.classList.toggle("dark");

}
changeThemeBtn.addEventListener("change", function(){
    document.body.classList.toggle("dark");

localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }   
});