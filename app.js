const display = document.querySelector("#input1");
const submitBtn = document.querySelector("#submit");
const btns = document.querySelectorAll(".js-btn");
const obnuleBtn = document.querySelector(".obnule");
const delitetn = document.querySelector(".delite");

obnuleBtn.onclick = function() {
    return display.value = ""
  }
delitetn.onclick = function() {
    return display.value = display.value.slice(0, -1)
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



