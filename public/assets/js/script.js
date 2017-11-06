'use strict';

$(function () {
    var menu = document.getElementById('menu');

    $("#hamburger").click(function () {
        menu.style.display = 'block';
    });

    $("#removeBtn").click(function () {
        menu.style.display = 'none';
    });
});
