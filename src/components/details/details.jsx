import React from "react";
import PropTypes from "prop-types";

import "./details.css"

const Details = props => {
    return (
        <div>
            <div>
                <span className="title">Description : </span>
                {props.data.description}</div>
            <div>
                <span className="title">Due Date : </span>
                {props.data.dueDate}
            </div>
            <div>
                <span className="title">Sprint : </span>
                {props.data.sprint}
            </div>
            <div>
                <span className="title">Label : </span>
                {props.data.label}
            </div>
            <div>
                <span className="title">Status : </span>
                {props.data.status}
            </div>
            <div>
                <span className="title">Story Type: </span>
                {props.data.storyType}
            </div>
        </div>
    );
};

Details.propTypes = {
    data: PropTypes.array
};

export default Details;