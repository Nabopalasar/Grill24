import React from 'react';

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
import { createBrowserHistory } from "history";

const App = () => {


    const data = grillData
    const {shawarma, burgers, hotDog, sandvich, falafel, suluguni, onExit, add} = data

    let History = createBrowserHistory();

    return (
        <>
            <Router history={History}>
                <TopMenu/>
                <Route exact path='/'>
                    <ProductList mainTitle="Шаурма" data={shawarma}/>
                    <ProductList mainTitle="Хот-Дог" data={hotDog}/>
                    <ProductList mainTitle="Бургеры" data={burgers}/>
                    <ProductList mainTitle="Сендвичи" data={sandvich}/>
                    <ProductList mainTitle="Фалафель" data={falafel}/>
                    <ProductList mainTitle="Сулугуни" data={suluguni}/>
                    <ProductList mainTitle="Блюда на Вынос" data={onExit}/>
                    <ProductList mainTitle="Добавки" data={add}/>
                </Route>
                <Route path='/shawarma'>
                    <ProductList mainTitle="Шаурма" data={shawarma}/>
                </Route>
                <Route path='/hotDog'>
                    <ProductList mainTitle="Хот-Дог" data={hotDog}/>
                </Route>
                <Route path='/burgers'>
                    <ProductList mainTitle="Бургеры" data={burgers}/>
                </Route>
                <Route path='/sandvich'>
                    <ProductList mainTitle="Сендвичи" data={sandvich}/>
                </Route>
                <Route path='/falafel'>
                    <ProductList mainTitle="Фалафель" data={falafel}/>
                </Route>
                <Route path='/suluguni'>
                    <ProductList mainTitle="Сулугуни" data={suluguni}/>
                </Route>
                <Route path='/onExit'>
                    <ProductList mainTitle="Блюда на Вынос" data={onExit}/>
                </Route>
                <Route path='/add'>
                    <ProductList mainTitle="Добавки" data={add}/>
                </Route>

            </Router>
        </>
    )
}

export default App;
