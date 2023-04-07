// change navbar styles on scroll

window.addEventListener('scroll',() => {
  document.querySelector('nav').classList.toggle
  ('window-scroll',window.scrollY >0)
})


// show/hide nav menu

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";}
)


//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click',closeNav);


/*==========================================QUESTIONS====
CAPITOLUL..  LECTIA..

        EXERCITIU
           IDEEA EXERCITIULUI(PROBABLY A FOMULA)
           REZOLVAREA COMPLETA
           IDEEA RAMASA
\=
==================================*/
var img = document.createElement("img");
img.src = "images/i1.png";
document.getElementById("answer").appendChild(img);

// Define an array of questions and answers
var qa = [
//Arătați că numărul N = log\u208224-log\u208212+3 este pătratul unui număr natural.
  //În acest exercițiu putem calcula direct folosind formule ale logaritmului(log\u2093y+log\u2093z=log\u2093yz) 
  {
  question: "Arătați că numărul N = log\u208224-log\u208212+3 este pătratul unui număr natural.  ",
    answer: [" În acest exercițiu putem calcula direct folosind formule ale logaritmului(log\u2093y+log\u2093z=log\u2093yz) ", 
            " N=log\u2082(24⁄12)+3 = log\u20822+3",
            " N= 1+3 = 4 = 2² (ceea ce trebuia să demonstrăm)"]
  },
  {
    question: "Determinați numărul real a pentru care punctul A(a,a²) aparține graficului funcției f : ℝ → ℝ, f(x) = 2x-1.",
    answer: ["Înlocuim coordonatele puntcului A în ecuația funcției", 
            "f(a)=a² ⇔ a²-2a+1=0", 
            "Ecuația este echivalentă cu (a-1)²=0 ⇔ a=1. "]
  },
  {
    question: "What is CSS?",
    answer: ["CSS .", 
    "I",
    "C."]
  }
];
// Initialize variables to keep track of the current question and answer
var currentQA = 0;
var currentAnswer = 0;

// Function to display the current question and hide the "next question" button
function displayQuestion() {
  document.getElementById("question").innerHTML = qa[currentQA].question;
  document.getElementById("answer").innerHTML = "";
  currentAnswer = 0;
  document.getElementById("nextQuestion").style.display = "none"; // hide the "next question" button
  document.getElementById("next").style.display = "block"; // show the "next answer" button
  currentQA++; 
}

// Function to display the next answer or move to the next question
function displayNext() {
  // Check if an answer is currently being displayed letter by letter
  var answerElement = document.getElementById("answer").lastChild;
  if (answerElement && answerElement.classList.contains("answer-paragraph") && !answerElement.classList.contains("done")) {
    // Answer is still being displayed, do nothing
    return;
  }

  if (currentAnswer < qa[currentQA-1].answer.length) {
    // Display the next answer
    var answerElement = document.createElement("p");
    answerElement.classList.add("answer-paragraph");
    document.getElementById("answer").appendChild(answerElement);

    var answerText = qa[currentQA-1].answer[currentAnswer];
    
    // Check if the answer is an image tag or not
    var isImage = answerText.startsWith("<img");
    if (isImage) {
      // Display the image
      answerElement.innerHTML = answerText;
    } else {
      // Display the text
      var i = 0;
      function displayNextLetter() {
        if (i < answerText.length) {
          answerElement.textContent += answerText.charAt(i);
          i++;
          setTimeout(displayNextLetter, 50); // delay of 50ms between each letter
        } else {
          answerElement.classList.add("done");
          currentAnswer++;
          if (currentAnswer == qa[currentQA-1].answer.length) {
            document.getElementById("next").style.display = "none";
            if (currentQA == qa.length) {
              return window.location.assign('/verificare1.html')
            } else {
              document.getElementById("nextQuestion").style.display = "block";
            }
          }
        }
      }
      displayNextLetter();
    }
  } else {
    currentQA++; 
    if (currentQA == qa.length) {
      return window.location.assign('/verificare1.html')
    } else {
      displayQuestion();
    }
  }
}


// Attach event listener to buttons
document.getElementById("next").addEventListener("click", displayNext);
document.getElementById("nextQuestion").addEventListener("click", displayQuestion);

// Start by displaying the first question
displayQuestion();



/*window.addEventListener("beforeunload", function(event) {
  // Check if the user has unsaved progress
  if (currentQA > 0 || currentParagraph > 0) {
    // Display a warning message
    event.preventDefault();
    event.returnValue = "";
  }
});

function saveProgress() {
	// Save the current progress to localStorage
	localStorage.setItem("currentQA", currentQA);
	localStorage.setItem("currentParagraph", currentParagraph);
	
	// Display a confirmation message
	alert("Progress saved!");
}
*/