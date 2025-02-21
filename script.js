let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


let images = scrollContainer.querySelectorAll("img");
let imageWidth = images[0].clientWidth + 10; 

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft += imageWidth; 
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= imageWidth; 
});

// Handle scroll via mouse wheel
scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += (event.deltaY > 0 ? imageWidth : -imageWidth);
});
