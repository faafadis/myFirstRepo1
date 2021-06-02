$(".level-2").children().css("color","red");
$("div").click(start);
function start(){
     $("div").css("border","green" );
   
     $("body").append($("<input>").attr("type","button"));
     
}