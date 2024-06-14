type TetrominoShape = number[][];

const Tetrominos:{[key: string]:TetrominoShape} = {

    I:[[1,1,1,1],],
    J:[[0,0,1],[1,1,1],],
    L:[[1,0,0],[1,1,1],],
    O:[[1,1],[1,1]],
    S:[[0,1,1],[1,1,0],],
    T:[[0,1,0],[1,1,1],],
    Z:[[1,1,0],[0,1,1],],
};
export default Tetrominos;