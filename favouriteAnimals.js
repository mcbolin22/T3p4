let animals = ['cat', 'dog', 'elephant', 'lion', 'tiger', 'bear', 'deer', 'wolf', 'fox', 'rabbit'];

function createAnimalList(){
    animals.forEach((animal, index) => {
        console.log("animal: " + animal);

        // create an li element with animal value as its text
        let newList = document.createElement('li');
        newList.textContent = animal;
        newList.id = animal;

        // create a button element with text "Remove"
        let removeItemButton = document.createElement('button');

        removeItemButton.onclick = (() => removeAnimalFromList(animal));

        removeItemButton.textContent = "Remove Animal";

        newList.appendChild(removeItemButton);

        // find the ol element that exists in the page and append the li into it
        let rootOlNode = document.querySelector('ol');
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