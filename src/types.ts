export const ROW_COUNT = 20
export const COLUMN_COUNT = 10

export enum Color {
  NONE        = "transparent",
  YELLOW      = "rgb(255, 230, 49)",
  LIGHT_BLUE  = "rgb(159, 209, 241)",
  PINK        = "rgb(203, 167, 206)",
  ORANGE      = "rgb(242, 164, 44)",
  BLUE        = "rgb(30, 123, 192)",
  GREEN       = "rgb(0, 172, 78)",
  RED         = "rgb(217, 59, 45)"
}

export enum BorderColor {
  NONE        = "transparent",
  YELLOW      = "rgb(242, 164, 44)",
  LIGHT_BLUE  = "rgb(50, 124, 179)",
  PINK        = "rgb(163, 87, 124)",
  ORANGE      = "rgb(239, 129, 50)",
  BLUE        = "rgb(53, 54, 149)",
  GREEN       = "rgb(0, 134, 69)",
  RED         = "rgb(155, 50, 39)"
}

export interface Position {
  x: number
  y: number
}
