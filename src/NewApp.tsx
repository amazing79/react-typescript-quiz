import React, { useState } from 'react';
import './App.css';

import {Actions} from './assets/js/utils'

import Index from './components/Index/Index'
import GamePanel from './components/GamePanel/GamePanel'
import OptionPanel from './components/OptionPanel/OptionPanel'

const NewApp: React.FC = () => {

    const [actualAction, setActualAction] = useState(Actions.SHOW_INDEX);

    switch(actualAction){
        case Actions.SHOW_GAME:
            return(
                <div className="App">
                    <h1>React Quiz</h1>
                    <GamePanel setAction={setActualAction} />
                </div>
            )
        case Actions.SHOW_OPTIONS:
            return(
                <div className="App">
                    <h1>React Quiz</h1>
                    <OptionPanel setAction={setActualAction}/>
                </div>
            )
        case Actions.SHOW_INDEX:
        default:
            return(
            <div className="App">
                <h1>React Quiz</h1>
                <Index setAction={setActualAction}/>
            </div>
            )
    }
}

export default NewApp
