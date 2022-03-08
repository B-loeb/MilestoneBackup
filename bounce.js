export default class Bounce{
const canvas = document.getElementById('canvaz');
const context = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


//ENEMIES//
let timeToNextEnemy = 0;
let enemyInterval = 666;
let lastTime = 0;


let enemies = [];
class Enemy {
     constructor(){
         this.width = 40;
         this.height= 40;
         this.x = canvas.width;
         this.y = Math.random() * (canvas.height - this.height);
         this.directionX = Math.random() * 6 + 2;
         this.directionY = Math.random() * 5 - 1.5;
         this.markedForDeletion = false;
 //add art for enemy here//
     }
     update(){
         this.x -= this.directionX;
         if (this.x < this.width) this.markedForDeletion = true
     }
     draw(){
         context.fillRect(this.x, this.y, this.width, this.height);
     }
}

//random animation enemy animation//
function animate(timestamp){
    context.clearRect(0, 0, canvas.width, canvas.height);
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextEnemy += deltaTime
        if(timeToNextEnemy > enemyInterval){
            enemies.push(new Enemy());
            timeToNextEnemy = 0;
        }
        [...enemies].forEach(object => object.update());
        [...enemies].forEach(object => object.draw());
        enemies = enemies.filter(object => !object.markedForDeletion);
    
    requestAnimationFrame(animate);
}
animate(0);
}
/*
class Player {
    constructor(x, y, radius, color){
    this.x = x
    this.y = y
    this.radius = radius
    this.color= color
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0 Math.PI * 2, false)
        context.fillStyle = this.color
        context.fill()
    }
}
    const x = canvas.width / 2
    const y = canvas.height / 2
const player = new Player(x, y, 30, 'blue')
player.draw()
*/