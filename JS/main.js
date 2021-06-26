import Game from "./Game.js"
import GameView from "./GameView.js"


let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", ()=> (
   onRestartClick()
))


let tiles=document.querySelectorAll(".board-tile");
tiles.forEach((tile)=>{
    tile.addEventListener("click",()=> {
        onTileClick(tile.dataset.index);
        console.log(tile.dataset.index)
    })
})



function onTileClick (i) {
    //do something
    game.makeMove(i);
    gameView.updateboard(game);
}
function onRestartClick() {
    game=new Game();
    gameView.updateboard(game);
}