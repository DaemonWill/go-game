export class Stone {
  //private field declarations
  #player;
  //pointers to neighbor stones
  #neighbors = {
    north : null,
    south : null,
    east : null,
    west : null
  };

  //getters
  getPlayer(){
    return this.#player;
  };
  getNeighbors(){
    return this.#neighbors;
  };

  //setters
  setPlayer(player){
    this.#player = player;
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
