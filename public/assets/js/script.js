'use strict';

$(function () {
    $("#hamburger").click(function () {
        var menu = document.getElementById('menu');
        var sites = document.getElementById('link_sites');
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
            sites.style.display = 'none';
        }
    });
});
