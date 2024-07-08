function Uvalue(val) {
  document.getElementById("res").value += val;
}

function back() {
  var back = document.getElementById("res").value;
  var result = back.slice(0, -1);
  document.getElementById("res").value = result;
}

function clear() {
  document.getElementById("res").value = "";
}

function finaleres() {
  var a = document.getElementById("res").value;
  var b = eval(a);
  document.getElementById("res").value = b;
}

function square() {
  var num = document.getElementById("res").value;
  var result = Math.pow(num, 2);
  document.getElementById("res").value = result;
}

function squareroot() {
  var num = document.getElementById("res").value;
  var result = Math.sqrt(num);
  document.getElementById("res").value = result;
}
