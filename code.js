var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1df6f158-4fff-4e1a-9cdb-e3715bfa869c","423312a7-76d0-4fd3-b687-c45c00b5a57d","4397fda1-8361-4efa-be08-1f7a421eaab9","b8d53df7-3b66-4472-8161-7007f1d4f9d2","e59de6df-bcf3-4c18-a2b2-300bca5e573f","3d71706f-2ca1-4776-a0cb-c093b548fc5d","6d36064e-3061-475b-a523-a5b74799b8a3","c155c64b-697b-46b5-9bf7-7d9817166d5f","86d0f286-cca1-44f7-8dfd-c4532dfc3da0","4baf79a5-100c-4c5e-8464-2798b2fd01a8","be1c106f-a88f-4e45-b080-37871b286006","b352f020-f568-4c28-b3f2-0504462a891f","50eb1145-c625-422a-8d95-8b710b69ae91","f51c72de-7c09-4ed4-8c4e-72b01f5d7961","db8e3506-55f0-415a-af23-5c86c6f60478","23407fad-5244-4f84-aeb1-3a2190c227b5","abbd5c21-22b8-49cb-9416-59a0502956c2"],"propsByKey":{"1df6f158-4fff-4e1a-9cdb-e3715bfa869c":{"name":"bg","sourceUrl":null,"frameSize":{"x":768,"y":502},"frameCount":1,"looping":true,"frameDelay":12,"version":"6EK_iI8nCe_dzfITy1efQm0dysmLoGS8","loadedFromSource":true,"saved":true,"sourceSize":{"x":768,"y":502},"rootRelativePath":"assets/1df6f158-4fff-4e1a-9cdb-e3715bfa869c.png"},"423312a7-76d0-4fd3-b687-c45c00b5a57d":{"name":"play","sourceUrl":null,"frameSize":{"x":268,"y":118},"frameCount":1,"looping":true,"frameDelay":12,"version":"DBPKO2oLc_5quq.gzpDW.U_inEMwXIfx","loadedFromSource":true,"saved":true,"sourceSize":{"x":268,"y":118},"rootRelativePath":"assets/423312a7-76d0-4fd3-b687-c45c00b5a57d.png"},"4397fda1-8361-4efa-be08-1f7a421eaab9":{"name":"bg2","sourceUrl":"assets/api/v1/animation-library/gamelab/.g_fM0jG5YHeQCetPtAd_H9pyzUfaVjK/category_backgrounds/abstract_08.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":".g_fM0jG5YHeQCetPtAd_H9pyzUfaVjK","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.g_fM0jG5YHeQCetPtAd_H9pyzUfaVjK/category_backgrounds/abstract_08.png"},"b8d53df7-3b66-4472-8161-7007f1d4f9d2":{"name":"pot","sourceUrl":"assets/v3/animations/Vd_DqgFN2ef9aplw-m3Pbq-HqDqMcEOGBvmIuE-pyF4/b8d53df7-3b66-4472-8161-7007f1d4f9d2.png","frameSize":{"x":158,"y":205},"frameCount":1,"looping":true,"frameDelay":4,"version":"HacovNa0xtLuxuh.OTqvP.tdjM.4Ciig","loadedFromSource":true,"saved":true,"sourceSize":{"x":158,"y":205},"rootRelativePath":"assets/v3/animations/Vd_DqgFN2ef9aplw-m3Pbq-HqDqMcEOGBvmIuE-pyF4/b8d53df7-3b66-4472-8161-7007f1d4f9d2.png"},"e59de6df-bcf3-4c18-a2b2-300bca5e573f":{"name":"player","sourceUrl":null,"frameSize":{"x":152,"y":193},"frameCount":1,"looping":true,"frameDelay":12,"version":"KwBcZYLoj6z8c6DUdXrfWR.T6aAzeWki","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":152,"y":193},"rootRelativePath":"assets/e59de6df-bcf3-4c18-a2b2-300bca5e573f.png"},"3d71706f-2ca1-4776-a0cb-c093b548fc5d":{"name":"player2","sourceUrl":null,"frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":12,"version":"ZdSPfT1R5cdYcyQiEFveFWx7XxqgohBw","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/3d71706f-2ca1-4776-a0cb-c093b548fc5d.png"},"6d36064e-3061-475b-a523-a5b74799b8a3":{"name":"bg3","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"},"c155c64b-697b-46b5-9bf7-7d9817166d5f":{"name":"seeds","sourceUrl":null,"frameSize":{"x":483,"y":517},"frameCount":1,"looping":true,"frameDelay":12,"version":"U7C7Of5zsl11DudZ3W8kNgH_8SsOvz6U","loadedFromSource":true,"saved":true,"sourceSize":{"x":483,"y":517},"rootRelativePath":"assets/c155c64b-697b-46b5-9bf7-7d9817166d5f.png"},"86d0f286-cca1-44f7-8dfd-c4532dfc3da0":{"name":"bg4","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"iSzN6HHSOYi7O9Hl56h_Zdt6D6RPcyPK","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/86d0f286-cca1-44f7-8dfd-c4532dfc3da0.png"},"4baf79a5-100c-4c5e-8464-2798b2fd01a8":{"name":"obstacle2-1","sourceUrl":"assets/api/v1/animation-library/gamelab/mKeEFe8yJsnV4UZdflqhRoYbkCZdcZUs/category_video_games/rockIceDown.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":1,"version":"mKeEFe8yJsnV4UZdflqhRoYbkCZdcZUs","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mKeEFe8yJsnV4UZdflqhRoYbkCZdcZUs/category_video_games/rockIceDown.png"},"be1c106f-a88f-4e45-b080-37871b286006":{"name":"obstacle3","sourceUrl":null,"frameSize":{"x":52,"y":68},"frameCount":1,"looping":true,"frameDelay":12,"version":"B7PZwnm4NST7KiP6jMXi8MdRXAKGv9.r","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":68},"rootRelativePath":"assets/be1c106f-a88f-4e45-b080-37871b286006.png"},"b352f020-f568-4c28-b3f2-0504462a891f":{"name":"obstacle1","sourceUrl":"assets/api/v1/animation-library/gamelab/T2gWXwUhXPubfMIhLkH0gUTYYeRNt6dF/category_video_games/spike_bottom.png","frameSize":{"x":51,"y":87},"frameCount":1,"looping":true,"frameDelay":2,"version":"T2gWXwUhXPubfMIhLkH0gUTYYeRNt6dF","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":87},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T2gWXwUhXPubfMIhLkH0gUTYYeRNt6dF/category_video_games/spike_bottom.png"},"50eb1145-c625-422a-8d95-8b710b69ae91":{"sourceSize":{"x":260,"y":280},"frameSize":{"x":260,"y":280},"frameCount":1,"frameDelay":12,"name":"factors","sourceUrl":null,"size":20589,"version":"KwRUNAIScdn2iDI0Nn0GnGjHHNYdsBbL","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/50eb1145-c625-422a-8d95-8b710b69ae91.png"},"f51c72de-7c09-4ed4-8c4e-72b01f5d7961":{"name":"key","categories":["household_objects"],"frameCount":1,"frameSize":{"x":63,"y":65},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:16:27 UTC","pngLastModified":"2021-01-05 19:16:26 UTC","version":"hQ6FLlOn2xW60NlB_KNxikbNc5R9yeMT","sourceUrl":null,"sourceSize":{"x":63,"y":65},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/f51c72de-7c09-4ed4-8c4e-72b01f5d7961.png"},"db8e3506-55f0-415a-af23-5c86c6f60478":{"name":"bg5","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-06 21:36:20 UTC","pngLastModified":"2021-01-06 21:36:21 UTC","version":"_pBimGWbiO2Nbb6J7Bfjez6VIWSBKdx.","sourceUrl":"assets/api/v1/animation-library/gamelab/_pBimGWbiO2Nbb6J7Bfjez6VIWSBKdx./category_backgrounds/abstract_26.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/_pBimGWbiO2Nbb6J7Bfjez6VIWSBKdx./category_backgrounds/abstract_26.png"},"23407fad-5244-4f84-aeb1-3a2190c227b5":{"sourceSize":{"x":179,"y":327},"frameSize":{"x":179,"y":327},"frameCount":1,"frameDelay":4,"name":"plant","sourceUrl":"assets/v3/animations/Vd_DqgFN2ef9aplw-m3Pbq-HqDqMcEOGBvmIuE-pyF4/23407fad-5244-4f84-aeb1-3a2190c227b5.png","size":65790,"version":"rgtxxPph5kQfyB6ZZ1hoYv8lL_a8t2wd","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/Vd_DqgFN2ef9aplw-m3Pbq-HqDqMcEOGBvmIuE-pyF4/23407fad-5244-4f84-aeb1-3a2190c227b5.png"},"abbd5c21-22b8-49cb-9416-59a0502956c2":{"name":"soil","categories":["video_games"],"frameCount":1,"frameSize":{"x":128,"y":128},"looping":true,"frameDelay":12,"jsonLastModified":"2021-03-29 19:30:45 UTC","pngLastModified":"2021-03-29 19:30:45 UTC","version":"g7V7wBgr.5gwcod78V1wp.Bz.bSrVF7T","sourceUrl":null,"sourceSize":{"x":128,"y":128},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/abbd5c21-22b8-49cb-9416-59a0502956c2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var level = 0;

