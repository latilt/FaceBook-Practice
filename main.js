var whatEvent = document.querySelector("#what");

whatEvent.addEventListener("focus", function() {
  var ulNode = document.querySelector("#middle-ul ul");
  var cancelNode = document.querySelector("#cancel");

  /*ulNode.style.display = "none";
  cancelNode.style.display = "block";*/
  ulNode.classList.toggle("none");
  cancelNode.classList.toggle("none");
});

whatEvent.addEventListener("focusout", function() {
  var ulNode = document.querySelector("#middle-ul ul");
  var cancelNode = document.querySelector("#cancel");

  /*ulNode.style.display = "block";
  cancelNode.style.display = "none";*/
  ulNode.classList.toggle("none");
  cancelNode.classList.toggle("none");
});

whatEvent.addEventListener("input", function(evt) {
  if(evt.target.value.length >= 20) {
    evt.target.nextElementSibling.style.display = "block";
  }
  else {
    evt.target.nextElementSibling.style.display = "none";
  }
});


var cancelEvent = document.querySelector("#cancel");

cancelEvent.addEventListener("click", function(evt) {
  /*evt.target.style.display = "none";
  evt.target.previousElementSibling.style.display = "block";*/
  evt.target.classList.toggle("none");
  evt.target.previousElementSibling.classList.toggle("none");
});
