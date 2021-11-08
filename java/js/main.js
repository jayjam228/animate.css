let sliderImg = document.querySelectorAll('.slider img');
let count =0;
document.querySelector('button').onclick = slider;
function slider() {
if (count < sliderImg.length){
    console.log(count);
    let img = sliderImg[count];
    img.style.display = 'block';
    img.classList.add('animate__animated', 'animate__slideInLeft');

    img.addEventListener('animation', () =>{
        img.classList.add('animate__animated', 'animate__slideInDown');
    });
    count++;
} else {
    starNewSlider()
}
}
function starNewSlider(){
    sliderImg.forEach((element)=>{
        element.classList.remove('animate__animated', 'animate__slideInDown', 'animate__slideInLeft');
        element.style.display = 'none';
    });
    count = 0;
    slider();
}