function toggleMenuBar() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

window.addEventListener("load", (event) => {
  let like = 0;
  let output = document.getElementById("output");

  document.getElementById("like").addEventListener("click", (event) => {
    like++;
    output.innerHTML = `<div> ${like} like </div>`;
  });
});
