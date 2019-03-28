import { StyleSheet } from 'react-native';
import { Metrics, Fonts, Colors } from '../../../../Themes';

export default StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: Metrics.margin.sm,
        padding: Metrics.padding.sm1,
        borderRadius: 15,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: Colors.black,
        elevation: 3,
    },
    listItem__checkbox: {
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 19,
        borderWidth: 2,
        borderColor: Colors.gray2,
    },
    listItem__checkbox_active: {
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 19,
        borderWidth: 2,
        borderColor: Colors.lightGreen13,
    },
    listItem__body: {
        flexDirection: 'column',
        marginLeft: Metrics.margin.sm1,
    },
    listItem__datetime: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 17,
        right: 15,
    },
    listItem__datetime__text: {
        fontSize: Fonts.size.medium,
        color: Colors.fire,
        marginLeft: 3,
    },
    listItem__body__title: {
        fontSize: Fonts.size.regular,
        color: Colors.black1,
        fontWeight: '500',
    },
    listItem__body__info: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    info__avatar: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
    },
    info__username: {
        fontSize: Fonts.size.medium,
        color: Colors.gray1,
        fontWeight: '500',
        marginLeft: Metrics.margin.sm0,
    }
});