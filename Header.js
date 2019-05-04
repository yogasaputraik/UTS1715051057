import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
 return (
    <View style={styles.headerBar}>
        <Text style={styles.headerText}> {props.title} </Text>
    </View>
 );
}

const styles = StyleSheet.create({
 headerBar: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 10,
    position: "relative",
    height: 80
 },
 headerText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center"
 },
});
export default Header;