


function doOperation(operationType){


   // Everytime the button is clicked, get the current text value of the paragraph
   let counter = document.getElementById('digit').textContent; ; // Making the value of counter whatever is in the paragraph "digit"


   
      if(operationType ==="increment"){ // I'm just using argument and parameters
   
         counter++; // We increment the value here. 
         document.getElementById('digit').innerHTML = counter; // After incrementng the value, we set it to the paragraph
   
      }
      else if(operationType === "decrement"){
   
         counter--; // We increment the value here. 
         document.getElementById('digit').innerHTML = counter; // After incrementng the value, we set it to the paragraph
   
      }
      else if(operationType === "reset"){
   
         counter = 0; // We reset the counter to zero again so that all other aspect of the code can know that it is now back to zero
         document.getElementById('digit').innerHTML = counter; // After decrement the value, we set it to the paragraph
   
      }
      else{
          // Do nothing
      }


   if( counter > 0 ){
      document.getElementById("digit").style.color = "green";
   }
   else if( counter < 0 ){
      document.getElementById("digit").style.color = "red";
   }
   else{
      document.getElementById("digit").style.color = "black";
   }



   }

