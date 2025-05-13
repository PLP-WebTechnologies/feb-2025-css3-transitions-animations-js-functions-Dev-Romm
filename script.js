const btnclick = document.getElementById("clickbtn");
const hovertext = document.getElementById("hoverdiv");
const btnimg = document.getElementById("imagebtn");
const imagestitle = document.getElementById("image-title");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

const movieslist = [
  { title: "Assassination Classroom", image1: "ac1.png", image2: "ac2.pNg" },
  { title: "Boruto", image1: "bor1.jpg", image2: "bor2.jpg" },
  { title: "Black Panther", image1: "bp1.jpg", image2: "bp2.jpg" },
  { title: "Medieval Japan", image1: "jp1.jpg", image2: "jp2.png" },
  { title: "My Hero Academia", image1: "mha1.png", image2: "mha2.jpg" },
];

// Load count from localStorage if available
let count = Number(localStorage.getItem("clickCount")) || 0;
btnclick.innerText =
  count > 0 ? `You have clicked me ${count} times` : btnclick.innerText;

// Function to change the text and color of the button when clicked
btnclick.addEventListener("click", function () {
  count++;
  btnclick.innerText = `You have clicked me ${count} times`;
  btnclick.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
  btnclick.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
  // Store count in localStorage
  localStorage.setItem("clickCount", count);
});

// Function to reset the count and change the text when double-clicked
btnclick.addEventListener("dblclick", function () {
  count = 0;
  btnclick.innerText = `You have reset me`;
  // Remove count from localStorage
  localStorage.removeItem("clickCount");
});
// Function to generate a random number between 0 and the length of the movieslist
btnimg.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * movieslist.length);
  const randomMovie = movieslist[randomIndex];
  console.log(randomMovie);
  image1.src = `${randomMovie.image1}`;
  image2.src = `${randomMovie.image2}`;
  imagestitle.innerText = `${randomMovie.title}`;
  imagestitle.style.color = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
  image1.style.display = "block";
  image2.style.display = "block";
  btnimg.innerText = `Click me again to see another movie`;
});

// Function to change the text and color of the button when hovered over
hovertext.addEventListener("mouseover", function () {
  hovertext.innerText = "You are hovering over me!";
  hovertext.style.width = "150px";
  hovertext.style.height = "100px";
  hovertext.style.transition =
    "width 0.5s, height 0.5s, background-color 0.5s, color 0.5s";
  hovertext.style.transitionTimingFunction = "ease-in-out";
  hovertext.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
  hovertext.style.color = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
});

// Function to reset the text and color of the button when mouse leaves
hovertext.addEventListener("mouseout", function () {
  hovertext.innerText = "Hover over me!!!";
  hovertext.style.width = "100px";
  hovertext.style.height = "50px";
  hovertext.style.transition =
    "width 0.5s, height 0.5s, background-color 0.5s, color 0.5s";
  hovertext.style.transitionTimingFunction = "ease-in-out";
  hovertext.style.backgroundColor = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
  hovertext.style.color = `rgb(${Math.random() * 255}, ${
    Math.random() * 255
  }, ${Math.random() * 255})`;
});
