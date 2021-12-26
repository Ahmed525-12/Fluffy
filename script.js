// -------------------------------------------------navbar-----------------------------


$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// -------------------------------------------------navbar-----------------------------
// --------------------------------------------------up btn --------------------------------------------------------
$(window).scroll(function () {
    $('a').toggleClass('scrollh', $(this).scrollTop() > 50);
});

$(".demoupbtn").click(function(){
    $("body,html").animate({scrollTop:'0'},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------
$("a[href^='#']").click(function(e) {
    let ax = $(e.target).attr("href");
    let ay = $(ax).offset().top;
    $("body,html").animate({scrollTop:ay},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------

$(document).ready(function(){
    
    $("#store-container").fadeOut(3000,function(){
        $("#loading").fadeOut(500,function(){
          
            $("#loading").remove()
        })
    })
})

// -----------------------------------------------------------------------------------------------------

$('body').scrollspy({target: '.navbar-fixed-top'})

// ---------------------------------------------------------------------------------------------------------

function textcop(){
    var getcop = document.getElementById("getcop")
    var mydiv = document.getElementById("mydiv")
    getcop.value=mydiv.innerText;
    getcop.select()
    document.execCommand("cut")
}



function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }



  AOS.init();