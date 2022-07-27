import { I as Piece } from "@/component"

// [J, [
//   { x: 0, y: 0 },
//   { x: 0, y: 1 },
//   { x: 1, y: 1 },
//   { x: 2, y: 1 },
// ]],
// [L, [
//   { x: 3, y: 0 },
//   { x: 0, y: 1 },
//   { x: 1, y: 1 },
//   { x: 2, y: 1 },
// ]],
// [O, [
//   { x: 0, y: 0 },
//   { x: 1, y: 0 },
//   { x: 0, y: 1 },
//   { x: 1, y: 1 },
// ]],
// [S, [
//   { x: 1, y: 0 },
//   { x: 2, y: 0 },
//   { x: 0, y: 1 },
//   { x: 1, y: 1 },
// ]],
// [T, [
//   { x: 1, y: 0 },
//   { x: 0, y: 1 },
//   { x: 1, y: 1 },
//   { x: 2, y: 1 },
// ]],
// [Z, [
//   { x: 0, y: 0 },
//   { x: 1, y: 0 },
//   { x: 1, y: 1 },
//   { x: 2, y: 1 },
// ]],

describe("I Tetromino", () => {
  it("can be created and has correct position", () => {
    let piece = new Piece()
    expect(piece).toBeInstanceOf(Piece)
    expect(piece.position.x).toEqual(3)
    expect(piece.position.y).toEqual(-1)
  })

  it("resetting the position works", () => {
    let piece = new Piece()
    piece.position.x = 12
    piece.position.y = 2
    piece.resetPosition()
    expect(piece.position.x).toEqual(3)
    expect(piece.position.y).toEqual(-1)
  })

  it("getFilledBlocks works", () => {
    let piece = new Piece()
    piece.position.x = 0
    piece.position.y = 0
    expect(piece.getFilledBlocks()).toEqual([
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
    ])
  })

  it("can be moved", () => {
    let piece = new Piece()
    piece.position.x = 4
    piece.position.y = 0
    piece.moveDown()
    expect(piece.position.x).toEqual(4)
    expect(piece.position.y).toEqual(1)
    piece.moveLeft()
    expect(piece.position.x).toEqual(3)
    expect(piece.position.y).toEqual(1)
    piece.moveRight()
    piece.moveRight()
    expect(piece.position.x).toEqual(5)
    expect(piece.position.y).toEqual(1)
  })

  it("can be rotated clockwise", () => {
    let piece = new Piece()
    piece.rotateClockwise()
    expect(piece.shape).toEqual([
      0, 0, 1, 0,
      0, 0, 1, 0,
      0, 0, 1, 0,
      0, 0, 1, 0,
    ])
  })

  it("can be rotated counterclockwise", () => {
    let piece = new Piece()
    piece.rotateCounterClockwise()
    expect(piece.shape).toEqual([
      0, 1, 0, 0,
      0, 1, 0, 0,
      0, 1, 0, 0,
      0, 1, 0, 0,
    ])
  })
})
