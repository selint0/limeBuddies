"use strict"; 

let prod1 = $("section #earrings");
let prod2 = $("section #bracelets");
let prod3 = $("section #necklaces");
$("#btn1").on("click", function(){
    prod1.addClass("currentItem");
    prod1.removeClass("hiddenItem");
    prod2.addClass("hiddenItem");
    prod2.removeClass("currentItem");
    prod3.addClass("hiddenItem");
    prod3.removeClass("currentItem");
    $("#btn1").addClass("selected");
    $("#btn2").removeClass("selected");
    $("#btn3").removeClass("selected");
});
$("#btn2").on("click", function(){
    prod1.removeClass("currentItem");
    prod1.addClass("hiddenItem");
    prod2.removeClass("hiddenItem");
    prod2.addClass("currentItem");
    prod3.addClass("hiddenItem");
    prod3.removeClass("currentItem");
    $("#btn1").removeClass("selected");
    $("#btn2").addClass("selected");
    $("#btn3").removeClass("selected");
});
$("#btn3").on("click", function(){
    prod1.addClass("hiddenItem");
    prod1.removeClass("currentItem");
    prod2.addClass("hiddenItem");
    prod2.removeClass("currentItem");
    prod3.removeClass("hiddenItem");
    prod3.addClass("currentItem");
    $("#btn1").removeClass("selected");
    $("#btn2").removeClass("selected");
    $("#btn3").addClass("selected");
});