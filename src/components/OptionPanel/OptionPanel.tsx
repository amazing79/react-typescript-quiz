import React, {useContext} from 'react'
import './OptionPanel.css'
import {Actions} from '../../assets/js/utils'

import {SettingContext} from '../../context/SettingProvider'

const categorys = [
    {description: 'Any', parameter: ''},
    {description: 'General', parameter: "&category=9"},
    {description: 'Entertainment: Books', parameter:"&category=10"},
    {description: 'Entertainment: Films', parameter:"&category=11"},
    {description: 'Entertainment: Music', parameter:"&category=12"},
    {description: 'Entertainment: Musical And Theatres', parameter:"&category=13"},
    {description: 'Entertainment: Television', parameter:"&category=14"},
    {description: 'Entertainment: Video Games', parameter:"&category=15"},
    {description: 'Science: Computers', parameter:"&category=18"},
    {description: 'Science: Matematics', parameter: "&category=19"},
    {description: 'Mithology', parameter: "&category=20"},
    {description: 'Sports', parameter: "&category=21"},
    {description: 'Geography', parameter: "&category=22"},
    {description: 'History', parameter: "&category=23"}
];
const difficultys = [
    {description: 'Any', parameter: ''},
    {description: 'Easy', parameter: "&difficulty=easy"},
    {description: 'Medium', parameter: "&difficulty=medium"},
    {description: 'Hard', parameter: "&difficulty=hard"},
];

const quizTypes = [
    {description: 'Mixto', parameter: ''},
    {description: 'Multiple', parameter: "&type=multiple"},
    {description: 'Verdadero/Falso', parameter: "&type=boolean"},
];

const OptionPanel = (props:any) => {

    const myContext = useContext(SettingContext);
    const userConfig = myContext.setting; 
   
    const _updateConfig = (value:{}) => {
        myContext.updateSettings(value);
    }

    const _saveConfiguration = () => {
        props.setAction(Actions.SHOW_INDEX)
    }
    return (
        <div className="OptionPanel-container">
            <h2>Configuracion de Quiz React</h2>
            <label htmlFor="category">Categoria: </label>
            <select name="category" value={userConfig.category} onChange={(e) => _updateConfig({...userConfig, category: e.target.value})}>
                {
                    categorys.map( (aCategory, idx)  => {
                            return (<option value={aCategory.parameter} key={idx}>{aCategory.description}</option>)
                        })
                }
            </select><br />
            <label htmlFor="type">Tipo Quiz: </label>
            <select name="type" value={userConfig.type} onChange={(e) => _updateConfig({...userConfig, type: e.target.value})}>
                {
                    quizTypes.map( (aQuizType, idx)  => {
                            return (<option value={aQuizType.parameter} key={idx}>{aQuizType.description}</option>)
                        })
                }
            </select><br />
            <label htmlFor="difficulty">Dificultad: </label>
            <select name="difficulty" value={userConfig.difficulty} onChange={(e) => _updateConfig({...userConfig, difficulty: e.target.value})}>
                {
                    difficultys.map( (aDifficulty, idx)  => {
                            return (<option value={aDifficulty.parameter} key={idx}>{aDifficulty.description}</option>)
                        })
                }
            </select><br />
            <div>
                <button className="options" onClick={() => props.setAction(Actions.SHOW_INDEX)}>Regresar</button>
                <button className="options" onClick={() => _saveConfiguration()}>Guardar</button>
            </div>
        </div>
    )
}

export default OptionPanel
