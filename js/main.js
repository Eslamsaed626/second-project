$(document).ready(function(){

// first video
    var eslam = $('.video-cont').attr('data-src');

    $(document).on('click','.video-play',function(){
        $('.video-cont').attr('src',eslam);
    })
    $(document).on('click','.close',function(){
        $('.video-cont').attr('src'," ")
    });

// taps

$('#trending-taps li').on('click',function(){
    var myId = $(this).attr('id');
    console.log(myId)
    $(this).addClass('onClick').siblings().removeClass('onClick');
   
   
});


//slick 
$('.slide1').slick({
   arrows:true,
   dots:true
});




$('.slide2').slick()



// collapse
$('.collap-section div').slideUp();
// $('.only-down').slideDown();
// $('.only-down').parent().addClass("active");

$(document).on("click",".collap-section h5",function(){
    $(this).toggleClass('active');
    $(this).parent().siblings().find('h5').removeClass('active')
    $(this).next().slideToggle().parent().siblings().find('div').slideUp();
    $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
    $(this).parent().siblings().find('i').removeClass('fa-angle-up').addClass('fa-angle-down')
    // $(this).parent().toggleClass('active');
    // $(this).parent().addClass('active').siblings().removeClass('active');
    
    // $(this).next().slideToggle().parent().siblings().find('div').slideUp()
    
})

});