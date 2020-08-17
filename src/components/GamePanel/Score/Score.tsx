import React from 'react'
import './Score.css'

type Props = {
    fine:number
}

const Score:React.FC<Props> = ({fine}) => {
    return (
        <div className="score-container">
            <h2>Score: {fine}</h2>
        </div>
    )
}

export default Score