var bg = createSprite(200,200); bg.setAnimation("bg"); bg.scale = 0.81;
var gText = "Plant  a  tree"
var desc1  = "Complete each level to get the materials required"
var desc2  =  "to plant a sapling. Press play button to start."
var desc3 = "-> Plants are very important for life on earth."
var desc4 = "->Its our duty to plant more trees and save our"
var desc5 = "environment as deforestation is common these days"
var playB = createSprite(200,300); playB.setAnimation("play"); playB.scale= 0.5; playB.depth=100;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var soil = createSprite(360,300,20,20); soil.setAnimation("pot"); soil.scale=0.4;  soil.visible=false
var player  = createSprite(50,170,2,2); player.setAnimation("player"); player.scale=0.27; player.visible= false;
var seeds = createSprite(360,175,10,10); seeds.setAnimation("seeds"); seeds.scale=0.18; seeds.visible=false
var pillar1,pillar2,pillar3,pillar4,pillar5,pillar6,pillar7,pillar8,pillar9,pillar10;
var lives = 3;
var floor1,floor2,floor3,wall4,keys;
var obstacle1,obstacle2,obstacle3,plant;
var factors  =createSprite(50,50,3,3);
playSound("assets/category_nature/forest_woodland_loop.mp3", true);factors.setAnimation("factors");factors.scale=0.35; factors.visible=false;

