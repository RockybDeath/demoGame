import React from 'react';

export default class SortUsers extends React.Component {
    constructor(props) {
        super(props);
        this.sort = this.sort.bind(this)
        this.reset = this.reset.bind(this)
    }

    sort() {
        let direction = this.props.id ? 1 : -1
        let data = [].slice.call(this.props.data).sort((a, b) => {
            if (a["id"] === b["id"]) { return 0; }
            return a["id"] > b["id"] ? direction : direction * -1;
        });
        // this.setState({
        //     id: !this.state.id
        // })
        this.props.updateData({
            data: data,
            id: !this.props.id
        })
    }
    reset() {
        this.props.updateData({
            active: 0,
            term: "",
            data: this.props.filterData
        })
    }

    render() {
        return (
            <div className="users-sort">
                <button className="btn-sort" onClick={() => this.sort()}>
                    Sort by id
                </button>
                <button className="btn btn-danger btn-reset" onClick={this.reset}>
                    Reset
                </button>
            </div>
        );
    }
}