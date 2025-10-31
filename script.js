//<!--  -->funct<!--  -->ion guessgame(){
// <!--  --> var <!--  -->guessNumber=20;
// <!--  --> var <!--  -->number= prompt ("Введи число");
// <!--  --> if(n<!--  -->umber>guessNumber){
//  <!--  -->    a<!--  -->lert("Ваше число больше");
//  <!--  -->    r<!--  -->eturn guessgame();
//<!--  -->  }
// <!--  --><!--  --> else<!--  --> if(number<guessNumber){
// <!--  -->     <!--  -->alert("Ваше число меньше");
/* <!--  -->     <!--  -->return guessgame();
 <!--  --> }
  else<!--  -->{
  <!--  -->  ret<!--  -->urn alert("Вы угадали!"); 
<!--  -->  }
}<!--  -->
<!--  -->guess<!--  -->game();
<!--  -->funct<!--  -->ion reminder(){
  <!--  -->  ale<!--  -->rt("Ты здесь слишком долго");
   <!--  --> win
<!--  -->   <!--  --> wind<!--  -->ow.close();
 <!--  -->   
}
setTi<!--  -->meout(reminder,5000);*/

function validFrom(){
    var name= document.getElementById ("name").value; 
    console.log(name); 
    var password= document.getElementById ("password").value; 
    console.log(password);  
    var reg_name = /^[а-яёA-Z]+$/i;
    var reg_pas = /^[0-9A-Z]{5,100}$/i;
    
    if (reg_name.test(name) == false)
    {
     alert("Ошибся в фио");
    }
        if (reg_pas.test(password) == false)
    {
     alert("Ошибся в пароли");
    }
}
document.querySelector(".button").addEventListener("click", validFrom);