function draw() {
  background(0)

  
  drawSprites()
  
   if(level===0){showText();}
  if(level ==1 ){ level1(); 
  textSize(15); fill("red")
  text("Soil",350,360); text("Player",30,135)
  }
  if(level ==2 ){ level2(); 
    textSize(15); fill("violet")
  text("Seeds",340,215); text("Player",30,135)
  }
  if(level==3){level3();
    textSize(15); fill("yellow")
  text("Player",180,365)
  }
  if(level==4){level4();
  textSize(25); fill("white"); stroke("magenta")
     text("YOU WIN",140,80);
    textSize(15); fill("lightblue");
    text(desc3,38,300); text(desc4,38,320); text(desc5,38,340)
  }
  
  if(mousePressedOver(playB)&&level==0){ 
  level = 1; playB.visible=false;  soil.visible = true
  player.visible  =true; createMaze();}
  
  if(mousePressedOver(playB)&&level==1&&player.isTouching(soil)){
   level =2; playB.visible=false; soil.visible = false;
   player.x = 50; player.y=170; destroyMaze();createBlock();}
  
  if(mousePressedOver(playB)&&level==2&&player.isTouching(seeds)){
    level=3; playB.visible=false; seeds.visible = false;
    player.x = 200; player.y=340; destroyBlock(); create(); obstacles()
  }
  
  if(player.isTouching(soil)&&level==1){
    fill(rgb(229, 37, 174))
  textSize(30)
  text("You Win",160,170);
   fill(rgb(193, 106, 193))
   textSize(20)
  text("You got soil for plant. Press 'Play' for level2",20,200);
  playB.visible =true
    
  }
  
  
  if(player.isTouching(seeds)&&level==2){
    fill("pink")
  textSize(30)
  text("You Win",160,170);
   fill("orange")
   textSize(20)
  text("You got seeds also. Press 'Play' for final level",7,200);
    playB.visible =true
  }
  if (player.isTouching(factors)&&level==3) {
    level=4; player.visible=false; destroy();
    factors.visible=false;
     

  }
  
}

