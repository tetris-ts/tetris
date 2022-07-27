import { Tetromino } from "../tetromino"
import { BorderColor, Color } from "@/types"

export class I extends Tetromino {
  color = Color.LIGHT_BLUE
  color_border = BorderColor.LIGHT_BLUE
  shape = [
    0, 0, 0, 0,
    1, 1, 1, 1,
    0, 0, 0, 0,
    0, 0, 0, 0,
  ]
}
