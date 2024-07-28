function verifyEmail(str) {
  let button = document.getElementById('button');
  let pop = document.getElementById('pop');
  button.disabled = true;
  if (str.length == 0) {
    button.disabled = false;
    pop.removeAttribute('hidden');
    pop.innerHTML = 'Email field is required!!';
    return;
  } else {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@iiita\.ac\.in$/;
    if (!emailRegex.test(str)) {
      alert('Please enter a valid email address ending with @iiita.ac.in');
      window.location.reload();
      return false;
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('pop').removeAttribute('hidden');
        document.getElementById('pop').innerHTML = this.responseText;
        document.getElementById('floatingInput').value = '';
        button.disabled = false;
      }
    };

    xmlhttp.open('GET', 'verify.php?email=' + str, true);
    xmlhttp.send();
  }
}
