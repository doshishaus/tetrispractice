"use client";

import { useEffect } from "react";
import useTetromino from "../hooks/useTetromino";
import Board from "./Board";
import Tetrominos from "../utils/tetrominos";

const Game: React.FC = () => {
    const { tetromino,position,moveTetromino, rotateTetromino,board} = useTetromino();

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") {
            moveTetromino("left");
        } else if (event.key === "ArrowRight") {
            moveTetromino("right");
        } else if (event.key === "ArrowDown") {
            moveTetromino("down");
        } else if (event.key === "ArrowUp") {
            rotateTetromino();
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            moveTetromino("down");
        },300);

        return () => clearInterval(interval);
    },[moveTetromino]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <Board tetromino={tetromino} position={position} board={board}/>
        </div>
    )
}

export default Game;
