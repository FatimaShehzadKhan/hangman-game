var welcomeWindow = document.querySelector(".welcome-message");
var genreSelection = document.querySelector(".genre-selection");
var selectBtn = document.querySelector(".genre-selection button");
var gameHeader = document.querySelector(".wrapper1");
var gameWindow = document.querySelector(".wrapper2");
var capsBtn = document.querySelector("#capitals");
var moviesBtn = document.querySelector("#movies");
var citiesBtn = document.querySelector("#cities");
var dramasBtn = document.querySelector('#dramas');
var ytbrsBtn = document.querySelector('#yt');
var playGameBtn = document.querySelector("#start-btn");
// function setCategory(cat) {
//   if (cat == 'y') {
//     window.value = 4;
//     gameHeader.classList.remove("hide");
//     gameWindow.classList.remove("hide");
//     genreSelection.classList.add("hide");
//     playGame();
//     alert("hi");
//     alert(window.value);


//   }

// }
// dramaBtn.onclick = () => {
// }



// var welcomeWindow = document.getElementById("welcome-message");

playGameBtn.onclick = () => {
  // welcomeWindow.className +=' hide';
  genreSelection.classList.remove("hide");
  welcomeWindow.classList.add('hide');
  // alert("hey");

}

capsBtn.onclick = () => {
  // selectBtn.onclick= ()=>{
  gameHeader.classList.remove("hide");
  gameWindow.classList.remove("hide");
  genreSelection.classList.add("hide");
  window.value = 0;
  playGame();


}
moviesBtn.onclick = () => {
  // selectBtn.onclick= ()=>{
  gameHeader.classList.remove("hide");
  gameWindow.classList.remove("hide");
  genreSelection.classList.add("hide");
  window.value = 1;
  playGame();


}
citiesBtn.onclick = () => {
  // selectBtn.onclick= ()=>{
  gameHeader.classList.remove("hide");
  gameWindow.classList.remove("hide");
  genreSelection.classList.add("hide");
  window.value = 2;
  playGame();


}
dramasBtn.onclick = () => {
  // selectBtn.onclick= ()=>{
  gameHeader.classList.remove("hide");
  gameWindow.classList.remove("hide");
  genreSelection.classList.add("hide");
  window.value = 3;
  playGame();
  // alert("hi");


}
ytbrsBtn.onclick = () => {
  // selectBtn.onclick= ()=>{
  gameHeader.classList.remove("hide");
  gameWindow.classList.remove("hide");
  genreSelection.classList.add("hide");
  window.value = 4;
  playGame();


}

// window.onload = function () {
function playGame() {



  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint;          // Word getHint
  var word;              // Selected word
  var guess;             // Geuss
  var geusses = [];      // Stored geusses
  var lives;             // Lives
  var counter;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Cities";
    } else if (chosenCategory === categories[3]) {
      catagoryName.innerHTML = "The Chosen Category Is Dramas";
    } else if (chosenCategory === categories[4]) {
      catagoryName.innerHTML = "The Chosen Category Is Youtubers";
    }
  }

  // Create geusses ul
  result = function () {

    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] == "-") {
        guess.innerHTML = "-";
        space = 1;
      }
      else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over <br> Correct word: " + word;
      myButtons.classList.add("hide");
      // geuss.classList.remove("disabled");
      // context.clearRect(0, 0, 400, 400);


    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
        myButtons.classList.add("hide");
        // geuss.classList.remove("disabled");
        // correct.parentNode.removeChild(correct);
        // letters.parentNode.removeChild(letters);
        // showClue.innerHTML = "";
        // context.clearRect(0, 0, 400, 400);
        // context.clearRect(0, 0, 400, 400);
      }
    }
  }

  // Animate man
  var animate = function () {
    var drawMe = lives;
    drawArray[drawMe]();
  }


  // Hangman
  canvas = function () {

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

  head = function () {
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI * 2, true);
    context.stroke();
  }

  draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
  }

  frame1 = function () {
    draw(0, 150, 150, 150);
  };

  frame2 = function () {
    draw(10, 0, 10, 600);
  };

  frame3 = function () {
    draw(0, 5, 70, 5);
  };

  frame4 = function () {
    draw(60, 5, 60, 15);
  };

  torso = function () {
    draw(60, 36, 60, 70);
  };

  rightArm = function () {
    draw(60, 46, 100, 50);
  };

  leftArm = function () {
    draw(60, 46, 20, 50);
  };

  rightLeg = function () {
    draw(60, 70, 100, 100);
  };

  leftLeg = function () {
    draw(60, 70, 20, 100);
  };

  drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


  // OnClick Function
  check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.setAttribute("class", "disabled");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          // guess.innerHTML=geuss;
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }

  // pass function declared in HTML  


  // Play
  play = function () {


    categories = [
      ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
      ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
      ["manchester", "milan", "madrid", "amsterdam", "prague"],
      ["severance", "bridgerton", "stranger things", "the walking dead", "peaky blinders"],
      ["mostly sane", "t-series", "young stunners", "pewdiepie", "dude perfect"]
    ];
    chosenCategory = categories[window.value];

    // chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();

  // Hint

  hint.onclick = function () {

    hints = [
      ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
      ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
      ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"],
      ["Pitch-black comedy and horror", "Regency era in England", "Related to supernatural powers", "Zombie apocalypse", "Dangerous man leading gangsters"],
      ["Indian journalist, writer and actor", "Bollywood symbol", "Pakistani freestyle hiphop music", "Comic game commentary", "American Sports and comedy group"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.classList.remove("hide");
    showClue.innerHTML = "Clue: - " + hints[catagoryIndex][hintIndex];
  };

  // Reset

  document.getElementById('reset').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    myButtons.classList.remove("hide");
    play();
  }
  document.getElementById('finalreset').onclick = function () {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    welcomeWindow.classList.remove("hide");
    gameHeader.classList.add("hide");
    gameWindow.classList.add("hide");
    genreSelection.classList.add("hide");
    myButtons.classList.remove("hide");
    // playGame();


  }
}


  // play();