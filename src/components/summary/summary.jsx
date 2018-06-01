import React, {Component} from "react";
import PropTypes from "prop-types";

import "./summary.css";

class Summary extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(obj) {
        this.props.onClick(obj);
    }

    render() {
        return (
            <ol>
                {this.props.data.map((obj, index) =>
                    <li key={index}>
                        <span className="storyId" onClick={() => this.handleClick(obj)}>{obj.storyId}</span>
                        <span>{` : ${obj.summary}`}</span>
                    </li>
                )}
            </ol>
        );
    }
}

Summary.propTypes = {
    data: PropTypes.array
};

export default Summary;