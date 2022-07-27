import * as util from "./util"
import { Canvas } from "./component/canvas"
import { O, I, T, L, J, S, Z, Tetromino } from "./component"


export class Game {
  static Tetrominos = [ O, I, T, L, J, S, Z ]
  pieces: Tetromino[] = []
  pieces_next: Tetromino[] = []
  canvas_status: Canvas
  canvas_main: Canvas
  canvas_next_up: Canvas
  is_game_over = false
  points = 0
  level = 1

  get current_piece(): Tetromino | null {
    if (this.pieces.length == 0) return null
    return this.pieces[this.pieces.length - 1]
  }


  constructor() {
    let game_elem = document.getElementById("game") ?? document.body
    this.canvas_status  = new Canvas(game_elem, "status", 200, 500, 10, 25)
    this.canvas_main    = new Canvas(game_elem, "main",   400, 800, 10, 20)
    this.canvas_next_up = new Canvas(game_elem, "next",   200, 500, 10, 25)

    // add 5 pieces to pieces_next
    Array(5).fill(0).forEach(() => this.pieces_next.push(Game.getRandomTetromino()))
  }


  async start() {
    while (this.nextPieceCanBePlaced()) {
      this.pieces_next.push(Game.getRandomTetromino())
      let tmp = this.pieces_next.shift()
      if (!tmp) break
      this.pieces.push(tmp.resetPosition())

      while (true) {
        if (!this.current_piece) break

        if (this.current_piece.checkForDownCollision(this.pieces)) {
          await util.sleep(500)
          this.current_piece.is_dropped = true
          this.handleFilledRows()
          this.cleanUp()
          break
        }
        this.drawBackground()
        this.current_piece.moveDown()
        this.current_piece.draw(this.canvas_main)
        await util.sleep(500)
      }
    }

    // game over
    console.log("game over")
    this.is_game_over = true
    this.drawGameOver()
  }

  nextPieceCanBePlaced() {
    return !this.pieces_next[0].resetPosition().checkForCollision(this.pieces)
  }



  static getRandomTetromino(): Tetromino {
    let random = Math.floor(crypto.getRandomValues(new Uint8Array(1))[0] / 255 * (Game.Tetrominos.length - 1))
    return new Game.Tetrominos[random]
  }



  checkForFilledRow(): number[] {
    let filled_blocks = this.pieces.map(e => e.getFilledBlocks()).flat()
    let out: number[] = []

    for (let row = 0; row < this.canvas_main.row_count; row++) {
      if (filled_blocks.filter(e => e.y == row && e.x >= 0 && e.x < this.canvas_main.column_count).map(e => e.x).dedupe().length == 10) {
        out.push(row)
      }
    }
    return out
  }

  handleFilledRows() {
    let filled_rows = this.checkForFilledRow()

    let x_vals = Array(this.canvas_main.row_count).fill(0).map((_e, i) => i)

    for (let row of filled_rows) {
      for (let piece of this.pieces.filter(e => e.getFilledBlocks().some(f => f.y == row))) {
        x_vals.forEach(e => piece.removeFilledBlock(e, row))
        this.pieces = this.pieces.concat(piece.splitToSingleBlockPieces())
        piece.shape = []
      }
      this.moveDroppedPiecesDown(row)
    }

    // points
    if (filled_rows.length == 1) this.points += this.level * 100
    if (filled_rows.length == 2) this.points += this.level * 300
    if (filled_rows.length == 3) this.points += this.level * 500
    if (filled_rows.length == 4) this.points += this.level * 800
  }


  moveDroppedPiecesDown(to_row: number) {
    for (let piece of this.pieces.filter(e => e.is_dropped && e.getFilledBlocks().some(f => f.y <= to_row))) {
      piece.moveDown()
    }
  }

  cleanUp() {
    this.pieces = this.pieces.filter(e => e.shape.length > 0)
  }



  drawBackground() {
    this.canvas_main.clear()
    this.canvas_main.drawGrid()
    this.drawDroppedPieces()
    this.canvas_next_up.clear()
    this.drawNextUpCanvas()
    this.canvas_status.clear()
    this.drawStatusCanvas()
  }

