$(document).ready(function(){
    $(document).ready(function(){    
        $("#klima").delay(2000).fadeIn();
    });    
    $("#toggle").click(function(){
        $("#klima").toggle();
    });
    $("#klima").click(function(){
        /* En CSS-class der kan bruges alle steder, til at style klimavenligt */
        $("body").toggleClass("klimavenlig");
        //$("img, #forsideimg").not("#logo, #logo *, #klf, #klf *, #forsidecap, button, figcaption, #forsidecap").toggle();
    });
});
