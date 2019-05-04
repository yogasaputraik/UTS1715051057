import React, { Component } from "react";
import {View, Text, StyleSheet, Image } from "react-native";
import Header from "./Header";

const foto = require("./yoga.jpg");

export default class AboutMe extends Component {
 render() {
 const { navigation } = this.props;
 return (
 <View style={styles.container}>
    <Header title={"UTS Aplikasi Mobile \n I Komang Yoga Saputra 1715051057"} />
    <View style={styles.boxBiodata}>
    
    <View style={styles.boxPhoto}>
        <Image source={foto} style={styles.photo}/>
    </View>
    <View style={styles.boxData}>
        <Text style={styles.text1}>Nama  : I Komang Yoga Saputra</Text>
        <Text style={styles.text1}>NIM   : 1715051057</Text>
        <Text style={styles.text1}>Kelas : 4A</Text>
    </View>
    </View>

 </View>
 );
 }
}
// define your styles
const styles = StyleSheet.create({
 container: {
    flex: 1,
    marginTop: 20,
 },
 box1: {
    flex: 0.05,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#33CCFF',
    borderRadius: 5,
 },
 boxBiodata: {
    flex: 0.5,
    marginTop: 40,
    flexDirection: 'row'
 },
 boxPhoto: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
 },
 boxData: {
    flex: 0.6,
    justifyContent: 'center',
    marginLeft: 25,
 },
 photo: {
    width: 150,
    height: 200,
    borderRadius: 10,
 },
 text1: {
    fontSize: 15
 },
 text2: {
    fontSize: 26,
    fontColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
 }
});