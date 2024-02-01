//If b1 is clicked, #selected becomes b1 content

document.getElementById("b1").addEventListener("click", function () {
  let content = document.getElementById("one").innerHTML;

  document.getElementById("selected").innerHTML = content;
});

document.getElementById("b2").addEventListener("click", function () {
  let content = document.getElementById("two").innerHTML;

  document.getElementById("selected").innerHTML = content;
});
document.getElementById("b3").addEventListener("click", function () {
  let content = document.getElementById("three").innerHTML;

  document.getElementById("selected").innerHTML = content;
});
