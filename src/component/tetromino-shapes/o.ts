import { Tetromino } from "../tetromino"
import { BorderColor, Color, Position } from "@/types"

export class O extends Tetromino {
  color = Color.YELLOW
  color_border = BorderColor.YELLOW
  readonly position_initial: Position = {
    x: 4,
    y: -1
  }
  shape = [
    1, 1,
    1, 1,
  ]


  // do nothing on rotations
  rotateClockwise() {}
  rotateCounterClockwise() {}
}
