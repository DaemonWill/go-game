export class Stone {
  //private field declarations
  #player;
  #coordinates; //array -> [x,y]
  //pointers to neighbor stones
  #neighbors = {
    north : null,
    south : null,
    east : null,
    west : null
  };

  constructor(x,y){
    this.#coordinates = [x,y];
  };

  /*
  * check to see if the given stone has an open space as a neighbor
  * @returns {boolean} - true if empty neighbor exists
  */
  hasEscape(){
    let escape = false;
    for(let n in this.#neighbors){
      if(this.#neighbors[n] && !this.#neighbors[n].#player){
        escape = true;
        break;
      }
    }
    return escape;
  }

  //getters
  getPlayer(){
    return this.#player;
  };
  getNeighbors(){
    return this.#neighbors;
  };
  getCoordinates(){
    return this.#coordinates;
  };

  //setters
  setPlayer(player){
    this.#player = player;
  };
  setCoordinates(coordArray){
    this.#coordinates = coordArray;
  };
  //input should be of type Object<Stone>, if null: leave as is
  setNeighbors(n,s,e,w){
    this.#neighbors = {
      north : (n) ? n : this.#neighbors.north,
      south : (s) ? s : this.#neighbors.south,
      east : (e) ? e : this.#neighbors.east,
      west : (w) ? w : this.#neighbors.west
    };
  };
};

export default Stone;
