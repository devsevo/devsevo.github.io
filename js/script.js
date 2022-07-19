$(document).ready(function(){
    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(400);
    });

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos>=100){
            $('.navbar').addClass('cng-navbar');
        }else{
            $('.navbar').removeClass('cng-navbar');
        }
    });


    const sr = ScrollReveal({
        distance: '45px',
        duration: 2700,
        reset: true
    })
    
    sr.reveal('#com_title', {delay: 350, origin:'left'})
    sr.reveal('#com_desc', {delay: 350, origin:'right'})
    
    sr.reveal('.com_details, .com_feature, .com_contact', {delay: 200, origin:'bottom'})
});


