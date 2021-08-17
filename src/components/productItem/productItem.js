import React, {Component} from "react";

// import "./productItem.css"
import "./productList2.css"

import {Button} from "primereact/button";

export class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [0, 1, 2, 3, 4, 5]
        };

        this.addColumn = this.addColumn.bind(this);
        this.removeColumn = this.removeColumn.bind(this);
    }

    addColumn() {
        this.setState({
            columns: [...this.state.columns, this.state.columns.length]
        });
    }

    removeColumn() {
        let cols = [...this.state.columns];
        cols.splice(-1, 1);
        this.setState({
            columns: cols
        });
    }

    render() {
// перебераем массив данных из grillData.json полученный в пропс и возврашаем обьект который необходимо отрендедить на страничке
        const elem = this.props.data.map((item) => {
            return (
                //Main block
                <div className="p-col-12 p-md-6 p-lg-3">
                    <div className="product-block p-shadow-3"  style={{height:"100%"}}>
                        {/*img block*/}
                        <div className="product-block__image p-m-3">
                            <img
                                src={item.url}
                                alt="title"/>
                        </div>
                        {/*description block*/}
                        <div className="product-block__description p-m-3 p-d-flex p-flex-column">
                            <div className="product-block__title">
                                <div className="product-block__title-text">
                                    <span>{item.title}</span>
                                </div>
                            </div>
                            <div className="product-block__ingredients p-pt-2" style={{minHeight: "80px"}}>
                                <span>{item.ingredients}</span>
                            </div>
                            {/*price + button block*/}
                            <div
                                className="product-block__price p-d-flex p-flex-row p-justify-between p-ai-center p-mt-2">
                                <div className="product-block__price-block">
                                    {/*price*/}
                                    <div>
                                        <span className="product-block__price">{item.coast}</span>
                                        <span className="product-block__currently p-pl-1">грн</span>
                                    </div>
                                    {/*btn + call*/}
                                </div>
                                <div className="product-block__btn-wrap">
                                    <form action="tel:+380994376554">
                                        <Button label=" Заказать" className="p-button-danger pi pi-phone"
                                                style={{borderRadius: "20px", fontWeight: "bold"}}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
                <div className="p-grid">
                    {elem}
                </div>
        )
    }
}

export default ProductItem;