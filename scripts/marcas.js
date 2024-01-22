const galerias = document.querySelectorAll(".galeria_marcas");
const arrowBtns = document.querySelectorAll(".marcas i");
const firstCardWidth = galerias[0].querySelector(".card_marca").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const galeria = btn.closest(".galeria_marcas").querySelector(".galeria_marcas");
        console.log(btn.id);
        galeria.scrollLeft += btn.id.includes("left") ? -firstCardWidth : firstCardWidth;
    })
});

const dragStart = (e) => {
    isDragging = true;
    const galeria = e.currentTarget;
    galeria.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = galeria.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    const galeria = e.currentTarget;
    galeria.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    galerias.forEach(galeria => galeria.classList.remove("dragging"));
}

galerias.forEach(galeria => {
    galeria.addEventListener("mousedown", dragStart);
    galeria.addEventListener("mousemove", dragging);
});

document.addEventListener("mouseup", dragStop);






// CÓDIGO ANTIGO ---------------------------------------------------------------

// const galeria = document.querySelector(".galeria");
// const arrowBtns = document.querySelectorAll(".galeria_de_produtos i");
// const firstCardWidth = galeria.querySelector(".card_produto").offsetWidth;
// const galeriaChildrens = [...galeria.children];

// let isDragging = false, startX, startScrollLeft;

// // let cardPerView = Math.round(galeria.offsetWidth / firstCardWidth);

// // galeriaChildrens.slice(-cardPerView).reverse().forEach(card => {
// //     galeria.insertAdjacentHTML("afterbegin", card.outerHTML);
// // });

// // galeriaChildrens.slice(0, cardPerView).reverse().forEach(card => {
// //     galeria.insertAdjacentHTML("beforeend", card.outerHTML);
// // });

// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         console.log(btn.id);
//         galeria.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
//     })
// });

// const dragStart = (e) => {
//     isDragging = true;
//     galeria.classList.add("dragging");
//     startX = e.pageX;
//     startScrollLeft = galeria.scrollLeft;
// }

// const dragging = (e) => {
//     // console.log(e.pageX);
//     if(!isDragging) return; // if isDragging  is false return from here
//     galeria.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     galeria.classList.remove("dragging");
// }

// // const infiniteScroll = () =>{
// //     if(galeria.scrollLeft === 0){
// //         console.log("Fim esquerdo");
// //         galeria.classList.add("no-transition");
// //         galeria.scrollLeft = galeria.scrollWidth - ( 2 * galeria.offsetWidth);
// //         galeria.classList.remove("no-transition");

// //     } else if(Math.ceil(galeria.scrollLeft) === galeria.scrollWidth - galeria.offsetWidth){
// //         galeria.classList.add("no-transition");
// //         galeria.scrollLeft = galeria.offsetWidth;
// //         galeria.classList.remove("no-transition");

// //     }
// // }

// galeria.addEventListener("mousedown", dragStart);
// galeria.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// // galeria.addEventListener("scroll", infiniteScroll);