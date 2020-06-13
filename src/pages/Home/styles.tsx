
import React from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 15,
        paddingVertical: 15,
        backgroundColor: '#000',
    },

    filterView: {
        backgroundColor: '#2A2626',
        minWidth: 100,
        maxWidth: 150,
        height: 35,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        paddingHorizontal: 15
    },

    filterActive: {
        backgroundColor: '#FCAE12',
    },

    filterText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center'
    },

    toiContainer: {
        padding: 15
    },

    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    toiHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    userImage: {
        borderRadius: 50,
        width: 50,
        height: 50,
        marginRight: 10
    },

    userName: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },

    userDescription: {
        color: '#fff'
    },

    timeRecived: {
        color: '#fff'
    },

    toiMain:{
        backgroundColor: '#2A2626',
        marginTop: 10,
        padding: 10,
        borderRadius: 20
    },

    toiMainText:{
        color: '#fff',
        fontSize: 18
    },

    toiFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        // borderBottomWidth: 20,
        // borderColor: '#2A2626'
    },

    toiFooterText:{
        color: '#fff',
        fontSize: 18
    }


})

export default style;