const robogor = function(entry){
  let entryArray = [];
  for (let index=0; index<=entry; index++){
    entryArray.push(index);
  } 
  let name= ($("input#name")).val();
  function isName(name){
    if(!isNaN(name)){
    alert("Please enter a name");
  }
}
isName(name);
  function isNumber(entry){
    if (isNaN(entry)){
      alert("Please enter a number");
    }
  }
  isNumber(entry);

  entryArray.forEach(function(number){
      if (number > 0 && number % 50 === 0){
      entryArray[number] = "Won't you be my neighbor, " + name + "?";
    } else if (number.toString().includes(3)){
      entryArray[number] = "Won't you be my neighbor?"
    } else if (number.toString().includes(2)){
      entryArray[number] = "Boop!"
    } else if (number.toString().includes(1)){
      entryArray[number] = "Beep!"
    } 
  })
  return entryArray.join(", ");
}
$(document).ready(function(){
  $("form#robogor").submit(function(event){
    event.preventDefault();
    
let entry = parseInt($("input#entry").val());
let result = robogor(entry);
$("#results").text(result);
$("img").fadeIn(6200).slideUp(6200);
  })
})