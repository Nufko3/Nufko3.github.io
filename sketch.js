var player1
var player2

var ball

var vx = 5
var vy = -1

function setup()
{
  createCanvas(600, 400)
  background(0, 0, 0)

  document.body.style.backgroundColor = "#0d1117"
  
  player1 = new Player(15, height / 2)
  player2 = new Player(width - 15, height / 2)
  
  ball = new Ball(width / 2, height / 2)
}

function draw()
{
  background(0, 0, 0)
  stroke(255, 255, 255)
  fill(255, 255, 255)
  
  line(0, height / 2, width, height / 2)
  line(width / 2, 0, width / 2, height)
  
  if (keyIsDown(87))
  {
    player1.y -= 2
  }
  else if (keyIsDown(83))
  {
    player1.y += 2
  }
  
  if (keyIsDown(38))
  {
    player2.y -= 2
  }
  else if (keyIsDown(40))
  {
    player2.y += 2
  }
  
  ball.checkCollision()
  
  ball.x += vx
  ball.y += vy
  
  player1.show()
  player2.show()
  ball.show()
}