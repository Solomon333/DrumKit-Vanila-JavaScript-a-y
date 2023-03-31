  //**** number of button element ****//

let numberOfButtons = document.querySelectorAll(".drum").length;

// **** FOR LOOP ****//

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonValue= this.innerHTML;
      keySound(buttonValue);
      animateButton(buttonValue);
    });
}


    //**** detacte keyboard who was preesed ****//

    document.addEventListener("keydown", function(event) {
      keySound(event.key);
      animateButton(event.key);
    })


    //**** function to play the relavent sound of keyboard key ****//

    function keySound(key){

      switch (key) {
        case "w":
          let crashBeat = new Audio("sounds/crash.mp3");
          crashBeat.play();
          break;
        case "a":
          let tom1Beat = new Audio("sounds/tom-1.mp3");
          tom1Beat.play();
          break;
        case "s":
          let tom2Beat = new Audio("sounds/tom-2.mp3");
          tom2Beat.play();
          break;
        case "d":
          let tom3Beat = new Audio("sounds/tom-3.mp3");
          tom3Beat.play();
          break;
        case "j":
          let tom4Beat = new Audio("sounds/tom-4.mp3");
          tom4Beat.play();
          break;
        case "k":
          let snareBeat = new Audio("sounds/snare.mp3");
          snareBeat.play();
          break;
        case "l":
          let kickBeat = new Audio("sounds/kick-bass.mp3");
          kickBeat.play();
        default:
          break;
      }
        

    }

    //**** Adding Animmation to pressed key ****//

    function animateButton(currentKey) {
      let buttonActive = document.querySelector("." + currentKey)
        buttonActive.classList.add("pressed");

        setTimeout(function() {
          buttonActive.classList.remove("pressed");
        } ,100);
    }



// let drumBeat = new Audio("sounds/tom-1.mp3");
// drumBeat.play();

//**** WHILE LOOP ****//
//     let i = 0;
// while(i <= numberOfButtons){
//     document.querySelectorAll(".drum")[i].addEventListener("click", () => {
//         alert("I just got clicked on!!!");
//     });
//     i++
// }
