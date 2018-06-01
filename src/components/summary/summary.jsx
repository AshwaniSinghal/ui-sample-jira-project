import React, {Component} from "react";
import "./summary.css";
import PropTypes from "prop-types";

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
                        <span>{` : ${obj.storyDesc}`}</span>
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