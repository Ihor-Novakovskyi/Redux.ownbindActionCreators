function actionDispatchBinder(actions, dispatch) { 
    const binderObject = {};
    for (let nameAction in actions) { 
        const action = actions[nameAction];
        binderObject[nameAction] = (valueActions) => { 
            dispatch({...action(valueActions), })
        }
    }
    return binderObject;
}
export default actionDispatchBinder;