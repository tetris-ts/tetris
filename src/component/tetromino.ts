import { BorderColor, Color, Position } from "@/types"
import { Canvas } from "@/component/canvas"


export abstract class Tetromino {
  abstract color: Color
  abstract color_border: BorderColor
  abstract shape: number[]
  readonly position_initial: Position = {
    x: 3,
    y: -1
  }
  position: Position
  is_dropped = false

  get width() {
    return Math.sqrt(this.shape.length)
  }

  constructor() {
    this.position = {...this.position_initial}
  }


  draw(canvas: Canvas): void {
    // if (!this.is_dropped) console.log(`drawing ${this.constructor.name} piece at (${this.position.x},${this.position.y})`)
    canvas.draw(ctx => {
      if (this.is_dropped) ctx.globalAlpha = 0.75
      ctx.strokeStyle = this.color_border
      ctx.fillStyle   = this.color

      this.getFilledBlocks().forEach(pos => {
        ctx.fillRect(pos.x * canvas.block_width, pos.y * canvas.block_height, canvas.block_width, canvas.block_height)
        ctx.strokeRect(pos.x * canvas.block_width, pos.y * canvas.block_height, canvas.block_width, canvas.block_height)
      })
      ctx.globalAlpha = 1
    })
  }


  getFilledBlocks(filled=true): Position[] {
    let out: Position[] = []

    this.shape.forEach((value, i) => {
      if (value == (filled ? 0 : 1)) return
      out.push({
        x: this.position.x + (i % this.width),
        y: this.position.y + Math.floor(i / this.width)
      })
    })
    return out
  }

  removeFilledBlock(x: number, y: number) {
    this.shape.forEach((_value, i) => {
      let pos = {
        x: this.position.x + (i % this.width),
        y: this.position.y + Math.floor(i / this.width)
      }
      if (pos.x == x && pos.y == y) {
        this.shape[i] = 0
      }
    })
  }


  getSingleBlockPiece(pos: Position): Tetromino {
    return new Dot(this.color, this.color_border, pos)
  }


  splitToSingleBlockPieces(): Tetromino[] {
    let out: Tetromino[] = []
    for (let block_pos of this.getFilledBlocks()) {
      out.push(this.getSingleBlockPiece(block_pos))
    }
    console.log(out);

    return out
  }


  resetPosition() {
    this.position = {...this.position_initial}
    return this
  }



  //////////////
  // move
  //////////////

  moveDown(): void {
    this.position.y++
  }

  private moveUp(): void {
    this.position.y--
  }

  moveRight(): void {
    this.position.x++
  }

  moveLeft(): void {
    this.position.x--
  }



  //////////////
  // rotate
  //////////////

  rotateClockwise(): void {
    let temp: number[] = []

    for (let i = 0; i < this.width; i++) {
      for (let j = 0; j < this.width; j++) {
        temp[i * this.width + j] = this.shape[(this.width - j - 1) * this.width + i];
      }
    }
    this.shape = temp
  }

  rotateCounterClockwise(): void {
    this.rotateClockwise()
    this.rotateClockwise()
    this.rotateClockwise()
  }



  //////////////
  // collision
  //////////////
  checkForCollision(
    pieces: Tetromino[]
  ): boolean
  checkForCollision(
    pieces: Tetromino[],
    move: (e: Tetromino) => void,
    revert: (e: Tetromino) => void,
    wallCheck: (e: Position) => boolean
  ): boolean
  checkForCollision(pieces: Tetromino[], ...funcs: any[]): boolean {
    if (funcs.length == 3) funcs[0](this)
    let own_filled_blocks = this.getFilledBlocks()
    if (funcs.length == 3) funcs[1](this)

    // collision with wall/ground
    if (funcs.length && own_filled_blocks.some(funcs[2])) {
      return true
    }

    // collision with other piece
    if (pieces.filter(e => e != this)
              .map(e => e.getFilledBlocks())
              .flat()
              .findIndex(e => own_filled_blocks.some(f => f.x == e.x && f.y == e.y)) != -1)
      return true

    return false
  }



  checkForDownCollision(pieces: Tetromino[]) {
    return this.checkForCollision(
      pieces,
      e => e.moveDown(),
      e => e.moveUp(),
      e => e.y >= 20
    )
  }

  checkForLeftCollision(pieces: Tetromino[]) {
    return this.checkForCollision(
      pieces,
      e => e.moveLeft(),
      e => e.moveRight(),
      e => e.x < 0
    )
  }

  checkForRightCollision(pieces: Tetromino[]) {
    return this.checkForCollision(
      pieces,
      e => e.moveRight(),
      e => e.moveLeft(),
      e => e.x >= 10
    )
  }

  checkForRotateClockwiseCollision(pieces: Tetromino[]) {
    return this.checkForCollision(
      pieces,
      e => e.rotateClockwise(),
      e => e.rotateCounterClockwise(),
      e => e.y >= 20 || e.x < 0 || e.x >= 10
    )
  }

  checkForRotateCounterClockwiseCollision(pieces: Tetromino[]) {
    return this.checkForCollision(
      pieces,
      e => e.rotateCounterClockwise(),
      e => e.rotateClockwise(),
      e => e.y >= 20 || e.x < 0 || e.x >= 10
    )
  }
}


class Dot extends Tetromino {
  color: Color
  color_border: BorderColor
  shape = [
    1
  ]

  constructor(color: Color, color_border: BorderColor, position: Position) {
    super()
    this.is_dropped   = true
    this.color        = color
    this.color_border = color_border
    this.position     = position
  }
}
