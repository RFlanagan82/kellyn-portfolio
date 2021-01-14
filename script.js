function checkPassword() {
  if(document.getElementById('password').value == 'ABC123') {
      return true;
  } else {
      alert('Wrong password!');
      return false;
  }
}