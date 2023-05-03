let images = document.querySelectorAll('.img');
let count =0;
images.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`;
    }
)
let run = () =>{
    images.forEach(
        (scroll)=>{
            scroll.style.transform = `translateX(-${count*100}%)`
            scroll.style.transition = `1s`;
        }
    )
}

setInterval(()=>{
    count++;
    run();
    if(count>images.length-2){                                                                                      

        count = -1;
    }
},5000);


let prev = document.getElementById('btn');
let next = document.getElementById('btn1');
let index = 0;
next.addEventListener('click', ()=>{
    index++;
        images.forEach(
            (scroll)=>{
                scroll.style.transform = `translateX(-${index*100}%)`
                scroll.style.transition = `1s`;
            }
        )
        if(index>images.length-2){
            index=-1;
        }
})
prev.addEventListener('click', ()=>{
    index--;
        images.forEach(
            (scroll)=>{
                scroll.style.transform = `translateX(-${index*100}%)`
                scroll.style.transition = `1s`;
            }
        )
        if(index>images.length-2){
            index=-1;
        }
})


let Text = document.getElementById('changeText');

var typewriter = new Typewriter(Text, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Graphic Designer')
  .pauseFor(300)
  .deleteAll()
  .typeString('Web Designer')
  .pauseFor(500)
  .deleteChars(8)
  .typeString('Developer')
  .pauseFor(1000)
  .start();


let icon = document.querySelector('#t-icon');
let navbar = document.querySelector('nav');

icon.onclick = () => {
    icon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

