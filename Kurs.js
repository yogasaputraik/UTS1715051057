import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ScrollView} from 'react-native';
import Header from "./Header";

export default class Kurs extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
        kode: 0,
        rp: 0,
        nilaitukar:'',
    }
 };

 getKurs= () => {
    let url = 'http://mhs.rey1024.com/uts/kurs2.php?kode=+'
    + this.state.kode +
    '&rupiah=+'+this.state.rp+'=metric';
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        this.setState({
        nilaitukar: responseJson.nilai,
        });
    });
 }

 render() {
    return (

    <View style={styles.container}>
    <Header title={"UTS Aplikasi Mobile \n I Komang Yoga Saputra 1715051057"} />
    
    <View style={styles.boxInput}>
        <Text style={styles.textHead}>Kurs rupiah ke matauang</Text>
        
        <View style={styles.boxDataInput}>
            <Text style={styles.txtLabelInput}>Nilai Rupiah :</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = { (rp) => { this.setState({rp}) } }
            />
        </View>
        <View style={styles.boxDataInput}>
            <Text style={styles.txtLabelInput}>Kode Matauang :</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = { (kode) => { this.setState({kode}) } }
            />
        </View>
    </View>

    <View style={styles.boxButton}>
        <TouchableHighlight
        onPressIn={() =>{
            if(this.state.kode==1 || this.state.kode==2){
                this.getKurs()
            }else{
                this.setState({nilaitukar:'Kode Salah'})
            }
        }}
        accessibilityLabel="hitung"
        style={styles.button}>
        <Text style={styles.txtHeader}>Hitung Kurs</Text>
        </TouchableHighlight>
    </View>

    {/*Menangani bagian hasil */}
    <View style={styles.boxHasil}>
        <View style={styles.boxDataInput}>
            <Text style={styles.textHasil}>{this.state.nilaitukar}</Text> 
        </View>
        <View style={styles.boxDataInput}>
            <Text style={styles.textHasil}>{this.state.status}</Text>
        </View>
        <View>

        </View>

    </View>
    </View>
    );
 }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
 },
 vHeader: {
    flex: 0.8,
    backgroundColor: '#194B95',
    alignItems: 'center',
    justifyContent: 'center'
 },
 boxInput: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
 },
 boxDataInput: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
 },
 textHead: {
     alignItems: 'center',
     justifyContent: 'center',
     fontSize: 27,
 },
 txtLabelInput: {
    flex: 2,
    height: 30,
    marginLeft: 20,
    marginTop: 5
 },
 textHasil: {
    color: 'yellow',
    fontSize: 25,
},
 txtInput: {
    flex: 3,
    height: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
 },
 boxButton:{
    flex: 0.7,
 },
 boxButton1: {
    flex: 1,
    flexDirection: 'row'
 },
 button: {
    flex: 1,
    backgroundColor: 'green',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
 },
 boxHitung1: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#194B95',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
 },
 boxHasil: {
    flex: 1,
    margin: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
 },
txtHeader: {
    fontSize: 20,
    color: 'white'
 },
 menu: {
    flexDirection: 'column'
 }
});
