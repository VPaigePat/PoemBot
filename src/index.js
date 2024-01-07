function displayPoem(response) {

    console.log("poem generated")

    new Typewriter("#answer", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();
let instructionsInput = document.querySelector("#user-instructions")    
let apiKey = "dc0f5o3ab47902302a4t6c2308650943";
let prompt = `${instructionsInput}`;
let context = "You are a romantic expert that writes short poems. These short poems are about 4 lines and seperate each line with a <br />. Make sure to follow the user instructions. After a <br /> sign the poem with PoemBot";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

console.log(`prmopt: ${instructionsInput}`);
console.log(`context: ${context}`);

axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);