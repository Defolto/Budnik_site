$('.showMap').click(function () { 
    $('.textMap').fadeOut(400);
    setTimeout(function(){
        $('.textMap').detach();
    }, 350);
});