import React, { useState } from "react";
import Tetrominos from "../utils/tetrominos";

const useTetromino = () => {
    let currentTetromino;
    const [tetromino, setTetromino] = useState(Tetrominos["J"]);
    const [position, setPosition] = useState({ x: 4, y: 0 });
    const [board, setBoard] = useState(Array.from({ length: 20 }, () => Array(10).fill(0)));

    const moveTetromino = (dir) => {
        const newPosition = { ...position };
        if (dir === "left") {
            newPosition.x -= 1;
        }
        if (dir === "right") {
            newPosition.x += 1;
        }
        if (dir === "down") {
            newPosition.y += 1;
        }
        console.log("動いてる？",newPosition);

        if (!checkCollision(tetromino, newPosition, board)) {
            setPosition(newPosition);
        } else if (dir === "down") {
            placeTetromino();
            resetTetromino();
        }
    };

    const rotateTetromino = () => {
        const rotateMatrix = (matrix) => {
            const m = matrix.length;
            const n = matrix[0].length;
            const result = Array.from({length:n},() => Array(m).fill(0));
            for(let i=0;i<m;i++){
                for (let j = 0; j < n; j++) {
                    result[j][m-1-i] = matrix[i][j];
                }
            }
            console.log(result);
            return result;
        };
        const rotatedTetromino = rotateMatrix(tetromino);

        if (!checkCollision(rotateTetromino, position, board)) {
            currentTetromino = rotateTetromino;
            setTetromino(rotatedTetromino);
        }

    };

    const checkCollision = (tetromino, position, board) => {
        for (let y = 0; y < tetromino.length; y++) {
            for (let x = 0; x < tetromino[y].length; x++) {
                if (tetromino[y][x] !== 0) {
                    if (
                        board[y + position.y] && board[y + position.y][x + position.x] !== 0
                    ) {
                        return true;
                    }
                    if (y + position.y >= board.length || x + position.x < 0 || x + position.x >= board[0].length) {
                        return true;
                    }
                }

            }
        }
        return false;
    }

    const placeTetromino = () => {
        const newBoard = board.map(row => row.slice());
        tetromino.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    newBoard[y + position.y][x + position.x] = value;
                }
            });
        });
        setBoard(newBoard);
    }
    const resetTetromino = () => {
        const tetrominoKeys = Object.keys(Tetrominos);
        const randomTetromino = tetrominoKeys[Math.floor(Math.random() * tetrominoKeys.length)];
        setTetromino(Tetrominos[randomTetromino]);
        setPosition({ x: 4, y: 0 });
    }
    return { tetromino, position, moveTetromino, rotateTetromino ,board};
};

export default useTetromino;

// function checkCollision(tetromino: number[][], NewPosition: any, board: number[][]) {
//     throw new Error("Function not implemented.");
// }

