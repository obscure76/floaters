$(document).ready(function(){
    text.width = window.innerWidth;
    text.height =  30;
    var t=document.getElementById("beta");
    if(t!=null)
    {
        t.addEventListener('mouseover', function() {
            console.log("Hover event");
            var div = $("div");
            div.animate({left: '100px'}, "slow");
            div.animate({fontSize: '3em'}, "slow");
        });
        t.addEventListener('mouseout', function() {
            var div = $("div");
            div.animate({right: '20px'}, "slow");
            div.animate({fontSize: '3em'}, "slow");
        });
    } else {
        //console.log("No beta element");
    }
    var a=document.getElementById("demo");
    a.addEventListener("mouseover", function() {
        console.log("mouseover");
        //animate(".anim",'wobble');
        $("#demo").addClass('animated hinge ');
        var w = window.setTimeout( function() {
            $("#demo").removeClass('animated hinge ');
        }, 1300
        );
    });
     
});