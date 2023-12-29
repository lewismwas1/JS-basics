// console.log(dog);
// var dog = 'Louis';
 
//Hoisting JS

// var DEFAULT_RATE = 0.1;
// var rate = 0.05;

// function getRate() {
//     if (!rate){
//     var rate = DEFAULT_RATE;
// }
// return rate;
// }
// console.log('Your rate is ' ,getRate());

// Function Scoped

// function Scoped() {
//     if (true) {
//         var Scope = 'I am Function Scoped';
//     }
//     console.log(Scope);
// }

// function exampleBlockScope() {
//     if (true) {
//       let blockScoped = "I am block-scoped.";
//       const alsoBlockScoped = "I am also block-scoped.";
//     }
//     console.log(blockScoped); // Error: blockScoped is not defined
//     console.log(alsoBlockScoped); // Error: alsoBlockScoped is not defined
//   }
  
  document.getElementById('heading').innerHTML = "I have been changed with JS"

  let channelName; //declaring a variable
  channelName = 'Hello Javascript'; // initialising the variable
  console.log(channelName);


  //declaring variables on the same line using let keyword
  let gameTitle = 'Sonic';
  let gamePlatform = 'SEGA'; 
  let gameYear = 1991;
  console.log(gameTitle + ' ' + gamePlatform +' '+ gameYear);

  //Tasks 

  let favFod = 'Pizza';
  let favDrink = 'Lemonade';
  let favColor = 'red';
  console.log(favFod + ' ' + favDrink + ' ' + favColor);

  favFod = 'Pasta';
  console.log(favFod);

  const myBirthday = 'June date 6 every year';
  console.log(myBirthday);
  