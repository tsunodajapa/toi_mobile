
import React from 'react';
import { StyleSheet } from 'react-native';

//colors
import colors from '../../styles/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logoView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    main: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingVertical: 30,
        paddingHorizontal: 60
    },

    buttonEnter: {
        backgroundColor: colors.primary,
        height: 45,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: colors.text,
        textAlign: 'center',
        fontSize: 20,
    },

    forgotPassword: {
        color: colors.text,
        textAlign: 'center',
        marginTop: 10
    },

    footer: {
        flex: 1,
    },

    viewButtonLeft: {
        flex: 1.2,
        justifyContent: "space-between"
    },

    viewButtonLeftKeyboard: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    viewRegister: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'center'
    },

    facePropriety: {
        backgroundColor: '#4267B2',
        paddingLeft: 10
    },

    faceProprietyKeyBoard: {
        backgroundColor: '#4267B2',
    },

    buttonLeft: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        borderBottomRightRadius: 50,
        borderTopRightRadius: 10,
        backgroundColor: colors.text,
    },

    buttonLeftKeyboard: {
        backgroundColor: colors.text,
        margin: 10,
        width: '35%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    buttonRegister: {
        backgroundColor: colors.primary,
        padding: 5,
        paddingHorizontal: 30,
        borderTopStartRadius: 10,
        borderTopRightRadius: 10
    }
})

export default styles;