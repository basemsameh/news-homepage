let togglerBtn = document.querySelector('.btn-home');

togglerBtn.onclick = () => {
  if (togglerBtn.classList.contains('active')) {
    togglerBtn.classList.remove('active');
    document.body.classList.remove('hide');
    document.querySelector('main').classList.remove('hide');
    document.querySelector('.navbar-collapse').classList.remove('show');
  }
  else {
    togglerBtn.classList.add('active');
    document.body.classList.add('hide');
    document.querySelector('main').classList.add('hide');
    document.querySelector('.navbar-collapse').classList.add('show');
  }
}