export {}

declare global {
  interface Array<T> {
    dedupe(): Array<T>
  }
}

Array.prototype.dedupe = function() {
  return [...new Set(this.filter((e: any) => typeof e != "undefined").map((e: any) => JSON.stringify(e)))].map((e: any) => JSON.parse(e))
}
