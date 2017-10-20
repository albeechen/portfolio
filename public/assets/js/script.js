$(document).ready(function() {
    $("#hamburger").click(function() {
        let menu = document.getElementById('menu');
        let sites = document.getElementById('link_sites');
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
            sites.style.display = 'none';
        }
    });
});

