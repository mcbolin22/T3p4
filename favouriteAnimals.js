let animals = ['cat', 'dog', 'elephant', 'lion', 'tiger', 'bear', 'deer', 'wolf', 'fox', 'rabbit'];

function createAnimalList(){

    animals = [...new Set(animals)]; // remove duplicates from array

    // find the existing list HTML and reset it
    let rootOlNode = document.querySelector('ol');
    rootOlNode.innerHTML = '';

    animals.forEach((animal, index) => {
        console.log("animal: " + animal);

        // create an li element with animal value as its text
        let newList = document.createElement('li');
        newList.textContent = animal;
        // newList.innerHTML = <h6> ${animal} </h6>; - example of using innerHTML to add html elements
        newList.id = animal;

        // create a button element with text "Remove"
        let removeItemButton = document.createElement('button');

        removeItemButton.onclick = (() => removeAnimalFromList(animal));

        removeItemButton.textContent = "Remove Animal";

        newList.appendChild(removeItemButton);

        // find the ol element that exists in the page and append the li into it
        
        rootOlNode.appendChild(newList);
    });        
}

function removeAnimalFromList(targetAnimalId){
    // find element in array with matching ID
    let targetListItem = document.getElementById(targetAnimalId);
    targetListItem.remove();
    
    // check if ID is in array of animals
    let isAnimalInList = animals.includes(targetAnimalId);
    if (!isAnimalInList){
        console.log("Animal not found in list");
        return;
    } else { 
        return; 
    }

    // remove animal from array
    animals = animals.filter(animal => {
        if (targetAnimalId == animal) {
            return false;
        } else {        
            return true;
        }
    });

    //update or wipe and rebuild the animal list html

}

function addAnimalToList(event, targetInputId){
    // this prevents the form from reloading the page
    event.preventDefault();

    // Fine the input field matching targetInputId
    let targetInputField = document.getElementById(targetInputId);

    // Get the text value from the input field that we found
    let foundInputFieldValue = targetInputField.value;
    console.log("Input field value to add to list is: " + foundInputFieldValue);

    // validate for empty and duplicate data in the input field
    // array.filter or set to check for duplicates
    // checking for empty string

    // Push the text value into the animals array
    animals.push(foundInputFieldValue);

    // Clear the input field
    targetInputField.value = '';

    // Delete the animal list HTML elements and recreate them
    createAnimalList();

    // Make sure this function deletes the existing list first


}

let fakeFormButton = document.getElementById('fakeform-submit');
fakeFormButton.addEventListener('click', (event) => {addAnimalToList(event, 'fakeform-addAnimal')});

let realFormButton = document.getElementById('realform-submit');
realFormButton.addEventListener('click', (event) => {addAnimalToList(event, 'realform-addAnimal')});




function inputHelperReveal(targetElementId){
    let hintElement = document.getElementById(targetElementId);
    hintElement.style.display = "inherit";
}

function inputHelperHide(targetElementId){
    let hintElement = document.getElementById(targetElementId);
    hintElement.style.display = "none";
}

let realFormInput = document.getElementById('realform-addAnimal');

realFormInput.addEventListener('focusin', () => {inputHelperReveal('realform-hint')});

realFormInput.addEventListener('focusout', () => {inputHelperHide('realform-hint')});

inputHelperHide('realform-hint');

let fakeFormInput = document.getElementById('fakeform-addAnimal');

fakeFormInput.addEventListener('focusin', () => {inputHelperReveal('fakeform-hint')});

fakeFormInput.addEventListener('focusout', () => {inputHelperHide('fakeform-hint')});

inputHelperHide('fakeform-hint');