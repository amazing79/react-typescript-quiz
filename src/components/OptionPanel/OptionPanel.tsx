import React, {useContext, useState} from 'react'
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
    {description: 'Entertainment: Board Games', parameter:"&category=16"},
    {description: 'Science & Nature', parameter:"&category=17"},
    {description: 'Science: Computers', parameter:"&category=18"},
    {description: 'Science: Matematics', parameter: "&category=19"},
    {description: 'Mithology', parameter: "&category=20"},
    {description: 'Sports', parameter: "&category=21"},
    {description: 'Geography', parameter: "&category=22"},
    {description: 'History', parameter: "&category=23"},
    {description: 'Politics', parameter: "&category=24"},
    {description: 'Art', parameter: "&category=25"},
    {description: 'Celebrities', parameter: "&category=26"},
    {description: 'Animals', parameter: "&category=27"},
    {description: 'Vehicles', parameter: "&category=28"},
    {description: 'Entertainment: Comics', parameter: "&category=29"},
    {description: 'Science: Gadgets', parameter: "&category=30"},
    {description: 'Entertainment: Japanese Anime & Manga', parameter: "&category=31"},
    {description: 'Entertainment: Cartoon & Animations', parameter: "&category=32"}
];
const difficultys = [
    {description: 'Any', parameter: ''},
    {description: 'Easy', parameter: "&difficulty=easy"},
    {description: 'Medium', parameter: "&difficulty=medium"},
    {description: 'Hard', parameter: "&difficulty=hard"}
];

const quizTypes = [
    {description: 'Mixto', parameter: ''},
    {description: 'Multiple', parameter: "&type=multiple"},
    {description: 'Verdadero/Falso', parameter: "&type=boolean"},
];

const OptionPanel = (props:any) => {

    const myContext = useContext(SettingContext);
    const [userConfig, setUserConfig ] = useState(Object.assign({}, myContext.setting));
   
    const _updateConfig = (value:{}) => {
        setUserConfig(value);
    }

    const _saveConfiguration = () => {
        myContext.updateSettings(userConfig);
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
