import React from 'react';
import { Keyboard, TextInput, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Metrics, Fonts, Colors } from '../Themes';

export default class SearchBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            keyword: props.defaultValue,
            expanded: false,
        }
        this.onSearch = this.onSearch.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onFocus = this.onFocus.bind(this);

    }

    onFocus = async () => {
        if(!this.state.expanded) {
            await this.setState(prevState => {
                return { expanded: !prevState.expanded };
            });
        }
    }

    onSearch = async () => {
        if (this.props.keyboardShouldPersist === false) {
            await Keyboard.dismiss();
        }
        this.props.onSearch && (await this.props.onSearch(this.state.keyword));
    };

    onChangeText = async text => {
        await this.setState({ keyword: text });

        this.props.onChangeText &&
            (await this.props.onChangeText(this.state.keyword));
    };

    onCancel = async () => {
        await this.setState({ keyword: '' });
        await this.setState(prevState => {
            return { expanded: !prevState.expanded };
        });
        this.props.onCancel && await this.props.onCancel();
    }
    

    render() {
        return (
            <View style={this.props.searchSection}>
                <MaterialIcons style={this.props.styleSearchIcon} name={this.props.iconSearchName} color={Colors.snow}/>
                {/* {
                    this.state.expanded &&
                    <MaterialIcons style={this.props.styleCancelIcon} name={this.props.iconCancelName} color="#a7a8a8"
                        onPress={this.onCancel}
                    />
                } */}
                <TextInput
                    style={this.props.styleInput}
                    value={this.state.keyword}
                    placeholderTextColor={this.props.placeholderTextColor}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this.onSearch}
                    placeholder={this.props.placeholder}
                    onFocus={this.onFocus}
                />
            </View>  
        )
    }
}

SearchBar.propTypes = {
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardShouldPersist: PropTypes.bool,
    onSearch: PropTypes.func,
    onChangeText: PropTypes.func,
    styleInput: PropTypes.object,
    searchSection: PropTypes.object,
    iconSearchName: PropTypes.string,
    styleSearchIcon: PropTypes.object,
    iconCancelName: PropTypes.string,
    onCancel: PropTypes.func,
}

SearchBar.defaultProps = {
    defaultValue: "",
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: Metrics.margin.sm,
    },
    styleSearchIcon: {
        fontSize: Fonts.size.h4,
        position: 'absolute',
        left: 20,
        top: 10,
        zIndex: 1,
    },
    styleInput: {
        flex: 1,
        color: Colors.snow,
        alignSelf: "center",
        borderRadius: 20,
        backgroundColor: Colors.green,
        paddingLeft: Metrics.padding.xll,
    },
    placeholderTextColor: Colors.snow,
    styleCancelIcon: {
        fontSize: Fonts.size.h5,
        position: 'absolute',
        left: 45,
        top: 12,
        zIndex: 1,
    },
    iconCancelName: "cancel",
    iconSearchName: "search",
    placeholder: "Tìm kiếm...",
    keyboardShouldPersist: false,
}