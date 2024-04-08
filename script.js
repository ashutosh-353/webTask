const questionForm = document.getElementById("question-form");
const questionContainer = document.getElementById("questions-container");

questionForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  const questionText = document.getElementById("question").value;

  // Create a new question element
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");

  const questionTitle = document.createElement("p");
  questionTitle.classList.add("question-title");
  questionTitle.textContent = questionText;

  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments");

  questionElement.appendChild(questionTitle);
  questionElement.appendChild(commentsContainer);

  questionContainer.appendChild(questionElement);

  // Clear the question input field
  document.getElementById("question").value = "";
});

// Add functionality for adding comments, admin controls, etc. here
