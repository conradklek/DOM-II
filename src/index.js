import "./less/index.less";

// Your code goes here!

document.querySelector(".intro > img").onmouseenter = (e) => {
  document.querySelector(".intro > img").style.transform = "scale(1.1)";
};
document.querySelector(".intro > img").onmouseleave = (e) => {
  document.querySelector(".intro > img").style.transform = "scale(1)";
};
document.querySelector("h2:first-of-type").onclick = (e) => {
  document.querySelector("h2:first-of-type").style.color = "#ff0000";
};
document.ondblclick = (e) => {
  alert("You double clicked me!");
};
document.onscroll = (e) => {
  console.log(e);
};
window.onresize = (e) => {
  console.log(window.innerWidth);
};
document.querySelectorAll("h4").forEach((h4) => {
  h4.onmousedown = (e) => {
    h4.remove();
  };
});
document.onkeyup = (e) => {
  document.body.firstChild?.remove();
};
document.ondragover = (e) => {
  e.preventDefault();
};
document.ondrop = (e) => {
  e.preventDefault();
  console.log(e.dataTransfer.files);
};
