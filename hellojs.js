const wrapper = document.querySelector(".wrapper");

const registerLink = document.querySelector(".register-link");

function func() {
  // var email1 = document.getElementById("user-email-1").value;
  // var password1 = document.getElementById("user-pw-1").value;

const email = document.getElementById("user-email").value;
const password = document.getElementById('user-pw').value;

if (email === 'meherashutosh2004@gmail.com' && password ==='1234') {
  window.location.href="index2.html";
  alert("Successful !");
  
} 
else {
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



