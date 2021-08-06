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
        const elem = this.props.data.map((item) => {
            return (
                <div className="p-col-12 p-md-6 p-lg-3">
                    <div className="product-block p-m-2 p-shadow-3">
                        <div className="product-block__image p-m-3">
                            <img
                                src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"
                                alt="title"/>
                        </div>
                        <div className="product-block__description p-m-3">
                            <div className="product-block__title p-pt-2">
                                <div className="product-block__title-text">
                                    <a href="/">{item.title}</a>
                                </div>
                            </div>
                            <div className="product-block__ingredients p-pt-2">
                                <span>{item.ingredients}</span>
                            </div>
                            <div
                                className="product-block__price p-d-flex p-flex-row p-pt-4 p-justify-between p-ai-center">
                                <div className="product-block__price-block">
                                    <div>
                                        <span className="product-block__price">{item.coast}</span>
                                        <span className="product-block__currently p-pl-1">грн</span>
                                    </div>
                                </div>
                                <div className="product-block__btn-wrap">
                                    <Button label=" Заказать" className="p-button-danger pi pi-phone"
                                            style={{borderRadius: "20px", fontWeight: "bold"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="p-grid">
                    {elem}
                    {/*<div className="p-col-12 p-md-6 p-lg-3">*/}
                    {/*    <div className="product-block p-m-2 p-shadow-3">*/}
                    {/*        <div className="product-block__image p-m-3">*/}
                    {/*            <img*/}
                    {/*                src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"*/}
                    {/*                alt="title"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="product-block__description p-m-3">*/}
                    {/*            <div className="product-block__title p-pt-2">*/}
                    {/*                <div className="product-block__title-text">*/}
                    {/*                    <a href="/">Шаурма</a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="product-block__ingredients p-pt-2">*/}
                    {/*                <span>картошка, помидор, мясо, соус, сыр, пырдыр, ingredients</span>*/}
                    {/*            </div>*/}
                    {/*            <div*/}
                    {/*                className="product-block__price p-d-flex p-flex-row p-pt-4 p-justify-between p-ai-center">*/}
                    {/*                <div className="product-block__price-block">*/}
                    {/*                    <div>*/}
                    {/*                        <span className="product-block__price">65</span>*/}
                    {/*                        <span className="product-block__currently p-pl-1">грн</span>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="product-block__btn-wrap">*/}
                    {/*                    <Button label="Заказать" className="p-button-danger"*/}
                    {/*                            style={{borderRadius: "20px", fontWeight: "bold"}}/>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    {/*<div className="p-col-12 p-md-6 p-lg-3">*/}
                    {/*    <div className="product-block p-m-2">*/}
                    {/*        <div className="product-block__image p-m-3">*/}
                    {/*            <img*/}
                    {/*                src="https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg"*/}
                    {/*                alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div className="product-block__description p-m-3">*/}
                    {/*            <div className="product-block__title">*/}
                    {/*                <div className="product-block__title-text">*/}
                    {/*                    <a href="/">Шаурма</a>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="product-block__ingredients">*/}
                    {/*                <span>картошка, помидор, мясо, соус, сыр, пырдыр</span>*/}
                    {/*            </div>*/}
                    {/*            <div className="product-block__price p-d-flex p-flex-row">*/}
                    {/*                <div className="product-block__price-block">*/}
                    {/*                    <div>*/}
                    {/*                        <span>65</span>*/}
                    {/*                        <span>грн</span>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="product-block__btn-wrap">*/}
                    {/*                    <button>Заказать</button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                </div>
            </div>
        )
    }
}

export default ProductItem;