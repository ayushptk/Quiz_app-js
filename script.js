const questions = [
    {
        question:"Who is the Father of the Computer?",
        answers: [
        { text: "Charles Babbage", correct: true},
        { text: "Thomas Edison", correct: false},
        { text: "Albert Einstein", correct: false},
        { text: "Isaac Newton", correct: false},
  
        ]
    },
    {
        question:"Who invented Compact Disc",
        answers: [
        { text: "James T. Russell",correct: true},
        { text: "Fujio Masuoka",correct: false},
        { text: "Thomas Edison",correct: false},
        { text: "Martin Cooper",correct: false},
  
        ]
    },
    // {
    //     question:"Where is Ghodaghodi Lake located?",
    //     answers: [
    //     { text: "Nawalpur",correct: false},
    //     { text: "Kathamndu",correct: false},
    //     { text: "Rukum",correct: false},
    //     { text: "Kailali",correct: true},
  
    //     ]
    // },
    {
        question:"How is data transferred in serial communications?",
        answers: [
        { text: "10 bits at a time. ",correct: false},
        { text: "1 bit at a time.",correct: true},
        { text: "1 byte at a time",correct: false},
        { text: "6 bits at a time",correct: false},
  
        ]
      
    },
    {
        question:"Which key is used to work with non-adjacent cells in excel?",
        answers: [
        { text: "Shift key",correct: false},
        { text: "Ctrl key",correct: true},
        { text: " Alt key ",correct: false},
        { text: "Tab key",correct: false},
  
        ]
  
    },
    {
        question:"DOS makes which of the special batch file named",
        answers: [
        { text: "AUTOEXCE.BAT ",correct: false},
        { text: "AUTOEXE.BAT",correct: false},
        { text: "AUTOEXEC.BAT ",correct: true},
        { text: "AUTOEXC.BAT",correct: false},
  
        ]
  
    },
    {
        question:"To test the IP stack on your local host, which IP address would you ping?",
        answers: [
        { text: "127.0.0.0",correct: false},
        { text: "1.0.0.127",correct: true},
        { text: "127.0.0.1",correct: false},
        { text: "127.0.0.255",correct: false},
  
        ]
  
    },
    {
        question:"What is the speed of the computer measured it",
        answers: [
        { text: "Nanoseconds ",correct: false},
        { text: "Kilo seconds ",correct: false},
        { text: "Gigahertz ",correct: true},
        { text: "Megabytes ",correct: false},
  
        ]
  
    },
    {
        question:"In the communication model, the process of putting the ideas into a message is known as",
        answers: [
        { text: "Decoding ",correct: false},
        { text: "Interference ",correct: false},
        { text: "Persuasion ",correct: false},
        { text: " Encoding ",correct: true},
  
        ]
  
    },
    {
        question:"'MODEM' is used for",
        answers: [
        { text: "A/D conversion only ",correct: false},
        { text: "Both A/D and D/A conversions",correct: true},
        { text: "None of the above ",correct: false},
        { text: "D/ A conversion only ",correct: false},
  
        ]
  
    },
    {
        question:"To find the user's Password for hacking purposes refers to ",
        answers: [
        { text: " Sniffing ",correct: true},
        { text: "Spoofing ",correct: false},
        { text: "Cyber Stalking ",correct: false},
        { text: "Spamming ",correct: false},
  
        ]
  
    },
    {
        question:"A _________________ is a computer, appliance, or router that sits between trusted and untrusted systems. ",
        answers: [
        { text: "HUB",correct: false},
        { text: "SWITCH",correct: false},
        { text: "FIREWALL",correct: true},
        { text: "BRIDGE",correct: false},
  
        ]
  
    },
    {
        question:"On the web, the base unit for every website or document which contains information is a",
        answers: [
        { text: "weblog ",correct: false},
        { text: "webpage ",correct: true},
        { text: "webserver ",correct: false},
        { text: "webmail ",correct: false},
  
        ]
  
    },
    // {
    //     question:"",
    //     answers: [
    //     { text: "",correct: false},
    //     { text: "",correct: true},
    //     { text: "",correct: false},
    //     { text: "",correct: false},
  
    //     ]
  
    // },
    
    
    
  
  
  ];
  
  const questionElement = document.getElementById("question"); //selects the question element
  const answerButtons = document.getElementById("answer-buttons"); //selects the answer buttons
  const nextButton  = document.getElementById("next-btn"); //selects the next button
  
  let currentQuestionIndex = 0; //sets the current question index to 0
  let score = 0; //sets the score to 0 bcz it is initial state 
  function startQuiz(){ //function to start the quiz
    currentQuestionIndex = 0; 
    score = 0;
    nextButton.innerHTML = "Next"; //inner html of next button is set to next or You can use it to get the internal HTML content of any HTML element as an HTML string
    showQuestion();
  }
  function showQuestion(){
    resetstate(); //resets the state of the quiz
    let currentQuestion = questions[currentQuestionIndex]; //sets the current question to the current question index
    let questionNo = currentQuestionIndex + 1; //sets the question number to the current question index plus 1
    questionElement.innerHTML = questionNo + "." + currentQuestion.question; //sets the inner html of the question element to the question number and the question itself
  
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); //creates a button element
        button.innerHTML = answer.text;
        // button.innerHtml = answer.text;
        button.classList.add("btn"); //adds the class btn to the button
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
    button.addEventListener("click", selectanswer); //adds event listner to the button
    });
  }
  function resetstate(){
    nextButton.style.display = "none"; 
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  function selectanswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
  
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}.Congratulation.`; //template 
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  
  function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
  }
  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length)
    {
    handleNextButton(); //calls the handle next button function
  
  }else{
    startQuiz();
  }
  });
  startQuiz();
  
  
  