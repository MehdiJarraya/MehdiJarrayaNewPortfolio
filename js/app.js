import Scene from './Scene'
import "../css/styles.css"

const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
// date.innerHTML = new Date().getFullYear();



const button = document.querySelector(".submit-button"),
  stateMsg = document.querySelector(".pre-state-msg");

window.sendMail = function(e) {
  // prevent form form navigation
  e.preventDefault();
  var target = e.target || e.srcElement;

  // Set Form Values to Variables
  var name = target.elements["name"].value;
  var subject = target.elements["subject"].value;
  var email = target.elements["email"].value;
  var message = target.elements["message"].value;

  var data =
    "name=" +
    name +
    "&subject=" +
    subject +
    "&from=" +
    email +
    "&message=" +
    message +
    "&to=mehdi.jarraya@gmail.com";

    console.log("data", data) ;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://portfoliobackk.herokuapp.com/contact");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      // Requête finie, traitement ici.
      console.log("sucess");
      console.log("200");
      finalButtonMsg();
      document.getElementById("contact-beautifull-form").reset();
    }else{
      console.log("fail");
    }
  };

  xhr.send(data);
  button.classList.add("state-1", "animated");
};

const finalButtonMsg = function() {
  button.classList.add("state-2");

  setTimeout(setInitialButtonState, 2000);
};

const setInitialButtonState = function() {
  button.classList.remove("state-1", "state-2", "animated");
};


window.scene = new Scene()