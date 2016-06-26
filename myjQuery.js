$(document).ready(function(){

  $("h1").addClass("text-primary text-center")
  $("#btn-interests").click(function(){
    $("#interests-list").slideToggle(350);
  });
  $("#btn-contact").click(function(){
    $("#div-contact").slideToggle(350);
  });

  $('body').scrollspy({target: ".navbar", offset: 50});

  $("#myNavbar a").on('click', function(event) {


      var hash = this.hash;
      //alert("the hash is"+hash);
      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    //}  // End if
  });

  $(".container-fluid .content").css("padding-top","50px");
  //$("#myTopNav").css("padding-top","0px");
  //$("#container-main").css("padding-top","0px");
  //$("#Footer").css("padding-top","0px");

  $(".container-fluid").css("background-color","#efefef");
  $("#container-main").css("background-color","#999999");
  $("#myNavbar").css("background-color","#5DBCD2");
  //$("#myNavbar").addClass("navbar-inverse");
  $("#myNavbar").css("padding-bottom","7px");

});
