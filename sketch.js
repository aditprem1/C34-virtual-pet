//Create variables here
var dog;
var database;
var food;


function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png");
  dogImage1=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database;
	createCanvas(800, 700);
  dog = createSprite(250,250,10,10);
addImage=dogimage;

var bposition=database.ref('dog/food')
bposition.on("value",readposition,showerror)

}



function draw() {  

  function writePosition(x,y){
    database.ref('dog/food').set

   
    }
  }
  
  function readposition(data)
{

food=data.val()
}

function showerror()
{
console.log("ERROR")

}

if (food=20>0)
{
addImage=dogImage;
}

else 
{
  addImage=dogImage;
}


  drawSprites();
  //add styles here





