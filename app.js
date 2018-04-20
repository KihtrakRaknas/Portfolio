var logo = document.getElementById("750Logo");
var logoText = document.getElementById("logoText");
var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
var tab4 = document.getElementById("tab4");
var content = document.getElementById("content");
var ClickAButton = document.getElementById("ClickAButton");
var clicked = false;

ClickAButton.addEventListener("click",function(){
    $("#ClickAButton").slideUp();
});

tab1.addEventListener("click",function(){
    clicked = true;
    $("#ClickAButton").slideUp();
    $("#content1").slideDown();
    $("#content2").slideUp();
    $("#content3").slideUp();
    $("#content4").slideUp();
    tab1.classList.add("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
    tab4.classList.remove("active");
});

tab2.addEventListener("click",function(){
    clicked = true;
    $("#ClickAButton").slideUp();
    $("#content1").slideUp();
    $("#content2").slideDown();
    $("#content3").slideUp();
    $("#content4").slideUp();
    tab1.classList.remove("active");
    tab2.classList.add("active");
    tab3.classList.remove("active");
    tab4.classList.remove("active");
});

tab3.addEventListener("click",function(){
    clicked = true;
    $("#ClickAButton").slideUp();
    $("#content1").slideUp();
    $("#content2").slideUp();
    $("#content3").slideDown();
    $("#content4").slideUp();
    tab1.classList.remove("active");
    tab2.classList.remove("active");
    tab3.classList.add("active");
    tab4.classList.remove("active");
});

tab4.addEventListener("click",function(){
    clicked = true;
    $("#ClickAButton").slideUp();
    $("#content1").slideUp();
    $("#content2").slideUp();
    $("#content3").slideUp();
    $("#content4").slideDown();
    tab1.classList.remove("active");
    tab2.classList.remove("active");
    tab3.classList.remove("active");
    tab4.classList.add("active");
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

window.onload = function(){
    resize();
     var tim = setInterval(loop,100)
};
var num = 0;
function loop(){
    num++;
    if(num==40 && !clicked)
        $("#ClickAButton").slideDown();
}

window.onscroll = function(){
    logoText.style.backgroundColor = "rgba(255,255,255,"+(1-(window.pageYOffset/(height/1.2)))+")";
}

window.addEventListener('resize', resize);

var height;
function resize(){
    height = (window.innerWidth*(243/686))
    logo.style= "min-height: "+height+"px;";
    var borderSize = ((window.innerWidth/2)-290).toString();
    var topBorderSize = (height-310)/2
    logoText.style="margin-left: "+borderSize+"px; margin-right: "+borderSize+"px; margin-top: "+topBorderSize+"px;";
    //logoText.style="";
}

/*
const navbar = document.getElementById("navbar");
window.onscroll = function() {
  if (window.pageYOffset >= navbar.offsetTop) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}*/