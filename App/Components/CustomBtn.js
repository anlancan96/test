import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'; 

export default class CustomBtn extends React.PureComponent {
    render() {
        return (
            <TouchableOpacity
                style={this.props.style}
                onPress={this.props.onPress}
            >
                {this.props.children}
            </TouchableOpacity>
        )
    }
}

CustomBtn.propTypes = {
    onPress: PropTypes.func,
    style: PropTypes.object
}