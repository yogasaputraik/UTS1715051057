import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import Header from "./Header";

export default class Bmi extends React.Component {
 constructor(props){
    super(props)
    this.state = {
        lahir: 0,
        tinggi: 0,
        berat: 0,
        umur: 0,
        bmi: 0,
        status: '',
    }
 }

 render() {
    const { navigation } = this.props;
    const nama = navigation.getParam('nama', '');
    return (

 <View style={styles.container}>
    <Header title={"UTS Aplikasi Mobile \n I Komang Yoga Saputra 1715051057"} />
    
    <View style={styles.boxInput}>
        <View style={styles.boxDataInput}>
            <Text style={styles.txtLabelInput}>Tahun Lahir :</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = { (lahir) => { this.setState({lahir}) } }
            
            />
        </View>
        <View style={styles.boxDataInput}>
            <Text style={styles.txtLabelInput}>Berat Bdn :</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = { (berat) => { this.setState({berat}) } }
            
            />
        </View>
        <View style={styles.boxDataInput}>
            <Text style={styles.txtLabelInput}>Tinggi Bdn :</Text>
            <TextInput style={styles.txtInput} keyboardType = 'numeric'
            onChangeText = { (tinggi) => { this.setState({tinggi: tinggi })} }
            
            />
        </View>
    </View>

    <View style={styles.boxButton}>
        <TouchableHighlight 
        onPressIn={() =>{
           
            this.setState({umur:2019-this.state.lahir})

            this.setState({bmi:this.state.berat/(this.state.tinggi*this.state.tinggi)});
            if(this.state.bmi<=18.4){
                this.setState({status:'Kekurangan berat badan'});
            }else if(this.state.bmi>=18.5 & this.state.bmi<=24.9){
                this.setState({status:'Normal (ideal)'});
            }else if(this.state.bmi>=25.0 & this.state.bmi<=29.9){
                this.setState({status:'Kelebihan berat badan'});
            }else if(this.state.bmi>=30.0){
                this.setState({status:'Kegemukan (Obesitas)'});
            }
            }}
            accessibilityLabel="hitung"
            style={styles.button}>
            <Text style={styles.txtHeader}>Hitung Ideal</Text>
        </TouchableHighlight>
    </View>

    {/*Menangani bagian hasil */}
    <View style={styles.boxHasil}>            
        <View style={styles.boxDataInput}>
            <Text style={styles.textHasil}>Halo {JSON.stringify(nama)},</Text>
        </View>
        <View style={styles.boxDataInput}>
            <Text style={styles.textHasil}>Umur anda adalah {this.state.umur},</Text>
        </View>
        <View style={styles.boxDataInput}>
            <Text style={styles.textHasil}>BMI : {this.state.bmi}</Text>
        </View>
        
        <View style={styles.boxDataInput}>
            <Text style={styles.textHasil}>{this.state.status}</Text>
        </View>
        <View>

        </View>
    </View>
    
    <View style={styles.boxButton1}>
        <View style={styles.menu}>
            <TouchableHighlight
            onPressIn={() =>{
                this.props.navigation.navigate('Tentang')}}
                accessibilityLabel="hitung"
                style={styles.button}>
                <Text style={styles.txtHeader}>Profil Saya</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.menu}>
            <TouchableHighlight
            onPressIn={() =>{
                this.props.navigation.navigate('Utama')}}
                accessibilityLabel="hitung"
                style={styles.button}>
                <Text style={styles.txtHeader}>Back</Text>
            </TouchableHighlight>
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
 txtLabelInput: {
    flex: 2,
    height: 30,
    marginLeft: 20,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center'
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
 boxButton1:{
    flex: 0.7,
    flexDirection: 'row'
 },
 button:{
    flex: 1,
    backgroundColor: 'green',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
 },
 vHitung1:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#194B95',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
 },
 boxHasil:{
    flex: 1,
    margin: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
 },
 textHasil: {
     color: 'yellow',
     fontSize: 25,
 },
 txtHeader: {
    fontSize: 20,
    color: 'white'
 },
 menu: {
    flexDirection: 'column',
    flex: 0.7,
 }
});