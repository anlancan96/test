import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes';

export default StyleSheet.create({
    document: {
        backgroundColor: Colors.lightGreen12,
    },
    header: {
        height: Metrics.screenHeight * 0.13,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Metrics.margin.sm1,
        backgroundColor: Colors.lightGreen12,
    },
    header__icon: {
        marginLeft: Metrics.margin.sm,
    },
    body: {
        width: Metrics.screenWidth,
        height: Metrics.screenHeight * 0.87,
        backgroundColor: Colors.snow,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        top: Metrics.screenHeight * 0.138,
        left: 0,
    },
    body__title: {
        color: Colors.gray1,
        fontSize: Fonts.size.h5,
        fontWeight: '600',
        margin: Metrics.margin.sm1,
    },
    body__listView: {
        marginTop: Metrics.margin.sm,
        marginLeft: Metrics.margin.sm0,
        marginRight:  Metrics.margin.sm0,
    },
});