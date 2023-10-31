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
    const yesButtonContainer = document.getElementById("yesButtonContainer");
    yesButtonContainer.innerHTML = `
      <div class="yesBox" onclick="onYesClick()">Yes</div>`
    const noButtonContainer = document.getElementById("noButtonContainer");
    noButtonContainer.innerHTML =
    `<div class="noBox" onclick="onNoClick()">No</div> `
    ;
  }
function onYesClick() {

}
function onNoClick() {
    
}