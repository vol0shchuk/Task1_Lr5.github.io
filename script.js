const fInput = document.getElementById("fahrenheit");
const cInput = document.getElementById("celsius");

fInput.oninput = function () {
    if (fInput.value === "") {
        cInput.value = "";
        return;
    }
    const f = parseFloat(fInput.value);
    const c = (5 / 9) * (f - 32);
    cInput.value = c.toFixed(2);
};

cInput.oninput = function () {
    if (cInput.value === "") {
        fInput.value = "";
        return;
    }
    const c = parseFloat(cInput.value);
    const f = c * 9 / 5 + 32;
    fInput.value = f.toFixed(2);
};
