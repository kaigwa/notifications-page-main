// call variables
const btn = document.querySelector('button');
const userName = document.querySelectorAll('.user');
const noteNumber = document.querySelector('.number');
const redDot = document.querySelectorAll('.dot')

// event listener with callBack function;
btn.addEventListener('click', () =>{
    redDot.style.display = 'none';
    // console.log(userName[2])
})
