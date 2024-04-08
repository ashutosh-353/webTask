const wrapper = document.querySelector(".wrapper");

const registerLink = document.querySelector(".register-link");

function func() {
  const email = document.getElementById("user-email").value;
  const password = document.getElementById("user-pw").value;

  if (email === "meherashutosh2004@gmail.com" && password === "Hello@5") {
    window.location.href = "index2.html";
    alert("Successful !");
  } else {
    alert("Invalid Credentials");
  }
}

const loginLink = document.querySelector(".login-link");

registerLink.addEventListener("click", function () {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", function () {
  wrapper.classList.remove("active");
});
