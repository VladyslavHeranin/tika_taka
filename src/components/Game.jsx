import React, { useState } from 'react'
import { Border } from "./border"
import { calculateWinner } from '../winner'


export const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)


    const handleClick = (index) => {
        const boardCopy = [...board]

        if (winner || boardCopy[index]) return

        boardCopy[index] = xIsNext ? 'X' : 'O'

        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }


    const startNewGame = () => {
        return (
            <button className="start" onClick={() => setBoard(Array(9).fill(null))}>
                clear field </button>
        )
    }

    return (
        <div>
            {startNewGame()}
            < Border squares={board} click={handleClick} />
            <p className="info">
                {winner ? 'winner ' + winner : 'walks ' + (xIsNext ? ':X' : ':O')}
            </p>
        </div>
    )
}