function showText(){
textFont("ITALIC");fill("purple")
strokeWeight(1)
textSize(18)
text(desc1,15,120); text(desc2,30,150);
push()
fill("blue")
stroke("green");
strokeWeight(1)
textSize(35)
textFont("BOLD");
text(gText,110,70);
pop()
}

function level1(){
  bg.setAnimation("bg2"); bg.scale = 1;
  if(keyDown("up"))
  {player.y = player.y - 4
  player.setAnimation("player")
  }
   if(keyDown("down"))
  {player.y = player.y + 4
  player.setAnimation("player")
  }
   if(keyDown("right"))
  {player.x = player.x + 4
  player.setAnimation("player2")
  }
   if(keyDown("left"))
  {player.x = player.x - 4
  player.setAnimation("player2")}
  
  createEdgeSprites()
 player.bounceOff(edges); player.bounceOff(block1); player.bounceOff(block2)
 player.bounceOff(block3); player.bounceOff(block4); player.bounceOff(block5)
 player.bounceOff(block6);player.bounceOff(block7); player.bounceOff(block8)
 player.bounceOff(block9); player.bounceOff(block10); player.bounceOff(block11)
 player.bounceOff(block12); player.bounceOff(block13); player.bounceOff(block14)
 player.bounceOff(block15); player.bounceOff(block16); player.bounceOff(block17)
 player.bounceOff(block18); player.bounceOff(block19); player.bounceOff(block20); 
  
}
function level2(){
bg.setAnimation("bg3"); player.setAnimation("player")
seeds.visible=true
if(keyDown("up"))
  {player.y = player.y - 6}
   if(keyDown("down"))
  {player.y = player.y + 6 }
   if(keyDown("right"))
  {player.x = player.x + 6 }
   if(keyDown("left"))
  {player.x = player.x - 6}
  if(player.isTouching(pillar1)||player.isTouching(pillar2)||player.isTouching(pillar3)||player.isTouching(pillar4)||player.isTouching(pillar5)||player.isTouching(pillar7)||player.isTouching(pillar6)||player.isTouching(pillar8))
  {
    player.x = 50; player.y=170;lives= lives-1
  }
  createEdgeSprites()
  player.bounceOff(edges)
}

