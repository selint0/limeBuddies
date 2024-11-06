"use strict";

let src1 = "https://i.etsystatic.com/32109541/r/il/789c77/5260495688/il_794xN.5260495688_rg31.jpg";
let src2 = "https://i.etsystatic.com/32109541/r/il/ba34c5/5259752492/il_794xN.5259752492_tj06.jpg";
let src3 = "https://i.etsystatic.com/32109541/r/il/cbe99a/5307932559/il_794xN.5307932559_p1jj.jpg";

$("#btn1").on("click", function(){
	$("#img1").attr("src", src1);
});
$("#btn2").on("click", function(){
	$("#img1").attr("src", src2);
});
$("#btn3").on("click", function(){
	$("#img1").attr("src", src3);
});