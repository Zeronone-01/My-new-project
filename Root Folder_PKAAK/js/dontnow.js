<script>
$(document).ready(function(){
//HOME//
    $("#topbtn").hide();
    $("#expandedfooter0").hide();
    $("#expandedfooter1").hide();
    $("#expandedfooter2").hide();
    $("#expandedfooter3").hide();
    $("#expandedfooter4").hide();
    $("#expandedfooter5").hide();
    $("#blackscreen").hide();
    $("#blackscreen2").hide();
    $("#blackscreen3").hide();
    $("#Searchareatest").hide();
    $(".mobilenavi").hide();
    $("#mobilenaviscreen").hide();
    $("#ipscreen").hide();
    $("#ipadscreen").hide();
    $("#macscreen").hide();
    $("#watchscreen").hide();
    $("#airpodscreen").hide();
    $("#accessscreen").hide();
    $("#servicescreen").hide();
    $("#Promoscreen").hide();
    $("#explorescreen").hide();
               
    //Searchbox//
    $("#search").click(function(){
        $("#blackscreen").fadeToggle();
        $("#Searchareatest").fadeToggle();
        $("#Header1").fadeToggle();
    })

    $("#search1").click(function(){
        $("#blackscreen3").fadeToggle();
        $("#Searchareatest").fadeToggle();
        $("#header2").fadeToggle();
    })
    //Menu1//
    $("#menu1").mouseover(function(){
        $("#ip-test").css("color","#b3b3b3");
    })

    $("#menu1").mouseleave(function(){
        $("#ip-test").css("color","black");
    })

    $("#ip-test").mouseover(function(){
        $("#ip-test").css("color","#b3b3b3");
    })

    $("#ip-test").mouseleave(function(){
        $("#ip-test").css("color","black");
    })
    //Menu1//

    //Menu2//
    $("#menu2").mouseover(function(){
        $("#ipad-test").css("color","#b3b3b3");
    })

    $("#menu2").mouseleave(function(){
        $("#ipad-test").css("color","black");
    })

    $("#ipad-test").mouseover(function(){
        $("#ipad-test").css("color","#b3b3b3");
    })

    $("#ipad-test").mouseleave(function(){
        $("#ipad-test").css("color","black");
    })

    //Menu2//

    //Menu3//
    $("#menu3").mouseover(function(){
        $("#mac-test").css("color","#b3b3b3");
    })

    $("#menu3").mouseleave(function(){
        $("#mac-test").css("color","black");
    })

    $("#mac-test").mouseover(function(){
        $("#mac-test").css("color","#b3b3b3");
    })

    $("#mac-test").mouseleave(function(){
        $("#mac-test").css("color","black");
    })
    //Menu3//

     //Menu4//
     $("#menu4").mouseover(function(){
        $("#watch-test").css("color","#b3b3b3");
    })

    $("#menu4").mouseleave(function(){
        $("#watch-test").css("color","black");
    })

    $("#watch-test").mouseover(function(){
        $("#watch-test").css("color","#b3b3b3");
    })

    $("#watch-test").mouseleave(function(){
        $("#watch-test").css("color","black");
    })
    //Menu4//           

     //Menu5//
     $("#menu5").mouseover(function(){
        $("#air-test").css("color","#b3b3b3");
    })

    $("#menu5").mouseleave(function(){
        $("#air-test").css("color","black");
    })

    $("#air-test").mouseover(function(){
        $("#air-test").css("color","#b3b3b3");
    })

    $("#air-test").mouseleave(function(){
        $("#air-test").css("color","black");
    })
    //Menu5//   

      //Menu6//
      $("#menu6").mouseover(function(){
        $("#access-test").css("color","#b3b3b3");
    })

    $("#menu6").mouseleave(function(){
        $("#access-test").css("color","black");
    })

    $("#access-test").mouseover(function(){
        $("#access-test").css("color","#b3b3b3");
    })

    $("#access-test").mouseleave(function(){
        $("#access-test").css("color","black");
    })
    //Menu6//              

     //Menu7//
                  $("#menu7").mouseover(function(){
        $("#service-test").css("color","#b3b3b3");
    })

    $("#menu7").mouseleave(function(){
        $("#service-test").css("color","black");
    })

    $("#service-test").mouseover(function(){
        $("#service-test").css("color","#b3b3b3");
    })

    $("#service-test").mouseleave(function(){
        $("#service-test").css("color","black");
    })
    //Menu7//   

     //Menu8//
     $("#menu8").mouseover(function(){
        $("#promo-test").css("color","#b3b3b3");
    })

    $("#menu8").mouseleave(function(){
        $("#promo-test").css("color","black");
    })

    $("#promo-test").mouseover(function(){
        $("#promo-test").css("color","#b3b3b3");
    })

    $("#promo-test").mouseleave(function(){
        $("#promo-test").css("color","black");
    })
    //Menu8//  

    
     //Menu9//
     $("#menu9").mouseover(function(){
        $("#ex-test").css("color","#b3b3b3");
    })

    $("#menu9").mouseleave(function(){
        $("#ex-test").css("color","black");
    })

    $("#ex-test").mouseover(function(){
        $("#ex-test").css("color","#b3b3b3");
    })

    $("#ex-test").mouseleave(function(){
        $("#ex-test").css("color","black");
    })
    //Menu9// 

    $(".login-menu").mouseover(function(){
        $("#usertologin").css("color","#b3b3b3");
    })

    $(".login-menu").mouseleave(function(){
        $("#usertologin").css("color","black");
    })

    $("#usertologin").mouseover(function(){
        $("#usertologin").css("color","#b3b3b3");
    })

    $("#usertologin").mouseleave(function(){
        $("#usertologin").css("color","black");
    })


    //Search//


    //BLACK SCREEN//
    $("#blackscreen").click(function(){
        $("#blackscreen").fadeOut();
        $("#Searchareatest").fadeOut();
        $("#Header1").fadeToggle();
    })

    $("#blackscreen3").click(function(){
        $("#blackscreen3").fadeOut();
        $("#Searchareatest").fadeOut();
        $("#header2").fadeToggle();
    })

    //BLACK SCREEN//

    //BLACK SCREEN 2//
    $("#blackscreen2").click(function(){
        $("#blackscreen2").fadeOut();
        $(".mobilenavi").fadeOut();
        $("#mobilenaviscreen").fadeOut();
        $("#ipscreen").fadeOut();
        $("#ipadscreen").fadeOut();
        $("#macscreen").fadeOut();
        $("#watchscreen").fadeOut();
        $("#airpodscreen").fadeOut();
        $("#accessscreen").fadeOut();
        $("#servicescreen").fadeOut();
        $("#Promoscreen").fadeOut();
        $("#explorescreen").fadeOut();
    })

    //BLACK SCREEN 2//

    //Mobile navi// 
    $("#triggermobilenavi").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $(".mobilenavi").fadeToggle();
        $("#blackscreen2").fadeToggle();
    })

    $(".backtonavi").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $("#ipscreen").fadeOut();
        $("#ipadscreen").fadeOut();
        $("#macscreen").fadeOut();
        $("#watchscreen").fadeOut();
        $("#airpodscreen").fadeOut();
        $("#accessscreen").fadeOut();
        $("#servicescreen").fadeOut();
        $("#Promoscreen").fadeOut();
        $("#explorescreen").fadeOut();
    })

    $("#triggerexplore").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $("#explorescreen").fadeToggle();
    })

    $("#triggeriphone").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $("#ipscreen").fadeToggle();
    })

    $("#triggeripad").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $("#ipadscreen").fadeToggle();
    })

    $("#triggermac").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $("#macscreen").fadeToggle();
    })

    $("#triggerwatch").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $("#watchscreen").fadeToggle();
    })

    $("#triggerair").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $("#airpodscreen").fadeToggle();
    })

    $("#triggeraccess").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $("#accessscreen").fadeToggle();
    })

    $("#triggerservice").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $("#servicescreen").fadeToggle();
    })

    $("#triggerpromo").click(function(){
        $("#mobilenaviscreen").fadeToggle();
        $("#Promoscreen").fadeToggle();
    })
    

    //Footer info expansion// 
    $("#footerinfoexpand0").click(function(){
        $("#expandedfooter0").slideToggle();
        $("#expandedfooter1").slideUp();
        $("#expandedfooter2").slideUp();
        $("#expandedfooter3").slideUp();
        $("#expandedfooter4").slideUp();
        $("#expandedfooter5").slideUp();
        $("#expandplus0 i").toggleClass("fa-chevron-down fa-chevron-up");
        $("#expandplus1 i").removeClass("fa-chevron-up");
        $("#expandplus2 i").removeClass("fa-chevron-up");
        $("#expandplus3 i").removeClass("fa-chevron-up");
        $("#expandplus4 i").removeClass("fa-chevron-up");
        $("#expandplus5 i").removeClass("fa-chevron-up");

        $("#expandplus1 i").addClass("fa-chevron-down");
        $("#expandplus2 i").addClass("fa-chevron-down");
        $("#expandplus3 i").addClass("fa-chevron-down");
        $("#expandplus4 i").addClass("fa-chevron-down");
        $("#expandplus5 i").addClass("fa-chevron-down");
    })

    $("#footerinfoexpand1").click(function(){
        $("#expandedfooter1").slideToggle();
        $("#expandedfooter0").slideUp();
        $("#expandedfooter2").slideUp();
        $("#expandedfooter3").slideUp();
        $("#expandedfooter4").slideUp();
        $("#expandedfooter5").slideUp();
        $("#expandplus1 i").toggleClass("fa-chevron-down fa-chevron-up");
        $("#expandplus0 i").removeClass("fa-chevron-up");
        $("#expandplus2 i").removeClass("fa-chevron-up");
        $("#expandplus3 i").removeClass("fa-chevron-up");
        $("#expandplus4 i").removeClass("fa-chevron-up");
        $("#expandplus5 i").removeClass("fa-chevron-up");

        $("#expandplus0 i").addClass("fa-chevron-down");
        $("#expandplus2 i").addClass("fa-chevron-down");
        $("#expandplus3 i").addClass("fa-chevron-down");
        $("#expandplus4 i").addClass("fa-chevron-down");
        $("#expandplus5 i").addClass("fa-chevron-down");
    })

    $("#footerinfoexpand2").click(function(){
        $("#expandedfooter2").slideToggle();
        $("#expandedfooter1").slideUp();
        $("#expandedfooter0").slideUp();
        $("#expandedfooter3").slideUp();
        $("#expandedfooter4").slideUp();
        $("#expandedfooter5").slideUp();
        $("#expandplus2 i").toggleClass("fa-chevron-down fa-chevron-up");
        $("#expandplus0 i").removeClass("fa-chevron-up");
        $("#expandplus1 i").removeClass("fa-chevron-up");
        $("#expandplus3 i").removeClass("fa-chevron-up");
        $("#expandplus4 i").removeClass("fa-chevron-up");
        $("#expandplus5 i").removeClass("fa-chevron-up");

        $("#expandplus0 i").addClass("fa-chevron-down");
        $("#expandplus1 i").addClass("fa-chevron-down");
        $("#expandplus3 i").addClass("fa-chevron-down");
        $("#expandplus4 i").addClass("fa-chevron-down");
        $("#expandplus5 i").addClass("fa-chevron-down");
    })

    $("#footerinfoexpand3").click(function(){
        $("#expandedfooter3").slideToggle();
        $("#expandedfooter1").slideUp();
        $("#expandedfooter2").slideUp();
        $("#expandedfooter0").slideUp();
        $("#expandedfooter4").slideUp();
        $("#expandedfooter5").slideUp();
        $("#expandplus3 i").toggleClass("fa-chevron-down fa-chevron-up");
        $("#expandplus0 i").removeClass("fa-chevron-up");
        $("#expandplus2 i").removeClass("fa-chevron-up");
        $("#expandplus1 i").removeClass("fa-chevron-up");
        $("#expandplus4 i").removeClass("fa-chevron-up");
        $("#expandplus5 i").removeClass("fa-chevron-up");

        $("#expandplus0 i").addClass("fa-chevron-down");
        $("#expandplus2 i").addClass("fa-chevron-down");
        $("#expandplus1 i").addClass("fa-chevron-down");
        $("#expandplus4 i").addClass("fa-chevron-down");
        $("#expandplus5 i").addClass("fa-chevron-down");
    })

    $("#footerinfoexpand4").click(function(){
        $("#expandedfooter4").slideToggle();
        $("#expandedfooter1").slideUp();
        $("#expandedfooter2").slideUp();
        $("#expandedfooter3").slideUp();
        $("#expandedfooter0").slideUp();
        $("#expandedfooter5").slideUp();
        $("#expandplus4 i").toggleClass("fa-chevron-down fa-chevron-up");

        $("#expandplus0 i").removeClass("fa-chevron-up");
        $("#expandplus2 i").removeClass("fa-chevron-up");
        $("#expandplus1 i").removeClass("fa-chevron-up");
        $("#expandplus3 i").removeClass("fa-chevron-up");
        $("#expandplus5 i").removeClass("fa-chevron-up");
        
        $("#expandplus0 i").addClass("fa-chevron-down");
        $("#expandplus2 i").addClass("fa-chevron-down");
        $("#expandplus1 i").addClass("fa-chevron-down");
        $("#expandplus3 i").addClass("fa-chevron-down");
        $("#expandplus5 i").addClass("fa-chevron-down");           
    })

    $("#footerinfoexpand5").click(function(){
        $("#expandedfooter5").slideToggle();
        $("#expandedfooter1").slideUp();
        $("#expandedfooter2").slideUp();
        $("#expandedfooter3").slideUp();
        $("#expandedfooter0").slideUp();
        $("#expandplus5 i").toggleClass("fa-chevron-down fa-chevron-up");

        $("#expandplus0 i").removeClass("fa-chevron-up");
        $("#expandplus2 i").removeClass("fa-chevron-up");
        $("#expandplus1 i").removeClass("fa-chevron-up");
        $("#expandplus3 i").removeClass("fa-chevron-up");
        $("#expandplus4 i").removeClass("fa-chevron-up");
        
        $("#expandplus0 i").addClass("fa-chevron-down");
        $("#expandplus2 i").addClass("fa-chevron-down");
        $("#expandplus1 i").addClass("fa-chevron-down");
        $("#expandplus3 i").addClass("fa-chevron-down");
        $("#expandplus4 i").addClass("fa-chevron-down");           
    })
    
    //Footer info expansion// 

    var scroll_pos=0;
  $(document).scroll(function(){
    scroll_pos = $(this).scrollTop();

    if(scroll_pos>0){
      $("#topbtn").show();
    }else{
      $("#topbtn").hide();
    }
  })
})
</script>