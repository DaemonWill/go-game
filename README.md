# go-game
Go the Board Game created from React

Components:
  Space;
    has stone prop that includes a Stone object
    has onClick prop
  Board;
    has a board prop with a list of Stone objects
    has onClick prop passed to space
  Game:
    handleClick()
    Stone class
    state:
      player - current player (b,w), player assignment for Space;
      board - list of Stone objects

Other Objects:
  Stone:
    player : black, white, null (free)
    neighbors : pointers to other Objects<Stone>
  Player? (maybe just keep a value tracked as bScore, wScore?):
    stoneColor : black, white
    score : Number

Capturing:
  consequence:
    upon capture, a player stone is converted into a free space. For each player stone converted, the enemy's score is addended by 1

  1. A stone is captured when there is no free space or ally stone to it's immediate north, south, east, or west (edge case, the board filled with only that color, needs at least 1 enemy... ignore for now)
  2. If a stone has a neighboring ally stone to the n,s,e,w ; these stones are considered a group.
  3. If while recursing through a group of stones, no free space is discovered (not including the edge case), the entire group is captured.

  psuedo-logic for capturing:
    1. link to a global coordinates object for the current group of stones tracked
    2. add current stone's position to the coordinates object
    3. check if stone has ally neighbor or free space
      i. if no neighbor, and free space not found, return TRUE for captured
      ii. if free space has been found,
      return FALSE for not captured
      iii. if neighbor found AND neighbor's coordinates is not in the tracked object, for each ally of this kind, repeat from *3*
