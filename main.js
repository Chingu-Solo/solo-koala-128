const white = document.querySelector(".btn-white");
console.log(white)

white.addEventListener("click", function () {
    document.body.style.background = "white";
    document.body.style.color = "black";

})
const black = document.querySelector('.btn-black');
console.log(black)

black.addEventListener("click", function () {
    document.body.style.background = "black";
    document.body.style.color = "white";

})

