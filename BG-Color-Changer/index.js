const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

const canvas = document.querySelector('.canvas')

buttons.forEach(function (button) {

  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    const selectedColor = e.target.id

    body.style.backgroundColor = selectedColor

    if (['darkblue', 'darkred', 'darkmagenta'].includes(selectedColor)) {
      canvas.style.color = 'white'
    } else {
      canvas.style.color = 'black'
    }


  });
});
