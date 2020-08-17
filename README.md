## React Quiz con Typescript

Proyecto realizado siguiendo el siguiente tutorial de como crear [Quiz App With React TypeScript](https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react-and-typescript/). Si bien sigue las convenciones del tutorial, se hicieron modificaciones para hacer el código mas limpio. Entre ellas:

- Se crearon todos los tipos necesarios en el archivo util.ts, los cuales luego se importaran según fuera el caso. 
- Para facilitar la lógica, se creo el tipo enumerado GameStatus
- Se opto por poner la función que mezcla las preguntas, en la misma API. 
- No se usa styled-components. En su defecto, opte por usar CSS puro en cada componente pero reutilizando sus reglas. 

## Scripts Disponibles

Para instarlo y probarlo, una vez descargado el proyecto, en el directorio del proyecto usar

### `npm install start`

Esto instalará todas las librerias necesarias. Luego probarlo con 

### `yarn start`
o
### `npm run start`
Se debe abrir un navegador con el proyecto.<br />
De no ser así, abre [http://localhost:3000](http://localhost:3000) para visualizaro en tu navegador.

### Algunos cambios

Para darlos unos toques mas a la App, se agrego la opción de que el usuario pueda elegir el tipo de Quiz, Topic y dificultad. Notar que algunas combinaciones no traen preguntas.

finalmente, si queres ver como quedo, [probalo online](https://react-typescript-quiz.vercel.app/)

