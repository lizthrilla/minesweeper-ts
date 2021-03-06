import React from 'react'

type Props = {
    value: string,
    handleClick: () => void
}
const Cell = (Props:any) => {
    const isEmpty:string = Props.value === ' ' ? 'empty' : 'null';

    return (
        <td onClick={Props.handleClick} className={isEmpty}>
            <p>{Props.value}</p>
        </td>
    )
}

export default Cell