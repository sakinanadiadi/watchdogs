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

// On mouseOver wait for 3 seconds

const fourthSlide = document.querySelector(".containerOfFourthSlide");

// Selecting an element
const opacity1 = document.querySelector(".round1");

const opacity2 = document.querySelector(".round2");

const opacity3 = document.querySelector(".round3");

fourthSlide.addEventListener("mouseover", function (e) {
  e.preventDefault();

  setTimeout(() => {
    opacity1.style.display = "inline-block";
  }, 0000);

  setTimeout(() => {
    opacity2.style.display = "inline-block";
  }, 1000);

  setTimeout(() => {
    opacity3.style.display = "inline-block";
  }, 2000);

  setTimeout(() => {
    modal.style.display = "block";
    banner.style.display = "none";
  }, 3000);
});

//the button to opens the modal
const btn = document.querySelector(".rolloverBtn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  banner.style.display = "none";
  modal.style.display = "block";
});

// function to close a modal
const span = document.querySelector(".close");

span.addEventListener("click", function () {
  modal.style.display = "none";
  banner.style.display = "block";
});
