$(document).ready(function(){
  $("#numberEntry").submit(function fizzBuzz(event){
    event.preventDefault();
      for (var i = 1; i <= 100; i++){
        if ( i % 3 === 0 && i % 5 === 0){
          $(".result").append("<li>" + "fizzBuzz" + "</li>");
        }
        else if ( i % 5 === 0){
          $(".result").append("<li>" + "buzz" + "</li>");
        }
        else if ( i % 3 === 0){
          $(".result").append("<li>" + "fizz" + "</li>");
        }
        else {
          $(".result").append("<li>" + i + "</li>");
        }

      };
   
  }); //to run fizzBuzz
  
  $("#numberClear").click(function clearAll(){
      $("ul").empty();
    });

}); //to clear fizzBuzz