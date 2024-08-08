
const carousel = document.querySelector(".carousel");
console.log(carousel);
firstImg = carousel.querySelectorAll(".main-slider")[0];
arrowIcons = document.querySelectorAll(".arrow-icon");

let isDragStart = false, prevPageX, PrevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon.addEventListener('click', ()=>{
        // console.log(icon);
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});



const dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    PrevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
    // console.log(e.pageX);
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX
    carousel.scrollLeft = PrevScrollLeft - positionDiff;
} 

const dragStop = () =>{
    isDragStart = false;
}

carousel.addEventListener("mousedown",dragStart)
carousel.addEventListener("mousemove",dragging)
carousel.addEventListener("mouseup",dragStop)