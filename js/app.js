const darkButton = document.querySelector('#darkmode');
let darkModeEnable = false;
function darkMode(){
    while (true){
    const header = document.getElementById('header');
    header.style.backgroundColor = "rgb(26, 24, 24)";
    darkButton.textContent = "Yoniq";
    if (darkModeEnable){
        header.style.backgroundColor = '#16166d';
        darkModeEnable = false;
    }
    darkModeEnable = true;
}
}