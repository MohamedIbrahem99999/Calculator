alert("محمد ابراهيم يرحب بكم , Mohamed Ibrahem Welcomes You.");

let valueTxt = document.getElementById("value");
let keys = document.querySelectorAll(".btn");

keys.forEach(key => {

    key.addEventListener("click", function () {

        console.log(key.dataset.val);

        if (key.dataset.val === "clear") {
            valueTxt.value = "";
        }

        else if (key.dataset.val === "back") {
            valueTxt.value = valueTxt.value.slice(0, -1);
        }

        else if (key.dataset.val === "equal") {
            try {
                valueTxt.value = eval(valueTxt.value);
            } catch {
                valueTxt.value = "Error";
            }
        }

        else {
            valueTxt.value += key.dataset.val;
        }

    });

});
