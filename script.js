function compute()
{
    let principal = document.getElementById("principal");
    let rate = document.getElementById("rate");
    let years = document.getElementById("years");


     if(principal.value < 1){
      alert("Enter a positive number");
      principal.focus();
      return
    }

    let interest = (principal.value * years.value * rate.value) /100;

    let year = new Date().getFullYear() + parseInt(years.value);
    
    let result = document.getElementById("result");

    result.innerHTML = "<p>If you deposit <mark>"+ principal.value +"</mark>,<br>at an interest rate of <mark>" + rate.value + "%</mark>.<br>You will receive an amount of <mark>"+interest+"</mark>,<br>in the year <mark>"+year+"</mark></p>";
}

function updateRate(){

    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=(rateval +" %");
    
}
