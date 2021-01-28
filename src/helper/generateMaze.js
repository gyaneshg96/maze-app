function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}

function findNeighbor(matrix, i,j){
  let list = [];
  if (i-2 >= 0 && !matrix[i-2][j]) list.push([i-2,j]);
  if (j-2 >= 0 && !matrix[i][j-2]) list.push([i,j-2]);
  if (i+2 < matrix.length && !matrix[i+2][j]) list.push([i+2,j]);
  if (j+2 < matrix[0].length && !matrix[i][j+2]) list.push([i,j+2]);
  /*if (i+1 < matrix.length && j+1 < matrix[0].length && !matrix[i+1][j+1]) list.push([i+1,j+1]);
  if (i+1 < matrix.length && j-1 >= 0 && !matrix[i+1][j-1]) list.push([i+1,j-1]);
  if (i-1 >= 0 && j+1 < matrix[0].length && !matrix[i-1][j+1]) list.push([i-1,j+1]);
  if (i-1 >= 0 && j-1 <= 0 && !matrix[i-1][j-1]) list.push([i-1,j-1]);*/

  let randneighbor = list[Math.floor(Math.random()*list.length)];
  if (randneighbor[0] === i-2){
    matrix[i-1][j] = false;
  }
  if (randneighbor[0] === i+2){
    matrix[i+1][j] = false;
  }
   if (randneighbor[1] === j-2){
    matrix[i][j-1] = false;
  }
   if (randneighbor[1] === j+2){
    matrix[i][j+1] = false;
  }
}


function findFrontier(matrix, i,j){
  let list = [];
  if (i-2 >= 0 && matrix[i-2][j]) list.push([i-2,j]);
  if (j-2 >= 0 && matrix[i][j-2]) list.push([i,j-2]);
  if (i+2 < matrix.length && matrix[i+2][j]) list.push([i+2,j]);
  if (j+2 < matrix[0].length && matrix[i][j+2]) list.push([i,j+2]);
  /*if (i+1 < matrix.length && j+1 < matrix[0].length && matrix[i+1][j+1]) list.push([i+1,j+1]);
  if (i+1 < matrix.length && j-1 >= 0 && matrix[i+1][j-1]) list.push([i+1,j-1]);
  if (i-1 >= 0 && j+1 < matrix[0].length && matrix[i-1][j+1]) list.push([i-1,j+1]);
  if (i-1 >= 0 && j-1 <= 0 && matrix[i-1][j-1]) list.push([i-1,j-1]);*/
  return list;  
}
function union(setA, setB) {
    let _union = new Set(setA)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

export default function randomizedPrim(height,width){
  let matrix = [];
  for (let i = 0;i < height; i++){
    let row = [];
    for (let j = 0; j < width;j++){
      row.push(true);
    }
    matrix.push(row);
  }

  let frontier_cells = []
  console.log(matrix, height, width);
  
  let a = Math.floor(Math.random()*height)
  let b = Math.floor(Math.random()*width)
  matrix[a][b] = false;
  // matrix[height - 1][width - 1] = false;

  let arr = findFrontier(matrix, a,b);
  frontier_cells.push(...arr);
  // frontier_cells.push([2,0]);
  // frontier_cells.push([1,1]);

  while(frontier_cells.length > 0){
    let l = frontier_cells.length; 
    
    //pick random frontier cells
    let randwall = frontier_cells[Math.floor(Math.random()*l)];
    
    removeElement(frontier_cells, randwall);
    matrix[randwall[0]][randwall[1]] = false;
    
    console.log(frontier_cells, randwall);
    //find random passage neighbor
    findNeighbor(matrix, randwall[0], randwall[1])
     
    let frontiers = findFrontier(matrix, randwall[0], randwall[1]);

    let set = union(new Set(frontier_cells), new Set(frontiers));
    
    frontier_cells = Array.from(set)
  }
  return matrix;
}