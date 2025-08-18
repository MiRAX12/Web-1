const checkBoxes = document.querySelectorAll("input[type=checkbox]")
const textField = document.querySelector("input[type=text]")
const plotForm = document.querySelector("#plot-form")
const rField = document.querySelector("#r3")

function uncheckLast(){
    checkBoxes.forEach((checkBox) =>{
        if (checkBox !== this){
            checkBox.checked = false
        }
})}

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
    }
}

checkBoxes.forEach((element) => element.addEventListener("change", uncheckLast))
checkBoxes.forEach((element) => element.addEventListener("change", validateR))
textField.addEventListener("input", validateY)
plotForm.addEventListener("submit", validateForm)
