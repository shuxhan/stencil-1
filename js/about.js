var tabNavTitle = document.getElementById('tabNavTitle');
var tableNavMenu = document.getElementById('tableNavMenu');
var aboutDownPng = document.getElementById('aboutDownPng');
var i = 0;

tabNavTitle.onclick = function() {
    if (i == 0) {
        tableNavMenu.style.display = 'block';
        aboutDownPng.classList.add('about-down-png-rotate')
        i = 1;

    } else {
        tableNavMenu.style.display = 'none';
        aboutDownPng.classList.remove('about-down-png-rotate')

        i = 0;
    }
}
