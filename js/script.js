$(document).ready(function() {
    $("#hamburger").click(function() {
        let menu = document.getElementById('menu');
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        }
    });

    $("#clods_btn").click(function() {
        let menu = document.getElementById('menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        }
    });
});