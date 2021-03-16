const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll("animated-bg");
const animated_bgs_texts = document.querySelectorAll("animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="./img/photo-of-panda-and-cub-playing-1661535.jpg" alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam eaque beatae expedita reiciendis";
  profile_img.innerHTML =
    ' <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Mar 15, 2021";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
