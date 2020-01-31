import React from 'react'
import Cell from './Cell'

const Gameboard = () => {
    return (
        <div>
            <h3>Game</h3>
            <table>
                <tbody>
                    <tr>
                        <Cell />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Gameboard
