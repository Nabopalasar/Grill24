import React, {Component} from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import TopMenu from "../topMenu";
import ProductList from "../productList";
import grillData from "../../grillData.json"



const App = () => {

    const data = grillData
    const {shawarma, burgers, hotDog, sandvich, falafel, suluguni, onExit, add} = data

    return (
           <>
               <TopMenu/>
               <ProductList mainTitle="Шаурма" data={shawarma}/>
               <ProductList mainTitle="Хот-Дог" data={hotDog}/>
               <ProductList mainTitle="Бургеры" data={burgers}/>
               <ProductList mainTitle="Сендвичи" data={sandvich}/>
               <ProductList mainTitle="Фалафель" data={falafel}/>
               <ProductList mainTitle="Сулугуни" data={suluguni}/>
               <ProductList mainTitle="Блюда на Вынос" data={onExit}/>
               <ProductList mainTitle="Добавки" data={add}/>
           </>
    )
}

export default App;
