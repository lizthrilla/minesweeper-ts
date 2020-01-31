import React from 'react'
import Cell from './Cell'

type Props = {
    board: [],
    cellCheck: () => void,
}
const Gameboard = (Props:any) => {


    const rows = Props.board?.map((row:[], i:number) => {
        console.log(row)
        const cols = row.map((cell:string, j:number) => {
            console.log(cell)
            return (
                <Cell 
                    value={cell.toString()} 
                    key={j} 
                    handleClick={() => Props.cellCheck(j, i)}
                 />
            )
        })
        return <tr key={i}>{cols}</tr>

    })

    return (
        <div>
            <h3>Game</h3>
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}

export default Gameboard
