document.addEventListener("DOMContentLoaded", function() {
  var el = document.getElementsByClassName("main")[0];
  var bits = [];
  var bit = '';
  var ticks = 0;
  var inputs = ['مساهمة', 'אַרייַנשרייַב', 'влез', 'вход', '入力', '输入', 'đầu vào', 'ઇનપુટ', 'आगत', 'इनपुट']
  el.addEventListener("keypress", function(e) {
    var check = Math.random();
    ticks++;
    if (check < .1) {
      e.preventDefault();
    }
    if (ticks%10 === 0) {
      el.value = '';
      bits = [];
    }
    if (ticks%12 === 0) {
      el.value = el.value + ' ' + inputs[~~(Math.random() * inputs.length)];
      bits = [];
    }
    if (el.value.length > Math.random() * 4) {
      bits.push(el.value);
      bit = '';
    }
    if (bits.length && el.value.length > 4 && Math.random() < .3) {
      el.value = bits[~~(Math.random() * bits.length)] + ' '  + el.value;
    }
    console.log(bits);
  }, false);
}, false);