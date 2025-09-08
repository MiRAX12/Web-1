const checkBoxes = document.querySelectorAll("input[type=checkbox]")
let currentChecked

function uncheckLast(){
    checkBoxes.forEach((checkBox) =>{
        if (checkBox !== this){
            checkBox.checked = false
            currentChecked = this
        }
        else currentChecked = checkBox
})}

checkBoxes.forEach((element) => element.addEventListener("change", uncheckLast))

const rField = document.querySelector("#r3")

function validateR(){
    const checked = document.querySelectorAll('input[type=checkbox]:checked');
    if (checked.length > 0){
        rField.setCustomValidity("")
        return true
    }
    else {
        rField.setCustomValidity("Выберите R")
        return false
    }
}

checkBoxes.forEach((element) => element.addEventListener("change", validateR))

const xField = document.querySelector("input[type=text]")

function validateX(e) {
    const currentValue = xField.value.trim()
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"]
    if (allowedKeys.includes(e.key)) return;
    const start = xField.selectionStart
    let newValue
    if (currentValue.length > 32) {
        e.preventDefault()
        return;
    }
    if (/[0-9]/.test(e.key)) {
        if (currentValue[0] === "0" && currentValue[1] !== "." && currentValue[1] !== ",") {
            e.preventDefault()
            return
        }
        newValue = currentValue.slice(0, start) + e.key
    } else if ((e.key === "," || e.key === ".") && !/[.,]/.test(currentValue)) {
        if (start === 0) {
            e.preventDefault()
            return;
        }
        newValue = currentValue.slice(0, start) + "."
    } else if (e.key === "-" && start === 0) {
        newValue = "-" + currentValue
    } else {
        e.preventDefault()
        return;
    }
    const floatValue = parseFloat(newValue);
    if (!isNaN(floatValue) && (floatValue <= -3 || floatValue >= 3)) {
        e.preventDefault();
    }
}

xField.addEventListener("keydown", validateX)

function validateForm(e){
    if (!validateR()){
        rField.reportValidity()
        e.preventDefault()
        return false
    }
    else return true;
}

const table = document.querySelector(".logTable")

function addToHistory(e) {
    if (table.childElementCount > 5) {
        table.lastChild.remove()
    }
    if (validateForm(e)) {
        e.preventDefault()
        const xVal = document.getElementById("xVal").value
        const yVal = document.querySelector('input[name="yVal"]:checked').value;
        const rVal = currentChecked.value;
        const newRow = document.createElement("tr")
        table.insertBefore(newRow, table.rows[1])

        const xCell = document.createElement("td");
        xCell.textContent = xVal;
        newRow.appendChild(xCell);

        const yCell = document.createElement("td");
        yCell.textContent = yVal;
        newRow.appendChild(yCell);

        const rCell = document.createElement("td");
        rCell.textContent = rVal;
        newRow.appendChild(rCell);
    }
}

const plotForm = document.querySelector("#plot-form")
plotForm.addEventListener("submit", addToHistory)

