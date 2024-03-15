// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
//Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("theme-btn").addEventListener("click", btnTheme);

function btnTheme() {
  let value = document.getElementById("theme-in").value.toLowerCase();

  if (value == "black" || value == "dark") {
    document.getElementById("body").style.background = "rgba(0,0,0,0.7)";
    document.getElementById("words").style.color = "white";
    console.log("hi");
  }

  if (value == "white" || value == "light") {
    document.getElementById("body").style.background = "rgba(255,255,255,0.7)";
    document.getElementById("words").style.color = "black";
  }

  // Minh showed me how to do the random colors

  if (value == "random") {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("body").style.background = "#" + randomColor;
    document.getElementById("words").style.color = "#" + randomColor2;
  }
}

function btnClicked() {
  //input
  let name = document.getElementById("char-in").value.toLowerCase();

  // If statment - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    document.getElementById("char-quote").innerHTML =
      "Buddy, I am the Dragon Warrior!";
    document.getElementById("char-img").src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    document.getElementById("char-quote").innerHTML = "That was hardcore!";
    document.getElementById("char-img").src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl = "Mantis";
    document.getElementById("char-quote").innerHTML = "Fear the Bug!";
    document.getElementById("char-img").src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    document.getElementById("char-quote").innerHTML = "We should hang out!";
    document.getElementById("char-img").src = "img/monkey.png";
  } else if (name == "viper") {
    charNameEl.innerHTML = "Viper";
    document.getElementById("char-quote").innerHTML =
      "I don't need to bite to fight !";
    document.getElementById("char-img").src = "img/viper.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    document.getElementById("char-quote").innerHTML = "Wings of Justice!";
    document.getElementById("char-img").src = "img/crane.png";
  } else if (name === "boss-wolf") {
    charNameEl.innerHTML = "Boss-Wolf";
    document.getElementById("char-quote").innerHTML =
      "I'll tell you what's gonna be yours: my fist in your plush, cuddly, super-soft face";
    document.getElementById("char-img").src = "img/boss-wolf.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    document.getElementById("char-quote").innerHTML = "Vengeance is served";
    document.getElementById("char-img").src = "img/croc.png";
  } else if (name === "kai") {
    charNameEl.innerHTML = "Kai";
    document.getElementById("char-quote").innerHTML =
      "By the time I am done with them, Oogway, there will be no one left who will even remember your name.";
    document.getElementById("char-img").src = "img/kai.png";
  } else if (name === "mr-ping") {
    charNameEl.innerHTML = "Mr-ping";
    document.getElementById("char-quote").innerHTML =
      "The secret ingredient of my Secret Ingredient Soup.";
    document.getElementById("char-img").src = "img/mr-ping.png";
  } else if (name === "oogway") {
    charNameEl.innerHTML = "Oogway";
    document.getElementById("char-quote").innerHTML =
      " I think they will all lose until they find a battle worth fighting";
    document.getElementById("char-img").src = "img/oogway.png";
  } else if (name === "shen") {
    charNameEl.innerHTML = "Shen";
    document.getElementById("char-quote").innerHTML =
      "Ah, there you are, Soothsayer. It seems your fortune-telling skills are not as good as you thought.";
    document.getElementById("char-img").src = "img/shen.png";
  } else if (name === "shifu") {
    charNameEl.innerHTML = "Shifu";
    document.getElementById("char-quote").innerHTML = "There is now Level Zero";
    document.getElementById("char-img").src = "img/shifu.png";
  } else if (name === "soothsayer") {
    charNameEl.innerHTML = "Soothsayer";
    document.getElementById("char-quote").innerHTML =
      "Your story may not have such a happy beginning, but that doesn't make you who you are. It is the rest of your story, who you choose to be.";
    document.getElementById("char-img").src = "img/soothsayer.png";
  } else if (name === "storming-ox") {
    charNameEl.innerHTML = "Storming-ox";
    document.getElementById("char-quote").innerHTML = "You insolent fool!";
    document.getElementById("char-img").src = "img/storming-ox.png";
  } else if (name === "tai-lung") {
    charNameEl.innerHTML = "Tai-lung";
    document.getElementById("char-quote").innerHTML =
      "You knew I was the Dragon Warrior! You always knew. But when Oogway said otherwise, what did you do? What did you do?! Nothing!";
    document.getElementById("char-img").src = "img/tai-lung.png";
  } else {
    charNameEl.innerHTML = "?????";
    document.getElementById("char-quote").innerHTML = "-------";
    document.getElementById("char-img").src = "img/question-mark.png";
  }
}
