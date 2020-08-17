import React from 'react'

import {Actions} from '../../assets/js/utils'

const Index = (props:any) => {
    return (
        <div className="app-btn-panel">
        <button className="start" onClick={() => props.setAction(Actions.SHOW_GAME)}>
            Start
        </button>
        <button className="options" onClick={() => props.setAction(Actions.SHOW_OPTIONS)}>
            Settings
        </button>
    </div>
    )
}

export default Index
