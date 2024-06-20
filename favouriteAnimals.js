let animals = ['cat', 'dog', 'elephant', 'lion', 'tiger', 'bear', 'deer', 'wolf', 'fox', 'rabbit'];

function createAnimalList(){
    animals.forEach((animal, index) => {
        console.log("animal: " + animal);

        // create an li element with animal value as its text
        let newList = document.createElement('li');
        newList.textContent = animal;
        newList.id = animal;

        // find the ol element that exists in the page and append the li into it
        let rootOlNode = document.querySelector('ol');
        rootOlNode.appendChild(newList);
    });        
}