import React from 'react';
import Cell from './Cell';

type BoardProps = {
    tetromino:number[][];
    position: {x:number,y:number};
    board:number[][];
}

const Board: React.FC<BoardProps> = ({tetromino,position,board}) => {
    if(!board){
        return <div>reading...</div>;
    }
    const rows = board.map(row => [...row]);

    tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                rows[y + position.y][x + position.x] = value;
            }
        });
    });
    console.log("画面更新を反映できてる？",position);

    return (
        <div className='grid grid-rows-20 grid-cols-10 gap-1 bg-gray-800 p-2'>
            {rows.map((row, rowIndex) => (
                <React.Fragment key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <Cell key={cellIndex} value={cell} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    );


}

export default Board;