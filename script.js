// Här skapar vi variabler och hämtar checkboxen, textfälten, knappen och den tomma boxen.
// Vi skriver också ut dessa i konsolen för att kontrollera att de är hämtade korrekt
const checkbox = document.querySelector('.checkbox');
console.log('Checkbox:', checkbox);
const textFields = document.querySelectorAll('.textfield');
console.log('Text Fields:', textFields);
const button = document.getElementsByTagName('button')[0];
console.log('Button:', button);
const divElement = document.getElementById('emptyBox');
console.log('Div Element:', divElement);

// Här gör vi div elementet osynligt från början
divElement.style.display = 'none';



// Här skapar vi funktion för att hantera input-händelser
function handleInputEvent(e) {
    // Här skriver vi ut vilket element som triggat eventet i konsolen
    console.log("Event triggered by:", e.target);

    // Här hämtar vi name-attributet från target och lagrar det i en variabel
    var targetName = e.target.name;
    console.log("Name attribute of target:", targetName);

    // Här kontrollerar vi om name-attributet är "content"
    if (targetName === "content") {
        // Här uppdaterar vi div-elementet med värdet från input-fältet
        divElement.innerHTML = e.target.value;
    }
}

// Här kopplar vi en eventlyssnare till checkboxen för att reagera på förändringar
checkbox.addEventListener("change", function () {
    // Här hämtar vi färgen från input-fältet med name "color"
    const colorInput = Array.from(textFields).find(field => field.name === "color");

    // Om färgen finns i inputfältet
    if (colorInput && colorInput.value) {
        // Sätter vi bakgrundsfärgen till den angivna färgen
        divElement.style.backgroundColor = colorInput.value;
    } else {
        // Om färgen inte finns, sätter vi en standardfärg
        divElement.style.backgroundColor = "#ffffff";
    }
});

// Här gör vi rutan synlig när chekboxen markerats
checkbox.addEventListener("click", function () {
    divElement.style.display = 'block';
}); 

// Här kopplar vi en eventlyssnare till varje textfält som triggas vid inmatning
textFields.forEach(field => {
    // När användaren skriver i fältet körs handleInputEvent
    field.addEventListener("input", handleInputEvent);
});

// här kopplar vi eventlyssnare till knappen
button.addEventListener("click", function () {
    // H'r gör vi div-elementet synligt när knappen klickas
    divElement.style.display = 'block';
    // Ta bort div-elementet
    divElement.remove();
});