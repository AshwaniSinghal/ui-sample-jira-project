import React from "react";
import PropTypes from "prop-types";

import "./details.css"

const Details = props => {
    return (
        <div>
            <div>
                <span className="title">Description : </span>
                {props.data.storyDesc}</div>
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
        </div>
    );
};

Details.propTypes = {
    data: PropTypes.array
};

export default Details;