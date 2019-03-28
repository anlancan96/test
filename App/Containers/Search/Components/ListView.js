import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomBtn from '../../../Components/CustomBtn';
import { Colors, Fonts, Images } from '../../../Themes';
import styles from './Styles/ListView';



export default class ListView extends React.PureComponent {
    state = {
        fakeData: [
            { id: 1, title: 'Phát triển tính năng bổ sung của hệ thống Cổng hành chính', username: 'Lê Quốc An', datetime: ''},
            { id: 2, title: 'Lên kế hoạch triển khai dự án E-Targeting', username: 'Lê Quốc An', datetime: '20/03/2018'},
            { id: 3, title: 'Họp triển khai Sprint 1e-Office', username: 'Lê Quốc An', datetime: '20/03/2018'},
            { id: 4, title: 'Lên kế hoạch triển khai dự án E-Targeting', username: 'Lê Quốc An', datetime: '20/03/2018'},
        ],
        todoIdx: this.props.todoIdx
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.todoIdx!==prevState.todoIdx){
          return { todoIdx: nextProps.todoIdx};
        }
        return null;
    } 

    _keyExtractor = (item, index) => item.id;

    _renderItem = ({item}) => (
        <View style={styles.listItem}>
            <CustomBtn style={this.state.todoIdx === item.id ? styles.listItem__checkbox_active : styles.listItem__checkbox} onPress={this.props.selectTodos(item.id)}>
                {
                    this.state.todoIdx === item.id
                    ?
                    <MaterialIcons 
                        name="check" 
                        color={Colors.lightGreen13} 
                        size={Fonts.size.h3}
                    />
                    : null
                }
                
            </CustomBtn>
            <View style={styles.listItem__body}>
                <Text style={styles.listItem__body__title}>{item.title}</Text>
                <View style={styles.listItem__body__info}>
                    <Image source={Images.avatar} style={styles.info__avatar}/>
                    <Text style={styles.info__username}>{item.username}</Text>
                </View>
            </View>
            {
                item.datetime.trim() !== ''
                ?
                <View style={styles.listItem__datetime}>
                    <MaterialIcons name="access-time" color={Colors.fire} size={Fonts.size.medium}/>
                    <Text style={styles.listItem__datetime__text}>{item.datetime}</Text>
                </View>
                : null
            }
        </View>
    );

    render() {
        return (
            <FlatList
                data={this.state.fakeData}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}

