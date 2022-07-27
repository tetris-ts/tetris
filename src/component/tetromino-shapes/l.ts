import { Tetromino } from "../tetromino"
import { BorderColor, Color } from "@/types"

export class L extends Tetromino {
  color = Color.ORANGE
  color_border = BorderColor.ORANGE
  shape = [
    0, 0, 1,
    1, 1, 1,
    0, 0, 0,
  ]
}
