
import React, { Component } from 'react';
import Nav from './global/nav'
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    View,
    ScrollView
} from 'react-native';

export default class Book extends Component {
    static navigationOptions = {
        title: 'Book',
    };
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
            </View>
        )
    }
}