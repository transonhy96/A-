function solveMazeAstar(maps,realPath,openSet,closedSet,end,context){
    if(openSet.length > 0){
        var lowestFcostIndex = 0;
        for (let i = 0; i < openSet.length; i++) {
            if(openSet[i].f <  openSet[lowestFcostIndex].f){
                lowestFcostIndex = i;
            }
            if (openSet[i].f == openSet[lowestFcostIndex].f) {
                if (openSet[i].g > openSet[lowestFcostIndex].g) {
                    lowestFcostIndex = i;
                }
            }
        }
        var current = openSet[lowestFcostIndex];
        if( current === end){
            console.log("SOLVED!");
            context.noLoop();        
        }
        else{
            utils.removeFromArr(openSet,current);
            closedSet.push(current);
            var neighbors = utils.checkValidNeighbor(maps,realPath,current);
            for (let i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];
                if(!closedSet.includes(neighbor)){
                    var tempG = current.g + 1 ;
                    if(openSet.includes(neighbor)){
                        if(tempG < neighbor.g){
                            neighbor.g = tempG;
                        }
                    }
                    else{
                        neighbor.g = tempG;
                        openSet.push(neighbor);
                        if(!realPath.includes(neighbor)){
                            realPath.push(neighbor);
                        }
                    }
                    neighbor.h = utils.heuristic(neighbor,end);
                    console.log(utils.heuristic(neighbor,end));
                    neighbor.f = neighbor.g + neighbor.h;
                    console.log(neighbor);
                    neighbor.parent = current;
                }
                
            }           
        }
    }
    var path =[];
    var temp = current;
    path.push(temp);
    while (temp.parent) {
      path.push(temp.parent);
      temp = temp.parent;
    }
    return path;
}
function solveMaze(current,maps,openSet,closedSet,end,context){
        if( current == end){
            console.log("SOLVED!");
            context.noLoop();        
        }
        else{
            utils.removeFromArr(openSet,current);
            closedSet.push(current);
            var neighbors = utils.checkValidNeighbor(maps,realPath,current);
            for (let i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];
                if(!closedSet.includes(neighbor)){
                    var tempG = current.g + 1 ;
                    if(openSet.includes(neighbor)){
                        if(tempG < neighbor.g){
                            neighbor.g = tempG;
                        }
                    }
                    else{
                        neighbor.g = tempG;
                        openSet.push(neighbor);
                        if(!realPath.includes(neighbor)){
                            realPath.push(neighbor);
                        }
                    }
                    neighbor.h = utils.heuristic(neighbor,end);
                    console.log(utils.heuristic(neighbor,end));
                    neighbor.f = neighbor.g + neighbor.h;
                    console.log(neighbor);
                    neighbor.parent = current;
                }
                
            }           
        }
    var path =[];
    var temp = current;
    path.push(temp);
    while (temp.parent) {
      path.push(temp.parent);
      temp = temp.parent;
    }
    return path;
}