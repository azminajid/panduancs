var margin_top = 30;
$("#sidenav").on('affix.bs.affix', function(){
    var mtop = (margin_top+80)+"px";
    $(this).css("margin-top",mtop);
});
$('#sidenav').on('affix-top.bs.affix', function(){
    var mtop = margin_top+"px"
    $(this).css("margin-top",mtop);
});
$("#sidenav a").on('click', function(event) {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 500, function(){
    window.location.hash = hash;
    });
});