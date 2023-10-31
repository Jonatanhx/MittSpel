const state =  {
    currentScene: 1,
    scenes:[{}, {}, {}],
    inventory: ["knife", "gun"],
    level: 1
}
function replaceBox(box) {
    const newBox = document.createElement("div")
    newBox.gameBox = "gameBox";
    newBox.innerText = "Do you want to play a game?"
    
}