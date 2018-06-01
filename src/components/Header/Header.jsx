import React, {Component} from 'react';
import PropTypes from "prop-types";

import './Header.css';

class Header extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(obj) {
        const selectedNode = document.getElementById(obj.id);

        selectedNode.classList.contains("selectedHeader") ? selectedNode.classList.remove("selectedHeader")
            : selectedNode.classList.add("selectedHeader");

        this.props.onHeaderClick(obj);
    }

    render() {
        return (
            <div>
                {this.props.data.map((obj, index) => (
                    <div id={obj.id} key={index} className="header"
                         onClick={() => this.handleClick(obj)}>{obj.value}</div>
                ))}
            </div>
        );
    }
}

Header.propTypes = {
    data: PropTypes.array.isRequired,
    onHeaderClick: PropTypes.func
};

export default Header;
