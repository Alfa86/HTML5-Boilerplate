const svgText = document.querySelectorAll('#svg-text path');
// console.log(svgText);

for (let i = 0; i < svgText.lenght; i++) {
  console.log(`Letter ${i} is ${svgText[i].getTotalLenght()}`);
}

// var colors = ["#74B087","#DE7300","#74B087"];

// function animate() {};