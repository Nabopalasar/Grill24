import React, {Component} from "react";


// Класс для испольщования prime-react flex box
export class Footer extends Component {
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
        return (
            <div className="p-grid p-p-3 p-mt-2 p-jc-sm-between" style={{backgroundColor: "#505050", height: "300px", color: "#f5f5f5"}}>
                <div className="p-col-12 p-md-6 p-lg-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cupiditate deserunt eius eveniet expedita ipsam molestiae nam nemo neque officia perferendis quisquam
                </div>
                <div className="p-col-12 p-md-6 p-lg-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium architecto consequatur culpa deserunt dolor ea, ipsa iste laboriosam mollitia nihil pariatur temporibus unde
                </div>
                <div className="p-col-12 p-md-6 p-lg-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nemo officiis praesentium quam tempora. Aliquid atque error ex excepturi numquam obcaecati possimus quaerat
                </div>
            </div>
        )
    }
}

export default Footer;