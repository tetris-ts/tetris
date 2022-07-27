import "./extension/array.extension"
import { Game } from "./game"


;(async () => {
  let game = new Game()

  document.addEventListener("touchstart", () => startGame(game), { once: true })
  document.addEventListener("keydown", event => {
    if ([32].includes(event.keyCode)) startGame(game)
  }, { once: true })

  game.canvas_main.draw(ctx => {
    ctx.font = "30px Dejavu Sans"
    ctx.textAlign = "center"
    ctx.fillStyle = "gray"
    ctx.fillText("Press space/tap to start!", game.canvas_main.element.width / 2, game.canvas_main.element.height / 2)
  })
})()


async function startGame(game: Game) {
  console.log("game started!")
  game.start()

  document.addEventListener("keydown", event => {
    if (["ArrowLeft", "a", "A"].includes(event.key))          game.handleMoveLeft()
    if (["ArrowRight", "d", "D"].includes(event.key))         game.handleMoveRight()
    if (["ArrowDown", "s", "S"].includes(event.key))          game.handleMoveDown()
    if (["ArrowUp", "w", "W", "x", "X"].includes(event.key))  game.handleRotateClockwise()
    if (["Control", "z", "Z"].includes(event.key))            game.handleRotateCounterClockwise()
    if ([32].includes(event.keyCode))                         game.handleHardDrop()
  })
}
