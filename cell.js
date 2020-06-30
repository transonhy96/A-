class Cell {
    constructor(i,j,_visited,_walls) {
      this.i = i;
      this.j = j;
      this.distanceFromFather = 0;
      this.parent = undefined;
      this.g = 0;
      this.h = 0;
      this.f = 0;
      if(_visited){
        this.visited = _visited;
      }
      else{
        this.visited = false;
      }
      if(_walls){
        this.walls = _walls;
      }
      else{
        this.walls =[true,true,true,true];;
      }
    }
    highLight(color,offset){
  
      var x = this.i * config.w + offset/2;
      var y = this.j * config.w + offset/2;
      fill(color);
      noStroke();
      rect(x,y,config.w - 1,config.w -1);
  
    }
    
    checkNeighbors(maps){
      var neighbors = [];
      var i = this.i;
      var j = this.j;
      if(i < cols -1 )
      {
          var top  = maps[i+1][j];
          if(!top.visited){
            neighbors.push(top);
          }
          
      }
      if(i > 0)
      {
         var right = maps[i-1][j];
         if(!right.visited){
          neighbors.push(right);
         }
          
      }
      if(j < rows -1)
      {
        var bottom = maps[i][j+1];
        if(!bottom.visited){
         neighbors.push(bottom);
        }
      }
      if(j > 0)
      {
        var left = maps[i][j-1];
        if(!left.visited){
         neighbors.push(left);
        }
      }
      if(neighbors.length > 0){
        var r = floor(random(0, neighbors.length));
        return neighbors[r];
      }
      else{
        return undefined;
      }
    }
    getNextActions(maps){
      var neighbors = [];
      var i = this.i;
      var j = this.j;

      if(i < cols -1 )
      {
          var top  = maps[i+1][j];
          if(!top.visited){
            neighbors.push(top);
          }
          
      }
      if(i > 0)
      {
         var right = maps[i-1][j];
         if(!right.visited){
          neighbors.push(right);
         }
          
      }
      if(j < rows -1)
      {
        var bottom = maps[i][j+1];
        if(!bottom.visited){
         neighbors.push(bottom);
        }
      }
      if(j > 0)
      {
        var left = maps[i][j-1];
        if(!left.visited){
         neighbors.push(left);
        }
      }
      return neighbors;
    }
    show(isShowCoordinate){
      var xCor = this.i * config.w + config.offset/2;
      var yCor = this.j * config.w + config.offset/2;
      stroke(255);
      strokeWeight(config.lineStroke);
      if(this.walls[CellSide.TOP]){
        line(xCor, yCor, xCor + config.w, yCor);
      }
      if(this.walls[CellSide.RIGHT]){
        line(xCor + config.w, yCor, xCor + config.w , yCor + config.w);
      }
      if(this.walls[CellSide.BOTTOM]){
        line(xCor + config.w, yCor + config.w, xCor, yCor + config.w);
      }
      if(this.walls[CellSide.LEFT]){
        line(xCor, yCor + config.w, xCor , yCor);
      }
      if(this.visited){
        noStroke();
        if(isShowCoordinate){
          textSize(16);
          fill(255);
          text(`${this.i}:${this.j}`, xCor + (config.w/2) , yCor + (config.w/2)+6);
        }
        fill(255,0,255,100);
        rect(xCor, yCor, config.w-1, config.w-1);
      }
      
    }
  }