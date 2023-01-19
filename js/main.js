const share = document.getElementById("share"),
  popUp = document.getElementById("pop-up");

document.onclick = function (e) {
  if (e.target.id !== "share" && e.target.id !== "pop-up") {
    popUp.classList.remove("active");
  }
};

share.onclick = function () {
  popUp.classList.toggle("active");
};
