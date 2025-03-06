/*---------------- Variables -----------------*/ 
let array = [];
let index = 0;
let file;
let choice;
let input;

/*-------------------------------------------*/

window.onload = (function getFromURL(){
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    choice = urlParams.get('choice').trim();
    input = urlParams.get('input').trim();
    console.log(`Choice: ${choice}, Input:  ${input}`);
    loadFile(choice, input)
});

function loadFile(choice, file, input){
    if (choice == 1){
        choice = "Store"
    }

    file = `../csv/${choice}.csv`;  // Change if different directory; fills in the value of choice (set above) to match the CSV file name
    console.log(choice);
    fillArray(file);
}

function fillArray(file) {
    fetch(file)
        .then(response => response.text())
        .then(content => {
            const lines = content.split("\n");
            array = lines.slice(1).map(line => line.trim().split(","));
            console.log("Array loaded:", array);
            findIndex(input, array);
        })
        .catch(error => console.error('Could not load file:', error));
}

// Update findIndex function to check if the first column matches indexVal
function findIndex(input, array) {
    input = String(input);
    console.log("Searching for:", input);
    for (let i = 0; i < array.length; i++) {
        let row = array[i].map(val => val.trim()); // Normalize row values

        if (row.includes(input)) {  // Ensure match works with different input types
            index = i;
            console.log("Found at index", i, ":", row);
            breakContent(array, index);
            return;
        }
    }

    console.log("No match found!");
}

function breakContent(array, index){
    console.log("Running breakContent()");
    let newArray = array[index];
   
    let name = newArray[1];
    let category = newArray[2];
    let price = newArray[3];
    let description = newArray[4];
    let image = newArray[5];
    loadContent(name, category, price, description, image);
}

function loadContent(name, category, price, description, image){
    console.log(name + category + price + description + image);
    image = `../assets/images/${image.trim()}`;
    console.log(image);
    document.querySelector(".product-title").innerHTML = name;
    document.querySelector("#image").src = image;
    document.querySelector(".price").innerHTML = price;
    document.querySelector(".categ").innerHTML = category;
    document.querySelector(".description").innerHTML = description;
}