$(document).ready(function () {
  function timer() {
    var now = new Date();
    var hr = String(now.getHours()).padStart(2, "0");
    var min = String(now.getMinutes()).padStart(2, "0");
    var sec = String(now.getSeconds()).padStart(2, "0");
    $("p span").eq(0).text(hr);
    $("p span").eq(1).text(min);
    $("p span").eq(2).text(sec);
  }
  timer();
  setInterval(timer, 1000);
});
