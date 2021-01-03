

const btn = document.querySelector("button");
let number = 1;
const addElement = function(){
  
  const div = document.createElement("div");
  if (number % 5 == 0){
    div.classList.add("circle");
  }
  document.body.appendChild(div);
  div.textContent = number;
  number++; //INKREMENTACJA

}
btn.addEventListener ("click", addElement);

