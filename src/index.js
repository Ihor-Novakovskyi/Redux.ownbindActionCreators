import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import * as Actions from './actionsReducer';
import { configureStore, bindActionCreators } from '@reduxjs/toolkit';
// import { reducer, preloadedState } from './reducer';
import { reducer, preloadedState } from './reducer';
import actionDispatchBinder from './ownActionBinder';
import './chatGptApi';

// const { changeName, changeAge, changeSecond } = actionDispatchBinder(Actions, dispatch);

const store = configureStore({ reducer, preloadedState })
const { dispatch, getState, subscribe } = store;
const { changeName, changeAge, changeSecond } = bindActionCreators(Actions, dispatch)
const name = document.querySelector('.name');
const secondName = document.querySelector('.second');
const age = document.querySelector('.age');
const enter = document.querySelector('.input');
const nameContainer = document.querySelector('.name-container');
const secondContainer = document.querySelector('.secondName-container');
const ageContainer = document.querySelector('.age-container');

name.addEventListener('click', () => {
    changeName(enter.value );
    const currentData = getState().name
    console.log(currentData, getState())
    nameContainer.innerHTML = currentData;
})
secondName.addEventListener('click', () => {
    changeSecond( enter.value )
    const currentData = getState().secondName
    console.log(currentData, store.getState())
    secondContainer.innerHTML = currentData;
})
age.addEventListener('click', () => {
    changeAge(enter.value);
    const currentData = getState().age
    console.log(currentData, store.getState())
    ageContainer.innerHTML = currentData;
})

// subscribe() функция которая добавляет обработчик к объекту Store и он будет запускаться когда dispatch будет менять состояние об
//объекта store "state". subscribe будет подписывать каждый раз добавляемый обработчик не заменяя предыдущий.Поэтому количество запускаем
// мых обработчиков будет равно количеству раз когда они было добавлены и соответствующей последовательности
// В контексте слушателей события мы рассматрвиаем функцию, которую запускает для того чтоб было зарегестрировано 
// событие и она запустила свои обработчики.Так вот describe добавляет еще и слушатель, даже если логику слушателя на самом деле выполняет 
// dispatch, мі всеравно рассматриваем все в одной реализации хотя под капотом єто может иметь разное выполенение.
function App() {
    const [{ name, secondName, age }, setData] = useState(getState());
    const [enteringData, setEnteringData] = useState('');
    useMemo(() => subscribe(() => { 
        setData(getState());
        console.log(getState())
    }), [])
    function change(e) {
        switch (e.target.className) {
            case 'change-name':
                changeName(enteringData);
                // setData((prev) => ({ ...prev, name: enteringData }))
                return;
            case 'change-secondName':
                changeSecond(enteringData);
                // setData((prev) => ({ ...prev, secondName: enteringData }));
                return;
            case 'change-age':
                changeAge(enteringData);
                // setData((prev) => ({ ...prev, age: enteringData }));
                return;

        }
    }
    return (
        <>
            <input className='inputReact' type="text" onChange={ (e) => setEnteringData(e.target.value) } value={ enteringData } />
            <input type="text" defaultValue={ name } />
            <button className='change-name' onClick={change}>name change</button>
            <input type="text" defaultValue={ secondName } />
            <button className='change-secondName' onClick={change}>second name Change</button>
            <input type="text" defaultValue={ age } />
            <button className='change-age' onClick={change}>age change</button>
            <button onClick={() => console.log(getState())}>show redux object State</button>

        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
