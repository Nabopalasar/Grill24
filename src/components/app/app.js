import React from 'react';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import grillData from "../../grillData.json"
import TopMenu from "../topMenu";
import ProductList from "../productList";
// import { createBrowserHistory } from "history";
import Footer from "../footer";
import Delivery from "../delivery";

//Main App
const App = () => {
    // получает данные из grillData.json
    const data = grillData
    // деструктрурируем обьект
    const {shawarma, burgers, hotDog, sandvich, falafel, suluguni, onExit, add} = data

    // получает историю от браузера
    // let History = createBrowserHistory();

    return (
        // App
        <>
            <Router>
                {/*App Menu*/}
                <TopMenu/>
                {/*обертка необходимая для того чтобы зафиксировать footer снизу окна*/}
                <div style={{minHeight: "calc(100vh - 300px)", paddingTop: "60px"}}>
                    {/*Home Page включает в себя все компоненты меню*/}
                    <Route exact path='/'>
                        <ProductList mainTitle="Шаурма" data={shawarma}/>
                        <ProductList mainTitle="Хот-Дог" data={hotDog}/>
                        <ProductList mainTitle="Бургеры" data={burgers}/>
                        <ProductList mainTitle="Сендвичи" data={sandvich}/>
                        <ProductList mainTitle="Фалафель" data={falafel}/>
                        <ProductList mainTitle="Сулугуни" data={suluguni}/>
                        <ProductList mainTitle="Блюда на Вынос" data={onExit}/>
                        {/*<ProductList mainTitle="Добавки" data={add}/>*/}
                    </Route>
                    {/*Компоненты подвязанные к App Menu*/}
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
                    <Route path='/delivery'>
                        <Delivery/>
                    </Route>

                </div>
                {/*Footer*/}
                <Footer/>
            </Router>
        </>
    )
}

export default App;
