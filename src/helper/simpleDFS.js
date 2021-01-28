import { initializeMatrix, findNeighbors } from './common';

function DFSUtil(matrix, visited, i,j) {
  visited[i][j] = true;
  let neighbors = findNeighbors(matrix, visited, i,j);
  if (neighbors.length === 0){
    return;
  }
  DFSUtil(matrix,visited, neighbors[0], neighbors[1]);
}
export default function simpleDFS(height,width){
  let matrix = [];
  let visited = [];
  
  initializeMatrix(matrix, visited, height, width);

  for (let i = 0; i < height; i++ ){
    for (let j = 0; j < width;j++ ) {
      if (!visited[i][j] && !matrix[i][j])
        DFSUtil(matrix,visited, i,j);
    }
  }
  return matrix;

}

