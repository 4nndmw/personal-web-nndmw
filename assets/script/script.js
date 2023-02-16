const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.cvelassList.remo("active");
    navMenu.classList.remove("active");
  })    
);



// const contactForm = document.getElementById("contact-form");
// contactForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const url = e.target.action;
//   const formData = new formData(contactForm);
//   fetch(url, {
//     method: "POST",
//     body: formData,
//     mode: "no-cors",
//   }).then(() => {
//       // url thank you
//       window.location.href = "/thankYou.html";
//     }).catch((e) => alert("error occured"));
// });