  drawDroppedPieces() {
    this.pieces.filter(e => e.is_dropped).forEach(e => e.draw(this.canvas_main))
  }

  drawNextUpCanvas() {
    this.canvas_next_up.draw(ctx => {
      ctx.font = "30px Dejavu Sans"
      ctx.textAlign = "center"
      ctx.fillStyle = "gray"
      ctx.fillText("Next up", this.canvas_next_up.element.width / 2, 35)
    })

    this.pieces_next.forEach((e, i) => {
      e.position.x = 3 + (4 - e.width) / 2
      e.position.y = i * 4 + 4
      e.draw(this.canvas_next_up)
    })
  }

  drawStatusCanvas() {
    this.canvas_status.draw(ctx => {
      // level
      ctx.font = "30px Dejavu Sans"
      ctx.textAlign = "center"
      ctx.fillStyle = "gray"
      ctx.fillText("Level", this.canvas_status.element.width / 2, 35)
      ctx.font = "20px Dejavu Sans"
      ctx.fillText(this.level.toString(), this.canvas_status.element.width / 2, 60)

      // points
      ctx.font = "30px Dejavu Sans"
      ctx.textAlign = "center"
      ctx.fillStyle = "gray"
      ctx.fillText("Points", this.canvas_status.element.width / 2, 95)
      ctx.font = "20px Dejavu Sans"
      ctx.fillText(this.points.toString(), this.canvas_status.element.width / 2, 120)
    })
  }

  drawGameOver() {
    this.canvas_main.draw(ctx => {
      // overlay
      ctx.globalAlpha = 0.6
      ctx.fillStyle = "white"
      ctx.fillRect(0, 0, this.canvas_main.element.width, this.canvas_main.element.height)

      // reset alpha
      ctx.globalAlpha = 1

      // game over / restart text
      ctx.font = "30px Dejavu Sans"
      ctx.textAlign = "center"
      ctx.fillStyle = "gray"
      ctx.fillText("Game Over!", this.canvas_main.element.width / 2, this.canvas_main.element.height / 3)
      ctx.fillText("Reload to restart!", this.canvas_main.element.width / 2, this.canvas_main.element.height - this.canvas_main.element.height / 3)
    })
  }


  ///////////////////
  // action handlers
  ///////////////////

  handleAction(callback: (piece: Tetromino) => void) {
    if (this.is_game_over || !this.current_piece || this.current_piece.is_dropped) return
    this.drawBackground()
    this.handleFilledRows()
    this.cleanUp()

    callback.call(this, this.current_piece)
    this.current_piece.draw(this.canvas_main)
  }

  handleMoveLeft() {
    this.handleAction(piece => {
      // check for collision
      if (!piece.checkForLeftCollision(this.pieces)) {
        piece.moveLeft()
      }
    })
  }

  handleMoveRight() {
    this.handleAction(piece => {
      // check for collision
      if (!piece.checkForRightCollision(this.pieces)) {
        piece.moveRight()
      }
    })
  }

  handleMoveDown() {
    this.handleAction(piece => {
      // check for collision
      if (piece.checkForDownCollision(this.pieces)) {
        piece.is_dropped = true
      } else {
        piece.moveDown()
      }
    })
  }

  handleRotateClockwise() {
    this.handleAction(piece => {
      // check for collision
      if (!piece.checkForRotateClockwiseCollision(this.pieces)) {
        piece.rotateClockwise()
      }
    })
  }

  handleRotateCounterClockwise() {
    this.handleAction(piece => {
      // check for collision
      if (!piece.checkForRotateCounterClockwiseCollision(this.pieces)) {
        piece.rotateCounterClockwise()
      }
    })
  }

  handleHardDrop() {
    this.handleAction(piece => {
      while (!piece.checkForDownCollision(this.pieces)) {
        piece.moveDown()
        this.drawBackground()
        piece.draw(this.canvas_main)
      }
      piece.is_dropped = true
    })
  }
}
