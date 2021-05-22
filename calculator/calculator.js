
const result= function(){
    const subtotal = document.getElementById("subtotal").value;
    const percent =document.getElementById("percent").value;
    document.getElementById("result").innerHTML = "your total is " + subtotal*(1+percent/100) +" $";

}
