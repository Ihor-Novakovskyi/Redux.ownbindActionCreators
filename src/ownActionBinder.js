function actionDispatchBinder(actions, dispatch) { 
    const binderObject = {};
    for (let nameAction in actions) { 
        const action = actions[nameAction];
        binderObject[nameAction] = (valueActions) => { 
            // dispatch({...action(), ...valueActions})
            dispatch({...action(valueActions), })
        }
    }
    console.log(binderObject)
    return binderObject;
}
export default actionDispatchBinder;