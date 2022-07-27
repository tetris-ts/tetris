import { Tetromino } from "../tetromino"
import { BorderColor, Color } from "@/types"

export class J extends Tetromino {
  color = Color.BLUE
  color_border = BorderColor.BLUE
  shape = [
    1, 0, 0,
    1, 1, 1,
    0, 0, 0,
  ]
}
