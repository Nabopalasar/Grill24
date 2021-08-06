import React from "react";
import {Menubar} from "primereact/menubar";
import {Link} from 'react-router-dom';


const TopMenu = () => {
    const items = [
        {
            label:'Меню',
            icon:'pi pi-fw pi-file',
        },
        {
            label:'Шаурма',
            icon:'pi pi-fw pi-pencil',
        },
        {
            label:'Хот-Дог',
            icon:'pi pi-fw pi-user',
        },
        {
            label:'Сендвичи',
            icon:'pi pi-fw pi-calendar',
        },
        {
            label:'Бургеры',
            icon:'pi pi-fw pi-power-off'
        },
        {
            label:'Фалафель',
            icon:'pi pi-fw pi-power-off'
        },
        {
            label:'Сулугуни',
            icon:'pi pi-fw pi-power-off'
        },
        {
            label:'Блюда на Вынос',
            icon:'pi pi-fw pi-power-off'
        }
    ];

    const end = <img alt="logo" src="https://static.takeaway.com/images/restaurants/bg/NOO3QQ7/logo_465x320.png"
                     onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}
                     height="40" className="p-mr-2"/>;


    return (
        <div className="p-shadow-10">
            <Menubar model={items} end={end} style={{backgroundColor: "#e8e8e8"}}/>
        </div>
    )
}

export default TopMenu;