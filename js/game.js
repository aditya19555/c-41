class Game{

    constructor(){
    
    }
    
    getState(){
    
    database.ref('gamestate').on("value",function(data){
        gameState = data.val();
    })
    
    }
    
    update(state){
    database.ref('/').update({
        gamestate : state
    })
    }
    
    start(){
        if(gameState === 0){
        player = new Player;
        player.getCount();
        form = new Form();
        form.display();
        }
        car1 = createSprite(200,200);
        car1.addImage(car1Img);
        car2 = createSprite(400,200);
        car2.addImage(car2Img);
        car3 = createSprite(500,200); 
        car3.addImage(car3Img);
        car4 = createSprite(600,200);
        car4.addImage(car4Img);

        cars = [car1,car2,car3,car4];
       
    } 

    play(){

        form.hide();
       
       

        Player.getPlayerInfo();
        player.getCarsAtEnd();

  
        if(allPlayers !== undefined){
            var index = 0;
            var x = 200;
            var y =0;
            background(groundImg);
            image(trackImg,0,-displayHeight* 14,displayWidth,displayHeight*15);


           
        for(var plr in allPlayers){
            index = index + 1;
            x = x + 200;
             y = displayHeight - allPlayers[plr].distance;
            cars[index - 1].x = x; 
            cars[index - 1].y = y;
            if(index ===  player.index){
                cars[index - 1].shapeColor='red';
                camera.position.x = displayWidth/2
                camera.position.y = cars[index-1].y;
            }
        
        }
        }

if(keyDown(UP_ARROW) && player.index !== null){
    player.distance += 50;
    player.update();
}
//condition to change gamestate
if(player.distance>12600){
    gameState = 2
    Player.updateCarsAtEnd();
    player.rank = CarsAtEnd;
    player.update();
}

drawSprites();


  }
   displayRank(){
       
       camera.position.x = 0;
       camera.position.y = 0;
           
       Player.getPlayerInfo();

       for (var plr in allPlayers) {
           if (allPlayers[plr].rank === 1) {
               text("1st  - " + allPlayers[plr].name,0,100)
           }
           if (allPlayers[plr].rank === 2) {
            text("2nd  - " + allPlayers[plr].name,0,150)
        }
        if(allPlayers[plr].rank===3){
            text("3rd  - " + allPlayers[plr].name,0,200)
        }
        if (allPlayers[plr].rank === 4) {
            text("4st  - " + allPlayers[plr].name,0,250)
        }
       }


       

   } 
    
    }