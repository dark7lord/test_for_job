
const startTimer = () => {
  const my_timer = document.querySelector('#timer');
  var time = my_timer.textContent;
  let [h, m, s] = time.split(":");

  if (s == 0) {
    if (m == 0) {
      if (h == 0) {
        alert("Время вышло");
        window.location.reload();
        return;
      }
      h--;
      m = 60;
      if (h < 10) h = "0" + h;
    }
    m--;
    if (m < 10) m = "0" + m;
    s = 59;
  }
  else s--;
  if (s < 10) s = "0" + s;
  document.querySelector("#timer").innerHTML = `${h}:${m}:${s}`;
  setTimeout(startTimer, 1000);
}
startTimer();
