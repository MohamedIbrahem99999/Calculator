let valueTxt = document.getElementById("value");
let keys = document.querySelectorAll(".key")

keys.forEach(
    key => {
        key.onclick = function () {
            if (key.dataset.val === "clear") valueTxt.value = "";
            else if (key.dataset.val === "equal")
              valueTxt.value = eval(valueTxt.value);
            else valueTxt.value += key.dataset.val;
        };
    });