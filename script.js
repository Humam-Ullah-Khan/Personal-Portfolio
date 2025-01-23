// var body = document.querySelector("body")

// var cursor = document.querySelector(".cursor")

// body.addEventListener("mousemove", function(move){
//     cursor.style.left = move.pageX + 'px'
//     cursor.style.top = move.pageY + 'px'
// })


var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})


document.addEventListener("DOMContentLoaded", () => {
  // scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });



// services logic
let service1 = document.getElementById('service1');
let service2 = document.getElementById('service2');
let service3 = document.getElementById('service3');
let service4 = document.getElementById('service4');

let toggler1 = service1.querySelector('.toggler');
let toggler2 = service2.querySelector('.toggler');
let toggler3 = service3.querySelector('.toggler');
let toggler4 = service4.querySelector('.toggler');


service1.style.transition = 'all 1s';
service2.style.transition = 'all 1s';
service3.style.transition = 'all 1s';
service4.style.transition = 'all 1s';

var flagChange = false;

function changingSize(short, long) {
    if (short.classList.contains('col-md-4')) {
        // Change short to col-md-8 and long to col-md-4
        short.classList.remove('col-md-4');
        short.classList.add('col-md-8');
        long.classList.remove('col-md-8');
        long.classList.add('col-md-4');
        flagChange = true;
    } else {
        // Change short back to col-md-4 and long back to col-md-8
        short.classList.remove('col-md-8');
        short.classList.add('col-md-4');
        long.classList.remove('col-md-4');
        long.classList.add('col-md-8');
        flagChange = false;
    }
}


toggler1.addEventListener('click',function(){
  changingSize(service2,service1)
})
toggler2.addEventListener('click',function(){
  changingSize(service1,service2)
})
toggler3.addEventListener('click',function(){
  changingSize(service3,service4)
})
toggler4.addEventListener('click',function(){
  changingSize(service4,service3)
})

});


