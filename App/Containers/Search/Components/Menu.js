import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CustomBtn from '../../../Components/CustomBtn';
import styles from './Styles/Menu';

export default class Menu extends React.PureComponent {
    state = {
        btns: [
            { id: 1, title: 'Tất cả' },
            { id: 2, title: 'Đang triển khai' },
            { id: 3, title: 'Tạm dừng' },
            { id: 4, title: 'Hoàn thành' },
        ],
        activeIdx: 1,
    }

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) => (
        <CustomBtn style={this.state.activeIdx === item.id ? styles.btn_active: styles.btn} onPress={this.onActive(item.id)}>
            <Text style={this.state.activeIdx === item.id ? styles.btn__title_active: styles.btn__title}>{item.title}</Text>
        </CustomBtn>
    );

    onActive = (activeIdx) => () => this.setState({ activeIdx });
        
    render() {
        return (
            <FlatList 
                data={this.state.btns}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}