// once the document loads *
// find the square element *
// find the button element *
// if the button element is clicked
// check to see if the square element has a class of "dark-mode"
// do what you are supposed to do with that information

window.onload = function(){
  let square = document.querySelector('.square')
  let button = document.querySelector('#toggle')
  let label = document.querySelector('#label')
  let contains

  function toggleDarkMode(){
    contains = square.classList.contains('dark-mode')

    if (contains) {
      square.classList.remove('dark-mode')
      label.innerHTML = 'Light Mode'
    } else {
      square.classList.add('dark-mode')
      label.innerHTML = 'Dark Mode'
    }
    
  }

  button.addEventListener('click', toggleDarkMode)

}