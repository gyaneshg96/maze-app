export function initializeMatrix(matrix, visited, height, width){
 for (let i = 0;i < height; i++){
    let row1 = [];
    let row2 = [];
    for (let j = 0; j < width;j++){
      row2.push(false);
      if (Math.abs((i-1)*(j-1)) % 2 === 1)
        row1.push(false);
      else
        row1.push(true);
    }
    matrix.push(row1);
    visited.push(row2);
  }
}


export function findNeighbors(matrix, visited,i,j) {
  let list = [];
  if (i-2 >= 0 && !matrix[i-2][j] && !visited[i-2][j] ) list.push([i-2,j]);
  if (j-2 >= 0 && !matrix[i][j-2] && !visited[i][j-2] ) list.push([i,j-2]);
  if (i+2 < matrix.length && !matrix[i+2][j] && !visited[i+2][j] ) list.push([i+2,j]);
  if (j+2 < matrix[0].length && !matrix[i][j+2] && !visited[i][j+2] ) list.push([i,j+2]);

  if (list.length === 0){
    return [];
  }
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

  return randneighbor;
}