// js-code start
// create variables
const btn = document.querySelector('button');
const noteNumber = document.querySelector('.number');

const newNotify = document.querySelectorAll('.new');
const li = document.querySelectorAll('.li');

const noteContent = document.querySelectorAll('.content');
const redDot = document.querySelectorAll('.dot');

// create event listener and call forloop function, 
// after button clicked;
btn.addEventListener('click', (e) =>{
    e.preventDefault();

    for (let i = 0; i < newNotify.length; i++) {
     newNotify[i].classList.remove('new');
      
     if (redDot[i].parentNode === noteContent[i]){
        noteContent[i].removeChild(redDot[i]);
        noteNumber.innerHTML = parseInt(noteNumber.innerHTML) - 1;
     }
    }
});


// onclick items create event with for loop function 
// to toggle the items
for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', (e) => {
        e.preventDefault();

        li[i].classList.remove('new');

        if (redDot[i].parentNode === noteContent[i]) {
            noteContent[i].removeChild(redDot[i]);
            noteNumber.innerHTML = parseInt(noteNumber.innerHTML) - 1
        }
    });
    
}

// js-code end;
