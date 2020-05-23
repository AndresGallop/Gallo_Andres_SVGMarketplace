//this is an IIEF (Immediately Invoked Function Expression)
//also called the Module pattern
//
(() => { //shorthand function declaration (also called a fat arrow function)
  console.log('What kind of person are you?!');

  //select elements here

  //querySelectorAll is one-to-many selection --> find EVERY element that matches the selector
  let stick = document.querySelectorAll("svg"),
        //one to one conection -->one variable name means one element
      activities = document.querySelector(".svg");

      escape = document.querySelector(".svgi");



  // functions go in the middle
  function logID() {
    console.log("Great! You are:",this.id);
    //debugger;// pause your code execution here
    }

  //event handling
 //  theBadge.addEventListener("click", logID);
  stick.forEach(stick => stick.addEventListener("click",logID));

  activities.addEventListener("click", logID);



})();
