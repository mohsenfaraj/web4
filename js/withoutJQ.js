var bird = document.getElementById("bird");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var poet = document.getElementById("poet");
var link = document.getElementById("link");
var hidden = document.getElementById("hidden");

window.onload = function () {
  getPoem();
};
bird.addEventListener("click", function () {
  getPoem();
});

bird.addEventListener("mouseenter", function (event) {
  hidden.style.display = "block";
});

bird.addEventListener("mouseleave", function (event) {
  hidden.style.display = "none";
});

function getPoem() {
  // animate
  bird.classList.toggle("animate");
  setTimeout(() => {
    bird.classList.toggle("animate");
  }, 500);
  // we could use fetch api, but lets use the old way:
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let obj = JSON.parse(this.responseText);
      m1.innerText = obj.m1;
      m2.innerText = obj.m2;
      poet.innerText = obj.poet;
      link.setAttribute("href", obj.url);
    }
  };
  xhr.open("GET", "http://c.ganjoor.net/beyt-json.php");
  xhr.send();
  xhr.onerror = function () {
    alert(
      "اروری در برقراری ارتباط با سرور بوده. لطفا اتصال اینترنت را بررسی نمایید"
    );
  };
}
