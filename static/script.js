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

const textField = document.querySelector("input[type=text]")
const rField = document.querySelector("#r3")
const plotForm = document.querySelector("#plot-form")

function validateY() {
        const num = textField.value.trim()
        if (/^-?\d?(\.\d+)?$/.test(num)){
            if (num >= -3 && num <= 5){
                textField.setCustomValidity("")
                return true
            }
        }
        textField.setCustomValidity("Введите число от -3 до 5")
        return false
    }

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

function validateForm(e){
    if (!validateR() || !validateY()){
        rField.reportValidity()
        textField.reportValidity()
        e.preventDefault()
        return false
    }
    else return true;
}

checkBoxes.forEach((element) => element.addEventListener("change", validateR))
textField.addEventListener("input", validateY)

const table = document.querySelector(".logTable")


function addToHistory(e) {
    if (table.childElementCount > 5) {
        table.lastChild.remove()
    }
    if (validateForm(e)) {
        e.preventDefault()
        const xVal = document.getElementById("xVal").value
        const yVal = textField.value.trim()
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

plotForm.addEventListener("submit", addToHistory)
