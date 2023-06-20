$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




$(document).ready(function(){
    $(".content").slice(0, 4).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".content:hidden").slice(0, 4).slideDown();
      if($(".content:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
  })