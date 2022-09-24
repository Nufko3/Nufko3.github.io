class Ball
{
  constructor(x, y)
  {
    this.x = x
    this.y = y
    this.w = 10
  }
  
  checkCollision()
  {
    if (this.x > width || this.x < 0)
    {
      vx *= -1
    }
    
    if (this.y > height || this.y < 0)
    {
      vy *= -1
    }
    
    if (this.x - this.w / 2 < player1.x + player1.w / 2 && !(this.y - this.w / 2 > player1.y + player1.h / 2) && !(this.y + this.w / 2 < player1.y - player1.h / 2))
    {
      vx *= -1
    }
    
    if (this.x + this.w / 2 > player2.x - player2.w / 2 && !(this.y - this.w / 2 > player2.y + player2.h / 2) && !(this.y + this.w / 2 < player2.y - player2.h / 2))
    {
      vx *= -1
    }
  }

  show()
  {
    fill(255, 255, 255)
    rectMode(CENTER)
    circle(this.x, this.y, this.w)
  }
}