/**
 * Create a new canvas for displaying stuff.
 * @param parent       The HTMLElement the canvas should reside in.
 * @param id           A DOM id.
 * @param width        Width of the canvas.
 * @param height       Height of the canvas.
 * @param column_count The amount of colums.
 * @param row_count    The amount of rows.
 */
export class Canvas {
  element: HTMLCanvasElement
  grid_color = "gray"
  row_count: number
  column_count: number


  constructor(parent: HTMLElement, id: string, width: number, height: number, column_count: number, row_count: number) {
    this.element        = document.createElement("canvas")
    this.element.id     = id
    this.element.width  = width
    this.element.height = height
    this.column_count   = column_count
    this.row_count      = row_count

    parent.appendChild(this.element)
  }


  get block_width() {
    return this.element.width / this.column_count
  }

  get block_height() {
    return this.element.height / this.row_count
  }


  /**
   * Draw something on the canvas.
   * @param  callback The function to run with drawing commands
   */
  draw(callback: (ctx: CanvasRenderingContext2D) => void): void {
    const ctx = this.element.getContext("2d")
    if (ctx) callback(ctx)
  }


  /**
   * Draws a grid overlay on the canvas.
   */
  drawGrid(): void {
    this.draw(ctx => {
      for (let x = this.block_width; x < this.element.width; x += this.block_width) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, this.element.height)
      }

      for (let x = this.block_height; x < this.element.height; x += this.block_height) {
        ctx.moveTo(0, x)
        ctx.lineTo(this.element.width, x)
      }

      ctx.strokeStyle = this.grid_color
      ctx.stroke()
    })
  }


  /**
   * Clears the canvas.
   */
  clear(): void {
    this.draw(ctx => ctx.clearRect(0, 0, this.element.width, this.element.height))
  }
}
