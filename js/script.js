$(document).ready(function() {
    $("#hamburger").click(function() {
        let menu = document.getElementById('menu');
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        }
    });

    $("#clods_btn").click(function() {
        let menu = document.getElementById('menu');
        let sites = document.getElementById('link_sites');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
            sites.style.display = 'none';
        }
    });

    $("#link_btn").click(function() {
        let sites = document.getElementById('link_sites');
        if (sites.style.display === 'none') {
            sites.style.display = 'block';
        } else {
        	sites.style.display = 'none';
        }
    });
});