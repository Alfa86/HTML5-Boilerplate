const svgText = document.querySelectorAll('#svg-text path');
// console.log(svgText);

for (let i = 0; i < svgText.lenght; i++) {
  console.log(`Letter ${i} is ${svgText[i].getTotalLenght()}`);
}

// var colors = ["#74B087","#DE7300","#74B087"];

// function animate() {};


// Navigation observers

const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);