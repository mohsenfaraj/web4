var container = $("#container");
var nightmode = $("#nightmode");
var mode = "light";

nightmode.click(function () {
  $("body").toggleClass("dark");
  if (mode == "light") {
    mode = "dark";
    nightmode.attr("src", "./assets/sun.png");
  } else {
    mode = "light";
    nightmode.attr("src", "./assets/moon.png");
  }
});

$("document").ready(function () {
  loadmain();
});

function loadmain() {
  container.empty();
  $.get("../posts/list.json").done(function (data) {
    data.list.forEach((item) => {
      container.append(generatePosts(item));
    });
  });
}

function generatePosts(post) {
  return `<div class="post">
        <img src="${post.image}" alt="${post.title}" height="300px" />
        <h2 onclick="openpost(${post.id})"><a href="#${post.id}">${post.title}</a></h2>
        <p>Author: ${post.author}</p>
      </div>`;
}

function generateSinglePost() {
  return `<div>
        <p id="content"></p>
        <p><a href="#" onclick="loadmain()">Back To Home</a></p>
      </div>`;
}
function openpost(post) {
  container.empty();
  container.append(generateSinglePost(post));
  $("#content").load("../posts/" + post + ".html");
}
