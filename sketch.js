var dog,sadDog,happyDog;
var feed,addFood;
var foodObject;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObject = new Food();

  feed = createButton("Feed The Dog");
  feed.position(700,95)
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95)
  addFood.mousePressed(addFood);

}

function draw() {
  background(46,139,87);
  foodObject.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
  if(foodObject.getFoodStock()<=0){
    foodObject.updateFoodStock(foodObject.getFoodStock()*0)
  }else{
    foodObject.updateFoodStock(foodObject.getFoodStock()-1)
  }
}

//function to add food in stock
function addFood(){
  foodObject.updateFoodStock(foodObject.getFoodStock()+1)
}
