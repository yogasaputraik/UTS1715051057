import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import Header from "./Header";

export default class Main extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        nama:'',
    };
 }

 render() {
    return (
        <View style={styles.containerMain}>
            <Header title={"UTS Aplikasi Mobile \n I Komang Yoga Saputra 1715051057"} />
           
            <View>
            <Image 
                source={{uri: 'http://mhs.rey1024.com/uts/react.png'}}
                style={{marginLeft:90, width: 200, height: 200}} />
            </View>

            <View style={styles.box1}>
            <View style={{flexDirection:'row'}}>
            <View>
                <Text>Nama </Text>
            </View>
            <View>
                <TextInput 
                    style={styles.txtInput}
                    onChangeText = { (nama) => { this.setState({nama })} }
                />
            </View>
            </View>


                <TouchableHighlight 
                activeOpacity={0.5} style={styles.button}
                onPress={()=> this.props.navigation.navigate('BMI',{nama: this.state.nama}) }>
                    <Text style={styles.buttonText}>Kesehatan</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                activeOpacity={0.5} style={styles.button}
                onPress={()=> {
                this.props.navigation.navigate('Kurs')}}>
                    <Text style={styles.buttonText}>Cek Nilai Tukar Rp</Text>
                </TouchableHighlight>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
 containerMain: {
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'column'
 },
 box1: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: '90%',
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    flexDirection: 'column',
    alignItems: 'center',
 },
buttonText: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    marginTop: 10,
    color: 'white',
    fontSize: 16
 },
 txtInput: {
    flex: 3,
    width: 170,
    height: 70,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
 },
button: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    backgroundColor: 'green',
    marginTop: 20,
    height: 60,
    width: 300,
    borderRadius: 6,
 },
});