function destroyMaze(){
block1.destroy();block2.destroy();block3.destroy();block4.destroy();
block5.destroy();block6.destroy();block7.destroy();block8.destroy();
block9.destroy();block10.destroy();block11.destroy();block12.destroy();
block13.destroy();block14.destroy();block15.destroy();block16.destroy();
block17.destroy();block18.destroy();block19.destroy();block20.destroy();
}
function createMaze(){
block1 = createSprite(80,11,15,200);block1.shapeColor =   "yellow"                                             
 block2 = createSprite(80,395,15,350);block2.shapeColor = "yellow"
 block3 = createSprite(145,210,80,15);block3.shapeColor = "yellow"
 block4 = createSprite(142,40,15,70);block4.shapeColor = "yellow"
 block5 = createSprite(177,235,15,60);block5.shapeColor = "yellow"
 block6 = createSprite(110,308,60,15);block6.shapeColor = "yellow"
 block7 = createSprite(240,310,70,15);block7.shapeColor = "yellow"; block7.depth = 50;
 block8 = createSprite(271,390,15,55);block8.shapeColor = "yellow"
 block9 = createSprite(176,352,15,40);block9.shapeColor = "yellow"
 block10= createSprite(281,122,15,58);block10.shapeColor = "yellow"
 block11= createSprite(260,100,40,15);block11.shapeColor = "yellow"
 block12= createSprite(260,215,15,58);block12.shapeColor = "yellow"
 block13= createSprite(385,190,58,15);block13.shapeColor = "yellow"
 block14= createSprite(140,130,58,15);block14.shapeColor = "yellow"
 block15= createSprite(238,250,58,15);block15.shapeColor = "yellow"
 block16= createSprite(385,70,58,15);block16.shapeColor = "yellow"
 block17= createSprite(30,254,60,15);block17.shapeColor = "yellow"
 block18= createSprite(170,43,60,15);block18.shapeColor = "yellow"
 block19= createSprite(354,194,15,60);block19.shapeColor = "yellow"
 block20= createSprite(295,0,15,40);block20.shapeColor = "yellow"
}
function createBlock(){
pillar1 = createSprite(95,50,15,175); pillar1.shapeColor="orange";
pillar2 = createSprite(95,320,15,175);pillar2.shapeColor="orange";
pillar3 = createSprite(165,100,15,205);pillar3.shapeColor="orange"
pillar4 = createSprite(165,360,15,165);pillar4.shapeColor="orange"; pillar4.depth=56;
pillar5 = createSprite(235,25,15,145);pillar5.shapeColor="orange"
pillar6 = createSprite(235,300,15,255);pillar6.shapeColor="orange";pillar6.depth=57;
pillar7=createSprite(305,120,15,250);pillar7.shapeColor="orange"
pillar8  =createSprite(305,380,15,135);pillar8.shapeColor="orange"
}
function destroyBlock(){
pillar1.destroy(); pillar2.destroy(); pillar3.destroy(); pillar4.destroy();
pillar5.destroy(); pillar6.destroy(); pillar7.destroy(); pillar8.destroy();
}
function create(){
  floor1  =createSprite(100,290,400,10); floor1.shapeColor="blue";
  floor2 = createSprite(300,188,400,10); floor2.shapeColor="blue";
  floor3 = createSprite(100,85,400,10); floor3.shapeColor="blue";
  wall4=createSprite(80,30,10,100);
wall4.shapeColor='blue';
keys=createSprite(135,55,2,2); keys.setAnimation("key"); keys.scale=0.5
}
function level3(){
  bg.setAnimation("bg4")
  if(keyDown("up"))
  {player.y = player.y - 4
    player.setAnimation("player")
  }
   if(keyDown("down"))
  {player.y = player.y + 4 
     player.setAnimation("player")
  }
   if(keyDown("right"))
  {player.x = player.x + 4
     player.setAnimation("player")
  }
   if(keyDown("left"))
  {player.x = player.x - 4
     player.setAnimation("player")
  }
  player.scale = 0.2;
  factors.visible=true;
  if(player.isTouching(obstacle1)||player.isTouching(obstacle2)||player.isTouching(obstacle3)){
    player.x=200; player.y = 340;
  }
  if (player.isTouching(keys)) {
  wall4.velocityY=-4;
  keys.destroy();
 }
 
  
  
createEdgeSprites()
  obstacle1.bounceOff(floor1); obstacle1.bounceOff(floor2);
  obstacle2.bounceOff(floor2); obstacle2.bounceOff(floor3);
  obstacle3.bounceOff(floor3); obstacle3.bounceOff(edges);
  player.bounceOff(edges); player.bounceOff(floor1);player.bounceOff(floor2);player.bounceOff(floor3);player.bounceOff(wall4)
}function obstacles(){
  obstacle1 = createSprite(200,205,2,2); obstacle1.setAnimation("obstacle1"); obstacle1.scale = 0.3;
  obstacle2 = createSprite(220,105,2,2); obstacle2.setAnimation("obstacle2-1"); obstacle2.scale=0.11;
  obstacle3 = createSprite(190,4,2,2); obstacle3.setAnimation("obstacle3"); obstacle3.scale=0.3;
obstacle1.velocityY=1;
obstacle2.velocityY=3;
obstacle3.velocityY=-3;
}
function destroy(){
  floor1.destroy(); floor2.destroy(); floor3.destroy();
  obstacle1.destroy(); obstacle2.destroy();obstacle3.destroy();
}
function level4(){
  bg.setAnimation("bg5");
  plant = createSprite(200,170,20,20); plant.setAnimation("plant"); plant.scale=0.5;
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
