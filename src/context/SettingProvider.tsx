import React, {useState} from 'react'

import {Difficulty , Category, TypeQuiz, settingObject} from '../assets/js/utils'

export const SettingContext = React.createContext<any>({});
/*
con este provider, vamos a permitir al usuario poder usar una configuracion, entre ellas
category: any, o algunas que mostraremos. 
type: any, multiple, true/false
Para ello, vamos a crear un objeto tipo setting, el cual almacenara la configuración actual y con ella pedira las preguntas.
*/
const settingTemplate:settingObject = { 
    category: Category.ANY,
    difficulty: Difficulty.ANY,
    type: TypeQuiz.ANY
}

const SettingProvider = (props:any) => {

    const [ setting, setSetting ] = useState<settingObject>(Object.assign({},  settingTemplate));

    const getConfiguration = ():string => {
        return `${setting.category}${setting.difficulty}${setting.type}`;
    }

    const updateSettings = (newConfig:settingObject) => {
        setSetting(newConfig);
    }

    return (
        <SettingContext.Provider value={{setting, updateSettings, getConfiguration }}>
            {props.children}
        </SettingContext.Provider>
    )
}

export default SettingProvider
