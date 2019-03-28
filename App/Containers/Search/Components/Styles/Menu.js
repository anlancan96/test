import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from '../../../../Themes';

export default StyleSheet.create({
    btn: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: Colors.gray2,
        padding: Metrics.padding.sm1,
        margin: Metrics.margin.sm0,
    },
    btn__title: {
        fontSize: Fonts.size.regular,
        color: Colors.black1,
        fontWeight: '500',
    },
    btn_active: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: Colors.snow,
        padding: Metrics.padding.sm1,
        margin: Metrics.margin.sm0,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: Colors.black,
        elevation: 5,
    },
    btn__title_active: {
        fontSize: Fonts.size.regular,
        color: Colors.lightGreen13,
        fontWeight: '500',
    },
});