
const checkbox = document.querySelector('.checkbox');
console.log('Checkbox:', checkbox);
const textFields = document.querySelectorAll('.textfield');
console.log('Text Fields:', textFields);
const button = document.getElementsByTagName('button')[0];
console.log('Button:', button);
const divElement = document.getElementById('emptyBox');
console.log('Div Element:', divElement);




function handleInputEvent(e) {
    console.log("Event triggered by:", e.target);

     targetName = e.target.name;
    console.log("Name attribute of target:", targetName);

    if (e.target.id === "content") {
        divElement.innerHTML = e.target.value;
    }
}

checkbox.addEventListener("change", function () {
    const colorInput = Array.from(textFields).find(field => field.name === "color");

    if (colorInput && colorInput.value) {
        divElement.style.backgroundColor = colorInput.value;
    } 
});

divElement.style.display = 'none'; 

checkbox.addEventListener("click", function () {
    divElement.style.display = 'block';
}); 


textFields.forEach(field => {
    field.addEventListener("input", handleInputEvent);
});


button.addEventListener("click", function () {
    divElement.remove();
    console.log(" Div elementet tas bort ut dom trädet")
});