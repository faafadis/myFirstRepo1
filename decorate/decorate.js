    

window.onload = function(){
    document.getElementById("bigdecoration").onclick = delayOnClick;
    // document.getElementById("bling").onclick= blink;
    document.getElementById("bling").onchange = fontchange;
    document.getElementById("pig").onclick = timerstest;
    document.getElementById("markovbutton").onclick = markov;
}


var fontchange = function(){
    if(document.getElementById("bling").checked){
        document.getElementById("textarea").style.fontFamily ="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
        document.getElementById("textarea").style.textDecoration ="underline";
        document.getElementById("textarea").style.fontWeight ="bold";
        document.getElementById("textarea").style.color="green"
       // document.body.style.backgroundImage = "miu.PNG";
      // document.body.style.backgroundImage= "url('miu.JPG')";
       document.body.style.backgroundImage= "url('600.jpg')";
       //document.body.style.backgroundColor="blue";
        
    }
    else{
        document.body.style.backgroundImage= "url('')";
       document.getElementById("textarea").style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
       document.getElementById("textarea").style.textDecoration ="";
       document.getElementById("textarea").style.fontWeight ="";
       document.getElementById("textarea").style.color="black";
       
    }
};
function pigLatin() {
   
    var words = document.getElementById("textarea").value;
    var splittedword = words.split(/\s+/);
    var result = "";
    for (var i = 0; i < splittedword.length; i++) {
        if (splittedword[i].charAt(0).match("[aeoiuAEOIU]")) {
            changed = splittedword[i] + "ay";
        } else {
            var word = splittedword[i];
            for (var j = 0; j < word.length; j++) {
                if (word[j].match("[aeoiuAEOIU]")) {
                    var changed = word.substring(j) + word.substring(0, j) + "ay";
                    break;
                }

            }
        }
        result += changed + " ";

    }
    document.getElementById("textarea").value = result;

}

function markov() {
    var words = document.getElementById("textarea").value;
    var arr = words.split(/\s+/);
    var result = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = "Malkovich";
        }
        result += arr[i] + " ";
    }
    document.getElementById("textarea").value = result;
}

var delayOnClick= function(){
    setInterval(decorator,500);
} 


var decorator = function() {
    document.getElementById("textarea").rows += 4;
    document.getElementById("textarea").cols += 4;
//var size= parseInt(document.getElementById("textarea").style.fontSize);
var size= parseInt(window.getComputedStyle(document.getElementById("textarea")).fontSize);
document.getElementById("textarea").style.fontSize = size+ 4 +"px";

//document.getElementById("textarea").style.fontSize = "24pt";

    
}
    
