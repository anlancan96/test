import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../../Components/SearchBar';
import Menu from './Components/Menu';
import ListView from './Components/ListView';
import CustomBtn from '../../Components/CustomBtn';
import { Colors, Fonts } from '../../Themes';
import styles from '../Styles/SearchStyles';


export default class SearchView extends React.Component {
    render() {
        return (
            <View styles={styles.document}>
                <StatusBar barStyle="light-content" backgroundColor={Colors.lightGreen12} translucent={true}/>
                <View style={styles.header}>
                    <MaterialIcons name="arrow-back" size={Fonts.size.h4} color={Colors.snow} style={styles.header__icon}/>
                    <SearchBar/>
                </View>
                <View style={styles.body}>
                    <Text style={styles.body__title}>Lọc nhanh</Text>
                    <View><Menu/></View>
                    <View style={styles.body__listView}>
                        <ListView
                            todoIdx={this.props.todoIdx}
                            selectTodos={this.props.selectTodos}
                        />
                    </View>
                    <CustomBtn><Text>Tìm kiếm nâng cao</Text></CustomBtn>
                </View>
            </View>
        )
    }
}