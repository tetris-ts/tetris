import { Tetromino } from "../tetromino"
import { BorderColor, Color } from "@/types"

export class Z extends Tetromino {
  color = Color.RED
  color_border = BorderColor.RED
  shape = [
    1, 1, 0,
    0, 1, 1,
    0, 0, 0,
  ]
}
