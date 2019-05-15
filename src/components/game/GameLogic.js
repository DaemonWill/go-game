class GameLogic{
  /*
  * Given a recently placed stone, check to see if any adjacent enemy stone groups
  * would be captured from this placement
  * @params {Object <Stone>}
  * @returns {Array <Number[]>} - return group of enemy stones
  */
  captureStones(stone){
    let player = stone.getPlayer();
    let enemy = (player == "black") ? "white" : "black";
    let coordinates = [];
    //check each adjacent stone for enemies
    let neighbors = stone.getNeighbors();
    for(let n in neighbors){
      if(neighbors[n] && neighbors[n].getPlayer() == enemy){
        let capturedGroup = this.captureGroup(neighbors[n]);
        for(let s in capturedGroup){
          console.log("capturedGroup has stones")
          console.log(capturedGroup[s]);
          if(!coordinates.includes(capturedGroup[s].getCoordinates())){
            coordinates.push(capturedGroup[s].getCoordinates());
          }
        }
      }
    }
    return coordinates;
  }

  /*
  * Check if a group of enemy stones are captured
  * @param {Object <Stone>}
  * @return {Object} - general object with props equal to the stone objects that have been tracked
  */
  captureGroup(stone){
    //groups with an escape can't be captured
    if(stone.hasEscape()){
      return [];
    }
    let player = stone.getPlayer();
    let current = stone;
    let hasEscape = false;
    let capturedGroup = {};
    let queue = [];
    while(current){
      console.log("in while loop");
      console.log(current);
      if(!capturedGroup[current.getId()]){
        capturedGroup[current.getId()] = current;
        console.log("Adding current to capturedGroup");
        console.log(capturedGroup);
      }
      let neighbors = current.getNeighbors();
      for(let n in neighbors){
        console.log("in neighbors loop for current");
        console.log(neighbors[n].getPlayer());
        if(neighbors[n] && neighbors[n].getPlayer() == player){
          if(neighbors[n].hasEscape()){
            console.log("neighbor has escape");
            return [];
          }
          if(!capturedGroup[neighbors[n].getId()]){
            console.log("pushing to queue");
            queue.push(neighbors[n]);
          }
        }
      }
      console.log("reassigning current");
      current = queue.shift();
      console.log(current);
      console.log(capturedGroup);
    }
    return capturedGroup;
  }
}

export default GameLogic;
