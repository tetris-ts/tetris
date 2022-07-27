import { Tetromino } from "../tetromino"
import { BorderColor, Color } from "@/types"

export class T extends Tetromino {
  color = Color.PINK
  color_border = BorderColor.PINK
  shape = [
    0, 1, 0,
    1, 1, 1,
    0, 0, 0,
  ]
}
