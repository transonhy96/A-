var cols, rows;
var maps = [];
var current; 
var backtrackStack = [];
var button,greeting,btnSubmit,btnStop;
var openSet = [];
var start,end;
var roboto;
var config = {
  mazeSize : 1270,
  w:60,
  offset:910,
  lineStroke:6,
  allowSolve : false,
  moreSolution:false,
  isShowCoordinate:true,
  speed : 1,
  loop : true
}
function preload() {
  roboto = loadFont('assets/RobotoMono-Light.ttf');
}
function setup() {
  createCanvas(config.mazeSize, config.mazeSize);
  textFont(roboto);
  button = createButton('Toggle coordinates');
  button.style('font-family',"RobotoMono-Light");
  button.style('padding', '5px');
  button.style('border-radius', '4px');
  button.position(19, 19);
  button.mousePressed(hideCoordinate);
  input = createInput();
  input.style('padding', '5px');
  input.style('border-radius', '4px');
  input.position(19, 100);
  input.value(config.speed);

  

  greeting = createElement('h4', 'Change speed (Action/second)');
  greeting.style('font-size', '18px');
  greeting.style('font-family',"RobotoMono-Light");
  greeting.style('color', '#fff');
  greeting.position(19, 50);

  btnSubmit = createButton('Submit');
  btnSubmit.style('font-family',"RobotoMono-Light");
  btnSubmit.style('padding', '2px');
  input.style('border-radius', '4px');
  btnSubmit.position(input.x + input.width + 10, 102);
  btnSubmit.mousePressed(changeSpeed);

  btnStop = createButton('Stop');
  btnStop.style('font-family',"RobotoMono-Light");
  btnStop.position(19, 130);
  btnStop.mousePressed(stopLoop);

  frameRate(config.speed);

  textAlign(CENTER);
  textSize(20);

  cols = rows = mazeData.length;
  for (let x= 0; x < cols; x++) {
    maps[x] = new Array(rows);
  }
  for(let i = 0;i<cols;i++){
    for(let j=0;j<rows;j++){
      var data = mazeData[i][j];
      maps[i][j] = new Cell(i,j,data.visited,data.walls);
    }
  }
  start = maps[0][0];
  end = maps[0][cols-1];
  current = start;
  openSet.push(current);
}

function draw() {
    background(51);
    textSize(22);
    fill(255);
    text(`Fps :${ getFrameRate()}`, 1200, 30);
    for(let i = 0;i<cols;i++){
      for(let j=0;j<rows;j++){
          maps[i][j].show(config.isShowCoordinate);
      }
    }
    var nextActions = utils.getNextActions(maps,backtrackStack,current);
      nextActions.forEach(n => {
      n.highLight(color(0,255,0),config.offset);
    });
    var r = floor(random(0, nextActions.length));
    var next = nextActions[r];
    console.log(next);
    if(next==end){
      noLoop();
    }
    else{
      if(next){
        backtrackStack.push(next);
      }
      else{
        next = backtrackStack.push(next);
      }
    }
}
function hideCoordinate(){
  config.isShowCoordinate = !config.isShowCoordinate;
}
function changeSpeed(){
  frameRate(parseInt(input.value()));
  setFrameRate(parseInt(input.value()));
}
function stopLoop(){
  config.loop = ! config.loop;
  if(config.loop){
    Loop();
  }
  else{
    noLoop();
  }
}
