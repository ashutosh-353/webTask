const wrapper = document.querySelector(".wrapper");

const registerLink = document.querySelector(".register-link");

const loginLink = document.querySelector(".login-link");

registerLink.addEventListener("click", function () {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", function () {
  wrapper.classList.remove("active");
});

