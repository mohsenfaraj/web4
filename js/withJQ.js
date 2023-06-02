var bird = $("#bird");
var m1 = $("#m1");
var m2 = $("#m2");
var poet = $("#poet");
var link = $("#link");
var hidden = $("#hidden");

$("document").ready(function () {
  getPoem();
});

bird.click(function () {
  getPoem();
});

bird.mouseenter(function (event) {
  hidden.css("display", "block");
});

bird.mouseleave(function () {
  hidden.css("display", "none");
});

function getPoem() {
  bird.animate({ opacity: "0.7" }, "fast");
  $.get("https://corsproxy.io/?https%3A%2F%2Fc.ganjoor.net%2Fbeyt-json.php")
    .done(function (data) {
      m1.text(data.m1);
      m2.text(data.m2);
      poet.text(data.poet);
      link.attr("href", data.url);
    })
    .fail(function (err) {
      alert(
        "اروری در برقراری ارتباط با سرور بوده. لطفا اتصال اینترنت را بررسی نمایید"
      );
    });
  bird.animate({ opacity: "1" }, "fast");
}
