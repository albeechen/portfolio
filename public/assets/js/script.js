$(document).ready(function() {
    let menu = document.getElementById('header-nav');
    $("#navbarToggle").click(function() {
       if (menu.style.display === 'none') {
           menu.style.display = 'block';
            $('#burger').removeClass('glyphicon glyphicon-menu-hamburger').addClass('glyphicon glyphicon-remove');
        } else {
            menu.style.display = 'none';
            $('#burger').removeClass('glyphicon glyphicon-remove').addClass('glyphicon glyphicon-menu-hamburger');
        }
    });
    
    $(window).resize(function(){
        let w = $(window).width();
        if((w > 768) && (menu.style.display === 'none')){
            menu.style.display = 'block';
        }
    })
});

