const display = document.querySelector("#input1");
const submitBtn = document.querySelector("#submit");
const btns = document.querySelectorAll(".js-btn");
const obnuleBtn = document.querySelector(".obnule");

obnuleBtn.onclick = function() {
    return display.value = ""
  }

btns.forEach((item) => {
  item.addEventListener("click", (e) => {
    let itemText = e.target.textContent;
    if (itemText === "*") {
      itemText = "*";
    }
    if (itemText === "/") {
      itemText = "/";
    }
    if(itemText !=="="){
    display.value += itemText;
    }
    if (itemText === "=") {
        display.value = eval(display.value)
      }

    
  });
});



