function bmi(){
  let h = document.getElementById("height").value;
  let w = document.getElementById("weight").value;
  var i = w/(h*h);
  console.log(i);

  document.getElementById("res").innerHTML = '<br><h2>Hi, '+                       document.getElementById("name").value +'</h2>';

  document.getElementById("res").innerHTML += '<h3>Your BMI is ' + i + '</h3>';


  if (i<18.4){
    document.getElementById("res").innerHTML += '<h3>You are underweight</h3>'
  }
  else{
    if(i > 40){
      document.getElementById("res").innerHTML += '<h3>You are Obese</h3>'
    }
    if(i < 25.4){
      document.getElementById("res").innerHTML += '<h3>You are Normal</h3>'
    }
    else{
      document.getElementById("res").innerHTML += '<h3>You are Overweight</h3>'
    }
  }
}
