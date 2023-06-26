// call variables
const btn = document.querySelector('button');
const userName = document.querySelectorAll('.user');
const noteNumber = document.querySelector('.number');
const noteContent = document.querySelectorAll('.content');
const redDot = document.getElementsByClassName('dot')

// event listener with callBack function;
btn.addEventListener('click', () =>{
   noteContent.classList.remove('dot')
    
    // console.log(noteContent)
})
