var data = window.sessionStorage.getItem('prompt');

if(data !== 'true') {
  var sign = prompt("Podaj hało");
  if (sign == "Aaaa1234") {
    window.sessionStorage.setItem('prompt', 'true');
  } else {
    window.location.replace("https://www.google.pl/");
  }
}
