const canvas = document.getElementById("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");
class Topi {
  constructor({ position, velocity, color }) {
    this.position = position;
    this.velocity = velocity;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, 30, 0, 2 * Math.PI);
    ctx.fillStyle = this.color; 
    ctx.fill();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

const rrethi = new Topi({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 5,
    y: 5,
  },
  color: "red", 
});

const rrethi1 = new Topi({
  position: {
    x: 600,
    y: 200,
  },
  velocity: {
    x: -3,
    y: -3,
  },
  color: "orange",
});
const rrethi2 = new Topi({
  position: {
    x: 200,
    y: 0,
  },
  velocity: {
    x: 5,
    y: 5,
  },
  color: "limegreen", 
});

const rrethi3 = new Topi({
  position: {
    x: 1900,
    y: 200,
  },
  velocity: {
    x: -3,
    y: -3,
  },
  color: "white",
});
const rrethi4 = new Topi({
    position: {
      x: 900,
      y: 200,
    },
    velocity: {
      x: 3,
      y: -3,
    },
    color: "yellow",
  });
  const rrethi5 = new Topi({
    position: {
      x: 400,
      y: 200,
    },
    velocity: {
      x: -3,
      y: 3,
    },
    color: "purple", 
  });
  const rrethi8 = new Topi({
    position: {
      x: 1900,
      y: 500,
    },
    velocity: {
      x: -3,
      y: 3,
    },
    color: "grey", 
  });
  const rrethi7 = new Topi({
      position: {
        x: 900,
        y: 900,
      },
      velocity: {
        x: -3,
        y: 3,
      },
      color: "pink", 
    });
    const rrethi6 = new Topi({
      position: {
        x: 600,
        y: 400,
      },
      velocity: {
        x: 3,
        y: -3,
      },
      color: "blue", 
    });
  
const balls = [rrethi, rrethi1, rrethi2, rrethi3,rrethi4,rrethi5,rrethi6,rrethi7,rrethi8];

function SCREEN() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  // Update all the balls
  for (let i = 0; i < balls.length; i++) {
      const ball = balls[i];
      ball.update();

      if (ball.position.x >= canvas.width || ball.position.x <= 0) {
          ball.velocity.x *= -1;
      }
      
      if (ball.position.y >= canvas.height || ball.position.y <= 0) {
          ball.velocity.y *= -1;
      }
  }

  for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
          const ball1 = balls[i];
          const ball2 = balls[j];

          const dx = ball1.position.x - ball2.position.x;
          const dy = ball1.position.y - ball2.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 30 + 30) {
              ball1.velocity.x *= -1;
              ball1.velocity.y *= -1;
              ball2.velocity.x *= -1;
              ball2.velocity.y *= -1;
          }
      }
  }
const fontSize = Math.min(canvas.width * 0.05, window.innerWidth * 0.07);

ctx.font = `${fontSize}px Arial`;
ctx.fillStyle = "white"; 

const text = "Hello I'm ";
const textWidth = ctx.measureText(text).width;
const x = (canvas.width - textWidth) / 2;
const y = (canvas.height - fontSize) / 2; 

ctx.fillText(text, x, y);

ctx.font = `bold ${fontSize}px Arial`; 
const name = "Arsi Hoxha";
const nameWidth = ctx.measureText(name).width;
const x2 = (canvas.width - nameWidth) / 2;
const y2 = y + fontSize;

ctx.fillText(name, x2, y2);

ctx.font = `${fontSize}px Arial`;
const text2 = "I'm a full-stack web developer";
const text2Width = ctx.measureText(text2).width;
const x3 = (canvas.width - text2Width) / 2;
const y3 = y2 + fontSize; 

ctx.fillText(text2, x3, y3);

  requestAnimationFrame(SCREEN);
}

SCREEN();
const c2tx = document.getElementById('myChart');
c2tx.width = 600
c2tx.height = 600

c2tx.style.marginLeft = '55vh'
new Chart(c2tx, {
    type: 'polarArea',
    data: {
    labels: ['JS', 'HTML', 'CSS', 'NODEJS', 'EXPRESS', 'MONGODB','ELECTRON','REACT','LOGO DESIGN','BANNER DESIGN','GAME DEVELOPMENT'],
    datasets: [{
      label: '%',
      data: [97, 95, 80, 89, 74, 70,80,67,45,45,55],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});


