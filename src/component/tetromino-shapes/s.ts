import { Tetromino } from "../tetromino"
import { BorderColor, Color } from "@/types"

export class S extends Tetromino {
  color = Color.GREEN
  color_border = BorderColor.GREEN
  shape = [
    0, 1, 1,
    1, 1, 0,
    0, 0, 0,
  ]
}
