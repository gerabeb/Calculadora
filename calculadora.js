const textInput = document.getElementById("texto");
const textOutput = document.getElementById("Lista");
const actionButton = document.getElementById("action");

//Deactivate text field default action.
textInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});

textOutput.innerHTML = textInput.value;

action.addEventListener('click', function(){ConcatenateText(textInput.value)})

function ConcatenateText( textPiece) {
    textInput.value = "";
    textOutput.innerHTML = textOutput.innerHTML +" "+ textPiece;
}