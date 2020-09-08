import React from "react";
import PropTypes from "prop-types";

export default class NoResults extends React.PureComponent {
    render() {
        return (
            <li className="geolookup__no_results" style={this.props.style}>
                {this.props.message}
            </li>
        );
    }
}

NoResults.propTypes = {
    message: PropTypes.string,
    style: PropTypes.object
};

NoResults.defaultProps = {
    message: "no results"
};
