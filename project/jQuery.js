$(function(){


    $("#submit").on( 'click',function(e){
           
       e.preventDefault();
            var fe = $("#wordSearch").val();
            console.log(fe);
            var what = { wordSearch: fe };
            console.log(" ajax this is the object to be send:" + what);

    //      $.get("http://localhost:8097/word2.js",what)
    //      .done(win)
    //      .fail(notwin);


    // });
    $.post("http://localhost:8097/word2.js",what)
    .done((data)=>{
        console.log(data);
        showresult(data);
        console.log(data);
    })
    .fail((err)=>{
        console.log(err);
    });

 });
 showresult=(val)=>{
    $('#displayresult').empty();
    for (let i=0;i<val.length;i++){
        $('#displayresult').append(`<li> (${val[i].wordtype})::${val[i].definition}</li>`);
    }
    
};

















// function notwin(xhr, status, exception){

//     console.log("my error");
//         console.log(xhr) ;
//         $('#errors').text('An ajax error occurred.');
// }
// function win(data){
//     console.log("done");
//         console.log("this is the returned  data"+ data);
//        var datas = JSON.parse(data);
//         $('#p').empty();
//            for (var i = 0; i < datas.length; i++) {
//                    $('<li>')
//                    .i(datas[i])
//                    .appendTo('#p');
//            }
       

// }





});






















// $(document).ready(function(){
// $("#submit").click(findword);

// function handleResponse(data) {
//     console.log("handleResponse");
//     console.log(resp.data);
//     // console.log("response is "+responseObj.status+" and "+responseObj.text);
//     //  alert("we r here");
//     //  console.log(data);
//       $("#p").val(resp.data);
      
    
// }

// function findword (e) {
//    // e.preventDefault();

//     console.log($("#wordSearch").val() +"here");
//     var where = $("#form").attr("action");
    
//     var fe = $("#wordSearch").val();
//     var what = { wordSearch: fe };
  
  
//    $.get( where, what, handleResponse);
   
// ;
    

// }  
// });



