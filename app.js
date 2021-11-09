setInterval(function () {
  if (
    document.getElementsByClassName("slides")[0].classList.contains("active")
  ) {
    document.getElementsByClassName("slides")[1].classList.add("active");
    document.getElementsByClassName("slides")[0].classList.remove("active");
  } else if (
    document.getElementsByClassName("slides")[1].classList.contains("active")
  ) {
    document.getElementsByClassName("slides")[2].classList.add("active");
    document.getElementsByClassName("slides")[1].classList.remove("active");
  } else if (
    document.getElementsByClassName("slides")[2].classList.contains("active")
  ) {
    document.getElementsByClassName("slides")[3].classList.add("active");
    document.getElementsByClassName("slides")[2].classList.remove("active");
  }
}, 3000);

// Modal

// Get the modal
const modal = document.querySelector("#myModal");

const banner = document.querySelector("#banner");

// On hover

const fourthSlide = document.querySelector(".containerOfFourthSlide");

// fourthSlide.addEventListener("mouseover", function (e) {
//   e.preventDefault();

//   setTimeout(() => {
//     modal.style.visibility = "visible";
//     banner.style.visibility = "hidden";
//   }, 3000);
// });

//the button to opens the modal
const btn = document.querySelector(".rolloverBtn");

// When the user clicks on the button, open the modal
btn.addEventListener("click", function (e) {
  e.preventDefault();
  banner.style.display = "none";
  modal.style.display = "block";
});

// Get the <span> element that closes the modal
const span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modal.style.display = "none";
  banner.style.display = "block";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
