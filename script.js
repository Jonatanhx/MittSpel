const state =  {
    currentScene: 1,
    scenes:[{}, {}, {}],
    inventory: ["knife", "gun"],
    level: 1
}
function changeTextAndButtons() {
    const content = document.getElementById("changeTextButton");
    content.innerHTML = 
    `<p>Do you want to play a game?</p>`
    const yesButtonContainer = document.createElement("div");
    yesButtonContainer.innerHTML = `<div class="green" id="yesButton" onclick="onYesClick()">Yes</div>`
    yesButtonContainer.classList.add("clear"); //used to clear float value

    const noButtonContainer = document.createElement("div");
    noButtonContainer.innerHTML = `<div class="red" id="noButton" onclick="onNoClick()">No</div>`
    noButtonContainer.classList.add("clear"); //used to clear float value

    document.body.appendChild(noButtonContainer);
    document.body.appendChild(yesButtonContainer);
}
function onYesClick() {

}
function onNoClick() {
    
}