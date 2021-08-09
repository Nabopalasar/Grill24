import React, {Component} from "react";
import {Menubar} from "primereact/menubar";
import {withRouter} from 'react-router-dom';


export class TopMenu extends Component {

    navigateToPage = (path) => {
        this.props.history.push(path);
    }

render() {
    const items = [
        {
            label:'Меню',
            icon:'pi pi-fw pi-file',
            command:() => { this.navigateToPage('/')}
        },
        {
            label:'Шаурма',
            icon:'pi pi-fw pi-pencil',
            command:()=>{ this.navigateToPage('/shawarma')}

        },
        {
            label:'Хот-Дог',
            icon:'pi pi-fw pi-user',
            command:()=>{ this.navigateToPage('/hotDog')}

        },
        {
            label:'Сендвичи',
            icon:'pi pi-fw pi-calendar',
            command:()=>{ this.navigateToPage('/sandvich')}

        },
        {
            label:'Бургеры',
            icon:'pi pi-fw pi-power-off',
            command:()=>{ this.navigateToPage('/burgers')}

        },
        {
            label:'Фалафель',
            icon:'pi pi-fw pi-power-off',
            command:()=>{ this.navigateToPage('/falafel')}

        },
        {
            label:'Сулугуни',
            icon:'pi pi-fw pi-power-off',
            command:()=>{ this.navigateToPage('/suluguni')}

        },
        {
            label:'Блюда на Вынос',
            icon:'pi pi-fw pi-power-off',
            command:()=>{ this.navigateToPage('/onExit')}

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
}

TopMenu = withRouter(TopMenu)
export default TopMenu;