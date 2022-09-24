class Player
{
  constructor(x, y)
  {
    this.x = x
    this.y = y
    this.w = 10
    this.h = 50
  }

  show()
  {
    fill(255, 255, 255)
    rectMode(CENTER)
    rect(this.x, this.y, this.w, this.h)
  }
}